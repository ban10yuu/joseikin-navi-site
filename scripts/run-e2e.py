import os
import socket
import subprocess
import sys
import time


HOST = '127.0.0.1'
PORT = int(os.environ.get('E2E_PORT', '3000'))
BASE_URL = os.environ.get('E2E_BASE_URL', f'http://{HOST}:{PORT}')


def is_ready():
    try:
        with socket.create_connection((HOST, PORT), timeout=1):
            return True
    except OSError:
        return False


environment = {**os.environ, 'E2E_BASE_URL': BASE_URL}
server = None

try:
    if not is_ready():
        server = subprocess.Popen(
            ['npm', 'run', 'start', '--', '-H', HOST, '-p', str(PORT)],
            env=environment,
        )
        for _ in range(60):
            if server.poll() is not None:
                raise SystemExit(server.returncode or 1)
            if is_ready():
                break
            time.sleep(1)
        else:
            raise TimeoutError(f'{BASE_URL} の起動を60秒待ちましたが応答がありません。')

    result = subprocess.run([sys.executable, 'scripts/e2e-smoke.py'], env=environment)
    raise SystemExit(result.returncode)
finally:
    if server is not None and server.poll() is None:
        server.terminate()
        try:
            server.wait(timeout=10)
        except subprocess.TimeoutExpired:
            server.kill()
            server.wait(timeout=5)
