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
    h3Element.innerText = "blusaPreta";
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
    h3Element.innerText = "moletomBranco";
  }
  if (productInfo == "moletomPreto") {
    let h3Element = productContent.querySelector(".productInfos h3");
    h3Element.innerText = "moletomPreto";
  }
}
