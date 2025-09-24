// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const mobilePanel = document.getElementById('mobilePanel');
hamburger?.addEventListener('click', () => {
  const open = mobilePanel.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', String(open));
  mobilePanel.setAttribute('aria-hidden', String(!open));
});

// Back to top + sticky header subtle effect
const backTop = document.getElementById('backTop');
const header = document.querySelector('header');
const showAt = 300;
window.addEventListener('scroll', () => {
  const y = window.scrollY || document.documentElement.scrollTop;
  backTop.classList.toggle('show', y > showAt);
  if (header) header.style.boxShadow = y > 4 ? '0 6px 14px rgba(0,0,0,.06)' : '0 1px 0 rgba(0,0,0,.04)';
});
backTop?.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.querySelector(".search-form").addEventListener("submit", function (e) {
  e.preventDefault(); // stop actual page reload
  const query = this.q.value.toLowerCase();

  // Find matching sections by their id or text
  const sections = document.querySelectorAll("section, div[id]");
  let found = false;

  sections.forEach(sec => {
    if (sec.id && sec.id.toLowerCase().includes(query)) {
      sec.scrollIntoView({ behavior: "smooth" });
      found = true;
    }
  });

  if (!found) {
    alert("No results found for: " + query);
  }
});

// Example: dynamically set calendar timezone if needed
// const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
// const cal = document.getElementById('calendarFrame');
// if (cal && !cal.src.includes('ctz=')) cal.src += (cal.src.includes('?')?'&':'?') + 'ctz=' + encodeURIComponent(tz);
