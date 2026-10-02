document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector("header nav");
  if (menu && nav) menu.addEventListener("click", () => nav.classList.toggle("open"));
  const form = document.getElementById("searchForm");
  const input = document.getElementById("searchInput");
  const result = document.getElementById("searchResult");
  if (form && input) form.addEventListener("submit", e => {
    e.preventDefault();
    const q = input.value.trim();
    if (result) result.innerHTML = q ? `<p>“${q}” အတွက် သတင်းများကို ရှာဖွေနေပါသည်။</p>` : `<p>ရှာဖွေရန် စာလုံးထည့်ပါ။</p>`;
  });
  document.querySelectorAll(".search-open").forEach(btn => btn.addEventListener("click", () => {
    const m=document.getElementById("searchModal"); if(m) m.classList.add("show");
  }));
  document.querySelectorAll(".search-modal .close").forEach(btn => btn.addEventListener("click", () => {
    const m=document.getElementById("searchModal"); if(m) m.classList.remove("show");
  }));
});
