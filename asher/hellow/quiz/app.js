// store references to the form and results elements
var form = document.getElementById('quiz-form');
var results = document.getElementById('results');

// hide the results element
results.style.display = 'none';

// listen for the form's submit event
form.addEventListener('submit', function(event) {
  // prevent the form from submitting and refreshing the page
  event.preventDefault();

  // get the value of each question
  var question1answer = form.elements['question-1'].value;
  var question2answer = form.elements['question-2'].value;
  var question3answer = form.elements['question-3'].value;
  var question4answer = form.elements['question-4'].value;

  // keep track of the number of correct answers
  var correct = 0;

  if (question1answer === 'false') {
    correct++;
  }

  if (question2answer === 'pokemon') {
    correct++;
  }

  if (question3answer === '521') {
    correct++;
  }

  if (question4answer === 'pc') {
    correct++;
  }

  // hide the quiz form
  form.style.display = 'none';

  // display the results
  if (correct === 4) {
    results.textContent = 'You got 4 out of 4 correct... that is not a good sign';
  } else {
    results.textContent = 'You got ' + correct + ' out of 4 correct, I wish I touched enough grass to do that';
  }

  // show the results element
  results.style.display = 'block';
});