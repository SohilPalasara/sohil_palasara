document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('[data-nav-link]');
    const contentSections = document.querySelectorAll('.content-section');

    // Section Switching Logic
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const targetSectionId = link.getAttribute('data-nav-link');

            // Update active link
            navLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');

            // Update active section
            contentSections.forEach(section => {
                if (section.id === targetSectionId) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });

            // Scroll to top of main content on mobile
            if (window.innerWidth <= 1024) {
                window.scrollTo({
                    top: document.querySelector('.main-content').offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form Submission (Simulated)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = '<i class="fa-solid fa-check"></i> Sent Successfully!';
                btn.style.borderColor = '#4caf50';
                btn.style.color = '#4caf50';
                contactForm.reset();

                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    btn.style.borderColor = '';
                    btn.style.color = '';
                }, 3000);
            }, 1500);
        });
    }

    // Scroll Animations (Simple Reveal)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-item, .project-card, .timeline-item').forEach(el => {
        observer.observe(el);
    });
});
