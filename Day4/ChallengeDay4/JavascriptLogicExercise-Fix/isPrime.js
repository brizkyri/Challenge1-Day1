function isPrime (number) {
    let devided = 0;
    for (let i = 0; i <= number ; i++){
        if (number %i == 0){
            devided++
        }
    }
    if (devided == 2){
        return true;
    }
    else{
        return false;
    }
}

console.log(isPrime(3));
console.log(isPrime(7));
console.log(isPrime(6));
console.log(isPrime(23));
console.log(isPrime(33));