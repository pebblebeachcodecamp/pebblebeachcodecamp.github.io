var form = document.getElementById('quiz-form');
var results = document.getElementById('results');

results.style.display = 'none';

form.addEventListener('submit', function(event) {
  event.preventDefault();

  var question1answer = form.elements['question-1'].value;
  var question2answer = form.elements['question-2'].value;
  var question3answer = form.elements['question-3'].value;
  var question4answer = form.elements['question-4'].value;
  var question5answer = form.elements['question-5'].value;
  var question6answer = form.elements['question-6'].value;
  var question7answer = form.elements['question-7'].value;
  var correct = 0;

  if (question1answer === 'true') {
    correct++;
  }

  if (question2answer === 'freethrow') {
    correct++;
  }

  if (question3answer === 'james') {
    correct++;
  }

  if (question4answer === '13') {
    correct++;
  }
  if (question5answer === 'false') {
    correct++;

  if (question6answer === 'Westbrook') {
    correct++;
  }
  if (question7answer === 'Duncan') {
    correct++;
  }
  }
  
  form.style.display = 'none';

  if (correct === 7) {
    results.textContent = 'You got 7 out of 7 correct! Great job!';
  } else {
    results.textContent = 'You got ' + correct + ' out of 7 correct. Better luck next time!';
  }

  results.style.display = 'block';
});