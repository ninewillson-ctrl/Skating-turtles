// Skating Turtles - Interactive JavaScript

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.style.color = '#fff';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#ff9900';
        }
    });
});

// Intersection Observer for card animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-in forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});

// Contact form handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const inputs = contactForm.querySelectorAll('input, textarea');
        const name = inputs[0].value;
        const email = inputs[1].value;
        const message = inputs[2].value;
        
        // Create mailto link
        const mailtoLink = `mailto:ninewillson@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;
        
        // Open default email client
        window.location.href = mailtoLink;
        
        // Reset form
        contactForm.reset();
        alert('Opening your email client...');
    });
}

// Parallax header effect on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrolled = window.pageYOffset;
    header.style.backgroundPosition = `0 ${scrolled * 0.5}px`;
});

// Add active class styling for current section
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (pageYOffset >= sectionTop && pageYOffset < sectionBottom) {
            section.style.opacity = '1';
        }
    });
});