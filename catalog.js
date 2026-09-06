const BOOKS = [
  { id: "feynman", cat: "intro", open: true, title: "The Feynman Lectures Vol. III", author: "Feynman, Leighton, Sands", zh: "以路径积分直觉与实验现象切入，叙述生动而概念严谨。Caltech 官方免费在线阅读。", en: "Conceptual masterpiece. Official free reading on the Caltech site — do not mirror the PDF." },
  { id: "styer", cat: "intro", open: true, title: "Invitation to Quantum Mechanics", author: "Daniel F. Styer", zh: "奥伯林本科入门讲义，CC BY-SA 4.0。篇幅适中，强调概念澄清与习题。", en: "Compact undergraduate invitation. CC BY-SA 4.0 with an author-hosted PDF." },
  { id: "idema", cat: "intro", open: true, title: "Introduction to Quantum Mechanics", author: "Timon Idema", zh: "代尔夫特开放教材，CC BY 4.0。由薛定谔方程推进至氢原子，含 Jupyter Book 与 PDF。", en: "TU Delft OPEN textbook, CC BY 4.0. Schrödinger equation through the hydrogen atom." },
  { id: "openstax", cat: "intro", open: true, title: "University Physics Volume 3", author: "OpenStax", zh: "CC BY 4.0 开放教科书。第 6–8 章覆盖量子论与近代物理。", en: "CC BY 4.0 calculus-based intro. Chapters 6–8 cover quantum / modern physics." },
  { id: "tong", cat: "undergrad", open: true, title: "Lectures on Quantum Mechanics", author: "David Tong", zh: "剑桥讲义，作者官方免费提供。以薛定谔方程为主线，表述清晰。", en: "Cambridge notes hosted by the author. Clean Schrödinger-first course." },
  { id: "mit-ocw", cat: "undergrad", open: true, title: "MIT OCW 8.04 / 8.05 / 8.06", author: "Zwiebach et al.", zh: "麻省理工量子物理序列，CC BY-NC-SA。讲义、习题、考试与录像齐全。", en: "Full MIT quantum sequence with notes, problems, exams, and video." },
  { id: "griffiths", cat: "undergrad", open: false, title: "Introduction to Quantum Mechanics", author: "Griffiths & Schroeter", zh: "本科标准教材。例题与习题质量高，适合作为第一本系统量子力学书。", en: "The standard first serious undergraduate text. Worked examples and problems are the point." },
  { id: "townsend", cat: "undergrad", open: false, title: "A Modern Approach to Quantum Mechanics", author: "John S. Townsend", zh: "从自旋与二态系统入手，先建立狀矢空间再回到波函数。", en: "Spins-first route. Builds the Dirac formalism before wave mechanics." },
  { id: "binney", cat: "undergrad", open: false, title: "The Physics of Quantum Mechanics", author: "Binney & Skinner", zh: "牛津二年级课程教材。由概率幅出发建立形式体系，强调含时演化与经典极限。", en: "Oxford second-year text. Probability amplitudes first; classical limit kept in view." },
  { id: "sakurai", cat: "grad", open: false, title: "Modern Quantum Mechanics", author: "Sakurai & Napolitano", zh: "研究生标准教材。以对称性与狄拉克符号为主线，叙述现代而精炼。", en: "The graduate standard. Symmetry and Dirac notation from page one." },
  { id: "shankar", cat: "grad", open: false, title: "Principles of Quantum Mechanics", author: "Ramamurti Shankar", zh: "从数学准备写起，过渡平滑，适合需要补线性代数与经典力学的读者。", en: "Mathematical warm-up, then a complete course. Kind to readers who need the scaffolding." },
  { id: "likharev", cat: "grad", open: true, title: "Essential Graduate Physics: QM", author: "Konstantin Likharev", zh: "研究生讲义，CC BY-NC-SA。叙述紧凑、习题完备，定位两学期核心课。", en: "Two-semester graduate core. CC BY-NC-SA notes plus a large problem set." },
  { id: "cohen-tannoudji", cat: "grad", open: false, title: "Quantum Mechanics", author: "Cohen-Tannoudji, Diu, Laloë", zh: "三卷本，讲解详尽，适合作为辞典式参考。", en: "Encyclopedic three-volume reference. Slow, complete, and unmatched for detail." },
  { id: "landsman", cat: "foundations", open: true, title: "Foundations of Quantum Theory", author: "Klaas Landsman", zh: "Springer 开放获取（CC BY）。以算子代数处理量子基础，属数学物理进阶读物。", en: "Springer Open, CC BY. Operator algebras, measurement, Bell, symmetry." },
  { id: "woit", cat: "foundations", open: true, title: "Quantum Theory, Groups and Representations", author: "Peter Woit", zh: "从李群与表示论重建量子理论。作者主页提供文稿，适合数学背景读者。", en: "Lie groups first. Author-hosted draft; Springer edition is the print book." },
  { id: "freericks", cat: "foundations", open: true, title: "Quantum Mechanics Done Right", author: "James K. Freericks", zh: "2026 年 Springer 开放教材。少用微积分，由概念推进至研究前沿。", en: "2026 Springer Open Access. Rigorous QM with almost no calculus prerequisite." },
  { id: "dirac", cat: "foundations", open: false, title: "The Principles of Quantum Mechanics", author: "P. A. M. Dirac", zh: "量子力学公理化经典。历史地位重要，不宜作为第一本教材。", en: "The axiomatic classic. Read after you already know the subject." },
  { id: "weinberg", cat: "foundations", open: false, title: "Lectures on Quantum Mechanics", author: "Steven Weinberg", zh: "从成年物理学家的视角重述形式体系，对基础问题言简意赅。", en: "A master rewriting the formalism. Short, opinionated, and precise." },
  { id: "nielsen-chuang", cat: "qinfo", open: false, title: "Quantum Computation and Quantum Information", author: "Nielsen & Chuang", zh: "量子信息与量子计算标准教材。", en: "The field-defining textbook for quantum information." },
  { id: "cetto", cat: "undergrad", open: true, title: "Quantum Mechanics: A Physical Approach", author: "Cetto & de la Peña", zh: "剑桥 2025 年开放教材，CC BY-NC 4.0。强调物理图景，并配套解题。", en: "Cambridge Open Access 2025. Physical picture first, with a large solutions manual." }
];

function card(b) {
  return `<a class="card" data-cat="${b.cat}" href="books/${b.id}.html">
    <span class="badge ${b.open ? "open" : "buy"}">${b.open ? "开放阅读 / Open" : "需购买 / Buy"}</span>
    <h3>${b.title}</h3>
    <div class="meta">${b.author}</div>
    <p class="zh">${b.zh}</p>
    <p class="en">${b.en}</p>
    <div class="go"><span class="zh">阅读介绍 →</span><span class="en">Read the guide →</span></div>
  </a>`;
}

const catalog = document.getElementById("catalog");
if (catalog) catalog.innerHTML = BOOKS.map(card).join("");

document.getElementById("filters")?.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-filter]");
  if (!btn) return;
  document.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c === btn));
  const f = btn.dataset.filter;
  document.querySelectorAll(".card").forEach((c) => {
    c.style.display = f === "all" || c.dataset.cat === f ? "" : "none";
  });
});

function toggleLang() {
  document.body.classList.toggle("en");
  document.body.classList.toggle("zh");
  localStorage.setItem("lang", document.body.classList.contains("en") ? "en" : "zh");
}
const saved = localStorage.getItem("lang");
if (saved === "en") {
  document.body.classList.remove("zh");
  document.body.classList.add("en");
}
