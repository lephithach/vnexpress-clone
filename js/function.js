// Timer
const timer = document.querySelector(".timer");
const getDay = (day) => {
  switch (day) {
    case 0:
      return "Chủ nhật";
    case 1:
      return "Thứ hai";
    case 2:
      return "Thứ ba";
    case 3:
      return "Thứ tư";
    case 4:
      return "Thứ năm";
    case 5:
      return "Thứ sáu";
    case 6:
      return "Thứ bảy";
    default:
      break;
  }
};

var date = new Date();
var thu = getDay(date.getDay());
var ngay = date.getDate();
var thang = date.getMonth() + 1;
var nam = date.getFullYear();

timer.innerText = `${thu}, ${ngay}/${thang}/${nam}`;

// Login
const userLogin = document.querySelector(".header__right-user");
const btnUerLoginClose = document.querySelector(".modal__btn__close");
const formUserLogin = document.querySelector(".modal__login");

userLogin.onclick = (e) => {
  e.preventDefault();
  formUserLogin.classList.add("show");
};

btnUerLoginClose.onclick = (e) => {
  e.preventDefault();
  formUserLogin.classList.remove("show");
};

// Scroll to top
const onTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// Navbar
const navbar = document.querySelector(".nav");
const header = document.querySelector(".header");

document.addEventListener("scroll", (e) => {
  if (window.scrollY >= 55) {
    navbar.classList.add("sticky");
    document.querySelector(".ontop").style.display = "block";
    // document.querySelector(".nav__full").style.top = navbar.offsetHeight + "px";
  } else {
    navbar.classList.remove("sticky");
    document.querySelector(".ontop").style.display = "none";
    // document.querySelector(".nav__full").style.top =
    //   navbar.offsetHeight + header.offsetHeight + "px";
  }
});

// Navbar full
const btnNavbarAllShow = document.querySelectorAll(".navbar__all");
const btnNavbarAllClose = document.querySelector(".nav__full__header a");
const navbarFull = document.querySelector(".nav__full");

btnNavbarAllShow.forEach((val, key) => {
  val.onclick = (e) => {
    e.preventDefault();

    if (window.scrollY < 55) {
      navbar.classList.toggle("sticky");
    }

    navbarFull.classList.toggle("show");
    document.querySelector("body").classList.toggle("o-hidden");
  };
});

btnNavbarAllClose.onclick = (e) => {
  e.preventDefault();
  if (window.scrollY < 55) {
    navbar.classList.remove("sticky");
  }

  navbarFull.classList.remove("show");
  document.querySelector("body").classList.remove("o-hidden");
};

// Show password form login
const btnShowPassword = document.querySelectorAll(
  "form .form-group .show-password"
);
const inputPasswordForm = document.querySelectorAll(
  "form .form-group input[type=password]"
);

btnShowPassword.forEach((val, key) => {
  val.onclick = (e) => {
    if (inputPasswordForm[key].getAttribute("type") === "password") {
      inputPasswordForm[key].setAttribute("type", "text");
      btnShowPassword[key].innerHTML = `<i class="bi bi-eye-slash-fill"></i>`;
    } else {
      inputPasswordForm[key].setAttribute("type", "password");
      btnShowPassword[key].innerHTML = `<i class="bi bi-eye-fill"></i>`;
    }
  };
});

// Change tab form login to register
const btnFormLogin = document.querySelector("#btn__form__login");
const btnFormRegister = document.querySelector("#btn__form__register");
const modalLoginLeft = document.querySelector("#modal__login__left");
const modalLoginRight = document.querySelector("#modal__login__right");
const modalRegisterLeft = document.querySelector("#modal__register__left");
const modalRegisterRight = document.querySelector("#modal__register__right");

btnFormRegister.onclick = (e) => {
  e.preventDefault();

  btnFormRegister.classList.add("active");
  btnFormLogin.classList.remove("active");

  modalLoginLeft.classList.remove("show");
  modalLoginRight.classList.remove("show");
  modalLoginLeft.classList.add("none");
  modalLoginRight.classList.add("none");

  modalRegisterLeft.classList.remove("none");
  modalRegisterRight.classList.remove("none");
  modalRegisterLeft.classList.add("show");
  modalRegisterRight.classList.add("show");
};

btnFormLogin.onclick = (e) => {
  e.preventDefault();

  btnFormLogin.classList.add("active");
  btnFormRegister.classList.remove("active");

  modalRegisterLeft.classList.remove("show");
  modalRegisterRight.classList.remove("show");
  modalRegisterLeft.classList.add("none");
  modalRegisterRight.classList.add("none");

  modalLoginLeft.classList.remove("none");
  modalLoginRight.classList.remove("none");
  modalLoginLeft.classList.add("show");
  modalLoginRight.classList.add("show");
};

// test
const btnNavbarFullMore = document.querySelectorAll(".nav__full-more");

btnNavbarFullMore.forEach((val, key) => {
  val.onclick = (e) => {
    e.preventDefault();

    let items = e.path[2].querySelectorAll(".nav__full-items");
    let btnNavbarFullMore = e.path[1];

    items.forEach((val, key) => {
      val.classList.remove("hidden");
    });

    btnNavbarFullMore.classList.add("hidden");
  };
});
