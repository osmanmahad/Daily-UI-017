const bar = document.getElementById("bar");
const nextButton = document.getElementById("next-button");
let currentWidth = 0;
const stopPoints = document.querySelectorAll(".stop-point");

stopPoints[0].style.backgroundColor = "#59BDC9";

nextButton.addEventListener("click", function () {
  currentWidth += 33.3;
  bar.style.width = currentWidth + "%";
  if (currentWidth >= 99.9) {
    currentWidth = 0;
    bar.style.width = currentWidth + "%";
  }
  for (let i = 0; i < stopPoints.length; i++) {
    if (i * 33.3 <= currentWidth) {
      stopPoints[i].style.backgroundColor = "#59BDC9";
    } else {
      stopPoints[i].style.backgroundColor = "#97D9E1";
    }
  }
});
