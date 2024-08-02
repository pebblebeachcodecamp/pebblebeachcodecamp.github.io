var count = 0;

function increment(number) {
    count += Number(number);
    document.getElementById("counter").innerHTML = count;
}

function decrement(number) {
    count-=(number);
    document.getElementById("counter").innerHTML = count;
}

console.log("HELLOOOO")