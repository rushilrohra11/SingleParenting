const createShapes = () => {
    const shapes = document.querySelector('.floating-shapes');
    const numberOfShapes = 5;

    for (let i = 0; i < numberOfShapes; i++) {
        const shape = document.createElement('div');
        shape.classList.add('shape');
        
        // Random size between 50px and 200px
        const size = Math.random() * 150 + 50;
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        
        // Random position
        shape.style.left = `${Math.random() * 100}%`;
        shape.style.top = `${Math.random() * 100}%`;
        
        // Random animation delay
        shape.style.animationDelay = `${Math.random() * 20}s`;
        
        shapes.appendChild(shape);
    }
};

// Animate feature cards on scroll
const observeFeatures = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeInUp 0.8s ease ${index * 0.2}s forwards`;
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createShapes();
    observeFeatures();
});

document.addEventListener('DOMContentLoaded', () => {
    // Previous initialization code remains the same
    createShapes();
    observeFeatures();

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing! We'll send updates to ${email}`);
            e.target.reset();
        });
    }

    // Animate sections on scroll
    const observeSections = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.testimonial-card, .event-card, .resource-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            observer.observe(card);
        });
    };

    observeSections();
});