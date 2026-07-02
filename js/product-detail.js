// ===========================
// PRODUCT DETAIL PAGE JAVASCRIPT
// ===========================

// Sample Products Data (same as products.js)
const productsData = [
    {
        id: 1,
        name: 'ECHO-Lite',
        category: 'connectivity-module',
        description: 'Compact connectivity support module for product demos, lab testing, and temporary workspace setups.',
        fullDescription: 'ECHO-Lite is a compact connectivity support module designed for short-range product demos, lab testing, and temporary workspace setups. The product focuses on simple setup, clear controls, and dependable operation in everyday technical environments. Its portable form factor helps teams review connectivity behavior, validate product flows, and keep testing sessions organized without adding unnecessary complexity.',
        image: '../assets/images/ECHO.png',
        images: ['../assets/images/ECHO.png'],
        price: 'Request Quote',
        features: [
            'Short-range connectivity support',
            'Compact, portable form factor',
            'Simple setup and direct controls',
            'Useful for product demos and lab testing',
            'Clear status review',
            'Designed for everyday technical workflows'
        ],
        specifications: {
            'Category': 'Connectivity Module',
            'Type': 'Compact support module',
            'Operating Range': 'Short range',
            'Use Case': 'Product demos and lab testing',
            'Setup': 'Portable, direct control',
            'Workflow': 'Manual review'
        }
    },
    {
        id: 2,
        name: 'SENTRA-One',
        category: 'connectivity-module',
        description: 'Portable diagnostics workstation for reviewing device connectivity and basic network conditions.',
        fullDescription: 'SENTRA-One is a portable diagnostics workstation created for teams that need a simple way to review device connectivity and basic network conditions. The product keeps the workflow manual, focused, and easy to understand, with a lightweight form factor that supports short review sessions. SENTRA-One is built for practical diagnostics, product validation, and everyday technical checks.',
        image: '../assets/images/SENTRA.png',
        images: ['../assets/images/SENTRA.png'],
        price: 'Request Quote',
        features: [
            'Manual diagnostics workflow',
            'Compact portable design',
            'Battery-powered, 15-20 min continuous operation',
            'Basic connectivity review',
            'No automation or remote operation',
            'Lightweight form factor'
        ],
        specifications: {
            'Category': 'Connectivity Module',
            'Type': 'Portable diagnostics workstation',
            'Workflow': 'Manual review',
            'Design': 'Compact internal hardware',
            'Battery Life': '15–20 minutes',
            'Automation': 'None (manual operation)'
        }
    },
    {
        id: 3,
        name: 'ZENITH PRO',
        category: 'connectivity-module',
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
            'Category': 'Connectivity Module',
            'Type': 'Frequency awareness system',
            'Monitoring': 'Wireless signal activity',
            'Alerts': 'Real-time notifications',
            'Coverage': 'Defined area',
            'Collaboration': 'Corspire'
        }
    },
    {
        id: 4,
        name: 'AERO DEFENSOR',
        category: 'connectivity-module',
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
            'Category': 'Connectivity Module',
            'Type': 'Aerial awareness system',
            'Monitoring': 'Low-altitude drone activity',
            'Tracking': 'Real-time',
            'Platform': 'Centralized',
            'Collaboration': 'Corspire'
        }
    },
    {
        id: 5,
        name: 'NANO TRACER',
        category: 'connectivity-module',
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
            'Category': 'Connectivity Module',
            'Type': 'Handheld detection device',
            'Detection': 'Hidden electronic components',
            'Capability': 'Detects powered-off devices',
            'Scanning': 'Non-intrusive',
            'Collaboration': 'Corspire'
        }
    },
    {
        id: 6,
        name: 'SPECTRALYNK',
        category: 'connectivity-module',
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
            'Category': 'Connectivity Module',
            'Type': 'Portable RF analysis platform',
            'Visibility': 'Real-time signal activity',
            'Analysis': 'RF environment',
            'Detection': 'Interference identification',
            'Collaboration': 'Corspire'
        }
    },
    {
        id: 7,
        name: 'FLUX INSIGHT',
        category: 'connectivity-module',
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
            'Category': 'Connectivity Module',
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
    return category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Export for use in other scripts
window.productsData = productsData;
window.findProduct = findProduct;
