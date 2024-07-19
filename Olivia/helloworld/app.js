function meow(name1, name2){
    printf("Meow~ %d. My name is %d", name1, name2);
}

var box = document.getElementById('box');
var button = document.getElementById('button');
var colors = ['blue', 'green', 'purple', 'red'];
var currentColor = 0;
box.style.backgroundColor = colors[currentColor];
button.addEventListener('click', function() {
  if (currentColor === colors.length - 1) {
    currentColor = 0;
  } else {
    currentColor++;
  }
  box.style.backgroundColor = colors[currentColor];
});