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
    },
    {
        id: 6,
        name: 'NOVAIR MESSAGE',
        category: 'communications-information-system',
        collaboration: 'Primaveil',
        description: 'A location-based communication platform for large-scale delivery of text, image, and video content across predefined geographic areas.',
        fullDescription: 'NOVAIR Message Dissemination is a location-based communication platform designed to support large-scale message delivery across predefined geographic areas. The platform enables organizations to distribute text, image, and video content in a structured and controlled manner, making it suitable for operational coordination, public information dissemination, and time-sensitive notifications. The system provides comprehensive tools for managing message distribution zones, scheduling content delivery, and tracking message reach and engagement.',
        image: '../assets/images/products/NOVAIR-MESSAGE.jpg',
        images: ['../assets/images/products/NOVAIR-MESSAGE.jpg'],
        price: 'Request Quote',
        features: [
            'Location-based message delivery',
            'Text, image, and video content',
            'Message distribution zone management',
            'Content delivery scheduling',
            'Reach and engagement tracking',
            'Reliable and scalable operation'
        ],
        specifications: {
            'Category': 'Communications & Information System',
            'Type': 'Location-based communication platform',
            'Content': 'Text, image, video',
            'Coverage': 'Predefined geographic areas',
            'Use Case': 'Operational coordination & notifications',
            'Collaboration': 'Primaveil'
        }
    },
    {
        id: 7,
        name: 'NOVAIR REACH',
        category: 'communications-information-system',
        collaboration: 'Primaveil',
        description: 'A region-based WhatsApp communication platform for organizational outreach within defined geographic areas.',
        fullDescription: 'NOVAIR Reach is a region-based WhatsApp communication platform designed to support organizational outreach within defined geographic areas. It enables the delivery of text, image, and video messages for purposes such as notifications, announcements, and coordinated communications. The platform provides tools for regional segmentation, account management, and communication consistency, letting organizations manage messaging campaigns across different regions with centralized control.',
        image: '../assets/images/products/NOVAIR-REACH.jpg',
        images: ['../assets/images/products/NOVAIR-REACH.jpg'],
        price: 'Request Quote',
        features: [
            'Region-based WhatsApp communication',
            'Text, image, and video messaging',
            'Regional segmentation',
            'Account management',
            'Centralized control and oversight',
            'Consistent regional messaging'
        ],
        specifications: {
            'Category': 'Communications & Information System',
            'Type': 'Region-based WhatsApp platform',
            'Content': 'Text, image, video',
            'Coverage': 'Defined geographic areas',
            'Use Case': 'Notifications & announcements',
            'Collaboration': 'Primaveil'
        }
    },
    {
        id: 8,
        name: 'NOVAIR FREQUENCY',
        category: 'communications-information-system',
        collaboration: 'Primaveil',
        description: 'A software-controlled radio frequency management and signal control system for controlled, compliant RF environments.',
        fullDescription: 'NOVAIR Frequency is a software-controlled radio frequency management and signal control system designed to support controlled RF environments where communication integrity and compliance are required. The system provides configurable signal control across a wide range of radio frequency bands, supporting regulated operational use in authorized scenarios. It offers comprehensive tools for frequency allocation, signal monitoring, and interference management.',
        image: '../assets/images/products/NOVAIR-FREQUENCY.jpg',
        images: ['../assets/images/products/NOVAIR-FREQUENCY.jpg'],
        price: 'Request Quote',
        features: [
            'Software-controlled RF management',
            'Configurable signal control',
            'Wide range of frequency bands',
            'Frequency allocation tools',
            'Signal monitoring',
            'Interference management'
        ],
        specifications: {
            'Category': 'Communications & Information System',
            'Type': 'RF management & signal control system',
            'Control': 'Software-controlled',
            'Coverage': 'Wide range of RF bands',
            'Use Case': 'Regulated, authorized environments',
            'Collaboration': 'Primaveil'
        }
    },
    {
        id: 9,
        name: 'NOVAIR CONTROL',
        category: 'communications-information-system',
        collaboration: 'Primaveil',
        description: 'Structured Point of Interest (POI) information for defined areas, presented through geospatial maps and structured tables.',
        fullDescription: 'NOVAIR Control provides structured Point of Interest (POI) information for defined areas and locations, covering key landmarks such as educational facilities, places of worship, and other relevant public and commercial sites. Information is presented with clear internal area references and made available through both map-based (geospatial) visualization and structured table formats to support analysis and reporting. The platform offers tools for POI categorization, geospatial mapping, and data export.',
        image: '../assets/images/products/NOVAIR-CONTROL.jpg',
        images: ['../assets/images/products/NOVAIR-CONTROL.jpg'],
        price: 'Request Quote',
        features: [
            'Structured Point of Interest data',
            'Geospatial (map-based) visualization',
            'Structured table formats',
            'POI categorization',
            'Data export capabilities',
            'Analysis and reporting support'
        ],
        specifications: {
            'Category': 'Communications & Information System',
            'Type': 'POI information platform',
            'Visualization': 'Map-based & table formats',
            'Coverage': 'Defined areas and locations',
            'Use Case': 'Analysis, planning & reporting',
            'Collaboration': 'Primaveil'
        }
    },
    {
        id: 10,
        name: 'NOVAIR SENSE',
        category: 'communications-information-system',
        collaboration: 'Primaveil',
        description: 'An automated WhatsApp account onboarding and management platform for large-scale organizational communication.',
        fullDescription: 'NOVAIR Sense is an automated WhatsApp account onboarding and management platform designed to support large-scale organizational communication. It enables teams to prepare and manage messaging accounts efficiently, helping reduce setup time and operational overhead. The platform provides tools for account provisioning, configuration management, and bulk operations, letting organizations streamline messaging infrastructure setup with consistent configuration across multiple accounts.',
        image: '../assets/images/products/NOVAIR-SENSE.jpg',
        images: ['../assets/images/products/NOVAIR-SENSE.jpg'],
        price: 'Request Quote',
        features: [
            'Automated account onboarding',
            'Messaging account management',
            'Account provisioning',
            'Configuration management',
            'Bulk operations',
            'Centralized management'
        ],
        specifications: {
            'Category': 'Communications & Information System',
            'Type': 'Account onboarding & management platform',
            'Automation': 'Automated provisioning',
            'Scale': 'Large-scale communication',
            'Use Case': 'Messaging infrastructure setup',
            'Collaboration': 'Primaveil'
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
        'advance-presence-situation-monitoring': 'Advance Presence & Situation Monitoring',
        'communications-information-system': 'Communications & Information System'
    };
    if (names[category]) return names[category];
    return category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Export for use in other scripts
window.productsData = productsData;
window.findProduct = findProduct;
