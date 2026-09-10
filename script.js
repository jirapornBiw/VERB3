const verbs = [] = [
  { v1: "be", v2: "was / were", v3: "been", meaning: "เป็น, อยู่, คือ", example: "She has been very busy today.", translation: "วันนี้เธอยุ่งมาก", irregular: true },
  { v1: "become", v2: "became", v3: "become", meaning: "กลายเป็น", example: "He became a great teacher.", translation: "เขากลายเป็นครูที่ยอดเยี่ยม", irregular: true },
  { v1: "begin", v2: "began", v3: "begun", meaning: "เริ่มต้น", example: "The class has already begun.", translation: "ชั้นเรียนได้เริ่มแล้ว", irregular: true },
  { v1: "break", v2: "broke", v3: "broken", meaning: "แตก, ทำลาย", example: "I have broken my old phone.", translation: "ฉันทำโทรศัพท์เครื่องเก่าพัง", irregular: true },
  { v1: "bring", v2: "brought", v3: "brought", meaning: "นำมา", example: "She brought lunch to work.", translation: "เธอนำอาหารกลางวันมาที่ทำงาน", irregular: true },
  { v1: "buy", v2: "bought", v3: "bought", meaning: "ซื้อ", example: "We bought fresh fruit yesterday.", translation: "เมื่อวานเราซื้อผลไม้สด", irregular: true },
  { v1: "call", v2: "called", v3: "called", meaning: "โทร, เรียก", example: "I called my mother last night.", translation: "ฉันโทรหาแม่เมื่อคืน" },
  { v1: "come", v2: "came", v3: "come", meaning: "มา", example: "They have come to see us.", translation: "พวกเขามาหาเรา", irregular: true },
  { v1: "cook", v2: "cooked", v3: "cooked", meaning: "ทำอาหาร", example: "Dad cooked dinner for us.", translation: "พ่อทำอาหารเย็นให้เรา" },
  { v1: "cut", v2: "cut", v3: "cut", meaning: "ตัด", example: "She cut the paper carefully.", translation: "เธอตัดกระดาษอย่างระมัดระวัง", irregular: true },
  { v1: "do", v2: "did", v3: "done", meaning: "ทำ", example: "I have done my homework.", translation: "ฉันทำการบ้านเสร็จแล้ว", irregular: true },
  { v1: "drink", v2: "drank", v3: "drunk", meaning: "ดื่ม", example: "He drank a glass of water.", translation: "เขาดื่มน้ำหนึ่งแก้ว", irregular: true },
  { v1: "drive", v2: "drove", v3: "driven", meaning: "ขับรถ", example: "She has driven this car before.", translation: "เธอเคยขับรถคันนี้มาก่อน", irregular: true },
  { v1: "eat", v2: "ate", v3: "eaten", meaning: "กิน", example: "We have eaten breakfast.", translation: "เรากินอาหารเช้าแล้ว", irregular: true },
  { v1: "feel", v2: "felt", v3: "felt", meaning: "รู้สึก", example: "I felt tired after work.", translation: "ฉันรู้สึกเหนื่อยหลังเลิกงาน", irregular: true },
  { v1: "find", v2: "found", v3: "found", meaning: "พบ, หาเจอ", example: "She found her missing key.", translation: "เธอพบกุญแจที่หายไป", irregular: true },
  { v1: "fly", v2: "flew", v3: "flown", meaning: "บิน", example: "The birds have flown away.", translation: "ฝูงนกบินจากไปแล้ว", irregular: true },
  { v1: "forget", v2: "forgot", v3: "forgotten", meaning: "ลืม", example: "I forgot his name.", translation: "ฉันลืมชื่อของเขา", irregular: true },
  { v1: "get", v2: "got", v3: "got / gotten", meaning: "ได้รับ, ไปถึง", example: "We got home at nine.", translation: "เราถึงบ้านตอนสามทุ่ม", irregular: true },
  { v1: "give", v2: "gave", v3: "given", meaning: "ให้", example: "He has given me good advice.", translation: "เขาให้คำแนะนำที่ดีกับฉัน", irregular: true },
  { v1: "go", v2: "went", v3: "gone", meaning: "ไป", example: "She has gone to the market.", translation: "เธอไปตลาดแล้ว", irregular: true },
  { v1: "have", v2: "had", v3: "had", meaning: "มี", example: "We had a wonderful time.", translation: "เราใช้เวลาร่วมกันอย่างยอดเยี่ยม", irregular: true },
  { v1: "hear", v2: "heard", v3: "heard", meaning: "ได้ยิน", example: "I heard a strange sound.", translation: "ฉันได้ยินเสียงแปลก ๆ", irregular: true },
  { v1: "help", v2: "helped", v3: "helped", meaning: "ช่วยเหลือ", example: "They helped us yesterday.", translation: "พวกเขาช่วยเราเมื่อวาน" },
  { v1: "keep", v2: "kept", v3: "kept", meaning: "เก็บ, รักษา", example: "She kept the secret.", translation: "เธอเก็บความลับไว้", irregular: true },
  { v1: "know", v2: "knew", v3: "known", meaning: "รู้, รู้จัก", example: "I have known him for years.", translation: "ฉันรู้จักเขามาหลายปี", irregular: true },
  { v1: "learn", v2: "learned / learnt", v3: "learned / learnt", meaning: "เรียนรู้", example: "We learned something new.", translation: "เราได้เรียนรู้สิ่งใหม่" },
  { v1: "leave", v2: "left", v3: "left", meaning: "ออกจาก, ทิ้งไว้", example: "He left early this morning.", translation: "เขาออกไปแต่เช้า", irregular: true },
  { v1: "live", v2: "lived", v3: "lived", meaning: "อาศัยอยู่", example: "I have lived here for five years.", translation: "ฉันอาศัยอยู่ที่นี่มาห้าปี" },
  { v1: "look", v2: "looked", v3: "looked", meaning: "มอง, ดู", example: "She looked at the sky.", translation: "เธอมองขึ้นไปบนท้องฟ้า" },
  { v1: "make", v2: "made", v3: "made", meaning: "ทำ, สร้าง", example: "Mom made a chocolate cake.", translation: "แม่ทำเค้กช็อกโกแลต", irregular: true },
  { v1: "meet", v2: "met", v3: "met", meaning: "พบ, เจอ", example: "We met at the station.", translation: "เราเจอกันที่สถานี", irregular: true },
  { v1: "pay", v2: "paid", v3: "paid", meaning: "จ่าย", example: "I have paid the bill.", translation: "ฉันจ่ายบิลแล้ว", irregular: true },
  { v1: "play", v2: "played", v3: "played", meaning: "เล่น", example: "They played football yesterday.", translation: "พวกเขาเล่นฟุตบอลเมื่อวาน" },
  { v1: "read", v2: "read", v3: "read", meaning: "อ่าน", example: "I have read this book twice.", translation: "ฉันอ่านหนังสือเล่มนี้สองรอบแล้ว", irregular: true },
  { v1: "run", v2: "ran", v3: "run", meaning: "วิ่ง", example: "He ran five kilometers.", translation: "เขาวิ่งห้ากิโลเมตร", irregular: true },
  { v1: "say", v2: "said", v3: "said", meaning: "พูด, กล่าว", example: "She said hello to me.", translation: "เธอกล่าวทักทายฉัน", irregular: true },
  { v1: "see", v2: "saw", v3: "seen", meaning: "เห็น", example: "Have you seen this movie?", translation: "คุณเคยดูหนังเรื่องนี้ไหม", irregular: true },
  { v1: "send", v2: "sent", v3: "sent", meaning: "ส่ง", example: "I sent you an email.", translation: "ฉันส่งอีเมลให้คุณแล้ว", irregular: true },
  { v1: "sing", v2: "sang", v3: "sung", meaning: "ร้องเพลง", example: "She has sung this song before.", translation: "เธอเคยร้องเพลงนี้มาก่อน", irregular: true },
  { v1: "sit", v2: "sat", v3: "sat", meaning: "นั่ง", example: "We sat near the window.", translation: "เรานั่งใกล้หน้าต่าง", irregular: true },
  { v1: "sleep", v2: "slept", v3: "slept", meaning: "นอน", example: "The baby slept well.", translation: "เด็กน้อยนอนหลับสบาย", irregular: true },
  { v1: "speak", v2: "spoke", v3: "spoken", meaning: "พูด", example: "I have spoken to the manager.", translation: "ฉันได้คุยกับผู้จัดการแล้ว", irregular: true },
  { v1: "stand", v2: "stood", v3: "stood", meaning: "ยืน", example: "He stood by the door.", translation: "เขายืนอยู่ข้างประตู", irregular: true },
  { v1: "study", v2: "studied", v3: "studied", meaning: "เรียน", example: "She studied English last night.", translation: "เธอเรียนภาษาอังกฤษเมื่อคืน" },
  { v1: "take", v2: "took", v3: "taken", meaning: "เอา, นำ, พา", example: "I have taken many photos.", translation: "ฉันถ่ายรูปไว้มากมาย", irregular: true },
  { v1: "teach", v2: "taught", v3: "taught", meaning: "สอน", example: "She taught me English.", translation: "เธอสอนภาษาอังกฤษให้ฉัน", irregular: true },
  { v1: "tell", v2: "told", v3: "told", meaning: "บอก, เล่า", example: "He told us a funny story.", translation: "เขาเล่าเรื่องตลกให้เราฟัง", irregular: true },
  { v1: "think", v2: "thought", v3: "thought", meaning: "คิด", example: "I thought about your idea.", translation: "ฉันคิดเกี่ยวกับไอเดียของคุณ", irregular: true },
  { v1: "understand", v2: "understood", v3: "understood", meaning: "เข้าใจ", example: "We have understood the lesson.", translation: "เราเข้าใจบทเรียนแล้ว", irregular: true },
  { v1: "walk", v2: "walked", v3: "walked", meaning: "เดิน", example: "They walked to school.", translation: "พวกเขาเดินไปโรงเรียน" },
  { v1: "wear", v2: "wore", v3: "worn", meaning: "สวมใส่", example: "She wore a blue dress.", translation: "เธอสวมชุดเดรสสีฟ้า", irregular: true },
  { v1: "win", v2: "won", v3: "won", meaning: "ชนะ", example: "Our team has won the game.", translation: "ทีมของเราชนะการแข่งขัน", irregular: true },
  { v1: "work", v2: "worked", v3: "worked", meaning: "ทำงาน", example: "He worked late yesterday.", translation: "เมื่อวานเขาทำงานจนดึก" },
  { v1: "write", v2: "wrote", v3: "written", meaning: "เขียน", example: "She has written three letters.", translation: "เธอเขียนจดหมายสามฉบับ", irregular: true },
];

const commonWords = ["be","go","have","do","eat","see","come","get"];
let filter = "all";
let currentQuery = "";
let lastResult = null;
const favorites = new Set(JSON.parse(localStorage.getItem("verb3-favorites") || "[]"));
const $ = (s) => document.querySelector(s);

function escapeHtml(value){return String(value).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}
function normalizedParts(value){return String(value).toLowerCase().split(/[\/,]/).map(x=>x.trim()).filter(Boolean)}
function matchesFilter(v){return filter === "all" || (filter === "irregular" ? !!v.irregular : !v.irregular)}
function speak(word){if(!("speechSynthesis" in window)) return; speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(String(word).split(" / ")[0]);u.lang="en-US";speechSynthesis.speak(u)}
function allSearchValues(v){return [v.v1,v.v2,v.v3,v.meaning]}
function exactMatch(v,q){return allSearchValues(v).some(value=>normalizedParts(value).includes(q))}
function partialMatch(v,q){return allSearchValues(v).some(value=>String(value).toLowerCase().includes(q))}

function findResult(q){
  q=q.trim().toLowerCase();
  const pool=verbs.filter(matchesFilter);
  if(!q) return {exact:null, related:[]};
  const exact=pool.find(v=>exactMatch(v,q));
  if(exact) return {exact, related:pool.filter(v=>v!==exact && (partialMatch(v,q) || [v.v1,v.v2,v.v3].some(x=>String(x).toLowerCase().includes(exact.v1))))};
  return {exact:null, related:pool.filter(v=>partialMatch(v,q))};
}

function resultCard(v){
  const fav=favorites.has(v.v1);
  const forms=[{label:"V1 (Base Form)",word:v.v1,cls:"v1"},{label:"V2 (Past Simple)",word:v.v2,cls:"v2"},{label:"V3 (Past Participle)",word:v.v3,cls:"v3"}];
  return `<article class="result-card" id="activeResult">
    <div class="result-head">
      <button class="main-speaker" data-speak="${escapeHtml(v.v1)}" aria-label="ฟังเสียง ${escapeHtml(v.v1)}">🔊</button>
      <div class="word-title"><h1>${escapeHtml(v.v1)}</h1><p>${escapeHtml(v.meaning)}</p></div>
      <span class="type-tag ${v.irregular?'':'regular'}">${v.irregular?'Irregular':'Regular'}</span>
      <button class="favorite-btn" data-favorite="${escapeHtml(v.v1)}" aria-label="เพิ่มในคำที่ชอบ">${fav?'★':'☆'}</button>
    </div>
    <div class="form-grid">${forms.map(f=>`<div class="form-card ${f.cls}"><small>${f.label}</small><div class="form-row"><strong>${escapeHtml(f.word)}</strong><button class="speak-btn" data-speak="${escapeHtml(f.word)}" aria-label="ฟังเสียง ${escapeHtml(f.word)}">🔊</button></div></div>`).join('')}</div>
    <div class="example-box"><h3>❝ ตัวอย่างประโยค</h3><p>${escapeHtml(v.example)}</p><span>${escapeHtml(v.translation)}</span></div>
    <div class="tip-box">💡 <b>Tip:</b> “${escapeHtml(v.v1)} – ${escapeHtml(v.v2)} – ${escapeHtml(v.v3)}” ลองอ่านออกเสียงทั้ง 3 รูปต่อกันเพื่อช่วยจำ</div>
  </article>`;
}

function renderCommon(){
  $("#commonList").innerHTML=commonWords.map(word=>{const v=verbs.find(x=>x.v1===word);return `<button class="common-item" data-query="${word}"><b>${word}</b><small>${escapeHtml(v?.meaning||'')}</small></button>`}).join('');
}
function renderRelated(items,q){
  const sec=$("#relatedSection");
  if(!items.length){sec.hidden=true;return}
  sec.hidden=false; $("#relatedTitle").textContent=q?"คำที่เกี่ยวข้อง":"คำแนะนำ";
  $("#relatedList").innerHTML=items.slice(0,8).map(v=>`<button class="chip" data-query="${escapeHtml(v.v1)}">${escapeHtml(v.v1)} <small>${escapeHtml(v.meaning)}</small></button>`).join('');
}
function suggestionWords(q){
  const first=q.charAt(0); return verbs.filter(matchesFilter).filter(v=>v.v1.startsWith(first)).slice(0,4);
}
function performSearch(rawQuery,{focusResult=true}={}){
  const q=rawQuery.trim(); currentQuery=q; $("#searchInput").value=q; $("#clearSearch").hidden=!q;
  if(!q){
    $("#resultArea").innerHTML=`<div class="empty-state"><div class="empty-icon">⌕</div><h2>ค้นหากริยา 3 ช่อง</h2><p>พิมพ์คำ เช่น go, went, eaten หรือความหมายภาษาไทย แล้วกดค้นหา</p><div class="suggestion-list">${commonWords.slice(0,5).map(w=>`<button data-query="${w}">${w}</button>`).join('')}</div></div>`;
    renderRelated([],""); lastResult=null; return;
  }
  const res=findResult(q); lastResult=res;
  if(res.exact){ $("#resultArea").innerHTML=resultCard(res.exact); renderRelated(res.related,q); }
  else if(res.related.length){
    const v=res.related[0]; $("#resultArea").innerHTML=resultCard(v); renderRelated(res.related.slice(1),q);
  } else {
    const suggestions=suggestionWords(q.toLowerCase());
    $("#resultArea").innerHTML=`<div class="empty-state"><div class="empty-icon">🔎</div><h2>ไม่พบคำว่า “${escapeHtml(q)}”</h2><p>ลองตรวจสอบการสะกด หรือค้นหาด้วยรูปคำกริยาอีกช่องหนึ่ง</p><div class="suggestion-list">${suggestions.map(v=>`<button data-query="${escapeHtml(v.v1)}">${escapeHtml(v.v1)}</button>`).join('')}</div></div>`;
    renderRelated([],q);
  }
  bindDynamic();
  if(focusResult){
    const input=$("#searchInput"); input.blur();
    if(window.innerWidth<801) setTimeout(()=>$("#activeResult")?.scrollIntoView({behavior:"smooth",block:"start"}),60);
  }
}
function bindDynamic(){
  document.querySelectorAll("[data-speak]").forEach(b=>b.onclick=()=>speak(b.dataset.speak));
  document.querySelectorAll("[data-query]").forEach(b=>b.onclick=()=>performSearch(b.dataset.query));
  document.querySelectorAll("[data-favorite]").forEach(b=>b.onclick=()=>{const w=b.dataset.favorite;favorites.has(w)?favorites.delete(w):favorites.add(w);localStorage.setItem("verb3-favorites",JSON.stringify([...favorites]));b.textContent=favorites.has(w)?'★':'☆'});
}
function showFavorites(){
  const items=verbs.filter(v=>favorites.has(v.v1));
  if(!items.length){$("#resultArea").innerHTML=`<div class="empty-state"><div class="empty-icon">☆</div><h2>ยังไม่มีคำที่ชอบ</h2><p>กดดาวที่ผลลัพธ์เพื่อบันทึกคำศัพท์ไว้ดูภายหลัง</p></div>`;renderRelated([],"");return}
  performSearch(items[0].v1);
  renderRelated(items.slice(1),"คำที่ชอบ");
}
function toggleTheme(){document.body.classList.toggle("dark");localStorage.setItem("verb3-theme",document.body.classList.contains("dark")?"dark":"light");$("#themeButton").textContent=document.body.classList.contains("dark")?'☀':'☾'}

document.addEventListener("DOMContentLoaded",()=>{
  if(localStorage.getItem("verb3-theme")==="dark") document.body.classList.add("dark");
  $("#themeButton").textContent=document.body.classList.contains("dark")?'☀':'☾';
  renderCommon(); bindDynamic(); performSearch("",{focusResult:false});
  $("#searchInput").focus();
  $("#searchForm").addEventListener("submit",e=>{e.preventDefault();performSearch($("#searchInput").value)});
  $("#searchInput").addEventListener("input",e=>{$("#clearSearch").hidden=!e.target.value});
  $("#searchInput").addEventListener("keydown",e=>{if(e.key==="Escape"){e.preventDefault();$("#searchInput").value="";performSearch("",{focusResult:false});$("#searchInput").focus()}});
  $("#clearSearch").onclick=()=>{performSearch("",{focusResult:false});$("#searchInput").focus()};
  $("#resetSearch").onclick=()=>{filter="all";document.querySelectorAll(".filters button").forEach(b=>b.classList.toggle("active",b.dataset.filter==="all"));performSearch("",{focusResult:false});$("#searchInput").focus()};
  document.querySelectorAll(".filters button").forEach(b=>b.onclick=()=>{filter=b.dataset.filter;document.querySelectorAll(".filters button").forEach(x=>x.classList.toggle("active",x===b));performSearch($("#searchInput").value,{focusResult:false})});
  $("#themeButton").onclick=toggleTheme;
  $("#favoritesButton").onclick=showFavorites; $("#mobileFavorites").onclick=showFavorites;
  const dialog=$("#infoDialog"); const openAbout=()=>dialog.showModal(); $("#aboutButton").onclick=openAbout; $("#mobileAbout").onclick=openAbout; dialog.querySelector(".dialog-close").onclick=()=>dialog.close();
});
