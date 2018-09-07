let cookieCount = 0;
let clickPower = 1;

// now tracks the h1 element
let cookieCounter = document.getElementById('cookie-counter');

// get the cookie cliker button
let cookieClicker = document.getElementById('cookie-clicker');


cookieClicker.addEventListener('click', () =>{
  cookieCount+=clickPower
  cookieCounter.innerHTML = cookieCount;
  console.log(typeof cookieCounter)
})
