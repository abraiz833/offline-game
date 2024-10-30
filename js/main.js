// Add all your JS hereHere's an example main.js code for the game:

```
// Get elements
const gameContainer = document.getElementById('game-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');
const scoreboardElement = document.getElementById('scoreboard');

// Game variables
let currentQuestion = 0;
let score = 0;
const questions = [];

// Load questions from JSON file
fetch('info.json')
  .then(response => response.json())
  .then(data => {
    questions.push(...data.questions);
    displayQuestion();
  });

// Display question
function displayQuestion() {
  const question = questions[currentQuestion];
  questionElement.textContent = question.question;

  // Clear options
  optionsElement.innerHTML = '';

  // Create options
  question.options.forEach((option, index) => {
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'option';
    radio.value = index;

    const label = document.createElement('label');
    label.textContent = option;

    const li = document.createElement('li');
    li.appendChild(radio);
    li.appendChild(label);
    optionsElement.appendChild(li);
  });
}

// Submit answer
submitButton.addEventListener('click', () => {
  const userAnswer = getUserAnswer();
  const correctAnswer = questions[currentQuestion].answer;

  if (userAnswer === correctAnswer) {
    score++;
    resultElement.textContent = 'Correct!';
    resultElement.className = 'correct';
  } else {
    resultElement.textContent = `Sorry, the correct answer was ${questions[currentQuestion].options[correctAnswer]}.`;
    resultElement.className = 'incorrect';
  }

  // Move to next question
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    displayScoreboard();
  }
});

// Get user answer
function getUserAnswer() {
  const radios = optionsElement.querySelectorAll('input[type="radio"]');
  let userAnswer = null;

  radios.forEach(radio => {
    if (radio.checked) {
      userAnswer = radio.value;
    }
  });

  return userAnswer;
}

// Display scoreboard
function displayScoreboard() {
  gameContainer.style.display = 'none';
  scoreboardElement.style.display = 'block';
  scoreboardElement.textContent = `Your final score is ${score} out of ${questions.length}.`;
}
```

This JavaScript code:

1. Loads questions from the info.json file.
2. Displays the current question and options.
3. Handles user input (radio button selection).
4. Checks the user's answer and updates the score.
5. Moves to the next question or displays the scoreboard.

Would you like to modify this JavaScript code or add specific features?