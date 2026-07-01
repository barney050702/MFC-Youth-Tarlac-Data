// theme.js – Handles dark/light mode toggle and persistence

// Apply stored theme on load
(function() {
  const stored = localStorage.getItem('theme');
  const html = document.documentElement;
  if (stored) {
    html.setAttribute('data-theme', stored);
  } else {
    // use auto (prefers-color-scheme) – already default via data-theme="auto"
    html.setAttribute('data-theme', 'auto');
  }
})();

// Toggle function attached to button with id="theme-toggle"
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const newTheme = (current === 'dark' || (current === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)) ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

// Attach event listener after DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', toggleTheme);
  });
} else {
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.addEventListener('click', toggleTheme);
}
