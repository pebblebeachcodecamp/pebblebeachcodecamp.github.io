document.addEventListener('DOMContentLoaded', function() {

  var form = document.getElementById('quiz-form');
  var results = document.getElementById('results');

  results.style.display = 'none';

  form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    var question1answer = form.elements['question-1'].value;
    var question2answer = form.elements['question-2'].value.toLowerCase(); 
    var question3answer = form.elements['question-3'].value;
    var question4answer = form.elements['question-4'].value;
    var question5answer = form.elements['question-5'].value;
    var question6answer = form.elements['question-6'].value; 
    var question7answer = form.elements['question-7'].value; 

    var correct = 0;

    if (question1answer === 'false') {
      correct++;
    }

    if (question2answer === 'white, brown, and grey') {
      correct++;
    }

    if (question3answer === 'ragdoll') {
      correct++;
    }

    if (question4answer === 'bff') {
      correct++;
    }

    if (question5answer === '8-20 pounds') {
      correct++;
    }

    if (question6answer === 'true') {
      correct++;
    }

    if (question7answer === 'mad') {
      correct++;
    }

    form.style.display = 'none';

    if (correct === 7) { 
      results.textContent = 'You got 10 out of 10 correct! Great job!';
    } else {
      results.textContent = 'You got ' + correct + ' out of 10 correct. You should like cats more /:(';
    }

    results.style.display = 'block';
  });

});
