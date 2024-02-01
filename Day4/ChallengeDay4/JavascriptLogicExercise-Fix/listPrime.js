function isPrime (number) {
    let sqr = Math.floor(Math.sqrt(number));
    let prime = number !=1;

    for (let i = 2; i < sqr+1; i++){
        if (number % i == 0) {
            prime = false;
            break;
        }
      
    }

    return prime;

    
}

function listPrime (angkaPertama, angkaKedua){
    let arrPrime = [];
    for (let i=angkaPertama; i<=angkaKedua; i++){
        if (isPrime(i)) {
            arrPrime.push(i);
    }
    }
    return arrPrime;
}

console.log(listPrime(1,5));