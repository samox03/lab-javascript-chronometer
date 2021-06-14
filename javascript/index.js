const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
   printMinutes();
   printSeconds();
   printMilliseconds();
}

function printMinutes() {
  let placeholderMin1 = getElementById('minDec')
  let placeholderMin2 = getElementById('minUni')

  placeholderMin1 = Chronometer.twoDigitsNumbers(getMinutes)[0]
  placeholderMin2 = Chronometer.twoDigitsNumbers(getMinutes)[1]
  //getMinutes()
}

function printSeconds() {
  let placeholderSec1 = getElementById('minDec')
  let placeholderSec2 = getElementById('minUni')
  placeholderSec1 = Chronometer.twoDigitsNumbers(getSeconds)[0]
  placeholderSec2 = Chronometer.twoDigitsNumbers(getSeconds)[1]
  //getSeconds()
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let splitPlaceholder = document.getElementById('splits')
  let splitElement = document.createElement('li')
  splitList.innerHTML= Chronometer.splitClick() 
  splitPlaceholder.appendChild(splitElement);

  // ... your code goes here
}

function clearSplits() {
  let splitPlaceholder = document.getElementById('splits')
  splitPlaceholder.innerHTML = " "
  // ... your code goes here
}

function setStopBtn() {
  let stopStartBtn = getElementById(btnLeft)
  btnLeft.classList.toggle('stop')
  
  stopStartBtn = chronometer.stopClick()
  
  //btnRight.innerHTML = 'STOP'
  // ... your code goes here
}

function setSplitBtn() {
  let splitBtn = getElementById(btnLeft)
   btnLeft.classList.toggle('split')
}


function setStartBtn() {
  chronometer.startClick(callback)
}

function setResetBtn() {
  chronometer.resetClick()
}

// Start/Stop Button
//Set the btnLeft button with the text STOP, and the class btn stop.
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerHTML== 'START'){
    btnLft.textContent = `STOP`;
    // + call function start
  } 
  else if (btnLeft.innerHTML== 'STOP'){
    btnLeft.textContent = `START`;
    // + call function stop
  }

});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnLeft.innerHTML== 'STOP') {
      btnRight.innerHTML == 'SPLIT';
      // + call function split;
  }
  if (btnLeft.innerHTML== 'START'){
      btnRight.innerHTML == 'RESET';
      // + call function reset
    )

});
