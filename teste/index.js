function toggleCart() {
  var cart = document.getElementById("cart");
  if (cart.style.display === "block") {
    cart.style.display = "none";
  } else {
    cart.style.display = "block";
  }
}

// Fechar o carrinho quando clicar fora dele
window.addEventListener("click", function (event) {
  var cart = document.getElementById("cart");
  var cartButton = document.querySelector(".cart-button");
  if (!cart.contains(event.target) && event.target !== cartButton) {
    cart.style.display = "none";
  }
});
