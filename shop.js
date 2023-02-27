"use strict";

// SELECTORS
const totalCartItems = document.getElementById("cart-items-length");
const sideBarLinks = document.querySelector(".side-bar__links");
const productContent = document.querySelector(".shop__content");
const contentItems = document.querySelector(".shop__content--items");

// loading screen
const loadingScreen = document.getElementById("loading-screen");

// Furnita Database
const furnita_data = {
  sofas: [
    {
      manufacturer: "Lasdino",
      product_name: "meca-cotton green x231",
      price: 2000,
      has_discount: true,
      discount_percent: 15,
      productId: 432112,
      type: "sofas",
      photo: 1,
    },
    {
      manufacturer: "Kanda Igwue",
      product_name: "carton-leather",
      price: 3200,
      has_discount: true,
      discount_percent: 20,
      productId: 432154,
      type: "sofas",
      photo: 2,
    },
    {
      manufacturer: "Luxerie",
      product_name: "lux-leather omebrown-series",
      price: 1000,
      has_discount: true,
      discount_percent: 20,
      productId: 432431,
      type: "sofas",
      photo: 3,
    },
    {
      manufacturer: "Marctioni",
      product_name: "minitak yellow-x11",
      price: 1400,
      has_discount: true,
      discount_percent: 20,
      productId: 432675,
      type: "sofas",
      photo: 4,
    },
    {
      manufacturer: "Ferro Charlton",
      product_name: "wild-leather brown-x01",
      price: 2000,
      has_discount: true,
      discount_percent: 32,
      productId: 432987,
      type: "sofas",
      photo: 5,
    },
    {
      manufacturer: "Marctioni",
      product_name: "lumax-leather brown",
      price: 4000,
      has_discount: true,
      discount_percent: 32,
      productId: 432407,
      type: "sofas",
      photo: 6,
    },
  ],

  beds: [
    {
      manufacturer: "Gozzby",
      product_name: "panel bed frame",
      price: "$2,000",
      has_discount: true,
      discount_percent: 15,
      productId: 332128,
      type: "beds",
    },
    {
      manufacturer: "Honoly",
      product_name: "platform bed frame",
      price: "$3,200",
      has_discount: true,
      discount_percent: 20,
      productId: 332902,
      type: "beds",
    },
    {
      manufacturer: "Lasdino",
      product_name: "upholstered bed frame",
      price: "$1,000",
      has_discount: true,
      discount_percent: 20,
      productId: 332776,
      type: "beds",
    },
    {
      manufacturer: "Ferro Charlton",
      product_name: "sleigh bed frame",
      price: "$1,400",
      has_discount: true,
      discount_percent: 20,
      productId: 332832,
      type: "beds",
    },
    {
      manufacturer: "Lasdino",
      product_name: "upholstered bed frame",
      price: "$2,000",
      has_discount: true,
      discount_percent: 32,
      productId: 332430,
      type: "beds",
    },
    {
      manufacturer: "Luxerie",
      product_name: "panel bed frame",
      price: "$2,000",
      has_discount: true,
      discount_percent: 32,
      productId: 332117,
      type: "beds",
    },
    {
      manufacturer: "dotzi",
      product_name: "panel bed frame",
      price: "$2,000",
      has_discount: true,
      discount_percent: 32,
      productId: 332809,
      type: "beds",
    },
    {
      manufacturer: "Sweet Homes Inc",
      product_name: "storage bed frame",
      price: "$2,000",
      has_discount: true,
      discount_percent: 32,
      productId: 332653,
      type: "beds",
    },
    {
      manufacturer: "Homify",
      product_name: "platform bed frames",
      price: "$2,000",
      has_discount: true,
      discount_percent: 32,
      productId: 332004,
      type: "beds",
    },
  ],

  tables: [
    {
      product_name: "Kanda Igwue",
      price: "$2,000",
      has_discount: true,
      discount_percent: 15,
    },
    {
      product_name: "Lasdino",
      price: "$3,200",
      has_discount: true,
      discount_percent: 20,
    },
    {
      product_name: "Luxerie",
      price: "$1,000",
      has_discount: true,
      discount_percent: 20,
    },
    {
      product_name: "Marctioni",
      price: "$1,400",
      has_discount: true,
      discount_percent: 20,
    },
    {
      product_name: "Ferro Charlton",
      price: "$2,000",
      has_discount: true,
      discount_percent: 32,
    },
  ],

  chairs: [
    {
      product_name: "Kanda Igwue",
      price: "$2,000",
      has_discount: true,
      discount_percent: 15,
    },
    {
      product_name: "Lasdino",
      price: "$3,200",
      has_discount: true,
      discount_percent: 20,
    },
    {
      product_name: "Luxerie",
      price: "$1,000",
      has_discount: true,
      discount_percent: 20,
    },
    {
      product_name: "Marctioni",
      price: "$1,400",
      has_discount: true,
      discount_percent: 20,
    },
    {
      product_name: "Ferro Charlton",
      price: "$2,000",
      has_discount: true,
      discount_percent: 32,
    },
  ],

  wardrobes: [
    {
      product_name: "Kanda Igwue",
      price: "$2,000",
      has_discount: true,
      discount_percent: 15,
    },
    {
      product_name: "Lasdino",
      price: "$3,200",
      has_discount: true,
      discount_percent: 20,
    },
    {
      product_name: "Luxerie",
      price: "$1,000",
      has_discount: true,
      discount_percent: 20,
    },
    {
      product_name: "Marctioni",
      price: "$1,400",
      has_discount: true,
      discount_percent: 20,
    },
    {
      product_name: "Ferro Charlton",
      price: "$2,000",
      has_discount: true,
      discount_percent: 32,
    },
  ],
};

// loading function initialization
function loading(loadingIcon, content, loadTime) {
  setTimeout(() => {
    loadingIcon.remove();

    content.classList.remove("loading__hidden");
    content.classList.add("loading__visible");
  }, loadTime);
}

// sidebar and sidebar btn selectors
const sideBarBtn = document.getElementById("shop-side-bar-icon");
const sideBar = document.getElementById("shop-side-bar");
const allSideBarLinks = Array.from(
  document.getElementsByClassName("side-bar__links--item")
);

if (window.innerWidth < 990) {
  sideBarBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-bars")) {
      e.target.classList.remove("fa-bars");
      e.target.classList.add("fa-xmark");
      sideBar.style.display = "flex";
    } else {
      e.target.classList.add("fa-bars");
      e.target.classList.remove("fa-xmark");
      sideBar.style.display = "none";
    }
  });

  allSideBarLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      sideBar.style.display = "none";

      sideBarBtn.classList.add("fa-bars");
      sideBarBtn.classList.remove("fa-xmark");
    });
  });
}

// loading function call
loading(loadingScreen, contentItems, 2000);

/** Cart Array */
const cart = JSON.parse(localStorage.getItem("cart"));

/** Cart State
 * number of items in cart
 */
cart == []
  ? (totalCartItems.innerHTML = "0")
  : (totalCartItems.innerHTML = `${cart.length}`);

/** Cart Function (add and remove from cart) */
const cartFunction = (e) => {
  const btn = e.target;

  let itemProductId = btn.dataset.productId;
  const category = btn.parentElement.dataset.productType;

  if (btn.textContent == "add to cart") {
    btn.textContent = "remove";

    // add to cart
    furnita_data[`${category}`].forEach((item) => {
      if (item.productId == itemProductId) {
        cart.push(item);

        // set local storage
        localStorage.setItem("cart", JSON.stringify(cart));
        totalCartItems.innerHTML = `${cart.length}`;
      }
    });
  } else {
    btn.textContent = "add to cart";

    // remove from cart
    cart.forEach((cartItem) => {
      if (itemProductId == cartItem.productId) {
        // find the specific item and remove only that item.
        const index = cart.indexOf(cartItem);
        if (index > -1) cart.splice(index, 1);

        // update local storage
        localStorage.setItem("cart", JSON.stringify(cart));
        totalCartItems.innerHTML = `${cart.length}`;
      }
    });
  }
};

// Dynamic Furniture Products (html array)
let html = [];

/* Initial Product Category (Sofas) */
const sofas = furnita_data.sofas;
sofas.forEach((item, index) => {
  html += `
    <div class="furniture">
        <img class="furniture__photo" src="img/sofas-${(index += 1)}-md.jpg" alt="" />
        <div class="furniture__details">
          <div class="product__brand">
            <h1 class="product__brand--name">${item.manufacturer}</h1>
            <p class="product__brand--product-name">${item.product_name}</p>
          </div>
          <div data-product-type="${item.type}" class="product__pricing">
            <p class="product__pricing--discount">${
              item.discount_percent
            }% off</p>
            <h1 class="product__pricing--price">$${item.price}</h1>
            <button data-product-id="${
              item.productId
            }"  class="product__pricing--cart" onclick="cartFunction(event)">add to cart
    </button>
          </div>
        </div>
    </div>
        `;
});
contentItems.insertAdjacentHTML("beforeend", html);

/** Side Bar Event Function for each category */
sideBarLinks.addEventListener("click", (e) => {
  let category = e.target.textContent;
  category = category.toLowerCase();

  // clear previous category items
  let newHtml = [];
  while (contentItems.firstChild) {
    contentItems.firstChild.remove();
  }

  // Dynamic Side Bar Loader html
  let loadingHtml = `
  <section id="side-bar-loading" class="loading__screen">
    <div class="loading__shop-container">
      <div class="loading__visible loading__spinner"></div>
      <img
        src="img/Furnita-logo.png"
        alt="furnita logo"
        class="loading__logo"
      />
    </div>
  </section>
  `;
  productContent.insertAdjacentHTML("afterbegin", loadingHtml);

  // Side Bar Loader Selector
  const sideBarLoading = document.getElementById("side-bar-loading");

  // loading function
  loading(sideBarLoading, contentItems, 1000);

  // Dynamic Rendering of Furnita's Data based on category.
  if (category in furnita_data) {
    const furnitureCategory = furnita_data[`${category}`];

    furnitureCategory.forEach((item, index) => {
      newHtml += `
        <div class="furniture">
            <img class="furniture__photo" src="img/${category}-${(index += 1)}-md.jpg" alt="" />
            <div class="furniture__details">
              <div class="product__brand">
                <h1 class="product__brand--name">${item.manufacturer}</h1>
                <p class="product__brand--product-name">${item.product_name}</p>
              </div>
              <div data-product-type="${item.type}" class="product__pricing">
                <p class="product__pricing--discount">${
                  item.discount_percent
                }% off</p>
                <h1 class="product__pricing--price">$${item.price}</h1>
                <button data-product-id="${
                  item.productId
                }" class="product__pricing--cart" onclick="cartFunction(event)">add to cart</button>
              </div>
            </div>
        </div>
    `;
    });
    contentItems.insertAdjacentHTML("beforeend", newHtml);
  }
});

// Furniture Card's button parent (div) selector
const cartBtnDiv = Array.from(
  document.getElementsByClassName("product__pricing")
);

/** For Furniture Items in cart
 *  set state i.e let the button's innerText == remove
 */
cartBtnDiv.forEach((div) => {
  if (cart.length > 0) {
    cart.forEach((cartItem) => {
      const cartBtn = div.children[2];
      if (cartBtn.dataset.productId == cartItem.productId)
        cartBtn.textContent = "remove";
    });
  }
});
