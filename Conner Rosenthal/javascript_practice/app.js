var box = document.getElementById("box");

var colors = ["blue", "black", "red", "yellowgreen", "darkgreen", "teal", "skyblue"];

var colorIndex = 0;

var currentCount = 0;

var counter = document.getElementById("counter");

// set initial count on the HTML
counter.innerHTML = currentCount;

box.addEventListener("click", function() {
    box.style.backgroundColor = colors[colorIndex];

    if (colorIndex === colors.length - 1) {
        colorIndex = 0;
     } else {
        colorIndex++;
     } 

    // increase the count by 1
    currentCount++;
    // reset the counter on the HTML
    counter.innerHTML = currentCount;
});