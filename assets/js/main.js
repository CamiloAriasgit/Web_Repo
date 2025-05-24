document.addEventListener('DOMContentLoaded', function() {
    // --- Funcionalidad del Menú Hamburguesa ---
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('responsive'); // Esta clase maneja el display y la dirección flex
            navMenu.classList.toggle('show');      // Esta clase maneja la transición de translateY
        });

        // Ocultar el menú responsive al hacer clic en un enlace (para mejor UX)
        document.querySelectorAll('.nav-menu a').forEach(item => {
            item.addEventListener('click', () => {
                if (navMenu.classList.contains('show')) {
                    navMenu.classList.remove('show');
                    navMenu.classList.remove('responsive'); // Asegura que la clase 'responsive' también se elimine
                    hamburger.classList.remove('active');
                }
            });
        });
    }

    // --- Animaciones Fade-in en Hero Section (para la carga inicial) ---
    const heroElements = document.querySelectorAll('.hero-home .fade-in-up');
    heroElements.forEach(el => {
        el.classList.add('active'); // Activa las animaciones al cargar la página
    });

    // --- Animaciones al hacer scroll (para secciones) ---
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Porcentaje del elemento que debe estar visible para activar
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target); // Deja de observar una vez que se activa
            }
        });
    }, observerOptions);

    animateOnScrollElements.forEach(el => {
        observer.observe(el);
    });
});