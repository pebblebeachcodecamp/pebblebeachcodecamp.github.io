var trashCollected = 0;

var score = document.getElementById('score')

function addToScore() {
    console.log("ADD")
    trashCollected++;
    score.innerHTML = trashCollected;
 }

var trash1 = document.getElementById('trash1')

trash1.addEventListener('click', function() {
    trash1.style.display = 'none';
    addToScore()
});

var trash2 = document.getElementById('trash2')

trash2.addEventListener('click', function() {
    trash2.style.display = 'none';
    addToScore();
});

var trash3 = document.getElementById('trash3')

trash3.addEventListener('click', function() {
    trash3.style.display = 'none';
    addToScore();

});

var trash4 = document.getElementById('trash4')

trash4.addEventListener('click', function() {
    trash4.style.display = 'none';
    addToScore();

});

var trash5 = document.getElementById('trash5')

trash5.addEventListener('click', function() {
    trash5.style.display = 'none';
    addToScore();

});

var trash6 = document.getElementById('trash6')

trash6.addEventListener('click', function() {
    trash6.style.display = 'none';
    addToScore();


});


