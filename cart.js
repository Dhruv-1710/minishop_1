const products = [
  { id: 1, name: "T-Shirt", price: 499, image: "images/bag.png" },
  { id: 2, name: "Smartwatch", price: 2499, image: "images/smart watch.png" },
  { id: 3, name: "Jacket", price: 999, image: "images/jacket.png" },
  // Add all 20 products similarly
];

const cart = JSON.parse(localStorage.getItem("cart")) || {};
const itemsContainer = document.getElementById("cart-items");
const totalBox = document.getElementById("total");

function renderCart() {
  itemsContainer.innerHTML = "";
  let total = 0;
  const ids = Object.keys(cart);

  if (ids.length === 0) {
    itemsContainer.innerHTML = `<p>Your cart is empty.</p>`;
    totalBox.textContent = "";
    return;
  }

  ids.forEach(id => {
    const product = products.find(p => p.id == id);
    const qty = cart[id];
    if (!product) return;

    const subtotal = product.price * qty;
    total += subtotal;

    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
      <div>
        <h3>${product.name}</h3>
        <p>Price: ₹${product.price} x ${qty} = ₹${subtotal}</p>
        <button onclick="changeQty(${id}, -1)">−</button>
        <button onclick="changeQty(${id}, 1)">+</button>
        <button onclick="removeFromCart(${id})">Remove</button>
      </div>
    `;
    itemsContainer.appendChild(div);
  });

  totalBox.textContent = `Total: ₹${total}`;
}

function changeQty(id, delta) {
  cart[id] = (cart[id] || 0) + delta;
  if (cart[id] <= 0) {
    delete cart[id];
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function removeFromCart(id) {
  delete cart[id];
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();
