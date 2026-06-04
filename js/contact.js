// ===========================
// CONTACT PAGE JAVASCRIPT
// ===========================

// DOM Elements
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupFormValidation();
    preventDoubleSubmit(contactForm);
});

// Setup Form Validation
function setupFormValidation() {
    contactForm.addEventListener('submit', handleFormSubmit);

    // Real-time validation
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    phoneInput.addEventListener('blur', validatePhone);
    subjectInput.addEventListener('blur', validateSubject);
    messageInput.addEventListener('blur', validateMessage);

    // Clear error on input
    [nameInput, emailInput, phoneInput, subjectInput, messageInput].forEach(input => {
        input.addEventListener('input', () => {
            clearError(input);
        });
    });
}

// Handle Form Submit
async function handleFormSubmit(e) {
    e.preventDefault();

    // Validate all fields
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isSubjectValid = validateSubject();
    const isMessageValid = validateMessage();

    if (!isNameValid || !isEmailValid || !isPhoneValid || !isSubjectValid || !isMessageValid) {
        showMessage('Please fix the errors above', 'error');
        return;
    }

    // Prepare form data
    const formData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim(),
        subject: subjectInput.value.trim(),
        message: messageInput.value.trim(),
        timestamp: new Date().toISOString()
    };

    try {
        // Simulate form submission (in real app, send to backend)
        await submitForm(formData);

        // Show success message
        showMessage('Thank you! Your message has been sent successfully. We will get back to you soon.', 'success');

        // Reset form
        contactForm.reset();

        // Clear form message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);

    } catch (error) {
        showMessage('An error occurred. Please try again later.', 'error');
        console.error('Form submission error:', error);
    }
}

// Submit Form (Simulated)
async function submitForm(formData) {
    return new Promise((resolve, reject) => {
        // Simulate API call
        setTimeout(() => {
            console.log('Form submitted:', formData);
            // In a real application, you would send this data to your backend
            // Example: fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
            resolve();
        }, 1000);
    });
}

// Validation Functions
function validateName() {
    const name = nameInput.value.trim();
    const nameError = document.getElementById('nameError');

    if (!name) {
        showError(nameInput, nameError, 'Name is required');
        return false;
    }

    if (name.length < 2) {
        showError(nameInput, nameError, 'Name must be at least 2 characters');
        return false;
    }

    if (!/^[a-zA-Z\s]+$/.test(name)) {
        showError(nameInput, nameError, 'Name can only contain letters and spaces');
        return false;
    }

    clearError(nameInput);
    return true;
}

function validateEmail() {
    const email = emailInput.value.trim();
    const emailError = document.getElementById('emailError');

    if (!email) {
        showError(emailInput, emailError, 'Email is required');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError(emailInput, emailError, 'Please enter a valid email address');
        return false;
    }

    clearError(emailInput);
    return true;
}

function validatePhone() {
    const phone = phoneInput.value.trim();
    const phoneError = document.getElementById('phoneError');

    if (phone && !/^[\d\s\-\+\(\)]+$/.test(phone)) {
        showError(phoneInput, phoneError, 'Please enter a valid phone number');
        return false;
    }

    if (phone && phone.replace(/\D/g, '').length < 10) {
        showError(phoneInput, phoneError, 'Phone number must have at least 10 digits');
        return false;
    }

    clearError(phoneInput);
    return true;
}

function validateSubject() {
    const subject = subjectInput.value.trim();
    const subjectError = document.getElementById('subjectError');

    if (!subject) {
        showError(subjectInput, subjectError, 'Subject is required');
        return false;
    }

    if (subject.length < 3) {
        showError(subjectInput, subjectError, 'Subject must be at least 3 characters');
        return false;
    }

    if (subject.length > 100) {
        showError(subjectInput, subjectError, 'Subject must not exceed 100 characters');
        return false;
    }

    clearError(subjectInput);
    return true;
}

function validateMessage() {
    const message = messageInput.value.trim();
    const messageError = document.getElementById('messageError');

    if (!message) {
        showError(messageInput, messageError, 'Message is required');
        return false;
    }

    if (message.length < 10) {
        showError(messageInput, messageError, 'Message must be at least 10 characters');
        return false;
    }

    if (message.length > 5000) {
        showError(messageInput, messageError, 'Message must not exceed 5000 characters');
        return false;
    }

    clearError(messageInput);
    return true;
}

// Show Error
function showError(input, errorElement, message) {
    input.classList.add('error');
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

// Clear Error
function clearError(input) {
    input.classList.remove('error');
    const errorId = input.id + 'Error';
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.classList.remove('show');
    }
}

// Show Message
function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';

    // Add animation
    formMessage.classList.add('slide-down');
    setTimeout(() => {
        formMessage.classList.remove('slide-down');
    }, 300);
}

// Prevent Double Submit
function preventDoubleSubmit(form) {
    let isSubmitting = false;

    form.addEventListener('submit', function(e) {
        if (isSubmitting) {
            e.preventDefault();
            return false;
        }

        isSubmitting = true;
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        setTimeout(() => {
            isSubmitting = false;
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }, 2000);
    });
}

// Character Counter for Message
messageInput.addEventListener('input', () => {
    const maxLength = 5000;
    const currentLength = messageInput.value.length;
    const remaining = maxLength - currentLength;

    // Optional: Add character counter display
    if (remaining < 500) {
        messageInput.style.borderColor = '#DC3545';
    } else {
        messageInput.style.borderColor = '#DEE2E6';
    }
});

// Export functions
window.validateName = validateName;
window.validateEmail = validateEmail;
window.validatePhone = validatePhone;
window.validateSubject = validateSubject;
window.validateMessage = validateMessage;
window.submitForm = submitForm;
