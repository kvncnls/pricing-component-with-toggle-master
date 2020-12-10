const toggleBtn = document.querySelector(".header__frequency__toggle-btn");

let isBtnInAction = false;
toggleBtn.addEventListener("click", () => {
  if (isBtnInAction) {
    reverseAnimation();
    isBtnInAction = false;
    return false;
  }
  isBtnInAction = true;
  startAnimation();
});

let startAnimation = () => {
  gsap.to(".circle", {
    x: 24,
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
