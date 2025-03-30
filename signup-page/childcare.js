document.addEventListener('DOMContentLoaded', () => {
    // Sample data - in a real application, this would come from a backend
    const sampleProviders = [
        {
            name: "Sunshine Daycare Center",
            rating: 4.8,
            price: "$250/week",
            image: "/api/placeholder/400/200",
            tags: ["Licensed", "Meals Included"],
            type: "daycare",
            ageGroups: ["infant", "toddler"],
            priceRange: "medium"
        },
        {
            name: "Little Learners Preschool",
            rating: 4.9,
            price: "$180/week",
            image: "/api/placeholder/400/200",
            tags: ["Certified Teachers", "Educational Program"],
            type: "preschool",
            ageGroups: ["preschool"],
            priceRange: "low"
        },
        {
            name: "Home Sweet Home Childcare",
            rating: 4.7,
            price: "$300/week",
            image: "/api/placeholder/400/200",
            tags: ["Small Groups", "Flexible Hours"],
            type: "home",
            ageGroups: ["toddler", "preschool"],
            priceRange: "medium"
        }
    ];

    function renderProviders(providers) {
        const resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = '';

        providers.forEach(provider => {
            const card = document.createElement('div');
            card.className = 'childcare-card';
            card.innerHTML = `
                <img src="${provider.image}" alt="${provider.name}" class="childcare-image">
                <div class="childcare-details">
                    <h3 class="childcare-name">${provider.name}</h3>
                    <div class="rating">★ ${provider.rating}</div>
                    <div class="price">${provider.price}</div>
                    <div class="tags">
                        ${provider.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <a href="#" class="contact-btn">Contact Provider</a>
                </div>
            `;
            resultsContainer.appendChild(card);
        });
    }

    // Initial render
    renderProviders(sampleProviders);

    // Filter functionality
    const filterResults = () => {
        const priceRange = document.getElementById('price-range').value;
        const ageRange = document.getElementById('age-range').value;
        const serviceType = document.getElementById('service-type').value;

        let filtered = sampleProviders;

        if (priceRange) {
            filtered = filtered.filter(provider => provider.priceRange === priceRange);
        }
        if (ageRange) {
            filtered = filtered.filter(provider => provider.ageGroups.includes(ageRange));
        }
        if (serviceType) {
            filtered = filtered.filter(provider => provider.type === serviceType);
        }

        renderProviders(filtered);
    };

    // Add event listeners to filters
    document.getElementById('price-range').addEventListener('change', filterResults);
    document.getElementById('age-range').addEventListener('change', filterResults);
    document.getElementById('service-type').addEventListener('change', filterResults);

    // Search button click handler
    document.getElementById('search-btn').addEventListener('click', () => {
        const location = document.getElementById('location').value;
        // In a real application, this would trigger an API call to search by location
        alert(`Searching for providers near ${location}`);
        filterResults();
    });
});