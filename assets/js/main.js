// ==================== 
// PROJECT NAVIGATION
// ====================

function showProjects(type) {
    // Hide selection section
    const selectionSection = document.querySelector('.project-selection-section');
    if (selectionSection) {
        selectionSection.style.display = 'none';
    }
    
    // Show appropriate projects section
    if (type === 'analytics') {
        const analyticsSection = document.getElementById('analytics-projects');
        if (analyticsSection) {
            analyticsSection.classList.remove('hidden-section');
            analyticsSection.classList.add('fade-in');
        }
    } else if (type === 'engineering') {
        const engineeringSection = document.getElementById('engineering-projects');
        if (engineeringSection) {
            engineeringSection.classList.remove('hidden-section');
            engineeringSection.classList.add('fade-in');
        }
    }
    
    // Smooth scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function hideProjects() {
    // Hide both project sections
    const analyticsSection = document.getElementById('analytics-projects');
    const engineeringSection = document.getElementById('engineering-projects');
    
    if (analyticsSection) {
        analyticsSection.classList.add('hidden-section');
        analyticsSection.classList.remove('fade-in');
    }
    
    if (engineeringSection) {
        engineeringSection.classList.add('hidden-section');
        engineeringSection.classList.remove('fade-in');
    }
    
    // Show selection section
    const selectionSection = document.querySelector('.project-selection-section');
    if (selectionSection) {
        selectionSection.style.display = 'block';
    }
    
    // Smooth scroll to projects section
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// ==================== 
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// ====================

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal links
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// ==================== 
// SCROLL ANIMATIONS
// ====================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all reveal elements
document.addEventListener('DOMContentLoaded', function() {
    const revealElements = document.querySelectorAll('.section-reveal');
    revealElements.forEach(el => observer.observe(el));
});

// ==================== 
// FORM SUBMISSION (PLACEHOLDER)
// ====================

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For now, we'll just show an alert
            alert(`Thank you for your message, ${name}! I'll get back to you at ${email} soon.`);
            
            // Reset form
            contactForm.reset();
        });
    }
});

// ==================== 
// ACTIVE NAVIGATION HIGHLIGHT
// ====================

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ==================== 
// KEYBOARD NAVIGATION
// ====================

document.addEventListener('keydown', function(e) {
    // ESC key to go back from project sections
    if (e.key === 'Escape') {
        const analyticsSection = document.getElementById('analytics-projects');
        const engineeringSection = document.getElementById('engineering-projects');
        
        if (analyticsSection && !analyticsSection.classList.contains('hidden-section')) {
            hideProjects();
        } else if (engineeringSection && !engineeringSection.classList.contains('hidden-section')) {
            hideProjects();
        }
    }
});

// ==================== 
// PRELOAD IMAGES
// ====================

function preloadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

document.addEventListener('DOMContentLoaded', preloadImages);

// ==================== 
// UTILITY: DEBOUNCE FUNCTION
// ====================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==================== 
// RESPONSIVE MENU (FOR MOBILE)
// ====================

// You can add a mobile menu toggle here if needed
// This is a placeholder for future mobile menu functionality

const createMobileMenu = () => {
    // Mobile menu functionality can be added here
    // For now, the design is responsive without a hamburger menu
};

document.addEventListener('DOMContentLoaded', createMobileMenu);