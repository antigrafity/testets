// ===========================
// PRODUCTS PAGE JAVASCRIPT
// ===========================

// Debounce Function (defined first)
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

// Sample Products Data
const productsData = [
    {
        id: 1,
        name: 'ZENITH PRO',
        category: 'advance-presence-situation-monitoring',
        description: 'A frequency awareness system designed to provide clear visibility into wireless signal activity within a defined area.',
        image: '../assets/images/products/ZENITH-PRO.jpg',
        price: 'Request Quote',
        collaboration: 'Corspire'
    },
    {
        id: 2,
        name: 'AERO DEFENSOR',
        category: 'advance-presence-situation-monitoring',
        description: 'An aerial awareness system that helps monitor low-altitude drone activity with early visibility and real-time tracking.',
        image: '../assets/images/products/AERO-DEFENSOR.jpg',
        price: 'Request Quote',
        collaboration: 'Corspire'
    },
    {
        id: 3,
        name: 'NANO TRACER',
        category: 'advance-presence-situation-monitoring',
        description: 'A handheld device designed to identify hidden electronic components inside walls, furniture, or enclosed spaces.',
        image: '../assets/images/products/NANO-TRACER.jpg',
        price: 'Request Quote',
        collaboration: 'Corspire'
    },
    {
        id: 4,
        name: 'SPECTRALYNK',
        category: 'advance-presence-situation-monitoring',
        description: 'A portable platform that provides clear, real-time visibility into wireless signal activity and RF environment analysis.',
        image: '../assets/images/products/SPECTRALYNK.jpg',
        price: 'Request Quote',
        collaboration: 'Corspire'
    },
    {
        id: 5,
        name: 'FLUX INSIGHT',
        category: 'advance-presence-situation-monitoring',
        description: 'A compact system that helps monitor and understand Wi-Fi activity within a defined area with clear visibility into connected devices.',
        image: '../assets/images/products/FLUX-INSIGHT.jpg',
        price: 'Request Quote',
        collaboration: 'Corspire'
    }
];

// Pagination Settings
const itemsPerPage = 6;
let currentPage = 1;
let filteredProducts = [...productsData];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const productsGrid = document.getElementById('productsGrid');
const emptyState = document.getElementById('emptyState');
const pagination = document.getElementById('pagination');
const resultsCount = document.getElementById('resultsCount');
const totalCount = document.getElementById('totalCount');
const resetFiltersBtn = document.getElementById('resetFilters');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    applyCategoryFromURL();
    displayProducts();
    setupEventListeners();
});

// Apply filter from URL if present
function applyCategoryFromURL() {
    const params = new URLSearchParams(window.location.search);
    const filter = params.get('category');
    if (filter && categoryFilter) {
        const slug = filter.toLowerCase().replace(/\s+/g, '-');
        const valid = ['advance-presence-situation-monitoring'];
        if (valid.includes(slug)) {
            categoryFilter.value = slug;
            filteredProducts = productsData.filter(p => p.category === slug);
            currentPage = 1;
        }
    }
}

// Setup Event Listeners
function setupEventListeners() {
    searchInput.addEventListener('input', debounceSearch);
    categoryFilter.addEventListener('change', filterProducts);
    resetFiltersBtn.addEventListener('click', resetFilters);
}

// Debounced Search
const debounceSearch = debounce(() => {
    currentPage = 1;
    filterProducts();
}, 300);

// Filter Products — filter by category
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value; // e.g. 'connectivity-module'

    filteredProducts = productsData.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                            product.description.toLowerCase().includes(searchTerm);
        const matchesFilter = !selectedCategory || product.category === selectedCategory;
        return matchesSearch && matchesFilter;
    });

    currentPage = 1;
    displayProducts();
}

// Display Products
function displayProducts() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    // Update results counter
    resultsCount.textContent = filteredProducts.length;
    totalCount.textContent = productsData.length;

    // Clear grid
    productsGrid.innerHTML = '';

    if (paginatedProducts.length === 0) {
        emptyState.style.display = 'block';
        pagination.innerHTML = '';
        return;
    }

    emptyState.style.display = 'none';

    // Display products
    paginatedProducts.forEach((product, index) => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);

        // Trigger animation
        setTimeout(() => {
            productCard.classList.add('visible');
        }, index * 100);
    });

    // Display pagination
    displayPagination();
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card fade-in-scroll';
    const collabBadge = product.collaboration
        ? `<span class="collab-badge">In collaboration with ${product.collaboration}</span>`
        : '';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='../assets/images/placeholder.svg'">
        <div class="product-info">
            <span class="product-category">${capitalizeCategory(product.category)}</span>
            <h3>${product.name}</h3>
            ${collabBadge}
            <p>${product.description}</p>
            <a href="./product-detail.html?id=${product.id}" class="btn btn-primary">View Details</a>
        </div>
    `;

    card.addEventListener('click', () => {
        window.location.href = `./product-detail.html?id=${product.id}`;
    });

    return card;
}

// Display Pagination
function displayPagination() {
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }

    pagination.innerHTML = '';

    // Previous Button
    const prevBtn = document.createElement('button');
    prevBtn.textContent = 'Previous';
    prevBtn.disabled = currentPage === 1;
    prevBtn.className = currentPage === 1 ? 'disabled' : '';
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayProducts();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    pagination.appendChild(prevBtn);

    // Page Numbers
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('a');
        pageBtn.textContent = i;
        pageBtn.className = i === currentPage ? 'active' : '';
        pageBtn.addEventListener('click', () => {
            currentPage = i;
            displayProducts();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        pagination.appendChild(pageBtn);
    }

    // Next Button
    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.className = currentPage === totalPages ? 'disabled' : '';
    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayProducts();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    pagination.appendChild(nextBtn);
}

// Reset Filters
function resetFilters() {
    searchInput.value = '';
    categoryFilter.value = '';
    currentPage = 1;
    filteredProducts = [...productsData];
    displayProducts();
}

// Capitalize Category
function capitalizeCategory(category) {
    const names = {
        'advance-presence-situation-monitoring': 'Advance Presence & Situation Monitoring'
    };
    if (names[category]) return names[category];
    return category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Export for use in other scripts
window.productsData = productsData;
window.filterProducts = filterProducts;
window.resetFilters = resetFilters;
