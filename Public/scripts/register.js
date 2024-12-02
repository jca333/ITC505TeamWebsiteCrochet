document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Simple mock validation (replace with backend integration)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    if (password === confirmPassword) {
      alert('Registration successful! Redirecting to the homepage...');
      window.location.href = 'home.html'; // Redirect to home page after successful registration
    } else {
      alert('Passwords do not match. Please try again.');
    }
  });
  