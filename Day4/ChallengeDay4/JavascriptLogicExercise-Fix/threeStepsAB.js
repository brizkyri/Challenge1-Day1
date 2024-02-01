function threeStepsAB (text){
    var textLength = text.length;
    var hasA = false;
    var hasB = false;

    for (let data = 0; data <= textLength ; data++){
        if (text[data] === "a"){
            hasA = true;
        }
        else if (text[data] === "A"){
            hasA = true;
        }
        else if(text[data] === "b"){
            hasB = true;
        }
        else if(text[data] === "B"){
            hasB = true;
        }
    }
        return hasA && hasB;
}
    

    console.log(threeStepsAB("abuba"));
    console.log(threeStepsAB("i am sick"));
    console.log(threeStepsAB("you are boring"));
    console.log(threeStepsAB("barbarian"));
    console.log(threeStepsAB("bacon and meat"));

// function checkString(data) {
//     var hasA = false
//     var hasB = false
  
//     for (let i = 0; i < data.length; i++) {
//       if (data[i] === 'a') {
//         hasA = true;
//       }
//       if (data[i] === 'b') {
//         hasB = true;
//       }
//     }
  
//     return hasA && hasB
//   }

// console.log(checkString("abuba"));
// console.log(checkString("i am sick"));
// console.log(checkString("you are boring"));
// console.log(checkString("barbarian"));
// console.log(checkString("bacon and meat"));