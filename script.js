// Sample product data
const products = [
    {
      id: 1,
      name: "Whiskey",
      price: 25.99,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 2,
      name: "Vodka",
      price: 15.99,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 3,
      name: "Rum",
      price: 20.99,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 4,
      name: "Tequila",
      price: 30.99,
      image: "https://via.placeholder.com/200",
    },
  ];
  
  // Cart array to store added products
  let cart = [];
  
  // Function to render products
  function renderProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = products
      .map(
        (product) => `
        <div class="col-md-3">
          <div class="card">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">$${product.price.toFixed(2)}</p>
              <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
          </div>
        </div>
      `
      )
      .join("");
  }
  
  // Function to add product to cart
  function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    cart.push(product);
    updateCartCount();
    alert(${product.name} added to cart!);
  }
  
  // Function to update cart count
  function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = cart.length;
  }
  
  // Initialize the page
  renderProducts();