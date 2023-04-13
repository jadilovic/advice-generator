const adviceNumber = document.querySelector('h1');
const adviceElement = document.querySelector('p');
const sectionDice = document.querySelector('section');
const dice = document.querySelector('.dice');

const gettingAdvice = async () => {
	const response = await fetch('https://api.adviceslip.com/advice');
	const { slip } = await response.json();
	const { id, advice } = slip;
	adviceNumber.textContent = id;
	adviceElement.textContent = advice;
};

gettingAdvice();

sectionDice.addEventListener('click', () => {
	gettingAdvice();
	dice.style.animation = 'spin 0.3s linear 1';
	setTimeout(function () {
		dice.style.animation = 'none';
	}, 1000);
});
