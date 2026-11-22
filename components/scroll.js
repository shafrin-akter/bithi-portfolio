// Smooth scroll to a section with header offset (same easing as the original site).
export function scrollToSection(hash, offset = 75, duration = 650) {
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  const el = document.getElementById(id);
  if (!el) return;

  const start = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  const distance = Math.max(0, start + el.getBoundingClientRect().top - offset) - start;
  if (Math.abs(distance) < 2) return;

  const ease = (t) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1);
  let startTime = null;
  let frame;

  const stop = () => {
    cancelAnimationFrame(frame);
    window.removeEventListener("wheel", stop);
    window.removeEventListener("touchmove", stop);
  };

  const step = (now) => {
    if (startTime === null) startTime = now;
    const elapsed = now - startTime;
    window.scrollTo(0, start + distance * ease(Math.min(elapsed / duration, 1)));
    if (elapsed < duration) frame = requestAnimationFrame(step);
    else stop();
  };

  window.addEventListener("wheel", stop, { passive: true });
  window.addEventListener("touchmove", stop, { passive: true });
  frame = requestAnimationFrame(step);
}

export function handleNavClick(e, href) {
  e.preventDefault();
  scrollToSection(href, 75, 650);
}
