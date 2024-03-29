function isArithmeticProgression(numbers) {
    let result;
    for( let i = 1; i < numbers.length-1; i++ ) {
      result = numbers[i+1] - numbers[i] === numbers[0] ? true : false;
      if ( !result) {
          break;
      }
    }
    return result;
  }
  
  console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])); 
  console.log(isArithmeticProgression([2, 4, 6, 12, 24])); 
  console.log(isArithmeticProgression([2, 4, 6, 8])); 
  console.log(isArithmeticProgression([2, 6, 18, 54])); 
  console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9]));