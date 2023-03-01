"use strict";

// SELECTORS
const totalCartItems = document.getElementById("cart-items-length");
const sideBarLinks = document.querySelector(".side-bar__links");
const productContent = document.querySelector(".shop__content");
const contentItems = document.querySelector(".shop__content--items");

// loading screen
const loadingScreen = document.getElementById("loading-screen");

// sidebar and sidebar btn selectors
const sideBarBtn = document.getElementById("shop-side-bar-icon");
const sideBar = document.getElementById("shop-side-bar");
const allSideBarLinks = Array.from(
  document.getElementsByClassName("side-bar__links--item")
);

// loading function initialization
function loading(loadingIcon, content, loadTime) {
  setTimeout(() => {
    loadingIcon.remove();

    content.classList.remove("loading__hidden");
    content.classList.add("loading__visible");
  }, loadTime);
}

// responsive break point (medium)
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
const cart = JSON.parse(localStorage.getItem("cart")) || [];

/** Cart State
 * number of items in cart
 */
cart == []
  ? (totalCartItems.innerHTML = "0")
  : (totalCartItems.innerHTML = `${cart.length}`);

/** Cart Function (add and remove from cart) */
function cartFunction(e) {
  const btn = e.target;

  let itemProductId = btn.dataset.productId;
  const category = btn.parentElement.dataset.productType;

  if (btn.textContent == "add to cart") {
    btn.textContent = "remove";

    // add to cart
    fetch("/folt.json")
      .then((res) => {
        return res.json();
      })
      .then((furnitaData) => {
        furnitaData[`${category}`].forEach((item) => {
          if (item.productId == itemProductId) {
            cart.push(item);

            // set local storage
            localStorage.setItem("cart", JSON.stringify(cart));
            totalCartItems.innerHTML = `${cart.length}`;
          }
        });
      })
      .catch((err) => {
        console.log("could not retrieve data");
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
}

// Dynamic Furniture Products (html array)
let html = [];

fetch("/folt.json")
  .then((res) => {
    return res.json();
  })
  .then((furnitaData) => {
    /* Initial Product Category (Sofas) */
    const sofas = furnitaData.sofas;
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

    // Sofa Furniture Card's button parent (div) selector
    const cartBtnDiv = Array.from(
      document.getElementsByClassName("product__pricing")
    );

    /** Sofa Furniture Items in cart
     *  set state i.e let the button's innerText == remove
     */
    cartBtnDiv.forEach((div) => {
      if (cart.length > 0) {
        cart.forEach((cartItem) => {
          const cartBtn = div.children[2];
          if (cartBtn.dataset.productId == cartItem.productId) {
            console.log(div);
            cartBtn.textContent = "remove";
          }
        });
      }
    });

    /** Side Bar Event Function for each category */
    allSideBarLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
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
        loading(sideBarLoading, contentItems, 2000);

        // Dynamic Rendering of Furnita's Data based on category.
        if (category in furnitaData) {
          const furnitureCategory = furnitaData[`${category}`];

          furnitureCategory.forEach((item, index) => {
            newHtml += `
            <div class="furniture">
              <img class="furniture__photo" src="img/${category}-${(index += 1)}-md.jpg" alt="" />
              <div class="furniture__details">
                <div class="product__brand">
                  <h1 class="product__brand--name">${item.manufacturer}</h1>
                  <p class="product__brand--product-name">${
                    item.product_name
                  }</p>
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

        // Side Bar Links Furniture Card's button parent (div)
        const cartBtnDiv = Array.from(
          document.getElementsByClassName("product__pricing")
        );

        /** Side Bar Links Furniture Items in cart
         *  set state i.e let the button's innerText == remove
         */
        cartBtnDiv.forEach((div) => {
          if (cart.length > 0) {
            cart.forEach((cartItem) => {
              const cartBtn = div.children[2];
              if (cartBtn.dataset.productId == cartItem.productId) {
                console.log(div);
                cartBtn.textContent = "remove";
              }
            });
          }
        });
      });
    });
  })
  .catch((err) => {
    console.log("could not retrieve data");
  });
