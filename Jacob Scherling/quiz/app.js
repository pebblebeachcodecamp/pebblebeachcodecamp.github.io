var form = document.getElementById('quiz-form');
var results = document.getElementById('results');

results.style.display = 'none';

form.addEventListener('submit', function(event) {
  event.preventDefault();

  var question1answer = form.elements['question-1'].value;
  var question2answer = form.elements['question-2'].value;
  var question3answer = form.elements['question-3'].value;
  var question4answer = form.elements['question-4'].value;

  var correct = 0;

  if (question1answer === 'false') {
    correct++;
  }

  if (question2answer === 'conputers') {
    correct++;
  }

  if (question3answer === '5') {
    correct++;
  }

  if (question4answer === 'awesome') {
    correct++;
  }

  form.style.display = 'none';

  if (correct === 4) {
    results.textContent = 'You got 0 out of 3 correct u suck';
  } else {
    results.textContent = 'You got 0 out of 3 correct. u suck';
  }

  results.style.display = 'block';
});