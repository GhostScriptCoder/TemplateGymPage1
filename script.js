document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle functionality
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile drawer when clicking any link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            });
        });
    }

    // 2. Navbar Scroll Effect (Adds slight transparency change on scroll)
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(11, 15, 25, 0.98)';
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        } else {
            navbar.style.backgroundColor = 'rgba(11, 15, 25, 0.9)';
            navbar.style.boxShadow = 'none';
        }
    });

    // 3. Trial Booking Form Handler
    const trialForm = document.getElementById('trial-form');
    const successMsg = document.getElementById('success-msg');

    if (trialForm) {
        trialForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('name').value.trim();
            const phoneInput = document.getElementById('phone').value.trim();

            if (nameInput && phoneInput) {
                // Hide form inputs/button or show success box
                trialForm.reset();
                successMsg.classList.remove('hidden');

                // Auto-hide success message after 6 seconds
                setTimeout(() => {
                    successMsg.classList.add('hidden');
                }, 6000);
            }
        });
    }
});
