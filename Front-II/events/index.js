const btn = document.getElementById("teste");
btn.addEventListener("click", executar);

function executar(event) {
  console.log("ola");
  console.log(event);
}

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
  alert("recebi o form");
});

document.getElementById("testeEmail").addEventListener("focus", (event) => {
  console.log("focou no elemento");
});

document.getElementById("testeEmail").addEventListener("blur", (event) => {
  console.log("tirou o foco do elemento");
});

document.addEventListener("scroll", (event) => {
  console.log(window.scrollY);
  console.log("escrolou né");
  console.log(event);
});

window.addEventListener("resize", (event) => {
  console.log("moveu a janela");
});
