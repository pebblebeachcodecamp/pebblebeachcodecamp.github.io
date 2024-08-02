var form = document.getElementById('quiz-form');
var results = document.getElementById('results');

results.style.display = 'none';

form.addEventListener('submit', function(event) {
  event.preventDefault();

  var question1answer = form.elements['question-1'].value;
  var question2answer = form.elements['question-2'].value;
  var question3answer = form.elements['question-3'].value;
  var question4answer = form.elements['question-4'].value;
  var question5anwser = form.elements['question-5'].value;
  var question6anwser = form.elements['question-6'].value;
  var question7anwser = form.elements['question-7'].value;
  var question8anwser = form.elements['question-8'].value;
  




  var correct = 0;

  if (question1answer === 'Rice') {
    correct++;
  }

  if (question2answer === 'Frank Gore') {
    correct++;
  }

  if (question3answer === 'Young') {
    correct++;
  }

  if (question4answer === '22') {
    correct++;
  }

  if (question5anwser === '5-3') {
    correct++;
  }

  if (question6anwser === '10') {
    correct++;
  }

  if (question7anwser === 'Dolphins') {
    correct++;
  }

  if (question8anwser === '29') {
    correct++;
  }

  form.style.display = 'none';

  if (correct === 4) {
    results.textContent = 'You got 8 out of 8 correct! Great job!';
  } else {
    results.textContent = 'You got ' + correct + ' out of 8 correct. Better luck next time!';
  }

  results.style.display = 'block';
});