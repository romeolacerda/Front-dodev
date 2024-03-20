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
