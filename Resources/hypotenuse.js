const sides = document.querySelectorAll('.input-side');
const outputBtn = document.querySelector('#check-button');
const outputMsg = document.querySelector('#output-msg');

function findHypotenuse() {
    //sqrt(a^2 + b^2)
    const squareSum = (sides[0].value * sides[0].value) + (sides[1].value * sides[1].value);
    console.log(squareSum);
    const hypotenuse = Math.sqrt(squareSum);
    console.log(hypotenuse);
    outputMsg.innerHTML = `The hypotenuse is ${hypotenuse}`;
}

outputBtn.addEventListener('click', findHypotenuse);