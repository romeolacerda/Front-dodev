function salvar(texto) {
  window.sessionStorage.setItem("cor", texto);
}

document.getElementById("inputTexto").addEventListener("blur", (event) => {
  salvar(event.target.value);
});
