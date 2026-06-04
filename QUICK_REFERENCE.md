# Quick Reference - Dronixsys Website

## File Locations

### HTML Pages
```
index.html                    → Homepage
pages/about.html             → About Us
pages/products.html          → Product Catalog
pages/product-detail.html    → Product Detail
pages/contact.html           → Contact Us
```

### CSS Files
```
css/style.css                → Main styles (1000+ lines)
css/animations.css           → Animations (500+ lines)
```

### JavaScript Files
```
js/main.js                   → Core functionality
js/products.js               → Product catalog logic
js/product-detail.js         → Product detail logic
js/contact.js                → Contact form logic
```

### Documentation
```
README.md                    → Project overview
SETUP_GUIDE.md              → Setup instructions
UI_UX_DESIGN_PLAN.md        → Design plan
IMPLEMENTATION_CHECKLIST.md → Implementation tracking
PROJECT_SUMMARY.md          → Project summary
QUICK_REFERENCE.md          → This file
```

---

## Common Tasks

### Add a New Product
1. Edit `js/products.js`
2. Add new object to `productsData` array
3. Edit `js/product-detail.js`
4. Add same object to `productsData` array
5. Add product image to `assets/images/`

### Change Colors
1. Edit `css/style.css`
2. Update CSS variables in `:root`
3. Example:
   ```css
   --primary-color: #007BFF;
   --secondary-color: #6C757D;
   ```

### Update Company Info
1. Edit `pages/contact.html` for contact details
2. Edit `pages/about.html` for company story
3. Edit `index.html` for homepage content

### Add Images
1. Place images in `assets/images/`
2. Update image paths in HTML/JS files
3. Recommended sizes:
   - Product: 400x300px
   - Hero: 1920x600px
   - Thumbnails: 80x80px

### Test Responsive Design
1. Open DevTools (F12)
2. Click device toolbar icon
3. Test at: 375px, 768px, 1024px, 1920px

### Deploy Website
1. Verify all images present
2. Test all links and forms
3. Upload files to server
4. Maintain folder structure
5. Test in production

---

## CSS Variables

```css
:root {
    --primary-color: #007BFF;      /* Main brand color */
    --secondary-color: #6C757D;    /* Secondary color */
    --success-color: #28A745;      /* Success messages */
    --danger-color: #DC3545;       /* Error messages */
    --background-color: #FFFFFF;   /* Background */
    --text-color: #212529;         /* Text color */
    --light-gray: #F8F9FA;         /* Light backgrounds */
    --border-color: #DEE2E6;       /* Borders */
    --transition: all 0.3s ease;   /* Transition timing */
}
```

---

## Product Data Structure

```javascript
{
    id: 1,
    name: 'Product Name',
    category: 'software',  // or 'hardware', 'services', 'consulting'
    description: 'Short description',
    fullDescription: 'Detailed description',
    image: './assets/images/product-1.jpg',
    images: ['./assets/images/product-1.jpg'],
    price: '$999/month',
    features: [
        'Feature 1',
        'Feature 2',
        'Feature 3'
    ],
    specifications: {
        'Spec 1': 'Value 1',
        'Spec 2': 'Value 2'
    }
}
```

---

## Form Validation Rules

### Name
- Required
- Minimum 2 characters
- Letters and spaces only

### Email
- Required
- Valid email format

### Phone
- Optional
- Valid phone format
- Minimum 10 digits

### Subject
- Required
- Minimum 3 characters
- Maximum 100 characters

### Message
- Required
- Minimum 10 characters
- Maximum 5000 characters

---

## Animation Classes

```css
.fade-in              /* Fade in animation */
.fade-in-scroll       /* Fade in on scroll */
.slide-up             /* Slide up animation */
.slide-in-left        /* Slide from left */
.slide-in-right       /* Slide from right */
.stagger-item         /* Stagger animation */
.pulse                /* Pulse animation */
.shake                /* Shake animation */
.zoom-on-hover        /* Zoom on hover */
```

---

## Responsive Breakpoints

```css
/* Desktop */
@media (max-width: 1024px) { }

/* Tablet */
@media (max-width: 768px) { }

/* Mobile */
@media (max-width: 480px) { }
```

---

## JavaScript Functions

### main.js
```javascript
validateEmail(email)           // Validate email
validatePhone(phone)           // Validate phone
debounce(func, wait)          // Debounce function
throttle(func, limit)         // Throttle function
preventDoubleSubmit(form)     // Prevent double submit
```

### products.js
```javascript
filterProducts()              // Filter products
displayProducts()             // Display product grid
resetFilters()               // Reset all filters
```

### product-detail.js
```javascript
findProduct(id)              // Find product by ID
displayProductDetail(product) // Display product info
displayRelatedProducts(product) // Show related products
```

### contact.js
```javascript
validateName()               // Validate name field
validateEmail()              // Validate email field
validatePhone()              // Validate phone field
validateSubject()            // Validate subject field
validateMessage()            // Validate message field
submitForm(formData)         // Submit form
```

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| F12 | Open DevTools |
| Ctrl+Shift+I | Open DevTools |
| Ctrl+Shift+M | Toggle device toolbar |
| Ctrl+F | Find on page |
| Ctrl+A | Select all |
| Ctrl+C | Copy |
| Ctrl+V | Paste |

---

## Browser DevTools Tips

### Check for Errors
1. Open DevTools (F12)
2. Go to Console tab
3. Look for red error messages

### Test Responsive Design
1. Open DevTools (F12)
2. Click device toolbar icon
3. Select device or custom size

### Check Network
1. Open DevTools (F12)
2. Go to Network tab
3. Reload page
4. Look for failed requests

### Debug JavaScript
1. Open DevTools (F12)
2. Go to Sources tab
3. Set breakpoints
4. Step through code

---

## Common Issues & Solutions

### Images Not Loading
- Check file paths
- Verify files exist in `assets/images/`
- Check file permissions
- Verify image format

### Forms Not Working
- Check browser console for errors
- Verify form IDs match JavaScript
- Test form validation
- Check for JavaScript errors

### Animations Not Working
- Check browser support
- Verify CSS is loaded
- Check for CSS conflicts
- Test in different browser

### Mobile Menu Not Working
- Check hamburger menu HTML
- Verify JavaScript is loaded
- Check for CSS conflicts
- Test on actual mobile device

---

## Performance Tips

1. **Optimize Images**
   - Compress before uploading
   - Use appropriate formats
   - Consider WebP format

2. **Minimize Code**
   - Remove unused CSS
   - Remove unused JavaScript
   - Minify if needed

3. **Enable Caching**
   - Set cache headers
   - Use browser caching
   - Consider CDN

4. **Lazy Loading**
   - Images use lazy loading
   - Consider for other assets

---

## SEO Checklist

- [ ] Update page titles
- [ ] Add meta descriptions
- [ ] Add keywords
- [ ] Create sitemap
- [ ] Add structured data
- [ ] Optimize for mobile
- [ ] Check Core Web Vitals
- [ ] Submit to search engines

---

## Testing Checklist

- [ ] All pages load
- [ ] All links work
- [ ] Forms validate
- [ ] Forms submit
- [ ] Search works
- [ ] Filter works
- [ ] Pagination works
- [ ] Animations work
- [ ] Mobile responsive
- [ ] Cross-browser compatible

---

## Deployment Checklist

- [ ] All images present
- [ ] All links work
- [ ] Forms functional
- [ ] Responsive design tested
- [ ] Cross-browser tested
- [ ] Performance optimized
- [ ] SEO optimized
- [ ] Security checked
- [ ] Backup created
- [ ] Deployed to server

---

## Useful Links

### Documentation
- [HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### Tools
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [W3C Validator](https://validator.w3.org/)
- [CSS Validator](https://jigsaw.w3.org/css-validator/)

### Resources
- [Can I Use](https://caniuse.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [Stack Overflow](https://stackoverflow.com/)

---

## Contact Information

**Project**: Dronixsys Company Profile Website  
**Version**: 1.0.0  
**Created**: May 28, 2026  
**Status**: Production Ready

For support or questions, refer to the documentation files.

---

**Last Updated**: May 28, 2026
