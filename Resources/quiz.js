outputMsg = document.querySelector('#output');
outputBtn = document.querySelector('#submit-btn');
form = document.querySelector('form');
const correctAnswerArray = ['60°', 'acute'];

function checkAnswer(e) {
    let index = 0, score = 0;    
    const datas = new FormData(form);
	e.preventDefault();
	for (let data of datas.values()) {
		if (data === correctAnswerArray[index]) {
			score++;
		}
		index++;
	}
	outputMsg.innerText = `Your score is ${score}`;
}

outputBtn.addEventListener('click', checkAnswer);