var link = document.querySelector(".information__contacts-link");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal__close");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var form = popup.querySelector(".modal-feedback__form");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  console.log("Клик по ссылке напишите нам");
  popup.classList.add("modal-feedback_show");
  login.focus();
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  console.log("Закрытие формы обратной связи");
  popup.classList.remove("modal-feedback_show");
});

form.addEventListener("submit", function(evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    console.log("Нужно ввести логин и пароль");
  }
});
