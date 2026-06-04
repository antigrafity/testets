# Dronixsys - Company Profile Website

A modern, responsive company profile website built with HTML, CSS, and JavaScript. Features include a product catalog with filtering and search, contact form, and smooth animations.

## Project Structure

```
dronixis/
├── index.html                 # Homepage
├── pages/
│   ├── about.html            # About Us page
│   ├── products.html         # Product Catalog page
│   ├── product-detail.html   # Product Detail page
│   └── contact.html          # Contact Us page
├── css/
│   ├── style.css             # Main stylesheet
│   └── animations.css        # Animation styles
├── js/
│   ├── main.js               # Main JavaScript
│   ├── products.js           # Products page logic
│   ├── product-detail.js     # Product detail logic
│   └── contact.js            # Contact form logic
├── assets/
│   └── images/               # Image files
├── README.md                 # This file
└── UI_UX_DESIGN_PLAN.md     # Design plan document
```

## Features

### Pages
- **Homepage**: Hero section, company overview, solutions showcase, CTA banner
- **About Us**: Company story, vision & mission, core values
- **Product Catalog**: Product grid with filtering by category and search functionality
- **Product Detail**: Detailed product information with specifications and related products
- **Contact Us**: Contact form with validation and contact information

### Functionality
- ✅ Responsive design (Mobile, Tablet, Desktop)
- ✅ Product filtering by category
- ✅ Product search functionality
- ✅ Pagination for product listing
- ✅ Contact form with validation
- ✅ Smooth scroll animations
- ✅ Mobile-friendly navigation
- ✅ Scroll-to-top button
- ✅ Light theme design

### Animations
- Fade-in effects
- Slide animations
- Stagger animations
- Hover effects
- Scroll-triggered animations
- Smooth transitions

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required

### Installation

1. Clone or download the project
2. Open `index.html` in your web browser
3. Navigate through the website using the menu

### File Structure Details

#### HTML Files
- `index.html` - Main homepage
- `pages/about.html` - About Us page
- `pages/products.html` - Product catalog
- `pages/product-detail.html` - Individual product details
- `pages/contact.html` - Contact form

#### CSS Files
- `css/style.css` - Main styles (1000+ lines)
  - Global styles and typography
  - Component styles (buttons, cards, forms)
  - Layout and grid systems
  - Responsive design breakpoints
  
- `css/animations.css` - Animation definitions
  - Keyframe animations
  - Scroll-triggered animations
  - Hover effects
  - Accessibility considerations

#### JavaScript Files
- `js/main.js` - Core functionality
  - Mobile menu toggle
  - Scroll-to-top button
  - Intersection Observer for animations
  - Form validation helpers
  - Utility functions
  
- `js/products.js` - Product catalog logic
  - Product data management
  - Filtering and search
  - Pagination
  - Dynamic product card generation
  
- `js/product-detail.js` - Product detail page
  - Product data lookup
  - Image gallery
  - Related products display
  
- `js/contact.js` - Contact form handling
  - Form validation
  - Error handling
  - Form submission simulation

## Customization

### Adding Products
Edit `js/products.js` and `js/product-detail.js` to add new products to the `productsData` array:

```javascript
{
    id: 13,
    name: 'Your Product Name',
    category: 'software', // or 'hardware', 'services', 'consulting'
    description: 'Short description',
    fullDescription: 'Detailed description',
    image: './assets/images/product-13.jpg',
    images: ['./assets/images/product-13.jpg'],
    price: '$999/month',
    features: ['Feature 1', 'Feature 2'],
    specifications: {
        'Spec 1': 'Value 1',
        'Spec 2': 'Value 2'
    }
}
```

### Changing Colors
Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #007BFF;
    --secondary-color: #6C757D;
    --success-color: #28A745;
    --danger-color: #DC3545;
    --background-color: #FFFFFF;
    --text-color: #212529;
    --light-gray: #F8F9FA;
    --border-color: #DEE2E6;
}
```

### Adding Images
Place your images in the `assets/images/` folder and update the image paths in HTML files.

### Modifying Content
Edit the HTML files directly to change text, headings, and descriptions.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## Performance Optimization

- Lazy loading for images
- Debounced search and scroll events
- Optimized CSS animations
- Minimal JavaScript dependencies
- No external libraries required

## Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Color contrast compliance
- Reduced motion support

## Contact Form Integration

The contact form currently simulates submission. To integrate with a backend:

1. Update the `submitForm()` function in `js/contact.js`
2. Send form data to your backend API
3. Handle responses and errors appropriately

Example:
```javascript
async function submitForm(formData) {
    const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    });
    return response.json();
}
```

## Deployment

1. Ensure all image paths are correct
2. Test all links and forms
3. Verify responsive design on mobile devices
4. Upload all files to your web server
5. Test in production environment

## Future Enhancements

- [ ] Backend API integration
- [ ] Database for products
- [ ] User authentication
- [ ] Shopping cart functionality
- [ ] Blog section
- [ ] Multi-language support
- [ ] SEO optimization
- [ ] Analytics integration

## License

This project is provided as-is for educational and commercial use.

## Support

For issues or questions, please contact the development team.

---

**Created**: May 28, 2026  
**Version**: 1.0.0  
**Status**: Production Ready
