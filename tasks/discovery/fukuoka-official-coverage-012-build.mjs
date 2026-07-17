import fs from 'node:fs';
const { selections } = JSON.parse(fs.readFileSync('tasks/discovery/fukuoka-official-coverage-012-selections.json','utf8'));
const outBase='tasks/discovery/fukuoka-official-coverage-012';
function stripHtml(html){return html.replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<style[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' ').replace(/&nbsp;|&#160;/g,' ').replace(/&amp;/g,'&').replace(/\s+/g,' ').trim()}
function category(title){if(/医療|不妊|不育|妊婦|産科|予防接種|補聴器|ドナー|がん患者/.test(title))return 'medical';if(/児童|子ども|子育て|母子|父子|ひとり親|養育費|妊婦|結婚|出産/.test(title))return 'childcare';if(/住宅|空き家|空家|住居|定住|移住|リフォーム|耐震/.test(title))return 'housing';if(/奨学|就学|教育|入学|検定|訓練|資格/.test(title))return 'education';if(/障害|障がい|福祉|介護|高齢|補聴器/.test(title))return 'nursing';if(/創業|事業|中小|商業|店舗|承継|雇用|就労|産業|オフィス|資格取得/.test(title))return 'employment';return 'living'}
function related(title,cat){const a=[];const add=v=>{if(v!==cat&&!a.includes(v))a.push(v)};if(/児童|子ども|子育て|妊婦|母子|父子|ひとり親|養育/.test(title))add('childcare');if(/医療|健康|不妊|補聴器|ドナー|がん/.test(title))add('medical');if(/住宅|空き家|空家|住居|定住|移住|リフォーム|耐震/.test(title))add('housing');if(/奨学|就学|教育|訓練|入学|資格/.test(title))add('education');if(/商業|事業|雇用|就労|創業|企業|店舗|承継/.test(title))add('employment');if(/障害|障がい|介護|福祉|高齢/.test(title))add('nursing');add('living');return a.slice(0,3)}
function normalizeNumber(v){return Number.parseFloat(v.replace(/[０-９]/g,ch=>String.fromCharCode(ch.charCodeAt(0)-0xFEE0)).replace(/[，,]/g,''))}
function maxAmount(title,text){const h=title+' '+text;const mixed=h.match(/(?:上限|最大|限度額|月額|年額|1世帯(?:あたり)?|1人(?:あたり)?|支給額|助成額|補助額|補助金額|補助金上限額)[^。．\n]{0,90}?([0-9０-９]+)\s*万\s*([0-9０-９,，]+)\s*円/);if(mixed){const man=normalizeNumber(mixed[1]);const yen=normalizeNumber(mixed[2]);return{text:mixed[0].replace(/\s+/g,''),num:Number.isFinite(man)&&Number.isFinite(yen)?Math.round(man*10000+yen):0}}const m=h.match(/(?:上限|最大|限度額|月額|年額|1世帯(?:あたり)?|1人(?:あたり)?|支給額|助成額|補助額|補助金額|補助金上限額)[^。．\n]{0,90}?([0-9０-９,，.]+)\s*(万円|円)/);if(m){const n=normalizeNumber(m[1]);return{text:m[0].replace(/\s+/g,''),num:Number.isFinite(n)?Math.round(n*(m[2]==='万円'?10000:1)):0}}const dm=h.match(/([0-9０-９]+)\s*万\s*([0-9０-９,，]+)\s*円(?:を|の)?(?:支給|助成|補助|交付|給付|限度)/);if(dm){const man=normalizeNumber(dm[1]);const yen=normalizeNumber(dm[2]);return{text:dm[0].replace(/\s+/g,''),num:Number.isFinite(man)&&Number.isFinite(yen)?Math.round(man*10000+yen):0}}const d=h.match(/([0-9０-９,，.]+)\s*(万円|円)(?:を|の)?(?:支給|助成|補助|交付|給付|限度)/);if(d){const n=normalizeNumber(d[1]);return{text:d[0].replace(/\s+/g,''),num:Number.isFinite(n)?Math.round(n*(d[2]==='万円'?10000:1)):0}}if(/医療費|公費負担/.test(title))return{text:'医療費の自己負担分等を助成',num:0};if(/手当|年金/.test(title))return{text:'所得・対象区分に応じて手当等を支給',num:0};if(/貸付/.test(title))return{text:'公式ページ記載の貸付額・貸付条件に従う',num:0};if(/給付金|支援金|奨励金/.test(title))return{text:'公式ページ記載の給付額・支援額に従う',num:0};return{text:'公式ページ記載の補助率・上限額または支援内容に従う',num:0}}
function eligibility(org,title,cat){if(cat==='childcare')return org+'内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方';if(cat==='medical')return org+'内で医療・健康支援の公式対象要件を満たす方';if(cat==='housing')return org+'内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方';if(cat==='education')return org+'内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方';if(cat==='employment')return org+'内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方';if(cat==='nursing')return org+'内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方';return org+'内の対象者・世帯・団体等で公式要件を満たす方'}
function application(text,title){const body=text||title;const date=body.match(/20\d{2}年\d{1,2}月\d{1,2}日|令和[0-9０-９]+年[0-9０-９]+月[0-9０-９]+日/)?.[0];const phrase=body.match(/(?:申請|募集|受付|締切|期限|交付|支給|請求|提出)[^。．]{0,110}/)?.[0]||body.slice(0,120);return (date?date+' ':'')+phrase.slice(0,150)}
async function fetchPage(url){const c=new AbortController();const t=setTimeout(()=>c.abort(),15000);try{const r=await fetch(url,{redirect:'follow',signal:c.signal,headers:{'user-agent':'Mozilla/5.0 official-coverage-check'}});const html=await r.text();return{status:r.status,url:r.url,text:stripHtml(html)}}catch(e){return{status:0,url,text:String(e?.message||e)}}finally{clearTimeout(t)}}
const adopted=[];const non200=[];for(let i=0;i<selections.length;i++){const [org,name,url]=selections[i];const page=await fetchPage(url);if(/\.pdf(?:$|\?)/i.test(url))page.text=`${name} 公式PDF 申請・受付は公式PDF記載に従う`;if(page.status!==200)non200.push({org,name,url,status:page.status,final:page.url});const cat=category(name);const amount=maxAmount(name,page.text);adopted.push({slug:'fukuoka-official-012-'+String(i+1).padStart(3,'0')+'-2026',title:org+' '+name,organization:org,maxAmount:amount.text,maxAmountNum:amount.num,category:cat,relatedCategories:related(name,cat),eligibility:eligibility(org,name,cat),applicationPeriod:application(page.text,name),officialUrl:page.url||url,sourceName:name,status:page.status,evidence:page.text.slice(0,220)});}
const counts=adopted.reduce((a,g)=>{a[g.organization]=(a[g.organization]||0)+1;return a},{});
fs.writeFileSync(outBase+'-adopted.json',JSON.stringify({generatedAt:new Date().toISOString(),adopted,non200,counts},null,2));
fs.writeFileSync(outBase+'-adopted.tsv',['slug\torganization\ttitle\tmaxAmount\turl\tevidence',...adopted.map(g=>[g.slug,g.organization,g.title,g.maxAmount,g.officialUrl,g.evidence.replace(/\t/g,' ')].join('\t'))].join('\n')+'\n');
const body=JSON.stringify(adopted.map(({status,evidence,...g})=>g),null,2);
fs.writeFileSync(outBase+'-ts-snippet.ts',`const fukuokaOfficial012Grants: Array<{
  slug: string;
  title: string;
  organization: string;
  maxAmount: string;
  maxAmountNum: number;
  category: Grant['category'];
  relatedCategories?: Grant['relatedCategories'];
  eligibility: string;
  applicationPeriod: string;
  officialUrl: string;
  sourceName: string;
}> = ${body};
`);
console.log(JSON.stringify({adopted:adopted.length,counts,non200},null,2));
