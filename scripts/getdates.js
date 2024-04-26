// This block of code is going to diplay the current year

const today = new Date();

let year = today.getFullYear();

document.getElementById("currentyear").innerHTML = year;

// This block of code is going to get the Last Modified

let text = document.lastModified;

document.getElementById(lastModified).innerHTML = text;
