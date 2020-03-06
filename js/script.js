var link = document.querySelector(".information__contacts-link");
var mapLink = document.querySelector(".information__contacts-picture");
var popup = document.querySelector(".modal-feedback");
var mapPopup = document.querySelector(".modal-map");
var close = document.querySelector(".modal__close");
var mapClose = document.querySelector(".modal-map__close");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var form = popup.querySelector(".modal-feedback__form");
var storage = localStorage.getItem("login");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-feedback_show");
  login.focus();
  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-map_show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-feedback_show");
  popup.classList.remove("modal-feedback_error");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-map_show");
});

form.addEventListener("submit", function(evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-feedback_error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-feedback_error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-feedback_show")) {
      evt.preventDefault();
      popup.classList.remove("modal-feedback_show");
    }

    if (mapPopup.classList.contains("modal-map_show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-map_show");
    }
  }
});
