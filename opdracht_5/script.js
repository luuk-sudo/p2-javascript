const getal = 10;
const string = "20";

console.log(getal + getal);
console.log(getal + string);

document.getElementById("getal-antwoord").textContent =
    `Getal + getal: ${getal + getal}`;

document.getElementById("string-antwoord").textContent =
    `Getal + string: ${getal + string}`;