var box = document.getElementById("box");

var colors = [ "#ff5e00", "#ffa100", "#ffd900", "#f8ff00", "b#4ff00", "#4fff00", "#00ffbf","#00fff7", "#00b8ff","#0047ff", "#9a00ff","dd00ff", "#ff00e9", "#ffaaf8","#ff0000"]

var colorIndex = 0;

var currentCount = 0;

var counter = document.getElementById("counter");

counter.innerHTML = currentCount

box.addEventListener("click", function() {
    box.style.backgroundColor = colors[colorIndex] ;

    if (colorIndex === colors.length - 1) {
        colorIndex = 0;
    } else {
    colorIndex++;
    }

    currentCount++
    counter.innerHTML = currentCount;
});

setInterval(() => {
    box.click();
}, 100);