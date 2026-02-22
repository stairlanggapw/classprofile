// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    console.log('Class Profile Website Loaded!');
    
    // Initialize all functionality
    initTypingAnimation();
    initScrollAnimations();
    initMobileMenu();
    initSmoothScrolling();
    initPhotoScroll();
    initContactForm();
    initParallaxEffect();
    initCardAnimations();
    initScrollTriggerAnimations();
});

//  TYPING ANIMATION 
function initTypingAnimation() {
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");
    
    if (!typedTextSpan || !cursorSpan) return;

    const textArray = [
        "Selamat Datang di Kelas 9D!",
        "Bersama Kita Tumbuh",
        "Bersama Kita Berprestasi",
        "Keluarga Besar 9D"
    ];

    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;

    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if (!cursorSpan.classList.contains("typing")) {
                cursorSpan.classList.add("typing");
            }
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            if (!cursorSpan.classList.contains("typing")) {
                cursorSpan.classList.add("typing");
            }
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) {
                textArrayIndex = 0;
            }
            setTimeout(type, typingDelay + 1100);
        }
    }

    if (textArray.length) {
        setTimeout(type, newTextDelay + 250);
    }
}

//  SCROLL TRIGGER ANIMATIONS 
function initScrollTriggerAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('animate-on-scroll')) {
                    entry.target.classList.add('animated');
                }
                // Animate teacher card and student cards
                if (entry.target.classList.contains('teacher-card-modern')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
                if (entry.target.classList.contains('student-card-creative')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
                // Animate teacher showcase section
                if (entry.target.classList.contains('teacher-showcase')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
                // Animate students showcase section
                if (entry.target.classList.contains('students-showcase')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .teacher-card-modern, .student-card-creative, .teacher-showcase, .students-showcase');
    animatedElements.forEach(el => observer.observe(el));
}

//SCROLL ANIMATIONS 
function initScrollAnimations() {
    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.25)';
            navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.15)';
            navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.15)';
        }
    });
}

//  MOBILE MENU
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!hamburger || !navMenu) return;
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// SMOOTH SCROLLING 
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll Indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const nextSection = document.querySelector('#about');
            if (nextSection) {
                const offsetTop = nextSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
}

//  PARALLAX EFFECT 
function initParallaxEffect() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const homeBackground = document.querySelector('.home-background');
        if (homeBackground && scrolled < window.innerHeight) {
            homeBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

//  PHOTO SCROLL - IMPROVED 
function initPhotoScroll() {
    const photoScroll = document.getElementById('photoScroll');
    if (!photoScroll) return;

    // Get all original photo items
    const photoItems = Array.from(photoScroll.querySelectorAll('.photo-item'));
    const totalItems = photoItems.length;

    // Clone items to create seamless infinite loop
    for (let i = 0; i < totalItems; i++) {
        const clone = photoItems[i].cloneNode(true);
        photoScroll.appendChild(clone);
    }

    // Animasi terus berjalan tanpa pause
    // Tidak ada event listener untuk pause/resume
}

//  CONTACT FORM 
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('#name').value;
            const email = this.querySelector('#email').value;
            const message = this.querySelector('#message').value;
            
            if (name && email && message) {
                showNotification('Terima kasih! Pesan Anda telah terkirim. Kami akan segera merespons.', 'success');
                this.reset();
            } else {
                showNotification('Mohon lengkapi semua field.', 'error');
            }
        });
    }
}

//  NOTIFICATION SYSTEM 
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        padding: '15px 25px',
        backgroundColor: type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3',
        color: 'white',
        borderRadius: '10px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
        zIndex: '9999',
        opacity: '0',
        transform: 'translateX(400px)',
        transition: 'all 0.3s ease',
        maxWidth: '300px',
        fontSize: '0.95rem',
        fontWeight: '500'
    });
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function initCardAnimations() {
    // Student cards hover effect
    const studentCards = document.querySelectorAll('.student-card-creative');
    studentCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });

    // Button ripple effect
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

//  ACTIVE NAV LINK 
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

//  LOADING ANIMATION 
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

//  CONSOLE MESSAGE 
console.log('%cðŸŽ" Class 9D SMPN 23 Semarang', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cBersama Kita Tumbuh, Bersama Kita Berprestasi!', 'color: #764ba2; font-size: 14px;');