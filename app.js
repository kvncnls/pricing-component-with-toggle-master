const circleBtn = document.querySelector(".circle");

let isBtnInAction = false;
circleBtn.addEventListener("click", () => {
  if (isBtnInAction) {
    reverseAnimation();
    console.log(isBtnInAction);
    isBtnInAction = false;
    return false;
  }
  isBtnInAction = true;
  startAnimation();
});

let startAnimation = () => {
  gsap.to(".circle", {
    x: 23,
    duration: 0.5,
  });
};

let reverseAnimation = () => {
  gsap.to(".circle", {
    x: 0,
    duration: 0.5,
  });
};
