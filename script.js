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