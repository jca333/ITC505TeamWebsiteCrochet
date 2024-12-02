document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const userName = email.split('@')[0]; // Extract name from email for demo purposes
  
    // Mock login validation (replace with actual server validation)
    alert('Login successful!');
    localStorage.setItem('userName', userName); // Save user name to localStorage
    window.location.href = 'home.html'; // Redirect to home page
  });
  