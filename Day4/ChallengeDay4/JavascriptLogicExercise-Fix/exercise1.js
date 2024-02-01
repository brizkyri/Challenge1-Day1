function compareNumbers (firstNumber, secondNumber){
    if (secondNumber > firstNumber) {
        return true;
    }
    else if (secondNumber < firstNumber) {
        return false;
    }
    else if (firstNumber == secondNumber) {
        return "-1";
    }
    else {
       console.log("Please re-run again");
    }
}

console.log(compareNumbers(5, 8));
console.log(compareNumbers(5, 3));
console.log(compareNumbers(4, 4));
console.log(compareNumbers(3, 3));
console.log(compareNumbers(17, 2));