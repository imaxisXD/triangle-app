const sides = document.querySelectorAll('.input-side');
const outputBtn = document.querySelector('#check-button');
const outputMsg = document.querySelector('#output-msg');

function calcArea() {
    //0.5 * base * height
    const area = 0.5 * (sides[0].value * sides[1].value);
    console.log(area);    
    outputMsg.innerHTML = `The Area is ${area} cm²`;
}

outputBtn.addEventListener('click', calcArea);