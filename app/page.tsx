"use client";

import { useMemo, useState } from "react";
import { ArrowRight, BookOpen, RotateCcw, Search, Sparkles, Volume2, X } from "lucide-react";

type Verb = { v1: string; v2: string; v3: string; meaning: string; example: string; translation: string; irregular?: boolean };

const verbs: Verb[] = [
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

const popular = ["go", "eat", "see", "take", "write"];

export default function Home() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "irregular" | "regular">("all");
  const searchResult = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filteredVerbs = verbs.filter(v => filter === "all" || (filter === "irregular" ? v.irregular : !v.irregular));
    if (!q) return { exact: undefined, related: filteredVerbs };
    const isExactMatch = (value: string) => value.toLowerCase().split("/").map(word => word.trim()).includes(q);
    const exact = filteredVerbs.find(v => [v.v1, v.v2, v.v3, v.meaning].some(isExactMatch));
    if (exact) return { exact, related: [] };
    const related = filteredVerbs.filter(v => [v.v1, v.v2, v.v3, v.meaning].some(value => value.toLowerCase().includes(q)));
    return { exact: undefined, related };
  }, [query, filter]);
  const featured = query.trim() ? searchResult.exact : verbs.find(v => v.v1 === "play");
  const relatedResults = query.trim() ? searchResult.related : searchResult.related.filter(v => v.v1 !== "play");
  const resultCount = featured ? 1 : relatedResults.length;
  const speak = (word: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word.split(" / ")[0]);
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
  };
  return (
    <main className="site-shell">
      <header className="topbar"><a className="brand" href="#top" aria-label="หน้าแรก กริยา 3 ช่อง"><span className="brand-mark"><BookOpen size={21} /></span><span><b>VERB</b><em>3</em><small>กริยา 3 ช่อง</small></span></a><div className="mini-note"><Sparkles size={15} /> ฝึกวันละ 5 คำ เก่งขึ้นทุกวัน</div></header>
      <section className="hero" id="top">
        <div className="hero-copy"><p className="eyebrow">ENGLISH MADE SIMPLE</p><h1>ค้นหา <span>กริยา 3 ช่อง</span><br />ได้จากทุกคำ</h1><p className="hero-sub">พิมพ์คำกริยาช่อง 1, 2 หรือ 3 ก็ได้<br className="desktop-break" /> เราจะช่วยค้นหาคำที่เหลือ พร้อมความหมายและตัวอย่าง</p>
          <div className="search-wrap"><Search size={23} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="ลองค้นหา play, went, eaten..." aria-label="ค้นหาคำกริยา" autoComplete="off" />{query && <button onClick={() => setQuery("")} aria-label="ล้างคำค้นหา"><X size={18} /></button>}<span>ค้นหา</span></div>
          <div className="popular"><small>คำค้นยอดนิยม</small>{popular.map(word => <button key={word} onClick={() => setQuery(word)}>{word}</button>)}</div>
        </div>
        <div className="hero-art" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="word-card card-v1"><small>ช่อง 1</small><b>PLAY</b><i>ปัจจุบัน</i></div><ArrowRight className="art-arrow arrow-one" /><div className="word-card card-v2"><small>ช่อง 2</small><b>PLAYED</b><i>อดีต</i></div><ArrowRight className="art-arrow arrow-two" /><div className="word-card card-v3"><small>ช่อง 3</small><b>PLAYED</b><i>สมบูรณ์</i></div><div className="dot dot-one" /><div className="dot dot-two" /><div className="dot dot-three" /></div>
      </section>
      <section className="content">
        <div className="section-head"><div><p className="eyebrow">SEARCH RESULT</p><h2>{query ? `ผลการค้นหา “${query}”` : "ตัวอย่างคำกริยา"}</h2><p>{featured ? "พบคำที่ตรงกัน" : `พบ ${resultCount} คำที่เกี่ยวข้อง`} — ค้นหาได้จากทุกช่องและความหมายภาษาไทย</p></div><div className="filters" role="group" aria-label="ตัวกรองคำกริยา"><button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>ทั้งหมด</button><button className={filter === "irregular" ? "active" : ""} onClick={() => setFilter("irregular")}>ไม่ปกติ</button><button className={filter === "regular" ? "active" : ""} onClick={() => setFilter("regular")}>ปกติ</button></div></div>
        {featured ? <article className="result-card"><div className="verb-grid">{[featured.v1, featured.v2, featured.v3].map((word, i) => <div className={`verb-cell form-${i + 1}`} key={`${word}-${i}`}><span><b>V{i + 1}</b> ช่อง {i + 1}</span><div><strong>{word}</strong><button onClick={() => speak(word)} aria-label={`ฟังการออกเสียง ${word}`}><Volume2 size={18} /></button></div><small>{i === 0 ? "ปัจจุบัน / รูปเดิม" : i === 1 ? "อดีต" : "Past participle"}</small></div>)}</div><div className="meaning-row"><div><small>ความหมาย</small><strong>{featured.meaning}</strong><span className={featured.irregular ? "tag irregular" : "tag regular"}>{featured.irregular ? "Irregular verb" : "Regular verb"}</span></div><div className="example"><small>ตัวอย่างประโยค</small><p>“{featured.example}”</p><span>{featured.translation}</span></div></div></article> : relatedResults.length === 0 && <div className="empty-state"><div><Search size={30} /></div><h3>ยังไม่พบคำว่า “{query}”</h3><p>ลองตรวจสอบการสะกด หรือค้นหาด้วยคำกริยาอีกช่องหนึ่ง</p><button onClick={() => { setQuery(""); setFilter("all"); }}><RotateCcw size={16} /> ดูคำทั้งหมด</button></div>}
        {relatedResults.length > 0 && <><h3 className="related-title">{query ? "คำที่เกี่ยวข้อง" : "คำศัพท์เพิ่มเติม"}</h3><div className="verb-list">{relatedResults.slice(0, 12).map(v => <button key={v.v1} onClick={() => setQuery(v.v1)}><span><b>{v.v1}</b><small>{v.meaning}</small></span><span>{v.v2}</span><span>{v.v3}</span><ArrowRight size={16} /></button>)}</div></>}
        <aside className="tip"><span>💡</span><div><b>จำง่ายขึ้น</b><p>คำกริยาปกติ (Regular verbs) เติม <strong>-ed</strong> ในช่อง 2 และ 3 เช่น play → played → played ส่วนคำกริยาไม่ปกติต้องฝึกจำทีละคำ</p></div></aside>
      </section>
      <footer><span>VERB<em>3</em></span><p>เครื่องมือเล็ก ๆ เพื่อทุกก้าวของการเรียนภาษาอังกฤษ</p></footer>
    </main>
  );
}
