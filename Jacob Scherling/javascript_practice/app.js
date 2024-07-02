var box = document.getElementById("box");

// initial height of the box
box.style.height = "100px";
box.style.width = "100px";

var colors = ["blue", "#0d0000", "white", "#f5dd42", "#f50505"];

var colorIndex = 0;

var currentCount = 0;

var counter = document.getElementById("counter");

counter.innerHTML = currentCount;

box.addEventListener("click", function() {
  box.style.backgroundColor = colors[colorIndex];
  
  if (colorIndex === colors.length - 1) {
    colorIndex = 0;
  } else {
    colorIndex++;
  }

  currentCount++;
  counter.innerHTML = currentCount;
});

var increaseButton = document.getElementById("makebigbutton");

increaseButton.addEventListener("click", function() {
    var currentHeight = parseInt(box.style.height);
    var currentWidth = parseInt(box.style.width);

    box.style.height = currentHeight + 10 + "px";
    box.style.width = currentWidth + 10 + "px";
});


