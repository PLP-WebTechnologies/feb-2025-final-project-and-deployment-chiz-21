// Cart logic using localStorage
function addToCart(productName) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(productName);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${productName} added to cart!`);
  updateCartUI();
}

// Display cart items
function updateCartUI() {
  const cartList = document.getElementById('cart-list');
  const totalPrice = document.getElementById('total-price');
  const emptyMsg = document.getElementById('empty-msg');

  if (!cartList || !totalPrice || !emptyMsg) return;

  cartList.innerHTML = '';
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let pricePerItem = 10;
  let total = cart.length * pricePerItem;

  if (cart.length === 0) {
    emptyMsg.style.display = 'block';
    totalPrice.textContent = 'Total: $0.00';
    return;
  }

  emptyMsg.style.display = 'none';
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item}`;
    cartList.appendChild(li);
  });

  totalPrice.textContent = `Total: $${total.toFixed(2)}`;
}

// Handle newsletter subscription
document.addEventListener('DOMContentLoaded', () => {
  const newsletterForm = document.getElementById('newsletter-form');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      if (email && email.includes('@')) {
        alert(`Thanks for subscribing, ${email}!`);
        newsletterForm.reset();
      } else {
        alert('Please enter a valid email address.');
      }
    });
  }

  updateCartUI();
});

// Checkout button handler
document.addEventListener('DOMContentLoaded', () => {
  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      if (cart.length === 0) {
        alert('Your cart is empty.');
      } else {
        alert('Proceeding to checkout...');
        localStorage.removeItem('cart');
        updateCartUI();
      }
    });
  }
});

