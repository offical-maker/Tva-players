// Update this list to manage the TVA player directory. Keep role values: Founder, Leader, Co-Leader, Member.
const TVA_PLAYERS = [
  { name: "TVA Joker", role: "Founder" },
  { name: "TVA Parunth Vasu", role: "Leader" },
  { name: "TVA Chandra Boss", role: "Co-Leader" },
  { name: "TVA Ap Pappan", role: "Co-Leader" },
  { name: "TVA Abel Joseph", role: "Member" },
  { name: "TVA Amabathoor", role: "Member" },
  { name: "TVA Appukuttan", role: "Member" },
  { name: "TVA Ash", role: "Member" },
  { name: "TVA Babu Namboothiri", role: "Member" },
  { name: "TVA Balan K Nair", role: "Member" },
  { name: "TVA Barathan", role: "Member" },
  { name: "TVA BOB", role: "Member" },
  { name: "TVA Boboy", role: "Member" },
  { name: "TVA Coach", role: "Member" },
  { name: "TVA Demon", role: "Member" },
  { name: "TVA Destro", role: "Member" },
  { name: "TVA Ittachi", role: "Member" },
  { name: "TVA Jude", role: "Member" },
  { name: "TVA Juggru", role: "Member" },
  { name: "TVA Kannapi", role: "Member" },
  { name: "TVA Keerikkadan", role: "Member" },
  { name: "TVA Kevin", role: "Member" },
  { name: "TVA Kuruppu", role: "Member" },
  { name: "TVA Lex", role: "Member" },
  { name: "TVA Lolan", role: "Member" },
  { name: "TVA Madara Uchiha", role: "Member" },
  { name: "TVA Maddy Kindi", role: "Member" },
  { name: "TVA Maman", role: "Member" },
  { name: "TVA Menny", role: "Member" },
  { name: "TVA Messboi Goku", role: "Member" },
  { name: "TVA Miles", role: "Member" },
  { name: "TVA Moby", role: "Member" },
  { name: "TVA Muchiri", role: "Member" },
  { name: "TVA Neegan", role: "Member" },
  { name: "TVA Neel", role: "Member" },
  { name: "TVA Neelan", role: "Member" },
  { name: "TVA Ambathur Singam", role: "Member" },
  { name: "TVA Stalin", role: "Member" },
  { name: "TVA Ninja", role: "Member" },
  { name: "TVA Alex Duvor", role: "Member" }
];

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "×" : "☰";
    });
  }

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("visible"));
  }

  const grid = document.getElementById("playerGrid");
  if (!grid) return;
  const search = document.getElementById("playerSearch");
  const clear = document.getElementById("clearSearch");
  const count = document.getElementById("playerCount");
  const empty = document.getElementById("emptyState");
  const filters = document.getElementById("playerFilters");
  let activeFilter = "all";

  function render() {
    const term = (search?.value || "").trim().toLowerCase();
    const shown = TVA_PLAYERS.filter(player => {
      const matchesTerm = player.name.toLowerCase().includes(term) || player.role.toLowerCase().includes(term);
      return matchesTerm && (activeFilter === "all" || player.role === activeFilter);
    });
    grid.innerHTML = shown.map((player, index) => {
      const cls = player.role === "Founder" ? "founder" : player.role === "Leader" || player.role === "Co-Leader" ? "leader" : "";
      const crown = player.role === "Founder" ? '<span class="card-crown" aria-label="Founder">♛</span>' : "";
      return '<article class="player-card ' + cls + '" style="animation-delay:' + Math.min(index * 25, 250) + 'ms"><div class="card-top"><span class="tva-badge">TVA</span><span class="rank-badge">' + player.role.toUpperCase() + '</span></div><div><h3>' + escapeHTML(player.name.replace(/^TVA\s*/, "")) + crown + '</h3><span class="card-role">TVA GANG MEMBER</span></div></article>';
    }).join("");
    if (count) count.textContent = shown.length;
    if (empty) empty.hidden = shown.length !== 0;
    grid.hidden = shown.length === 0;
  }
  function escapeHTML(value) {
    return value.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
  }
  if (search) search.addEventListener("input", render);
  if (clear) clear.addEventListener("click", () => { if (search) { search.value = ""; search.focus(); } render(); });
  if (filters) filters.addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    activeFilter = button.dataset.filter;
    filters.querySelectorAll(".filter-btn").forEach(item => item.classList.toggle("active", item === button));
    render();
  });
  render();
});