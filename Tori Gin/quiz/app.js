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

  if (question1answer === 'true') {
    correct++;
  }

  if (question2answer === 'Drop dead, gorgeous') {
    correct++;
  }

  if (question3answer === '15') {
    correct++;
  }

  if (question4answer === 'Cinderella's glass slipper, Sleeping Beauty's spindle, Rapunzel's hair, Red Riding Hood's basket, the Little Mermaid's dagger, and Snow White's coffin.') {
    correct++;
  }

  form.style.display = 'none';

  if (correct === 4) {
    results.textContent = 'You got 4 out of 4 correct! Great job!';
  } else {
    results.textContent = 'You got ' + correct + ' out of 4 correct. Better luck next time!';
  }

  results.style.display = 'block';
});