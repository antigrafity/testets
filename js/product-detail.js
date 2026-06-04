// ===========================
// PRODUCT DETAIL PAGE JAVASCRIPT
// ===========================

// Sample Products Data (same as products.js)
const productsData = [
    {
        id: 1,
        name: 'ECHO-Lite',
        category: 'communication',
        description: 'Compact short-range cellular signal management device for authorized, controlled environments.',
        fullDescription: 'ECHO-Lite is a mobile signal management solution designed to support close-range cellular control in authorized and controlled environments. The system enables localized signal regulation through a compact and straightforward operational design, supporting rapid deployment and direct user control. Engineered for short-range applications, ECHO-Lite emphasizes focused operation, calibrated output power, and ease of use — making it suitable for environments requiring temporary and compliant communication management.',
        image: '../assets/images/ECHO.png',
        images: ['../assets/images/ECHO.png'],
        price: 'Request Quote',
        features: [
            'Close-range cellular signal control',
            'Compact, portable form factor',
            'Rapid deployment and direct user control',
            'Calibrated output power',
            'Localized signal regulation',
            'Designed for controlled environments'
        ],
        specifications: {
            'Category': 'Secure Communication Management',
            'Type': 'Compact communication device',
            'Operating Range': 'Short range',
            'Output Power': 'Calibrated',
            'Use Case': 'Authorized / controlled environments',
            'Deployment': 'Rapid, direct control'
        }
    },
    {
        id: 2,
        name: 'SENTRA-One',
        category: 'communication',
        description: 'Ultra-lightweight cellular signal analysis workstation for field network monitoring.',
        fullDescription: 'SENTRA-One is an ultra-lightweight cellular signal analysis device engineered for network monitoring in field conditions. The system incorporates a single narrow-band receiver, fixed internal antenna, and a compact battery-powered design that supports 15–20 minutes of continuous operation. With no remote control, no tracking capability, and no automation, the unit operates solely as a manual signal observation tool, offering streamlined network diagnostics in a rugged and portable form factor.',
        image: '../assets/images/SENTRA.png',
        images: ['../assets/images/SENTRA.png'],
        price: 'Request Quote',
        features: [
            'Single narrow-band receiver',
            'Fixed internal antenna',
            'Battery-powered, 15–20 min continuous operation',
            'Manual signal observation only',
            'No tracking, interception, or automation',
            'Rugged, portable form factor'
        ],
        specifications: {
            'Category': 'Mobile Network Monitoring',
            'Type': 'Signal scanning workstation',
            'Receiver': 'Single narrow band',
            'Antenna': 'Fixed internal',
            'Battery Life': '15–20 minutes',
            'Automation': 'None (manual operation)'
        }
    },
    {
        id: 3,
        name: 'SINGULARITY GRID',
        category: 'analytics',
        description: 'Integrated digital forensics platform covering the complete investigation lifecycle.',
        fullDescription: 'SINGULARITY GRID is an integrated data analysis platform that supports workflows from data collection to final reporting, covering computer, mobile, database, and video datasets. The system includes data processing and restoration capabilities. All data is securely stored to ensure integrity, while results are consolidated into a centralized analytics dashboard that enables data correlation, activity monitoring, and streamlined reporting.',
        image: '../assets/images/GRID.png',
        images: ['../assets/images/GRID.png'],
        price: 'Request Quote',
        features: [
            'End-to-end investigation lifecycle support',
            'Computer, mobile, database & video datasets',
            'Data processing and restoration',
            'Secure storage for data integrity',
            'Centralized analytics dashboard',
            'Data correlation and activity monitoring'
        ],
        specifications: {
            'Category': 'Digital Data Evidence & Analytics',
            'Type': 'Digital forensics workstation',
            'Data Sources': 'Computer, mobile, database, video',
            'Capabilities': 'Processing & restoration',
            'Storage': 'Secure, integrity-assured',
            'Output': 'Centralized dashboard & reporting'
        }
    },
    {
        id: 4,
        name: 'CHRONOLENS',
        category: 'analytics',
        description: 'AI-powered data intelligence platform for large-scale collection, analysis, and insight.',
        fullDescription: 'CHRONOLENS is an advanced data analytics platform that collects and processes information from multiple sources to deliver clear, aggregated demographic and trend insights. It supports pattern recognition, audience segmentation, and broad data analysis, enabling organizations to make informed strategic decisions and execute plans with confidence, while emphasizing responsible and compliant data use.',
        image: '../assets/images/CHRONOLENS.png',
        images: ['../assets/images/CHRONOLENS.png'],
        price: 'Request Quote',
        features: [
            'Multi-source data collection',
            'Aggregated demographic & trend insights',
            'Pattern recognition',
            'Audience segmentation',
            'AI-powered large-scale analysis',
            'Responsible and compliant data use'
        ],
        specifications: {
            'Category': 'Digital Data Evidence & Analytics',
            'Type': 'Data intelligence platform',
            'Data Sources': 'Multiple',
            'Analysis': 'Demographic & trend insights',
            'Intelligence': 'AI-powered',
            'Scale': 'Large-scale'
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
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='../assets/images/placeholder.svg'">
            <div class="product-info">
                <span class="product-category">${capitalizeCategory(product.category)}</span>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <a href="./product-detail.html?id=${product.id}" class="btn btn-primary">View Details</a>
            </div>
        `;
        relatedProductsGrid.appendChild(card);
    });
}

// Capitalize Category
function capitalizeCategory(category) {
    return category.charAt(0).toUpperCase() + category.slice(1);
}

// Export for use in other scripts
window.productsData = productsData;
window.findProduct = findProduct;
