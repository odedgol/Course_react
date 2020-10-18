const selectElement = document.querySelector(".source");
selectElement.addEventListener("change", (event) => {
  var inputs = document.querySelectorAll("input");
  inputs.forEach((input) => (input.value = `${event.target.value}`));
});
