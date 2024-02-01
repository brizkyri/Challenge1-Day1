function urutHuruf(text) {
    //inisiasi variabel array
    let arr = [];
    //split array pake method .split("")
    arr = text.split("");
    //sorting array pake method sort()
    let sortText = arr.sort();
    //gabungin array jd string lagi pake join.
    let joinText = sortText.join("");

    return joinText;

}

console.log(urutHuruf("halo")); 
console.log(urutHuruf("qwerty"));
console.log(urutHuruf(""));