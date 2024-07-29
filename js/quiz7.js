// Get the form element
const questionCards = [
	document.querySelector('#first-question'),
	document.querySelector('#second-question'),
	document.querySelector('#third-question'),
	document.querySelector('#fourth-question'),
	document.querySelector('#fifth-question'),
	document.querySelector('#sixth-question'),
	document.querySelector('#seventh-question'),
	document.querySelector('#eighth-question'),
	document.querySelector('#nineth-question'),
	document.querySelector('#tenth-question'),
	document.querySelector('#eleventh-question')
];

// Options with corect answer
const radios = {
	1: "radio2",
	2: "radio5",
	3: "radio10",
	4: "radio16",
	5: "radio18",
	6: "radio22",
	7: "radio23",
	8: "radio27",
	9: "radio32",
	10: "radio35",
	11: "radio40"
};

for (let i = 0; i < questionCards.length; i++) {

	// Get the check button element
	const checkButton = questionCards[i].querySelector('#check-button');

	// Add event listener to the check button click event
	checkButton.addEventListener('click', function (event) {
		event.preventDefault(); // Prevent form submission

		// Get the selected answer
		const selectedAnswer = document.querySelector(`input[name="quiz${i + 1}"]:checked`);

		// Check if a radio input is selected
		if (selectedAnswer && checkButton.id != 'next-button') {
			// Check if the selected answer is correct
			if (selectedAnswer.id === radios[i+1]) {
				// Display a button with congratulations
				checkButton.value = 'Правильно!';
				checkButton.classList.remove('btn-outline-danger');
				checkButton.classList.add('btn-success');
				checkButton.id = 'next-button';
			} else {
				// Display a button with a message about losing
				checkButton.value = 'Неправильно!';
				checkButton.classList.remove('btn-success');
				checkButton.classList.add('btn-outline-danger');
			}
			checkButton.classList.remove('btn-dark');
		}
	});
}