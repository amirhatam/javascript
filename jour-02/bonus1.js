var numbers = [1, 2, 3, 4, 5, 6];

var random = Math.floor(Math.random() * numbers.length + 1)

console.log(random);
if (random === 6) {
console.log("Yes i win !");
} else {
    console.log("So close...");
}