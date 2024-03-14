document.getElementById("tipoInputName").addEventListener("blur", (e) => {
  window.localStorage.setItem("name", e.target.value);
});

document.getElementById("tipoInputAddress").addEventListener("blur", (e) => {
  window.localStorage.setItem("address", e.target.value);
});

document.getElementById("tipoInputWorkDays").addEventListener("blur", (e) => {
  window.localStorage.setItem("workDays", e.target.value);
});

document.getElementById("tipoInputOpenHour").addEventListener("blur", (e) => {
  window.localStorage.setItem("openHour", e.target.value);
});

document.getElementById("tipoInputCloseHour").addEventListener("blur", (e) => {
  window.localStorage.setItem("closeHour", e.target.value);
});

const formEl = document.querySelector(".form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(formEl);
  const data = Object.fromEntries(formData);
  console.log(data);
  console.log("preparando para envio...");
  //no ex a api não funciona mesmo
  fetch("https://api.flit.com.br/submeterDados", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
  // .catch((error) => console.log(error));
});

function preencherCamposLocalStorage() {
  // Recuperar os valores do localStorage
  const nome = localStorage.getItem("name");
  const endereco = localStorage.getItem("address");
  const diasFuncionamento = localStorage.getItem("workDays");
  const horarioAbertura = localStorage.getItem("openHour");
  const horarioFechamento = localStorage.getItem("closeHour");

  // Preencher os campos com os valores recuperados
  document.getElementById("tipoInputName").value = nome || "";
  document.getElementById("tipoInputAddress").value = endereco || "";
  document.getElementById("tipoInputWorkDays").value = diasFuncionamento || "";
  document.getElementById("tipoInputOpenHour").value = horarioAbertura || "";
  document.getElementById("tipoInputCloseHour").value = horarioFechamento || "";
}

preencherCamposLocalStorage();
