// Global variables
const time = document.querySelector(".watch .time");
const start_btn = document.getElementById("start");
const stop_btn = document.getElementById("stop");
const reset_btn = document.getElementById("reset");

let counter = 0;
let interval = null;

// Event listeners
start_btn.addEventListener("click", start);
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", reset);

// function that updates that checks and dsplay the correct time

function timer() {
  counter++;

  //   /   Format the  time
  let mins = Math.floor(counter / 60);
  let secs = counter;
  // let millisecs = counter * 1000;
  //   modulo%  reminder is 0

  // if (millisecs < 10) millisecs = "0" + millisecs;
  if (secs < 10) secs = "0" + secs;
  if (mins < 10) mins = "0" + mins;

  time.innerText = `${mins}:${secs}`;
}

function start() {
  if (interval) return;

  interval = setInterval(timer, 100);
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  stop();
  counter = 0;
  time.innerText = "00:00";
}
