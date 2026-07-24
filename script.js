/* ==========================================================
   CHONGQING DESIGN STUDIO - GLOBAL JAVASCRIPT
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    document.addEventListener('click', function (e) {
        const target = e.target.closest('button, a, .glass-card');
        if (target) {
            const rect = target.getBoundingClientRect();
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px';
            ripple.style.left = (e.clientX - rect.left - rect.width / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - rect.height / 2) + 'px';
            target.style.position = 'relative';
            target.style.overflow = 'hidden';
            target.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        }
    });
});

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.add('hidden');
    }
}
