const selectElement = document.querySelector(".source");
selectElement.addEventListener("change", (event) => {
  var inputs = document.querySelectorAll("input");
  const randomIndex = Math.floor(Math.random() * (inputs.length - 1));
  inputs[randomIndex].value = `${event.target.value}`;
});
