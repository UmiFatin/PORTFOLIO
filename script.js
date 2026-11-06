/* ===== EDIT YOUR CONTENT HERE ===== */
const $ = id => document.getElementById(id);
const ph = (src, label = "add image") => `<div class="ph"><img src="${src}" alt="" loading="lazy" onerror="this.remove()"><span>${label}</span></div>`;
const chips = a => a.map(x => `<span class="chip">${x}</span>`).join("");

// Education
$("edu").innerHTML = [
  ["2024 - Now", "Universiti Teknologi Mara (UiTM)", "Bachelor of Computer Science (Hons)", "CGPA: 3.31"],
  ["2022 - 2024", "Malacca Matriculation College", "Physical Science", "CGPA: 3.54"],
  ["2017 - 2022", "SMK (P) Raja Zarina", "Science Stream", "SPM: 2A 4B 1C 2E"]
].map(e => `<div class="ti"><h4>${e[0]} <em>|</em> ${e[1]}</h4><div class="box sm"><ul><li>${e[2]}<li>${e[3]}</ul></div></div>`).join("");

// Skills
$("tech").innerHTML = chips(["Java", "C++", "HTML", "CSS", "JavaScript", "PHP", "Figma", "Canva", "Capcut", "Adobe Photoshop"]);
$("soft").innerHTML = chips(["Creative", "Leadership", "Good in Teamwork", "Communication"]);

// Achievements: [year, [[name, level, award], ...]]
$("ach").innerHTML = [
  ["2026", [["1st International Prosolve 2026", "International Level", "Participation"]]],
  ["2024", [
    ["Battle Code Competition 2024", "College Level", "Consolation Prize"],
    ["SCDC Boom Competition 2024", "College Level", "Participation"],
    ["Dronatix Competition 2024", "College Level", "Participation"]]],
  ["2023", [
    ["International Innovation, Invention & Creation Exhibition (IIICE) 2023", "International Level", "Young Inventor - Silver Award"],
    ["Johor Matriculation College Innovation Day 2023", "State Level", "New Innovation - Platinum Award"],
    ["Digital Mind Map Competition 2023", "College Level", "Consolation Prize"],
    ["Battle Code Competition 2023", "College Level", "Participation"]]]
].map(([y, l]) => `<div class="ti"><h4>${y}</h4><div class="box sm">${l.map(a => `<p>${a[0]} <span class="chip s">${a[1]} (<b>${a[2]}</b>)</span></p>`).join("")}</div></div>`).join("");

// Certificates -> images/cert-1.jpg, cert-2.jpg ... (number = position in this list)
// [title, date, category]  category: "tech" or "leadership"
const certs = [
  ["Road To White Hat Workshop", "28 June 2026", "tech"],
  ["1st International Prosolve 2026", "23 May 2026", "tech"],
  ["From Queries To Decision: SQL Workshop", "22 April 2026", "tech"],
  ["SMFFSKM", "", "leadership"],
  ["Modul Kepimpinan Dinamik", "25 - 27 April 2026", "leadership"]
];
const certCats = [["tech", "Tech certificate"], ["leadership", "Leadership certificate"]];
function showCerts(k) {
  $("certTabs").innerHTML = certCats.map(c => `<button type="button" aria-pressed="${c[0] === k}" data-k="${c[0]}">${c[1]}</button>`).join("");
  $("cert").innerHTML = certs.map((c, i) => c[2] === k ? `<div class="box card">${ph(`images/cert-${i + 1}.jpg`)}<h5>${c[0]}</h5><small>${c[1]}</small></div>` : "").join("");
}
$("certTabs").onclick = e => { const b = e.target.closest("button"); if (b) showCerts(b.dataset.k); };
showCerts("tech");

// Experience -> images/smffskm-1.jpg ..., images/csclub-1.jpg ...
const D = "dd/mm/yyyy"; // replace with the real dates
const exp = {};
exp.smffskm = ["SMFFSKM | Position: Exco Multimedia", [
  ["Pemantapan Destini Siswa (PDS)", "Leader of Multimedia Bureau"],
  ["Watikah Pelantikan Ahli SMKPPIM", "Multimedia Bureau"],
  ["Majlis Anugerah Dekan (MAD)", "Leader of Multimedia Bureau"],
  ["Module Teaching to School", "Leader of Programme Bureau"],
  ["Sukan Antara Jabatan", ""],
  ["Sukan Antara Program (SUPRO)", ""],
  ["Student Orientation Welcome Event (SOWE)", "Leader of Multimedia Bureau"],
  ["Pemantapan Destini Siswa (PDS)", "Technical Bureau"],
  ["Cleanathon", "Treasurer (PIC Multi)"],
  ["Malam Pra-Graduan", "Secretary (PIC Multi)"],
  ["Chess@FSKM 2025", "Secretary (PIC Multi & Registration)"],
  ["Majlis Anugerah Dekan (MAD)", "Registration Bureau"],
  ["Annual General Meeting (AGM)", "Leader of Multimedia Bureau"],
  ["Photoshoot SMKPPIM 24/25", "Technical task"]]];
exp.csclub = ["CSCLUB | Position: Leader of Exco Multimedia", [
  ["Hari Keusahawanan", "Multimedia"],
  ["Virtual CS Week", "Multimedia"],
  ["Merch CS", "Registration Bureau"],
  ["Malam Pra-Graduan", "Secretary (PIC Multi)"],
  ["Chess@FSKM 2025", "Secretary (PIC Multi & Registration)"],
  ["Majlis Anugerah Dekan (MAD)", "Registration Bureau"]]];
exp.volunteer = ["Volunteer", Array.from({length: 6}, () => ["Program name", "Position"])];


exp.workshop = ["Workshops and competitions", [
  ["Road To White Hat Workshop", "Workshop", "28 June 2026"],
  ["1st International Prosolve 2026", "International Level (Participation)", "23 May 2026"],
  ["From Queries To Decision: SQL Workshop", "Workshop", "22 April 2026"],
  ["Modul Kepimpinan Dinamik", "Workshop", "25 - 27 April 2026"],
  ["Battle Code Competition 2024", "College Level (Consolation Prize)", "2024"],
  ["SCDC Boom Competition 2024", "College Level (Participation)", "2024"],
  ["Dronatix Competition 2024", "College Level (Participation)", "2024"],
  ["International Innovation, Invention & Creation Exhibition (IIICE) 2023", "International Level (Young Inventor - Silver Award)", "2023"],
  ["Johor Matriculation College Innovation Day 2023", "State Level (New Innovation - Platinum Award)", "2023"],
  ["Digital Mind Map Competition 2023", "College Level (Consolation Prize)", "2023"],
  ["Battle Code Competition 2023", "College Level (Participation)", "2023"]]];
// Experience categories (buttons) -> images/<category>-1.jpg, <category>-2.jpg ...
const expCats = [["csclub", "CSCLUB"], ["smffskm", "SMFFSKM"], ["volunteer", "Volunteer"], ["workshop", "Workshop/Comp"]];
function showExp(k) {
  $("expTabs").innerHTML = expCats.map(c => `<button type="button" aria-pressed="${c[0] === k}" data-k="${c[0]}">${c[1]}</button>`).join("");
  $("expHead").textContent = exp[k][0];
  $("exp").innerHTML = exp[k][1].map((x, i) => `<div class="box card">${ph(`images/${k}-${i + 1}.jpg`)}<h5>${x[0]}</h5><small>${x[2] || D}</small><small>${x[1]}</small></div>`).join("");
}
$("expTabs").onclick = e => { const b = e.target.closest("button"); if (b) showExp(b.dataset.k); };
showExp("csclub");

// Collections: cover = <folder>-1.jpg, gallery = <folder>-1.jpg ... <folder>-N.jpg
// [title, file prefix, max number of photos, short explanation]
const dlg = $("dlg");
function covers(id, dir, list) {
  $(id).innerHTML = list.map((c, i) => `<button class="box card cov" data-i="${i}">${ph(`images/${dir}/${c[1]}-1.jpg`, "cover")}<h5>${c[0]}</h5><small>${c[3]}</small><span class="view">View photos</span></button>`).join("");
  $(id).onclick = e => {
    const b = e.target.closest(".cov"); if (!b) return;
    const c = list[b.dataset.i];
    $("dt").textContent = c[0]; $("dd").textContent = c[3]; $("dx").innerHTML = "";
    $("dg").innerHTML = Array.from({length: c[2]}, (_, k) => `<img src="images/${dir}/${c[1]}-${k + 1}.jpg" alt="${c[0]} ${k + 1}" loading="lazy" onerror="this.remove()">`).join("");
    dlg.showModal();
  };
}
dlg.onclick = e => { if (e.target === dlg || e.target.closest(".x")) dlg.close(); };

covers("pc", "photography", [
  ["Collection 1", "collection-1", 12, "Write one short line about this collection."],
  ["Collection 2", "collection-2", 12, "Write one short line about this collection."]]);
covers("dz", "design", [
  ["Typography", "typography", 12, "Text-led designs and social media layouts."],
  ["Poster", "poster", 12, "Posters for events and campaigns."],
  ["Poster IG", "poster-ig", 20, "Instagram posts and stories for faculty and club events."],
  ["User Interface", "ui", 12, "App screen designs made in Figma."],
  ["Mockup", "mockup", 12, "Brand and product mockups."],
  ["Mind Map", "mindmap", 12, "Mind maps for study and project planning."]]);

// Projects: [title, file prefix, category, type, writeup, details, github link]
// images/projects/<prefix>-1.jpg = cover, then -2.jpg, -3.jpg ... = more screenshots
const W = "Describe this project here: what problem it solves and what you built.";
const projects = [
  ["Internship Management System", "internship", "Website", "Group Project", W, "", "https://github.com/UmiFatin"],
  ["Sport Facilities Management (BlueJ)", "sport-facilities", "Console", "Group Project", W, "", "https://github.com/UmiFatin"],
  ["ExpenseXpert: Expenses Tracking System", "expensexpert", "Console", "Group Project", W, "Course: CS402 | Language: C++ | Software: Embarcadero Dev C++", "https://github.com/UmiFatin"],
  ["Concert List Database", "concert-list", "Database", "Group Project", W, "", "https://github.com/UmiFatin"],
  ["Future Trends in Educational Technology", "edu-tech", "Video", "Group Project", W, "", ""]
];
function showProjects(k) {
  const cats = ["All", ...new Set(projects.map(p => p[2]))];
  $("pjTabs").innerHTML = cats.map(c => `<button type="button" aria-pressed="${c === k}" data-k="${c}">${c}</button>`).join("");
  $("pj").innerHTML = projects.map((p, i) => k === "All" || p[2] === k ? `<button class="box card cov pj" data-i="${i}"><div class="cv">${ph(`images/projects/${p[1]}-1.jpg`, "cover")}<span class="badge">${p[3]}</span></div><span class="tag">${p[2]}</span><h5>${p[0]}</h5></button>` : "").join("");
}
$("pjTabs").onclick = e => { const b = e.target.closest("button"); if (b) showProjects(b.dataset.k); };
$("pj").onclick = e => {
  const b = e.target.closest(".pj"); if (!b) return;
  const p = projects[b.dataset.i];
  $("dt").textContent = p[0]; $("dd").textContent = p[4];
  $("dx").innerHTML = (p[5] ? `<p class="dim meta1">${p[5]}</p>` : "") + (p[6] ? `<a class="btn" href="${p[6]}" target="_blank" rel="noopener">GitHub Link</a>` : "");
  $("dg").innerHTML = Array.from({length: 8}, (_, k) => `<img src="images/projects/${p[1]}-${k + 1}.jpg" alt="${p[0]} ${k + 1}" loading="lazy" onerror="this.remove()">`).join("");
  dlg.showModal();
};
showProjects("All");

/* ===== TAB ROUTER (About Me > Experience > Project > Photography > Design) ===== */
const tabs = [...document.querySelectorAll(".tab")], links = [...document.querySelectorAll("#nav a")];
function route() {
  const t = (location.hash || "#about").slice(1), k = tabs.some(x => x.id === t) ? t : "about";
  tabs.forEach(x => x.hidden = x.id !== k);
  links.forEach(a => a.classList.toggle("on", a.hash === "#" + k));
  scrollTo(0, 0);
}
addEventListener("hashchange", route);
route();
