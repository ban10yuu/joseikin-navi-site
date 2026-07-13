const CHECKPOINTS = [
  {
    title: '対象者・対象経費',
    description: '年齢、住所、所得、事業規模、対象となる費用などの細かな条件',
  },
  {
    title: '受付期間・予算',
    description: '現在も受付中か、予算到達で早く終了する可能性があるか',
  },
  {
    title: '提出書類・申請方法',
    description: '制度固有の必要書類、提出先、オンライン申請の可否',
  },
  {
    title: '問い合わせ先',
    description: '判断に迷う条件がある場合の担当窓口と連絡方法',
  },
];

export default function OfficialCheckpoints() {
  return (
    <section className="official-checkpoints" aria-labelledby="official-checkpoints-title">
      <div className="official-checkpoints-heading">
        <p>申請を始める前に</p>
        <h2 id="official-checkpoints-title">公式サイトで確認する4項目</h2>
      </div>
      <ol>
        {CHECKPOINTS.map((checkpoint, index) => (
          <li key={checkpoint.title}>
            <span>{index + 1}</span>
            <div>
              <h3>{checkpoint.title}</h3>
              <p>{checkpoint.description}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="official-checkpoints-note">
        必要書類は制度ごとに異なるため、このサイトでは推測した書類名を表示していません。
      </p>
    </section>
  );
}
