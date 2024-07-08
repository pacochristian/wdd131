// This block of code is going to diplay the current year

const today = new Date();

let year = today.getFullYear();

document.getElementById("currentyear").innerHTML = year;

// This block of code is going to get the Last Modified

let text = document.lastModified;

document.getElementById("lastModified").innerHTML = text;

// The mobile humberger menu

const ul = document.querySelector(`ul`);
const closeMenu = document.querySelector(`closeMenu`);
const openMenu = document.querySelector(`openMenu`);

openMenu.addEventListener(`click`, show);
closeMenu.addEventListener(`click`, close);

function show() {
  ul.style.display = `flex`;
  ul.style.top = `0`;
}

function close() {
  ul.style.top = `-100%`;
}
