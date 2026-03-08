const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

function handleSubmit(e) {
  e.preventDefault();
  const s = document.getElementById('formSuccess');
  s.style.display = 'block';
  e.target.reset();
  setTimeout(() => s.style.display = 'none', 6000);
}
