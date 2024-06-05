document.addEventListener("DOMContentLoaded", () => {
  // Sample user credentials
  const sampleEmail = "user@example.com";
  const samplePassword = "password123";

  // Login form handling
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (email === sampleEmail && password === samplePassword) {
        window.location.href = "shop.html";
      } else {
        document.getElementById("error-msg").textContent =
          "Invalid email or password.";
      }
    });
  }

  // Products data
  const products = [
    {
      id: 1,
      name: "Aloe Vera",
      price: 10,
      img: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Snake Plant",
      price: 15,
      img: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Spider Plant",
      price: 12,
      img: "https://via.placeholder.com/150",
    },
  ];

  // Populate products on the shop page
  const productList = document.getElementById("product-list");
  if (productList) {
    displayProducts(products);
  }

  // Cart handling
  let cart = [];
  window.addToCart = function (productId) {
    const product = products.find((p) => p.id === productId);
    cart.push(product);
    document.getElementById("cart-count").textContent = cart.length;
  };

  // Place order
  const placeOrderButton = document.getElementById("place-order");
  if (placeOrderButton) {
    placeOrderButton.addEventListener("click", () => {
      if (cart.length > 0) {
        alert("Order placed successfully!");
        cart = [];
        document.getElementById("cart-count").textContent = cart.length;
      } else {
        alert("Your cart is empty.");
      }
    });
  }

  // Search functionality
  const searchButton = document.getElementById("search-button");
  const searchInput = document.getElementById("search-input");
  if (searchButton && searchInput) {
    searchButton.addEventListener("click", () => {
      const query = searchInput.value.toLowerCase();
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(query)
      );
      displayProducts(filteredProducts);
    });
  }

  // Display products function
  function displayProducts(products) {
    productList.innerHTML = "";
    products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
      productDiv.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>$${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
      productList.appendChild(productDiv);
    });
  }
});
