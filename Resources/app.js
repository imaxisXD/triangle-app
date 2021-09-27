const angles = document.querySelectorAll('.input-angle');
const checkBtn = document.querySelector('#check-button');
const outputMsg = document.querySelector('#output-msg');

checkBtn.addEventListener('click', checkAngle);

function checkAngle() {
    const sumAngle = Number(angles[0].value) + Number(angles[1].value) + Number(angles[2].value);
    if (sumAngle != 180) {
        outputMsg.innerHTML = 'Not a Triangle' ;
    }
    else {
        outputMsg.innerHTML = "It's a Triangle" ;
    }
}
