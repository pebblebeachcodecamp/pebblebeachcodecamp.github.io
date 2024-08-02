const output = document.getElementById('output');
const prompt = document.getElementById('prompt');
const generateButton = document.getElementById('generate_button');

const responses = [
  "Woof! That's a great question! Can I have a treat now?",
  "I'm not sure, but did you know I can chase my tail for hours?",
  "Why worry about that when we could go for a walk?",
  "I think the answer involves more belly rubs. Don't you agree?",
  "Hmm, let me ponder that while I dig up this bone I buried.",
  "I would answer, but I'm busy dreaming about chasing squirrels.",
  "Can you repeat that? I was too busy sniffing everything.",
  "The secret to life is simple: eat, play, sleep, repeat.",
  "Barking at nothing is my way of saying 'I don't know!'",
  "If you throw a ball, I'll think about your question while fetching it.",
  "I don't care, I just want a belly rub.",
  "I am not listening, I am to busy digging.",
  "WOOF WOOF WOOF.",
  "Stop talking, I am busy barking at that squirrel through the window. ",
  "I will anwser your question if we play fetch or you give me a belly rub. ",
  "Do you have a tennis ball so we can play catch.",
  "I just want a belly rub.",
  "You better give me a belly rub or else...",
  "You make me want to wag my tial.",
  "You make me not want to wag my tial.",
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