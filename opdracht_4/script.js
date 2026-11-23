const geboortejaar = prompt("In welk jaar ben je geboren?");
const leeftijd = 2026 - geboortejaar;

document.getElementById("leeftijd").textContent =
    `Je bent ongeveer ${leeftijd} jaar oud.`;