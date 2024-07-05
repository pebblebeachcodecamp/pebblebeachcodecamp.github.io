var form = document.getElementById('quiz-form');
var results = document.getElementById('results');
var resultText = document.getElementById('resultText');

results.style.display = 'none';

form.addEventListener('submit', function(event) {
  event.preventDefault();

  var question1answer = form.elements['question-1'].value;
  var question2answer = form.elements['question-2'].value;
  var question3answer = form.elements['question-3'].value;
  var question4answer = form.elements['question-4'].value;

  var correct = 0;

  if (question1answer === 'true') {
    correct++;
  }

  if (question2answer === 'console.log("Hello World");') {
    correct++;
  }

  if (question3answer === '15') {
    correct++;
  }

  if (question4answer === 'all') {
    correct++;
  }

  form.style.display = 'none';

  if (correct === 4) {
    resultText.textContent = 'You got 4 out of 4 correct! Great job! W RIZZ';
  } else {
    resultText.textContent = 'You got ' + correct + ' out of 4 correct what were you thinking EL BOZO! U GOT -1000000000000000000000000000 W RIZZ';
  }

  results.style.display = 'block';
});