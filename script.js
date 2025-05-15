// Initialize AOS with enhanced settings
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Always update scrolled class for background effect
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    hamburger.classList.toggle('active');
    
    // Add animation to nav links
    const links = navLinks.querySelectorAll('a');
    links.forEach((link, index) => {
        link.style.animation = navLinks.style.display === 'flex' 
            ? `slideIn 0.3s ease forwards ${index * 0.1}s`
            : 'none';
    });
});

// Smooth scroll with enhanced behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
                hamburger.classList.remove('active');
            }
        }
    });
});

// Enhanced form submission with loading state
const contactForm = document.querySelector('.contact-form');
const submitBtn = document.querySelector('.submit-btn');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Add loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Slanje...';
    submitBtn.disabled = true;
    
    try {
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Show success message
        alert('Hvala na poruci! Uskoro ćemo vas kontaktirati.');
        contactForm.reset();
    } catch (error) {
        alert('Došlo je do greške. Molimo pokušajte ponovo.');
    } finally {
        // Reset button state
        submitBtn.innerHTML = 'Pošalji';
        submitBtn.disabled = false;
    }
});

// Enhanced project cards hover effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const info = card.querySelector('.project-info');
        info.style.transform = 'translateY(0)';
        card.querySelector('img').style.transform = 'scale(1.1)';
    });
    
    card.addEventListener('mouseleave', () => {
        const info = card.querySelector('.project-info');
        info.style.transform = 'translateY(100%)';
        card.querySelector('img').style.transform = 'scale(1)';
    });
});

// Enhanced image loading
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', () => {
        img.classList.add('fade-in');
    });
    
    // Add loading placeholder
    if (!img.complete) {
        img.style.opacity = '0';
    }
});

// Intersection Observer with enhanced options
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.service-card, .project-card, .about-content, .contact-content, .value-card, .expertise-card, .team-card').forEach(el => {
    observer.observe(el);
});

// Function to handle scroll-based navigation highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
}

// Add scroll event listener with throttling
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateActiveNavLink();
            ticking = false;
        });
        ticking = true;
    }
});

// Call once on page load
document.addEventListener('DOMContentLoaded', () => {
    updateActiveNavLink();
    AOS.refresh();
}); 