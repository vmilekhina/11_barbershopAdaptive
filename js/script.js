// MAIN-NAV

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// LOGIN POPUP

var userLink = document.querySelector('.user-link');
var popupLogin = document.querySelector('.modal--login');
var popupLoginSubmit = document.querySelector('.form__button--submit')
var closeLogin = document.querySelector('.modal--close');
var form = popupLogin.querySelector("form");
var login = popupLogin.querySelector("[name=login]");
var password = popupLogin.querySelector("[name=password]");
var isStorageSupport = true;
var storage = "";


try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}


userLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupLogin.classList.add("modal-show");
  navMain.classList.remove('main-nav--opened');
  navMain.classList.add('main-nav--closed');
  if (storage) {
    login.value = storage;
    password.focus();
} else {
login.focus();
}

});

closeLogin.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupLogin.classList.remove("modal-show");
  popupLogin.classList.remove('modal-error');
});

popupLoginSubmit.addEventListener('click', function (evt) {
  if (!login.value || !password.value) {
      evt.preventDefault();
      popupLogin.classList.remove("modal-error");
      popupLogin.offsetWidth = popupLogin.offsetWidth;
      popupLogin.classList.add("modal-error");
  } else {
      if (isSupportStorage) {
          localStorage.setItem("login", login-value);
      }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
      if (popupLogin.classList.contains("modal-show")) {
          evt.preventDefault();
          popupLogin.classList.remove("modal-show");
          popupLogin.classList.remove("modal-error");
      }
  }
});



// ADVANTAGES SLIDER

var toggleAdvTwo = document.querySelector('.slider__toggle--two');
var toggleAdvThree = document.querySelector('.slider__toggle--three');
var toggleAdvOne = document.querySelector('.slider__toggle--one');
var advantageOne = document.querySelector('.advantages__item--fast');
var advantageTwo = document.querySelector('.advantages__item--cool');
var advantageThree = document.querySelector('.advantages__item--price');

toggleAdvTwo.addEventListener('click', function (evt) {
  evt.preventDefault();
  toggleAdvTwo.classList.add("slider__toggle--white");
  toggleAdvOne.classList.remove("slider__toggle--white");
  toggleAdvThree.classList.remove("slider__toggle--white");
  advantageOne.classList.remove("toggle-show");
  advantageThree.classList.remove("toggle-show");
  advantageTwo.classList.add("toggle-show");
});

toggleAdvThree.addEventListener('click', function (evt) {
  evt.preventDefault();
  toggleAdvThree.classList.add("slider__toggle--white");
  toggleAdvOne.classList.remove("slider__toggle--white");
  toggleAdvTwo.classList.remove("slider__toggle--white");
  advantageOne.classList.remove("toggle-show");
  advantageTwo.classList.remove("toggle-show");
  advantageThree.classList.add("toggle-show");
});

toggleAdvOne.addEventListener('click', function (evt) {
  evt.preventDefault();
  toggleAdvOne.classList.add("slider__toggle--white");
  toggleAdvThree.classList.remove("slider__toggle--white");
  toggleAdvTwo.classList.remove("slider__toggle--white");
  advantageOne.classList.add("toggle-show");
  advantageTwo.classList.remove("toggle-show");
  advantageThree.classList.remove("toggle-show");
});

// REVIEWS SLIDER

var toggleRevTwo = document.querySelector('.slider__toggle--review2');
var toggleRevThree = document.querySelector('.slider__toggle--review3');
var toggleRevOne = document.querySelector('.slider__toggle--review1');
var reviewOne = document.querySelector('.reviews__item--one');
var reviewTwo = document.querySelector('.reviews__item--two');
var reviewThree = document.querySelector('.reviews__item--three');

console.log(reviewOne);

toggleRevTwo.addEventListener('click', function (evt) {
  evt.preventDefault();
  toggleRevTwo.classList.add("slider__toggle--black");
  toggleRevOne.classList.remove("slider__toggle--black");
  toggleRevThree.classList.remove("slider__toggle--black");
  reviewOne.classList.remove("toggle-show");
  reviewThree.classList.remove("toggle-show");
  reviewTwo.classList.add("toggle-show");
});

toggleRevThree.addEventListener('click', function (evt) {
  evt.preventDefault();
  toggleRevThree.classList.add("slider__toggle--black");
  toggleRevOne.classList.remove("slider__toggle--black");
  toggleRevTwo.classList.remove("slider__toggle--black");
  reviewOne.classList.remove("toggle-show");
  reviewTwo.classList.remove("toggle-show");
  reviewThree.classList.add("toggle-show");
});

toggleRevOne.addEventListener('click', function (evt) {
  evt.preventDefault();
  toggleRevOne.classList.add("slider__toggle--black");
  toggleRevTwo.classList.remove("slider__toggle--black");
  toggleRevThree.classList.remove("slider__toggle--black");
  reviewTwo.classList.remove("toggle-show");
  reviewThree.classList.remove("toggle-show");
  reviewOne.classList.add("toggle-show");
});

// REVIEWS BUTTONS

var reviewPrev = document.querySelector('.reviews__prev');
var reviewNext = document.querySelector('.reviews__next');
var reviewList = [reviewOne, reviewTwo, reviewThree];
var i = 99;

reviewNext.addEventListener('click', function (evt) {
  evt.preventDefault();
  i = i + 1;
  x = i % 3;

  if (x === 0) {
    toggleRevOne.classList.add("slider__toggle--black");
    toggleRevThree.classList.remove("slider__toggle--black");
    reviewOne.classList.add("toggle-show");
    reviewThree.classList.remove("toggle-show");
  } 
  
  if (x === 1) {
    toggleRevOne.classList.remove("slider__toggle--black");
    toggleRevTwo.classList.add("slider__toggle--black");
    reviewOne.classList.remove("toggle-show");
    reviewTwo.classList.add("toggle-show");
  }
  if (x === 2) {
    toggleRevThree.classList.add("slider__toggle--black");
    toggleRevTwo.classList.remove("slider__toggle--black");
    reviewThree.classList.add("toggle-show");
    reviewTwo.classList.remove("toggle-show");
  }
  console.log(i);
  console.log(x);
  
});

reviewPrev.addEventListener('click', function (evt) {
  evt.preventDefault();
  i = i - 1;
  x = i % 3;

  if (x === 0) {
    toggleRevOne.classList.add("slider__toggle--black");
    toggleRevTwo.classList.remove("slider__toggle--black");
    reviewOne.classList.add("toggle-show");
    reviewTwo.classList.remove("toggle-show");
  }
  if (x === 1) {
    toggleRevThree.classList.remove("slider__toggle--black");
    toggleRevTwo.classList.add("slider__toggle--black");
    reviewThree.classList.remove("toggle-show");
    reviewTwo.classList.add("toggle-show");
  }
  if (x === 2) {
    toggleRevOne.classList.remove("slider__toggle--black");
    toggleRevThree.classList.add("slider__toggle--black");
    reviewThree.classList.add("toggle-show");
    reviewOne.classList.remove("toggle-show");

  }
  console.log(i);
  console.log(x);
});
  



