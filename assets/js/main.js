// Fade-in animations
window.addEventListener('load', () => {
  document.querySelector('.navbar-container')?.classList.add('loaded');
  document.querySelectorAll('.fade-in-name').forEach((el, i) =>
    setTimeout(() => el.classList.add('loaded'), i * 200)
  );
  document.querySelectorAll('.fade-in:not(.fade-in-name)').forEach((el, i) =>
    setTimeout(() => el.classList.add('loaded'), 500 + i * 150)
  );
});

// Theme toggle with persistence
const toggleBtn = document.getElementById('theme-toggle');
if (toggleBtn) {
  const root = document.documentElement;

  // Set initial button state based on current theme
  toggleBtn.textContent = root.classList.contains('day') ? '🌙' : '☀️';

  toggleBtn.addEventListener('click', () => {
    const isDay = root.classList.toggle('day');
    root.classList.toggle('night');
    toggleBtn.textContent = isDay ? '🌙' : '☀️';

    // Save preference to localStorage
    localStorage.setItem('theme', isDay ? 'day' : 'night');
  });
}

// Spinner animation
(function(){
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;
  document.querySelectorAll('.spinner').forEach(el => {
    const frames = ['|', '/', '—', '\\'];
    let i = 0;
    setInterval(() => { el.textContent = frames[i = (i + 1) % frames.length]; }, 120);
  });
})();
