var batmanSong = new Audio('batmansong.mp3')

var form = document.getElementById('quiz-form');
var results = document.getElementById('results');

results.style.display = 'none';

form.addEventListener('submit', function(event) {
  event.preventDefault();

  batmanSong.play();

  var question1answer = form.elements['question-1'].value;
  var question2answer = form.elements['question-2'].value;
  var question3answer = form.elements['question-3'].value;
  var question4answer = form.elements['question-4'].value;

  var correct = 0;

  if (question1answer === 'true') {
    correct++;
  }

  if (question2answer === '123456789') {
    correct++;
  }

  if (question3answer === '1000') {
    correct++;
  }

  if (question4answer === 'all') {
    correct++;
  }

  form.style.display = 'none';

  if (correct === 4) {
    results.textContent = "You got 4 out of 4 correct! Great job! In the shadowed heart of Gotham City, where darkness clung to every corner and crime festered like a disease, a solitary figure prowled the rooftops. Clad in black armor, his cape billowing behind him like the wings of a monstrous bat, he was known only as Batman.Bruce Wayne, the billionaire heir to Wayne Enterprises, had taken on this mantle after witnessing his parents' murder in a brutal alleyway robbery. Swearing an oath to protect his city from the criminal underworld that had taken so much from him, he trained his mind and body to peak human perfection.One humid summer night, a new threat emerged in Gotham. A criminal mastermind known as the Riddler had unleashed chaos upon the city, leaving cryptic clues at each crime scene. The police were baffled, unable to decipher the madman's puzzles.Batman, with his keen intellect and detective skills, dove headfirst into the mystery. His first lead took him to a dilapidated warehouse on the outskirts of the city, where he found a hidden underground lair adorned with question marks and riddles scrawled on the walls. As he navigated the maze-like tunnels, Batman encountered traps designed to outwit and ensnare any who dared challenge the Riddler's intellect. But with each obstacle, Batman remained one step ahead, using his gadgets and wit to overcome the twisted tests.Finally, deep within the labyrinth, he confronted the Riddler himself—a wiry figure with a shock of red hair and a manic gleam in his eye. The Riddler cackled as he taunted Batman with yet another enigma, challenging him to solve the ultimate riddle of their deadly game.With a steely resolve, Batman deciphered the final clue, exposing the Riddler's true identity and motives. The criminal's intricate web of deception unraveled before him, and the Gotham City Police Department swiftly apprehended the villain. As dawn broke over the city, Commissioner Gordon stood on the rooftop alongside Batman, thanking him for once again saving Gotham from chaos. Bruce Wayne, behind his mask, knew that his work was never truly done. The night still held many secrets, and the city would forever need its Dark Knight to keep watch. And so, with silent determination, Batman disappeared into the shadows once more, a vigilant guardian protecting the innocent and striking fear into the hearts of those who would prey upon them. For in Gotham City, where darkness reigned, one hero would forever rise to meet the challenge—Batman, the symbol of hope in the face of despair."
  } else {
    results.textContent = 'You got ' + correct + ' out of 4 correct. Better luck next time!';
  }

  results.style.display = 'block';
});