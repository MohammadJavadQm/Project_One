const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 50);
});

const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    const icon = navToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
    navMenu.classList.toggle('show-menu');
});

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('show-menu')) {
            navMenu.classList.remove('show-menu');
            const icon = navToggle.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });
});

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset + 100; 
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 80;
        const sectionId = current.getAttribute('id');
        const activeLink = document.querySelector('.cyber-nav a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.cyber-nav a').forEach(a => a.classList.remove('active-link'));
            if (activeLink) {
                 activeLink.classList.add('active-link');
            }
        }
        if (window.scrollY === 0) {
            document.querySelectorAll('.cyber-nav a').forEach(a => a.classList.remove('active-link'));
            const heroLink = document.querySelector('.cyber-nav a[href*="#hero"]');
            if (heroLink) {
                heroLink.classList.add('active-link');
            }
        }
    });
}
window.addEventListener('scroll', scrollActive);

ScrollReveal({
    distance: '80px', 
    duration: 2000,
    delay: 150, 
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)', 
    reset: false 
});

ScrollReveal().reveal('.hero-content, .system-heading', { origin: 'right' });
ScrollReveal().reveal('.hero-image-container, .about-image-frame', { origin: 'left', delay: 300 });
ScrollReveal().reveal('.main-title, .role-title, .description-text', { origin: 'right', interval: 100 });
ScrollReveal().reveal('.module-card, .repo-card, .connection-card', { interval: 120, origin: 'bottom' });

const moduleCards = document.querySelectorAll('.module-card, .repo-card, .connection-card');
moduleCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-1rem) scale(1.03) skewX(1deg)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = ''; 
    });
});