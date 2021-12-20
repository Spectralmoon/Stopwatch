let [milliseconds, seconds, minutes] = [0, 0, 0];
let timerRef = document.querySelector(".watch");
let int = null;

document.getElementById("start").addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 10);
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(int);
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(int);
  [milliseconds, seconds, minutes] = [0, 0, 0];
  timerRef.innerHTML = " 00:00:00 ";
});

function displayTimer() {
  milliseconds += 1;
  if (milliseconds == 60) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
  }

  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "0" + milliseconds
      : milliseconds < 10
      ? "0" + milliseconds
      : milliseconds;

  timerRef.innerHTML = ` <span class="digit">${m}</span> : <span class="digit">${s} </span>: <span class="digit">${ms}</span>`;
}
