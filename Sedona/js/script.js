var link = document.querySelector(".select-date");
var popup = document.querySelector(".js-form");

link.addEventListener("click", function(event) {
  popup.classList.toggle("js-form-hide");
});
