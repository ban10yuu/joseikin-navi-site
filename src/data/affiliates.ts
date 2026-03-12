// もしもアフィリエイト a_id (楽天提携済み)
const MOSHIMO_A_ID = '5417189';

function moshimoRakutenLink(url: string): string {
  return `https://af.moshimo.com/af/c/click?a_id=${MOSHIMO_A_ID}&p_id=54&pc_id=54&pl_id=616&url=${encodeURIComponent(url)}`;
}

export const MOSHIMO_IMPRESSION_URL = `https://i.moshimo.com/af/i/impression?a_id=${MOSHIMO_A_ID}&p_id=54&pc_id=54&pl_id=616`;

export interface SidebarAffiliate {
  title: string;
  description: string;
  url: string;
  badge: string;
  color: string;
}

export const sidebarAffiliates: SidebarAffiliate[] = [
  {
    title: '助成金・補助金の本',
    description: '申請のコツがわかる！助成金・補助金ガイドブック。楽天ポイント還元でお得。',
    url: moshimoRakutenLink('https://books.rakuten.co.jp/search?sitem=%E5%8A%A9%E6%88%90%E9%87%91+%E8%A3%9C%E5%8A%A9%E9%87%91&g=001'),
    badge: 'ポイント還元',
    color: '#bf0000',
  },
  {
    title: '確定申告・税金の本',
    description: '税金の仕組みを理解して、賢く申請しよう。初心者向けガイドも充実。',
    url: moshimoRakutenLink('https://books.rakuten.co.jp/search?sitem=%E7%A2%BA%E5%AE%9A%E7%94%B3%E5%91%8A+%E7%A8%8E%E9%87%91&g=001'),
    badge: 'ポイント還元',
    color: '#2563eb',
  },
  {
    title: '社会保険・年金の本',
    description: '知らないと損する社会保険の知識。受給できる制度を見逃さない。',
    url: moshimoRakutenLink('https://books.rakuten.co.jp/search?sitem=%E7%A4%BE%E4%BC%9A%E4%BF%9D%E9%99%BA+%E5%B9%B4%E9%87%91&g=001'),
    badge: 'ポイント還元',
    color: '#10b981',
  },
  {
    title: '起業・創業の本',
    description: '創業補助金を活用した起業ノウハウ。事業計画書の書き方も解説。',
    url: moshimoRakutenLink('https://books.rakuten.co.jp/search?sitem=%E8%B5%B7%E6%A5%AD+%E5%89%B5%E6%A5%AD+%E8%A3%9C%E5%8A%A9%E9%87%91&g=001'),
    badge: 'ポイント還元',
    color: '#f59e0b',
  },
];
