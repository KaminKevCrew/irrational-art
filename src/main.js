// require('./css/style.css');
import toggleNav from "./navBar";
import transformer from './transformer';
import digByDigSqRoot from './dig_by_dig_square_root';
import {eDigs, piDigs, phiDigs, rootTwoDigs} from './irrational-digs';
// quick change
let digits = "1234567890987654321234567890987654321234567890987654321234567890987654321234567890987654321234567890987654321234567890987654321234567890987654321234567890987654321234567890987654321234567890987654321234567890987654321234567890987654321"
let zCount = 0;

/************************        For NavBar        ***************************/
const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav');

burger.addEventListener('click', function () {
  toggleNav(burger, nav);
});

/*****************************  Canvas Related  *******************************/
const canvas = document.getElementById('canvas'); // gets canvas element
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d'); // gets the 2d context
ctx.lineWidth = 1;
ctx.lineCap = "round";
ctx.globalAlpha = 0.6;

window.onload = () => (transformer(ctx, digits, zCount))

/*********************  Changes Current Number Showing  ***********************/

const e = document.querySelector('.e');
const phi = document.querySelector('.phi');
const pi = document.querySelector('.pi');
const rootTwo = document.querySelector('.root-two');
const userInput = document.querySelector('.user-input');
const digitInput = document.querySelector('.digit-input');
const closeButton = document.querySelector('.close');

closeButton.addEventListener('click', function () {
  const modal = document.querySelector('.modal');
  modal.classList.toggle('exit-modal');
})

userInput.addEventListener('submit', function (event) {
  event.preventDefault();
  digits = document.querySelector('#user-input').value;
  digits = digByDigSqRoot(digits, 300);
  transformer(ctx, digits, zCount);
})

digitInput.addEventListener('submit', function (event) {
  event.preventDefault();
  digits = digByDigSqRoot(digits, 300);
  transformer(ctx, digits, zCount);  
})

e.addEventListener('click', function () {
  digits = eDigs;
  transformer(ctx, digits, zCount);
});

phi.addEventListener('click', function () {
  digits = phiDigs;
  transformer(ctx, digits, zCount);
});

pi.addEventListener('click', function () {
  digits = piDigs;
  transformer(ctx, digits, zCount);
});

rootTwo.addEventListener('click', function () {
  digits = rootTwoDigs;
  transformer(ctx, digits, zCount);
});