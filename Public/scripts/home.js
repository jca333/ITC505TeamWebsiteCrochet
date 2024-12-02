// Function to add an item to the cart
function addToCart(name, price, image) {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  cartItems.push({ name, price, image });
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  alert(`${name} has been added to your cart!`);
}

// Check if a user is logged in
const userName = localStorage.getItem('userName');
if (userName) {
  const nav = document.querySelector('header nav ul');
  const welcomeMessage = document.createElement('li');
  welcomeMessage.textContent = `Welcome back, ${userName}!`;
  welcomeMessage.style.color = '#4682b4';
  welcomeMessage.style.fontSize = '18px';
  nav.appendChild(welcomeMessage);
}
