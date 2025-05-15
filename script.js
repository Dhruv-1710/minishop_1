const products = [
  { id: 1, name: "T-Shirt", price: 499, category: "clothing", image: "images/bag.png" },
  { id: 2, name: "Smartwatch", price: 2499, category: "gadgets", image: "images/smart watch.png" },
  { id: 3, name: "Jacket", price: 999, category: "clothing", image: "images/jacket.png" },
  { id: 4, name: "Bluetooth Headphones", price: 1799, category: "gadgets", image: "images/headphones.png" },
  { id: 5, name: "Sneakers", price: 1499, category: "clothing", image: "images/shoes.png" },
  { id: 6, name: "Laptop Stand", price: 799, category: "gadgets", image: "images/laptop_stand.png" },
  { id: 7, name: "Cap", price: 299, category: "clothing", image: "images/cap.png" },
  { id: 8, name: "Fitness Band", price: 1999, category: "gadgets", image: "images/fitness.png" },
  { id: 9, name: "Sunglasses", price: 599, category: "clothing", image: "images/sunglass.png" },
  { id: 10, name: "USB Hub", price: 349, category: "gadgets", image: "images/USB.png" },
  { id: 11, name: "Backpack", price: 899, category: "clothing", image: "images/bag.png" },
  { id: 12, name: "Wireless Mouse", price: 449, category: "gadgets", image: "images/mouse.png" },
  { id: 13, name: "Hoodie", price: 1299, category: "clothing", image: "images/hoddie.png" },
  { id: 14, name: "Tablet Stand", price: 599, category: "gadgets", image: "images/tablet.png" },
  { id: 15, name: "Jeans", price: 1099, category: "clothing", image: "images/pants.png" },
  { id: 16, name: "Phone Tripod", price: 699, category: "gadgets", image: "images/phone_tripod.png" },
  { id: 17, name: "Formal Shirt", price: 799, category: "clothing", image: "images/formal.png" },
  { id: 18, name: "Bluetooth Speaker", price: 1199, category: "gadgets", image: "images/speaker.png" },
  { id: 19, name: "Shorts", price: 499, category: "clothing", image: "images/shorts.png" },
  { id: 20, name: "Power Bank", price: 999, category: "gadgets", image: "images/image.png" }
];

function loadProducts(filter = "all") {
  const list = document.getElementById("product-list");
  list.innerHTML = "";

  const filtered = filter === "all" ? products : products.filter(p => p.category === filter);
  filtered.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.image}" loading="lazy" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    list.appendChild(div);
  });
}

function addToCart(id) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cart-count").textContent = cart.length;
}

document.getElementById("category-filter").addEventListener("change", (e) => {
  loadProducts(e.target.value);
});

loadProducts();
updateCartCount();
