window.onscroll = function () {
  let navbar = document.getElementById("navigation");
  if (window.scrollY > 0) {
    navbar.style.backgroundColor = "black";
  } else {
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
  }
};

// Utility function to validate name
const validateName = (name) => /^[a-zA-Z\s]+$/.test(name);

// Utility function to validate email
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Utility function to validate phone number
const validatePhone = (phone) => /^\d{10}$/.test(phone);

// Utility function to validate password (at least 8 characters, one lowercase, one uppercase, one number, one special character)
const validatePassword = (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

// Function to show error message inline
const showError = (element, message) => {
  let errorElement = element.nextElementSibling;
  if (!errorElement || !errorElement.classList.contains('error-message')) {
    errorElement = document.createElement('span');
    errorElement.classList.add('error-message');
    element.parentNode.appendChild(errorElement);
  }
  errorElement.textContent = message;
  element.classList.add('error');
};

// Function to clear error message
const clearError = (element) => {
  const errorElement = element.nextElementSibling;
  if (errorElement && errorElement.classList.contains('error-message')) {
    errorElement.remove();
    element.classList.remove('error');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('.contact-form form');

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    let isValid = true;

    // Name validation
    if (!name.value || !validateName(name.value)) {
      showError(name, 'Please enter a valid name.');
      isValid = false;
    } else {
      clearError(name);
    }

    // Email validation
    if (!email.value || !validateEmail(email.value)) {
      showError(email, 'Please enter a valid email address.');
      isValid = false;
    } else {
      clearError(email);
    }

    // Phone validation (optional, but if provided, it should be valid)
    if (!phone.value || !validatePhone(phone.value)) {
      showError(phone, 'Please enter a valid 10-digit phone number.');
      isValid = false;
    } else {
      clearError(phone);
    }

    // Subject validation
    if (!subject.value) {
      showError(subject, 'Please enter a subject for your message.');
      isValid = false;
    } else {
      clearError(subject);
    }

    // Message validation
    if (!message.value) {
      showError(message, 'Please enter a message.');
      isValid = false;
    } else {
      clearError(message);
    }

    // If all validations pass, submit the form
    if (isValid) {
      alert('Message sent successfully!!');
      contactForm.submit();
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Login Form Validation
  const loginForm = document.querySelector('.card-face.front form');

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email-front');
    const password = document.getElementById('password-front');
    let isValid = true;

    // Email validation
    if (!email.value || !validateEmail(email.value)) {
      showError(email, 'Please enter a valid email address.');
      isValid = false;
    } else {
      clearError(email);
    }

    // Password validation
    if (!password.value || !validatePassword(password.value)) {
      showError(password, 'Please enter a valid password');
      isValid = false;
    } else {
      clearError(password);
    }

    // If all validations pass, submit the form
    if (isValid) {
      alert('Logged In Successfully!!');
      loginForm.submit();
    }
  });

  // Register Form Validation
  const registerForm = document.querySelector('.card-face.back form');

  registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email-back');
    const password = document.getElementById('password-back');
    const confirmPassword = document.getElementById('confirm-password');
    const phone = document.getElementById('phone');
    const dateOfBirth = document.getElementById('date-of-birth');
    const address = document.getElementById('address');
    const gender = document.getElementById('gender');
    let isValid = true;

    // Name validation
    if (!name.value || !validateName(name.value)) {
      showError(name, 'Please enter a valid name.');
      isValid = false;
    } else {
      clearError(name);
    }

    // Email validation
    if (!email.value || !validateEmail(email.value)) {
      showError(email, 'Please enter a valid email address.');
      isValid = false;
    } else {
      clearError(email);
    }

    // Password validation
    if (!password.value || !validatePassword(password.value)) {
      showError(password, 'Password must be at least 8 characters long.');
      isValid = false;
    } else {
      clearError(password);
    }

    // Confirm password validation
    if (password.value !== confirmPassword.value) {
      showError(confirmPassword, 'Passwords do not match.');
      isValid = false;
    } else {
      clearError(confirmPassword);
    }

    // Phone validation
    if (!phone.value || !validatePhone(phone.value)) {
      showError(phone, 'Please enter a valid 10-digit phone number.');
      isValid = false;
    } else {
      clearError(phone);
    }

    // Date of birth validation
    if (!dateOfBirth.value) {
      showError(dateOfBirth, 'Please select your date of birth.');
      isValid = false;
    } else {
      clearError(dateOfBirth);
    }

    // Address validation
    if (!address.value) {
      showError(address, 'Please enter your address.');
      isValid = false;
    } else {
      clearError(address);
    }

    // Gender validation
    if (!gender.value) {
      showError(gender, 'Please select your gender.');
      isValid = false;
    } else {
      clearError(gender);
    }

    // If all validations pass, submit the form
    if (isValid) {
      alert('Registered Successfully!!');
      registerForm.submit();
    }
  });
});

// Booking JS and Validation

const urlParams = new URLSearchParams(window.location.search);
const tourName = urlParams.get('tourName');
const duration = urlParams.get('duration');
const destinations = urlParams.get('destinations');

const tourInfoDiv = document.getElementById('tourInfo');
tourInfoDiv.innerHTML = `
      <p><strong>Tour Name:</strong> ${decodeURIComponent(tourName)}</p>
      <p><strong>Duration:</strong> ${decodeURIComponent(duration)}</p>
      <p><strong>Destinations:</strong> ${decodeURIComponent(destinations)}</p>
    `;

document.addEventListener('DOMContentLoaded', () => {
  const bookingForm = document.getElementById('bookingForm');

  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const travelDate = document.getElementById('travelDate');
    const numMembers = document.getElementById('numMembers');
    const leadPassengerName = document.getElementById('leadPassengerName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const specialRequests = document.getElementById('specialRequests');

    let isValid = true;

    // Travel Date Validation (make sure it's a future date)
    if (!travelDate.value) { // Check if the field is empty
      showError(travelDate, 'Please select a travel date.');
      isValid = false;
    } else {
      const today = new Date();
      const selectedDate = new Date(travelDate.value);
      if (selectedDate <= today) {
        showError(travelDate, 'Please select a future travel date.');
        isValid = false;
      } else {
        clearError(travelDate);
      }
    }


    // Number of Members Validation
    if (numMembers.value < 1) {
      showError2(numMembers, 'Please enter a valid number of members (at least 1).');
      isValid = false;
    } else {
      clearError2(numMembers);
    }

    // Lead Passenger Name Validation
    if (!leadPassengerName.value || !/^[a-zA-Z\s]+$/.test(leadPassengerName.value)) {
      showError2(leadPassengerName, 'Please enter a valid name.');
      isValid = false;
    } else {
      clearError2(leadPassengerName);
    }

    // Email Validation
    if (!email.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      showError2(email, 'Please enter a valid email address.');
      isValid = false;
    } else {
      clearError2(email);
    }

    // Phone Number Validation (You can customize this regex based on your country codes)
    if (!phone.value || !/^\d{10}$/.test(phone.value)) {
      showError2(phone, 'Please enter a valid 10-digit phone number.');
      isValid = false;
    } else {
      clearError2(phone);
    }

    // Special Requests Validation (Optional)
    if (specialRequests.value.length > 250) { // Example: Max 250 characters
      showError2(specialRequests, 'Special requests cannot exceed 250 characters.');
      isValid = false;
    } else {
      clearError2(specialRequests);
    }

    if (isValid) {
      alert("Booking successful!");
      bookingForm.reset(); // Clear the form after submission
    }
  });
});

// Utility functions for showing and clearing errors
const showError2 = (element, message) => {
  let errorElement = element.nextElementSibling;
  if (!errorElement || !errorElement.classList.contains('error-message')) {
    errorElement = document.createElement('span');
    errorElement.classList.add('error-message');
    element.parentNode.appendChild(errorElement);
  }
  errorElement.textContent = message;
  element.classList.add('error');
};

const clearError2 = (element) => {
  const errorElement = element.nextElementSibling;
  if (errorElement && errorElement.classList.contains('error-message')) {
    errorElement.remove();
    element.classList.remove('error');
  }
};
