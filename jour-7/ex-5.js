var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

var even = numbers.filter(function(num){
    return !(num % 2);
});

console.log(even);