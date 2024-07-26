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
  var question5answer = form.elements['question-5'].value;
  var question5banswer = form.elements['question-5b'].value;

  // keep track of the number of correct answers
  var correct = 0;

  if (question1answer === '47') {
    correct++;
  }

  if (question2answer === '2014') {
    correct++;
  }

  if (question3answer === '1') {
    correct++;
  }

  if (question4answer === 'false') {
    correct++;
  }

  if (question5answer === '2023' && question5banswer === '48') {
    correct++;
  }

  // hide the quiz form
  form.style.display = 'none';

  // display the results
  if (correct === 4) {
    results.textContent = 'You got 5 out of 5 correct, stop playing mario kart 8, go outside';
  } else {
    results.textContent = 'You got ' + correct + '';
  }

  // show the results element
  results.style.display = 'block';
});