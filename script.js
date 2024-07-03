function changeImage(imageSrc) {
  document.getElementById("main-image").src = imageSrc;
}

function selectColor(element) {
  const colors = document.querySelectorAll(".color");
  colors.forEach((color) => (color.style.border = "1px solid #ccc"));
  element.style.border = "2px solid #000";
}

function decreaseQuantity() {
  const quantityInput = document.getElementById("quantity");
  let quantity = parseInt(quantityInput.value);
  if (quantity > 1) {
    quantityInput.value = quantity - 1;
  }
}

function increaseQuantity() {
  const quantityInput = document.getElementById("quantity");
  let quantity = parseInt(quantityInput.value);
  quantityInput.value = quantity + 1;
}
function addToCart() {
  const quantity = document.getElementById("quantity").value;
  alert(`Added ${quantity} Embrace Sideboard(s) to your cart.`);
}
