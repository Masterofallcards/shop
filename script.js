const menuToggle = document.querySelector('.mobile-menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    const email = document.getElementById('email').value;
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
  
    // Clear previous messages
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';
  
    // Simple email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (emailPattern.test(email)) {
      // Simulate a successful subscription
      successMessage.style.display = 'block';
      document.getElementById('email').value = ''; // Clear the email input field
    } else {
      // Show error message for invalid email
      errorMessage.style.display = 'block';
    }
  });
  


// Simple JavaScript functionality (e.g., tracking clicks or initializing events)

const socialIcons = document.querySelectorAll('.social-icon');

socialIcons.forEach(icon => {
  icon.addEventListener('click', function() {
    console.log(`You clicked the ${this.title} icon.`);
  });
});


// Newsletter subscription functionality
document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = e.target.querySelector('input').value;
    alert(`Thank you for subscribing with ${emailInput}!`);
    e.target.reset();
  });

  
  