class Timer {
  constructor(startButton, pauseButton, durationInput, callBacks) {
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    this.durationInput = durationInput;
    if (callBacks) {
      this.onStart = callBacks.onStart;
      this.onTick = callBacks.onTick;
      this.onComplete = callBacks.onComplete;
    }

    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }

  start = () => {
    if (this.onStart) {
      this.onStart(this.timeRemaining);
    }
    this.tic();
    this.intervalId = setInterval(this.tic, 50);
  };

  pause = () => {
    clearInterval(this.intervalId);
  };

  tic = () => {
    if (this.timeRemaining > 0) {
      this.timeRemaining = this.timeRemaining - 0.05;
      if (this.onTick) {
        this.onTick(this.timeRemaining);
      }
    } else {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    }
  };

  //*Using getters And setters
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }
}
