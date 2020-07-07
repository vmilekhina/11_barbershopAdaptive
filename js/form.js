// POPUP FORM

var formSubmit = document.querySelector('.form__button--submit');
var firstName = document.querySelector("[name=first-name]");
var telMobile = document.querySelector("[name=tel]");
var popupFailure = document.querySelector('.modal--failure');
var popupFailureClose = popupFailure.querySelector('.form__button--failure')
var popupSuccess = document.querySelector('.modal--success');
var popupSuccessClose = popupSuccess.querySelector('.form__button--success')

formSubmit.addEventListener('click', function (evt) {
  if (!firstName.value || !telMobile.value) {
      evt.preventDefault();
      popupFailure.classList.add("modal-show");
      
  } 
  else {
    evt.preventDefault();
    popupSuccess.classList.add("modal-show");
  }
});

popupFailureClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupFailure.classList.remove("modal-show");
});

popupSuccessClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupSuccess.classList.remove("modal-show");
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
      if (popupFailure.classList.contains("modal-show")) {
          evt.preventDefault();
          popupFailure.classList.remove("modal-show");
      }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
      if (popupSuccess.classList.contains("modal-show")) {
          evt.preventDefault();
          popupSuccess.classList.remove("modal-show");
      }
  }
});