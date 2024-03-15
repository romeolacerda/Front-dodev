const formEl = document.querySelector(".promotions");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(formEl);
  const data = Object.fromEntries(formData);
  console.log(data);
  console.log("preparando para envio...");
  //no ex a api não funciona mesmo
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
