"use strict";
const start = document.querySelector(".start");
const hold = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const seconds = document.querySelector(".seconds");
const tens = document.querySelector(".tens");

start.addEventListener("click", startTimer);
hold.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);

var myInterval;

let i = 0;
let a = 0;

function startTimer() {
  start.disabled = true;
  myInterval = setInterval(myTimer, 10);
}
function myTimer() {
  i++;
  if (i < 9) tens.innerHTML = "0" + i;
  if (i > 9) tens.innerHTML = i;
  if (i == 99) {
    i = 0;
    a++;
    seconds.innerHTML = "0" + a;
  }
  if (a < 9) seconds.innerHTML = "0" + a;
  if (a > 9) seconds.innerHTML = a;
}

function stopTimer() {
  start.disabled = false;
  clearInterval(myInterval);
}
function resetTimer() {
  start.disabled = false;
  tens.innerHTML = "00";
  seconds.innerHTML = "00";
}
