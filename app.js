/* BUTTON TOGGLE */
const toggleBtn = document.querySelector(".header__frequency__toggle-btn");

let isBtnInAction = false;
toggleBtn.addEventListener("click", () => {
  if (isBtnInAction) {
    reverseAnimation();
    isBtnInAction = false;
    monthlyPrices();
    return false;
  }
  isBtnInAction = true;
  annualPrices();
  startAnimation();
});

let startAnimation = () => {
  gsap.to(".circle", {
    x: -24,
    duration: 0.25,
    ease: "power1",
  });
};

let reverseAnimation = () => {
  gsap.to(".circle", {
    x: 0,
    duration: 0.25,
    ease: "power1",
  });
};

const basicPrice = document.querySelector(".basic-price p");
const proPrice = document.querySelector(".pro-price p");
const masterPrice = document.querySelector(".master-price p");

function monthlyPrices() {
  basicPrice.textContent = "19.99";
  proPrice.textContent = "24.99";
  masterPrice.textContent = "39.99";
}

function annualPrices() {
  basicPrice.textContent = "199.99";
  proPrice.textContent = "249.99";
  masterPrice.textContent = "399.99";
}
