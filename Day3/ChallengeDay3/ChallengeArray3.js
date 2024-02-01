//pengurutan array by numbers

let numbers = [11, 96, 2];
numbers.sort(function(val1,val2){return val1-val2});
console.log(numbers);

numbers.sort(function(val1,val2){return val2-val1});
console.log(numbers);