// Function to load cart items from localStorage
function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
  
    cartItemsContainer.innerHTML = '';
    let total = 0;
  
    cartItems.forEach((item, index) => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'cart-item';
      itemDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-details">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-price">$${item.price.toFixed(2)}</div>
        </div>
        <button class="remove-button" onclick="removeItem(${index})">Remove</button>
      `;
      cartItemsContainer.appendChild(itemDiv);
      total += item.price;
    });
  
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
  }
  
  // Function to remove an item from the cart
  function removeItem(index) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    loadCart(); // Reload cart after removal
  }
  
  // Load cart items on page load
  window.onload = loadCart;
  