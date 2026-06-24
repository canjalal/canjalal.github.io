const nav = document.getElementById('nav');
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
	nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

toggle.addEventListener('click', () => {
	const open = navLinks.classList.toggle('open');
	toggle.classList.toggle('open', open);
});

navLinks.querySelectorAll('a').forEach(link => {
	link.addEventListener('click', () => {
		navLinks.classList.remove('open');
		toggle.classList.remove('open');
	});
});
