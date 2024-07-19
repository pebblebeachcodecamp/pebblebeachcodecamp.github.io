const output = document.getElementById('output');
const prompt = document.getElementById('prompt');
const generateButton = document.getElementById('generate_button');

const responses = [
  "Meow! That's a great question! Can I have a treat now?",
  "I'm not sure, but did you know I can chase the mouse for hours?",
  "Why worry about that when we could go and pet me",
  "I think the answer involves more fish. Don't you agree?",
  "Hmm, let me ponder that while I scratch your sofa.",
  "I would answer, but I'm busy dreaming about chasing mice.",
  "Can you repeat that? I was too busy scratching everything.",
  "The secret to life is simple: eat, play, sleep, repeat.",
  "Meowing at nothing is my way of saying 'I don't know!'",
  "If you give me some fish, I'll think about your question while eating it."
];

document.getElementById('prompt').addEventListener('input', function(event) {
  if (event.target.value.length > 0) {
    generateButton.disabled = false;
  } else {
    generateButton.disabled = true;
  }
});

document.getElementById('generate_button').addEventListener('click', function() {
  clearOutput();
  clearPrompt();
  generateResponse();
});

function clearOutput() {
  output.textContent = '';
}

function clearPrompt() {
  prompt.value = '';
}

function generateResponse() {
  // pick a random response
  let response = responses[Math.floor(Math.random() * responses.length)];

  // print the response to the screen one letter at a time
  let i = 0;
  let interval = setInterval(function() {
    output.textContent += response[i];
    i++;
    if (i >= response.length) {
      clearInterval(interval);
    }
  }, 100);
}