function reverseString(text) {
    let splitString = text.split('');
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join('');

    return joinArray;
}

console.log(reverseString("Hello World and Coders"));
console.log(reverseString("Brizky Ramadhani Ismanto"));
console.log(reverseString("I am a runner"));
console.log(reverseString("Coding is my new hobby"));
console.log(reverseString("SUUUPPPERRRR!!"));
