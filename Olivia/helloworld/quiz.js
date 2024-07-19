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

  if (question1answer === 'true') {
    correct++;
  }

  if (question2answer === '101999') {
    correct++;
  }

  if (question3answer === '9.332622e+157') {
    correct++;
  }

  if (question4answer === '2') {
    correct++;
  }

  // hide the quiz form
  form.style.display = 'none';

  // display the results
  if (correct === 4) {
    results.textContent = 'You got 4 out of 4 correct! (You are SUS, how did you do that? Did you use a caculator?)';
  } else if (correct === 3) {
    results.textContent = 'Poor you! You got only one wrong!';
  } else if (correct === 2) {
    results.textContent = 'At least you got 2 correct...';
  } else if (correct === 1) {
    results.textContent = 'You are not good at advanced math, emmmmmm';
  } else {
    results.textContent = "You suck. You did not got anything right, you can not even get 1 + 1 = 2 right!";
  }

  // show the results element
  results.style.display = 'block';
});