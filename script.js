const durationInput = document.querySelector("#duration");
const pauseButton = document.querySelector("#pause");
const startButton = document.querySelector("#start");
const circle = document.querySelector("circle");
const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

let totatime = 0;
const timer = new Timer(startButton, pauseButton, durationInput, {
  onStart(totalDuration) {
    totatime = totalDuration;
  },
  onComplete() {
    console.log("TImer COmplete");
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemaining) / totatime - perimeter
    );
  },
});
