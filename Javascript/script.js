// Nav toggle — vanilla JS (no jQuery)
(function() {
    var navBtn = document.querySelector('.navbutton a');
    var overlay = document.querySelector('.overlay');

    if (navBtn && overlay) {
        navBtn.addEventListener('click', function(e) {
            e.preventDefault();
            overlay.classList.toggle('active');
            this.classList.toggle('navbtn-open');
            this.classList.toggle('navbtn-close');
        });

        overlay.addEventListener('click', function() {
            overlay.classList.remove('active');
            navBtn.classList.add('navbtn-open');
            navBtn.classList.remove('navbtn-close');
        });
    }
})();

// Scroll reveal — Intersection Observer (no libraries)
(function() {
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(function(el) {
        observer.observe(el);
    });
})();
