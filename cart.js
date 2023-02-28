const cart = JSON.parse(localStorage.getItem("cart")) || [];

// nav
const totalCartItems = document.getElementById("cart-items-length");

// loading screen and cart screen selectors
const loadingScreen = document.getElementById("loading-screen");
const cartScreen = document.getElementById("cart-screen");

// cart selectors
const cartMain = document.querySelector(".cart__body");
const cartContent = document.querySelector(".cart__content");
const subTotalElement = document.getElementById("sub-total");
const shippingFeeElement = document.getElementById("shipping-fee");
const totalElement = document.getElementById("total");

// tab buttons
const cartTab = document.querySelector(".cart__tab--cart");
const summaryTab = document.querySelector(".cart__tab--summary");
const paymentTab = document.querySelector(".cart__tab--payment");

// cart buttons
const cartPaymentDiv = document.querySelector(".cart__payment");
const cartBtnDiv = document.querySelector(".cart__btn");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

// loading
setTimeout(() => {
  loadingScreen.remove();

  cartScreen.classList.remove("loading__hidden");
  cartScreen.classList.add("loading__visible");
}, 3000);

const shippingPercentage = 0.07;
let subTotal = 0;
let shippingFee = 0;
let total = 0;

const calcItems = () => {
  shippingFee = subTotal * shippingPercentage;
  total = subTotal + shippingFee;
};

cart == []
  ? (totalCartItems.innerHTML = "0")
  : (totalCartItems.innerHTML = `${cart.length}`);

const cartItemCounterMap = {};

if (cart.length == 0) {
  let html = `
    <div class="cart__caution">
     <i class="fa-solid fa-7x fa-cart-plus"></i>
      <h1 class="cart__caution--text">No items yet</h1>
    </div>
  `;
  cartContent.insertAdjacentHTML("afterbegin", html);
  cartPaymentDiv.remove();
  cartBtnDiv.remove();
} else {
  cart.forEach((item) => {
    cartItemCounterMap[item.productId] = 1;
    subTotal += item.price;

    let html = `
    <div data-product-id="${item.productId}" id="cart-item" class="cart-item">
        <div class="cart-item__photo">
          <img src="img/${item.type}-${item.photo}-md.jpg" alt="" />
        </div>
        <div class="cart-item__details">
          <h2 class="cart-item__details--name">${item.manufacturer}</h2>
          <p class="cart-item__details--type">${item.product_name}</p>
          <h2 class="cart-item__details--price">$
            ${item.price}
            <span class="cart-item__details--discount">${
              item.discount_percent
            }% off</span>
          </h2>
          <div data-product-price="${item.price}" class="cart-item__counter">
            <button data-product-id="${
              item.productId
            }" onclick="cartState(event, 'decrement')" class="cart-item__counter--btn btn">&minus;</button>
            <p id="counter-text" class="cart-item__counter--text">${
              cartItemCounterMap[item.productId] || 1
            }</p>
            <button data-product-id="${
              item.productId
            }" onclick="cartState(event, 'increment')" class="cart-item__counter--btn btn">&plus;</button>
          </div>
        </div>
        <div>
          <button data-item-price="${
            item.price
          }" onclick="removeCartItem(event)" class="btn cart-item__remove-btn">
          remove
          </button>
        </div>
    </div>

`;
    cartContent.insertAdjacentHTML("afterbegin", html);
  });
}

function cartState(e, action) {
  const counterText = e.target.parentNode.children[1];
  const itemProductId = e.target.dataset.productId;
  const itemPrice = e.target.parentNode.dataset.productPrice;

  if (action == "decrement") {
    if (cartItemCounterMap[itemProductId] <= 1) {
      cartItemCounterMap[itemProductId] = 1;
    } else {
      cartItemCounterMap[itemProductId] -= 1;
      counterText.innerHTML = cartItemCounterMap[itemProductId];

      subTotal -= Number(itemPrice);
      calcItems();
      subTotalElement.innerHTML = `$${subTotal.toFixed(2)}`;
      shippingFeeElement.innerHTML = `$${shippingFee.toFixed(2)}`;
      totalElement.innerHTML = `$${total.toFixed(2)}`;
    }
  }

  if (action == "increment") {
    cartItemCounterMap[itemProductId] += 1;
    counterText.innerHTML = cartItemCounterMap[itemProductId];

    subTotal += Number(itemPrice);
    calcItems();
    subTotalElement.innerHTML = `$${subTotal.toFixed(2)}`;
    shippingFeeElement.innerHTML = `$${shippingFee.toFixed(2)}`;
    totalElement.innerHTML = `$${total.toFixed(2)}`;
  }

  const summaryTotalPrice = document.querySelector(".summary__value");
  summaryTotalPrice.innerHTML = `$${total.toFixed(2)}`;
}

function removeCartItem(e) {
  const btn = e.target;
  const itemPrice = btn.dataset.itemPrice;
  const itemProductId = btn.parentNode.parentNode.dataset.productId;
  btn.parentNode.parentNode.remove();
  cart.forEach((cartItem) => {
    if (itemProductId == cartItem.productId) {
      const index = cart.indexOf(cartItem);
      if (index > -1) cart.splice(index, 1);

      // update local storage
      localStorage.setItem("cart", JSON.stringify(cart));
      totalCartItems.innerHTML = `${cart.length}`;

      // payment calc
      subTotal -= itemPrice * cartItemCounterMap[itemProductId];
      calcItems();
      subTotalElement.innerHTML = `$${subTotal.toFixed(2)}`;
      shippingFeeElement.innerHTML = `$${shippingFee.toFixed(2)}`;
      totalElement.innerHTML = `$${total.toFixed(2)}`;
    }
  });
}

calcItems();
subTotalElement.innerHTML = `$${subTotal.toFixed(2)}`;
shippingFeeElement.innerHTML = `$${shippingFee.toFixed(2)}`;
totalElement.innerHTML = `$${total.toFixed(2)}`;

let profileComplete;

// userData
const userData = JSON.parse(localStorage.getItem("userData"));

if (!userData.address) {
  profileComplete = false;
} else {
  profileComplete = true;
}

let completeProfileHmtl = `
  <div data-tab="1" class="summary">
    <section id="summary-loader" class="loading__screen">
      <div class="loading__container">
        <div class="loading__visible loading__spinner"></div>
        <img
          src="img/Furnita-logo.png"
          alt="furnita logo"
          class="loading__logo"
        />
      </div>
    </section>
    <div class="loading__hidden summary__caution">
      <h2>Please complete your "Delivery information" to access this page.</h2>
      <a class=" summary__caution--btn btn" href="/user_account.html">Go to user profile</a>
    </div>
  </div>
`;

let summaryHtml;
summaryHtml = `
<div data-tab="1" class="summary">
  <section id="summary-loader" class="loading__screen">
    <div class="loading__container">
      <div class="loading__visible loading__spinner"></div>
      <img
        src="img/Furnita-logo.png"
        alt="furnita logo"
        class="loading__logo"
      />
    </div>
  </section>
  <div class="loading__hidden summary-container">
  <h2 class="summary__heading">Payment Summary</h2>

  <div class="summary__card summary__card--total-payment">
    <div class="summary__label">Total Payment</div>
    <div class="summary__value">$${total.toFixed(2)}</div>
  </div>

  <h2 class="summary__heading">Delivery Information</h2>

  <div class="summary__card summary__card--delivery">
    <div class="summary__shipping">
      <div class="summary__label">Shipping Id:</div>
      <div class="summary__value">LYH-546378</div>
    </div>
    <div class="summary__username">
      <div class="summary__label">Recipient Name:</div>
      <div class="summary__value">${userData.firstName} ${
  userData.lastName
}</div>
    </div>
    <div class="summary__emal-address">
      <div class="summary__label">Email Address:</div>
      <div class="summary__value">${userData.emailAddress}</div>
    </div>
    <div class="summary__address">
      <div class="summary__label">Address:</div>
      <div class="summary__value">${userData.address}</div>
    </div>
    <div class="summary__zip-code">
      <div class="summary__label">Zip Code:</div>
      <div class="summary__value">${userData.zipCode}</div>
    </div>
    <div class="summary__location">
      <div class="summary__label">Location:</div>
      <div class="summary__value">${userData.city}, ${userData.state}, ${
  userData.country
}</div>
    </div>
      
  </div>
  </div>
      
</div>
`;
cartMain.insertAdjacentHTML(
  "beforeend",
  `${profileComplete == true ? summaryHtml : completeProfileHmtl}`
);

let paymentHtml;
paymentHtml = `
<div data-tab="2" class="payment">
  <section id="payment-loader" class="loading__screen">
    <div class="loading__container">
      <div class="loading__visible loading__spinner"></div>
      <img
        src="img/Furnita-logo.png"
        alt="furnita logo"
        class="loading__logo"
      />
    </div>
  </section>
  <div class"loading__hidden payment-container">
    <div class="user-account__details user-account__form">
      <form class="user-form payment__form">
        <div class="user-form__input user-account__form--block">
          <label class="user-form__input--label" for="card-number">Card Number</label>
          <input class="input-form user-form__input--input" id="card-number" type="input" />
        </div>
        <div class="payment__form--inline">
          <div class="user-form__input">
            <label class="user-form__input--label" for="expiring-date"
              >Expiring Date</label
            >
            <input class="input-form user-form__input--input" id="expiring-date" type="text" />
          </div>
          <div class="user-form__input">
            <label class="user-form__input--label" for="cvv"
              >CVV</label
            >
            <input class="input-form user-form__input--input" id="cvv" type="text" />
          </div>
        </div>
        <div style="margin-inline-start:5rem">
          <i class="fa-brands fa-2x fa-cc-visa"></i>
          <i class="fa-brands fa-2x fa-cc-mastercard"></i>
          <i class="fa-brands fa-2x fa-cc-apple-pay"></i>
          <i class="fa-brands fa-2x fa-cc-stripe"></i>
        </div>
      </form>
    </div>
  </div>
  
</div>
`;
cartMain.insertAdjacentHTML("beforeend", paymentHtml);

// Summary and Payment Content
const summary = document.querySelector(".summary");
const payment = document.querySelector(".payment");

// Summary and Payment Container after the loader
const summaryContainer = document.querySelector(".summary-container");
const paymentContainer = document.querySelector(".payment-container");

// loader/spinner
const summaryLoader = document.getElementById("summary-loader");
const paymentLoader = document.getElementById("payment-loader");

summary.style.display = "none";
payment.style.display = "none";

let tab = 0;

function minMaxTab() {
  if (tab < 0) {
    tab = 0;
  }
  if (tab > 3) {
    tab = 3;
  }
}

function renderCurrTab() {
  window.scrollTo({ top: 0 });

  if (tab == 0) {
    cartTab.classList.add("cart__tab--active");
    summaryTab.classList.remove("cart__tab--active");
    paymentTab.classList.remove("cart__tab--active");

    // for cart
    cartContent.style.display = "block";
    summary.style.display = "none";
    payment.style.display = "none";
  } else if (tab == 1) {
    cartTab.classList.remove("cart__tab--active");
    summaryTab.classList.add("cart__tab--active");
    paymentTab.classList.remove("cart__tab--active");

    // for summary
    cartContent.style.display = "none";
    summary.style.display = "block";
    payment.style.display = "none";

    setTimeout(() => {
      summaryLoader.classList.remove("loading__visible");
      summaryLoader.classList.add("loading__hidden");

      summaryContainer.classList.remove("loading__hidden");
      summaryContainer.classList.add("loading__visible");
    }, 2000);

    if (profileComplete != true) cartBtnDiv.remove();
  } else if (tab == 2) {
    cartTab.classList.remove("cart__tab--active");
    summaryTab.classList.remove("cart__tab--active");
    paymentTab.classList.add("cart__tab--active");

    // for payment
    cartContent.style.display = "none";
    summary.style.display = "none";
    payment.style.display = "block";

    setTimeout(() => {
      summaryLoader.classList.remove("loading__visible");
      paymentLoader.classList.add("loading__hidden");

      paymentContainer.classList.remove("loading__hidden");
      paymentContainer.classList.add("loading__visible");
    }, 2000);
  } else if (tab == 3) {
    return window.location.assign("/payment_confirmed.html");
  }
}

// tab page button function
prevButton.addEventListener("click", (e) => {
  e.preventDefault();
  tab--;
  renderCurrTab();
  minMaxTab();
});

nextButton.addEventListener("click", (e) => {
  e.preventDefault();
  tab++;
  renderCurrTab();
  minMaxTab();
});
