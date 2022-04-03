let numbersArray = [13, 22, 36, 54, 55]
let evenNumbers = numbersArray.filter(number => number % 2 == 0)
console.log(evenNumbers);

var numbers = [1,2,3,4,5];
var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var startsWithS  = words.filter((word) => word.startsWith("s"));
console.log(startsWithS);

var numbers = [1,2,3,4,5];
var doubled = numbers.map(num => num*2);
console.log(doubled);

var familyAge = [3,2,39,37,9];
//Ascending order
//var sortedAge = familyAge.sort((a,b) => a - b);

//Descending order
sortedAge = familyAge.sort((a,b) => b - a);
console.log(sortedAge);

