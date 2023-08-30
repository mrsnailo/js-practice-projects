// cart codes
let cart = [];
let couponAplied = false;
let isCoupon = false;
var cartItems = document.getElementById("cart-items");
var purchaseButton = document.getElementById("purchaseButton");
purchaseButton.disabled = true;
if (cart.length == 0) {
  cartItems.innerText = "Cart is empty!";
}
// coupon button active
const inputField = document.getElementById("couponText");
const myButton = document.getElementById("couponButton");

inputField.addEventListener("input", function () {
  const inputValue = inputField.value;

  if (inputValue === "SALE2020") {
    myButton.disabled = false;
    myButton.classList.remove("disabledButton");
    isCoupon = true;
  } else {
    myButton.disabled = true;
    myButton.classList.add("disabledButton");
  }
});
function updateCart() {
  if (cart.length > 0) {
    cartItems.innerText = "";
    var purchaseButton = document.getElementById("purchaseButton");
    purchaseButton.disabled = false;
    purchaseButton.classList.remove("disabledButton");
  }
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item;
    cartItems.appendChild(li);
  });
}
function clickHome(){
  location.reload(true);
}
function couponCheck(total) {
  if (total > 199) {
    var couponCard = document.getElementById("coupon");
    couponCard.classList.remove("hidden");
  }
}
function productClickHandler(name, price) {
  var totalAmountTag = document.getElementById("totalAm");
  var prevTotalAmount = totalAmountTag.innerText;
  prevTotalAmount = parseFloat(prevTotalAmount);
  currentTotal = parseFloat(price) + prevTotalAmount;
  var subtotal = document.getElementById("subTotal");
  totalAmountTag.innerText = currentTotal + " TK";
  subtotal.innerText = currentTotal + " TK";
  cart.push(name);

  couponCheck(currentTotal);
}
function makePurchase(){
    console.log("clicked")
    document.getElementById("modal").classList.remove("hidden");
    cart = [];
  }
function addproduct(name, price) {
  productClickHandler(name, price);
  updateCart();
}

// coupon apply

document.getElementById("couponButton").addEventListener("click", function () {
  if (!couponAplied && isCoupon) {
    var totalprice = document.getElementById("totalAm");
    var discount = document.getElementById("discount");
    var subtotal = document.getElementById("subTotal");
    var totalpriceAm = parseFloat(totalprice.innerText);

    var newDiscount = Math.ceil((20 / 100) * totalpriceAm);

    var subTotal = totalpriceAm - newDiscount;

    discount.innerText = newDiscount + " TK";
    subtotal.innerText = subTotal;

  } else if (!isCoupon) {
    alert("Enter correct coupon");
  }else {
    alert("Coupon already used")
  }

  
  
});
