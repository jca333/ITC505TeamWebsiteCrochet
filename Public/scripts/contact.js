// JavaScript for the Contact Us form submission (example)
// For now, we just display an alert when the form is submitted

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const note = document.getElementById('note').value;
  
    // Simple form validation
    if (name && email && phone && note) {
      alert('Thank you for contacting us, ' + name + '! We will get back to you soon.');
    } else {
      alert('Please fill out all fields.');
    }
  });
  