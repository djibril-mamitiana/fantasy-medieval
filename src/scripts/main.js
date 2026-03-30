// Script pour les animations et interactions avancées
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll pour les liens de navigation
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

    // Animation au scroll avec Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observer les éléments avec animation
    document.querySelectorAll('.card-medieval').forEach(el => {
        observer.observe(el);
    });

    // Effet parallaxe sur le hero
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('#accueil');
        if (parallax) {
            parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Animation des particules flottantes
    function createFloatingParticle() {
        const particle = document.createElement('div');
        particle.className = 'absolute w-2 h-2 bg-gold/20 rounded-full animate-float';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        const container = document.querySelector('#accueil .absolute.inset-0');
        if (container) {
            container.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 5000);
        }
    }

    // Créer des particules périodiquement
    setInterval(createFloatingParticle, 2000);

    // Effet de glow au survol des cartes
    document.querySelectorAll('.card-medieval').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });

    // Animation du texte hero au chargement
    const heroTitle = document.querySelector('.text-hero');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            heroTitle.style.transition = 'all 1s ease-out';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 300);
    }

    // Navigation active au scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-gold');
            link.classList.add('text-parchment');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.remove('text-parchment');
                link.classList.add('text-gold');
            }
        });
    });

    // Validation du formulaire de contact
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Animation de soumission
            const submitBtn = this.querySelector('button[type="submit"]');
            submitBtn.textContent = 'Envoi en cours...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.textContent = 'Message envoyé!';
                submitBtn.classList.add('bg-green-600');
                
                setTimeout(() => {
                    submitBtn.textContent = 'Envoyer le Parchemin';
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('bg-green-600');
                    this.reset();
                }, 2000);
            }, 1500);
        });
    }

    // Effet de machine à écrire pour le titre hero
    const heroText = document.querySelector('#accueil p');
    if (heroText) {
        const text = heroText.textContent;
        heroText.textContent = '';
        let index = 0;
        
        function typeWriter() {
            if (index < text.length) {
                heroText.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 50);
            }
        }
        
        setTimeout(typeWriter, 1000);
    }
});
