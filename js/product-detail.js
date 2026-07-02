// ===========================
// PRODUCT DETAIL PAGE JAVASCRIPT
// ===========================

// Sample Products Data (same as products.js)
const productsData = [
    {
        id: 1,
        name: 'ZENITH PRO',
        category: 'advance-presence-situation-monitoring',
        collaboration: 'Corspire',
        description: 'A frequency awareness system designed to provide clear visibility into wireless signal activity within a defined area.',
        fullDescription: 'ZENITH PRO is a frequency awareness system designed to provide clear visibility into wireless signal activity within a defined area. The system supports structured observation through configurable identifier lists, real-time notifications, and controlled information delivery, helping organizations understand changes in the surrounding signal environment and maintain coordinated, well-informed responses while minimizing impact on normal communications.',
        image: '../assets/images/products/ZENITH-PRO.jpg',
        images: ['../assets/images/products/ZENITH-PRO.jpg'],
        price: 'Request Quote',
        features: [
            'Configurable identifier lists for structured observation',
            'Real-time notifications and alerts',
            'Controlled information delivery',
            'Signal environment monitoring',
            'Minimal impact on normal communications'
        ],
        specifications: {
            'Category': 'Advance Presence & Situation Monitoring',
            'Type': 'Frequency awareness system',
            'Monitoring': 'Wireless signal activity',
            'Alerts': 'Real-time notifications',
            'Coverage': 'Defined area',
            'Collaboration': 'Corspire'
        }
    },
    {
        id: 2,
        name: 'AERO DEFENSOR',
        category: 'advance-presence-situation-monitoring',
        collaboration: 'Corspire',
        description: 'An aerial awareness system that helps monitor low-altitude drone activity with early visibility and real-time tracking.',
        fullDescription: 'Aero Defensor is an aerial awareness system that helps monitor low-altitude drone activity within a defined area. It provides early visibility and real-time tracking through a centralized platform, making it suitable for complex and high-visibility environments.',
        image: '../assets/images/products/AERO-DEFENSOR.jpg',
        images: ['../assets/images/products/AERO-DEFENSOR.jpg'],
        price: 'Request Quote',
        features: [
            'Aerial awareness and monitoring',
            'Low-altitude drone tracking',
            'Early visibility alerts',
            'Centralized platform',
            'Real-time tracking capability'
        ],
        specifications: {
            'Category': 'Advance Presence & Situation Monitoring',
            'Type': 'Aerial awareness system',
            'Monitoring': 'Low-altitude drone activity',
            'Tracking': 'Real-time',
            'Platform': 'Centralized',
            'Collaboration': 'Corspire'
        }
    },
    {
        id: 3,
        name: 'NANO TRACER',
        category: 'advance-presence-situation-monitoring',
        collaboration: 'Corspire',
        description: 'A handheld device designed to identify hidden electronic components inside walls, furniture, or enclosed spaces.',
        fullDescription: 'Nano Tracer is a handheld device designed to identify hidden electronic components inside walls, furniture, or enclosed spaces. Using advanced detection technology, it reveals the presence of electronic elements even when powered off, helping maintain controlled and trusted environments without physical intrusion.',
        image: '../assets/images/products/NANO-TRACER.jpg',
        images: ['../assets/images/products/NANO-TRACER.jpg'],
        price: 'Request Quote',
        features: [
            'Handheld portable design',
            'Hidden electronics detection',
            'Detects powered-off devices',
            'Non-intrusive scanning'
        ],
        specifications: {
            'Category': 'Advance Presence & Situation Monitoring',
            'Type': 'Handheld detection device',
            'Detection': 'Hidden electronic components',
            'Capability': 'Detects powered-off devices',
            'Scanning': 'Non-intrusive',
            'Collaboration': 'Corspire'
        }
    },
    {
        id: 4,
        name: 'SPECTRALYNK',
        category: 'advance-presence-situation-monitoring',
        collaboration: 'Corspire',
        description: 'A portable platform that provides clear, real-time visibility into wireless signal activity and RF environment analysis.',
        fullDescription: 'Spectralynk is a portable platform that provides clear, real-time visibility into wireless signal activity. It helps organizations understand their RF environment, identify interference, and review signal conditions through simple visual analysis tools.',
        image: '../assets/images/products/SPECTRALYNK.jpg',
        images: ['../assets/images/products/SPECTRALYNK.jpg'],
        price: 'Request Quote',
        features: [
            'Portable platform design',
            'Real-time signal visibility',
            'RF environment analysis',
            'Interference identification'
        ],
        specifications: {
            'Category': 'Advance Presence & Situation Monitoring',
            'Type': 'Portable RF analysis platform',
            'Visibility': 'Real-time signal activity',
            'Analysis': 'RF environment',
            'Detection': 'Interference identification',
            'Collaboration': 'Corspire'
        }
    },
    {
        id: 5,
        name: 'FLUX INSIGHT',
        category: 'advance-presence-situation-monitoring',
        collaboration: 'Corspire',
        description: 'A compact system that helps monitor and understand Wi-Fi activity within a defined area with clear visibility into connected devices.',
        fullDescription: 'Flux Insight is a compact system that helps monitor and understand Wi-Fi activity within a defined area. It provides clear visibility into connected devices and network conditions, supporting better awareness and management of wireless environments.',
        image: '../assets/images/products/FLUX-INSIGHT.jpg',
        images: ['../assets/images/products/FLUX-INSIGHT.jpg'],
        price: 'Request Quote',
        features: [
            'Compact system design',
            'Wi-Fi activity monitoring',
            'Connected device visibility',
            'Network condition analysis'
        ],
        specifications: {
            'Category': 'Advance Presence & Situation Monitoring',
            'Type': 'Compact Wi-Fi monitoring system',
            'Monitoring': 'Wi-Fi activity',
            'Visibility': 'Connected devices',
            'Analysis': 'Network conditions',
            'Collaboration': 'Corspire'
        }
    }
];

// Get Product ID from URL
function getProductIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id')) || 1;
}

// Find Product by ID
function findProduct(id) {
    return productsData.find(product => product.id === id);
}

// Initialize Product Detail Page
document.addEventListener('DOMContentLoaded', () => {
    const productId = getProductIdFromURL();
    const product = findProduct(productId);

    if (product) {
        displayProductDetail(product);
        displayRelatedProducts(product);
    } else {
        window.location.href = './products.html';
    }
});

// Display Product Detail
function displayProductDetail(product) {
    // Update page title
    document.title = `${product.name} - Dronixsys`;

    // Update breadcrumb and title
    document.getElementById('productTitle').textContent = product.name;
    document.getElementById('productBreadcrumb').textContent = product.name;

    // Update main image
    const mainImage = document.getElementById('mainImage');
    mainImage.src = product.image;
    mainImage.alt = product.name;

    // Update image gallery
    const imageGallery = document.getElementById('imageGallery');
    imageGallery.innerHTML = '';
    
    product.images.forEach((img, index) => {
        const thumb = document.createElement('div');
        thumb.className = `gallery-thumb ${index === 0 ? 'active' : ''}`;
        thumb.innerHTML = `<img src="${img}" alt="Product image ${index + 1}">`;
        thumb.addEventListener('click', () => {
            mainImage.src = img;
            document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
        imageGallery.appendChild(thumb);
    });

    // Update product info
    document.getElementById('detailProductTitle').textContent = product.name;
    document.getElementById('categoryBadge').textContent = capitalizeCategory(product.category);
    document.getElementById('productDescription').textContent = product.fullDescription;

    // Show collaboration note if present
    const titleEl = document.getElementById('detailProductTitle');
    const existingCollab = document.getElementById('collabNote');
    if (existingCollab) existingCollab.remove();
    if (product.collaboration) {
        const collab = document.createElement('div');
        collab.id = 'collabNote';
        collab.className = 'collab-badge collab-badge-detail';
        collab.textContent = `In collaboration with ${product.collaboration}`;
        titleEl.insertAdjacentElement('afterend', collab);
    }
    
    // Update price if element exists
    const priceElement = document.getElementById('productPrice');
    if (priceElement) {
        priceElement.textContent = product.price;
    }

    // Update features
    const featuresList = document.getElementById('featuresList');
    featuresList.innerHTML = '';
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });

    // Update specifications
    const specsList = document.getElementById('specsList');
    specsList.innerHTML = '';
    Object.entries(product.specifications).forEach(([key, value]) => {
        const specItem = document.createElement('div');
        specItem.className = 'spec-item';
        specItem.innerHTML = `
            <span class="spec-label">${key}</span>
            <span class="spec-value">${value}</span>
        `;
        specsList.appendChild(specItem);
    });
}

// Display Related Products
function displayRelatedProducts(currentProduct) {
    const relatedProducts = productsData
        .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
        .slice(0, 4);

    const relatedProductsGrid = document.getElementById('relatedProducts');
    const relatedSection = document.querySelector('.related-products');
    relatedProductsGrid.innerHTML = '';

    // Hide the whole section if there are no related products
    if (relatedProducts.length === 0) {
        if (relatedSection) relatedSection.style.display = 'none';
        return;
    }
    if (relatedSection) relatedSection.style.display = '';

    relatedProducts.forEach((product) => {
        const card = document.createElement('div');
        card.className = 'product-card';
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
        relatedProductsGrid.appendChild(card);
    });
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
window.findProduct = findProduct;
