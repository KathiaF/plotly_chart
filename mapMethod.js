
function sum(a, b){
    return a + b;
  }
  console.log(sum(2,5));

  let words = ['these', 'words', 'need', 'capitalize']
  let caps = words.map(word => word.toUpperCase())
  console.log(caps)

  var numbers = [1,2,3,4,5];
  var doubled = numbers.map(function(num){
      return num * 2;
  });
  console.log(doubled);

  var numbers = [0,2,4,6,8];
  var add5 = numbers.map(function(num){
      return num + 5;
  });

  console.log(add5);

  var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

var cityPopulation = cities.map(function(city){
    return city.population;
});

console.log(cityPopulation);