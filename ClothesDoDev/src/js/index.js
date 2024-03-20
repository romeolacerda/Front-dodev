const formEl = document.querySelector(".promotions");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(formEl);
  const data = Object.fromEntries(formData);
  fetch(
    "https://apigenerator.dronahq.com/api/1iUnvItP/dodevclothespromotions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
});

function toggleMenu() {
  var dropdownMenu = document.getElementById("dropdownMenu");
  dropdownMenu.classList.toggle("show");
}

let cartTab = document.querySelector(".cartTab");
let cartIsOpen = false; // Inicialmente, o carrinho está fechado

function toggleCart() {
  if (cartIsOpen) {
    // Se o carrinho estiver aberto, feche-o definindo right como -400px
    cartTab.style.right = "-400px";
    cartIsOpen = false;
  } else {
    // Se o carrinho estiver fechado, abra-o definindo right como 0
    cartTab.style.right = "0";
    cartIsOpen = true;
  }
}

function productChosen(productName) {
  window.localStorage.setItem("nomeDoProduto", productName);
}

function productTypeInfos() {
  let productInfo = window.localStorage.getItem("nomeDoProduto");
  let productContent = document.querySelector(".productContent");

  if (productInfo == "blusaPreta") {
    let h3Element = productContent.querySelector(".productInfos h3");
    h3Element.innerText = "Blusa Preta";
    let h2Element = productContent.querySelector(".productInfos h2");
    h2Element.innerText = "R$ 120";
    let imgElement = productContent.querySelector(".productContent img");
    imgElement.src = "./imgs/photo-1627910016961-ee310ef0b108 (1).jpeg";
    imgElement.alt = "blusaPreta";
    let imgsElements = productContent.querySelectorAll(".productSubImages img");
    imgsElements.forEach((imgElement, index) => {
      imgElement.src = "./imgs/photo-1627910016961-ee310ef0b108 (1).jpeg"; // Substitua pelo caminho da sua imagem
      imgElement.alt = `Imagem ${index + 1}`; // Altere conforme necessário
    });
  }
  if (productInfo == "moletomBranco") {
    let h3Element = productContent.querySelector(".productInfos h3");
    h3Element.innerText = "Moletom Branco";
    let h2Element = productContent.querySelector(".productInfos h2");
    h2Element.innerText = "R$ 400";
    let imgElement = productContent.querySelector(".productContent img");
    imgElement.src = "./imgs/photo-1620799140408-edc6dcb6d633 (1).jpeg";
    imgElement.alt = "moletomBranco";
    let imgsElements = productContent.querySelectorAll(".productSubImages img");
    imgsElements.forEach((imgElement, index) => {
      imgElement.src = "./imgs/photo-1620799140408-edc6dcb6d633 (1).jpeg"; // Substitua pelo caminho da sua imagem
      imgElement.alt = `Imagem ${index + 1}`; // Altere conforme necessário
    });
  }
  if (productInfo == "moletomPreto") {
    let h3Element = productContent.querySelector(".productInfos h3");
    h3Element.innerText = "Moletom Preto";
    let h2Element = productContent.querySelector(".productInfos h2");
    h2Element.innerText = "R$ 399";
    let imgElement = productContent.querySelector(".productContent img");
    imgElement.src = "./imgs/photo-1622567893612-a5345baa5c9a (1).jpeg";
    imgElement.alt = "moletomBranco";
    let imgsElements = productContent.querySelectorAll(".productSubImages img");
    imgsElements.forEach((imgElement, index) => {
      imgElement.src = "./imgs/photo-1622567893612-a5345baa5c9a (1).jpeg"; // Substitua pelo caminho da sua imagem
      imgElement.alt = `Imagem ${index + 1}`; // Altere conforme necessário
    });
  }
}

function incrementQuantity() {
  let quantityElement = document.querySelector(".quantity");
  let currentQuantity = parseInt(quantityElement.innerText);
  quantityElement.innerText = currentQuantity + 1;
}

function decrementQuantity() {
  let quantityElement = document.querySelector(".quantity");
  let currentQuantity = parseInt(quantityElement.innerText);
  if (currentQuantity > 1) {
    quantityElement.innerText = currentQuantity - 1;
  }
}

function addToCart() {
  // Seleciona o produto atual
  let productContent = document.querySelector(".productContent");
  let productName = productContent.querySelector(".productInfos h3").innerText;
  let productPrice = parseFloat(
    productContent
      .querySelector(".productInfos h2")
      .innerText.replace("R$ ", "")
  );
  let productQuantity = parseInt(document.querySelector(".quantity").innerText);

  // Calcula o preço total
  let totalPrice = productQuantity * productPrice;

  // Cria um novo elemento para o item do carrinho
  let cartItem = document.createElement("div");
  cartItem.classList.add("cartItem");

  // Define o conteúdo do item do carrinho
  cartItem.innerHTML = `
    <div class="productName">
      <span class="minus">${productName}</span>
    </div>
    <div class="Quantity">
      <span class="minus">${productQuantity}</span>
    </div>
    <div class="Price">
      <span class="minus">${totalPrice.toFixed(2)}</span>
    </div>
  `;

  // Adiciona o item do carrinho à lista de carrinho
  let listCart = document.querySelector(".listCart");
  listCart.appendChild(cartItem);
}
