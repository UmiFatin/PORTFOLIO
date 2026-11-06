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

// Certificates -> images/cert-1.jpg, cert-2.jpg ...
$("cert").innerHTML = [
  ["Road To White Hat Workshop", "28 June 2026"],
  ["1st International Prosolve 2026", "23 May 2026"],
  ["From Queries To Decision: SQL Workshop", "22 April 2026"],
  ["SMFFSKM", ""],
  ["Modul Kepimpinan Dinamik", "25 - 27 April 2026"]
].map((c, i) => `<div class="box card">${ph(`images/cert-${i + 1}.jpg`)}<h5>${c[0]}</h5><small>${c[1]}</small></div>`).join("");

// Experience -> images/smffskm-1.jpg ..., images/csclub-1.jpg ...
const D = "dd/mm/yyyy"; // replace with the real dates
const lead = (id, p, list) => $(id).innerHTML = list.map((x, i) =>
  `<div class="box card">${ph(`images/${p}-${i + 1}.jpg`)}<h5>${x[0]}</h5><small>${D}</small><small>${x[1]}</small></div>`).join("");
lead("smf", "smffskm", [
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
  ["Photoshoot SMKPPIM 24/25", "Technical task"]]);
lead("csc", "csclub", [
  ["Hari Keusahawanan", "Multimedia"],
  ["Virtual CS Week", "Multimedia"],
  ["Merch CS", "Registration Bureau"],
  ["Malam Pra-Graduan", "Secretary (PIC Multi)"],
  ["Chess@FSKM 2025", "Secretary (PIC Multi & Registration)"],
  ["Majlis Anugerah Dekan (MAD)", "Registration Bureau"]]);
$("vol").innerHTML = Array.from({length: 6}, (_, i) =>
  `<div class="box card">${ph(`images/volunteer-${i + 1}.jpg`)}<h5>Program name</h5><small>${D}</small><small>Position</small></div>`).join("");

// More projects
$("more").innerHTML = `<div class="box card">${ph("images/project-2.jpg", "Project preview")}<h5>Details <a class="more" href="https://github.com/UmiFatin" target="_blank" rel="noopener">More &rarr;</a></h5></div>`;

// Design gallery -> images/design/<folder>-1.jpg ...  [title, folder, how many images]
$("dz").innerHTML = [
  ["Typography", "typography", 6], ["Poster", "poster", 7], ["Poster IG", "poster-ig", 12],
  ["User Interface", "ui", 3], ["Mockup", "mockup", 5], ["Mind Map", "mindmap", 2]
].map(([t, f, n]) => `<div class="box"><h3>${t}</h3><div class="gal">${Array.from({length: n}, (_, i) => ph(`images/design/${f}-${i + 1}.jpg`)).join("")}</div></div>`).join("");

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
