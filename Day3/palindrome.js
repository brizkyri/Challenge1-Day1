function cekPalindrom(str) {
    var awal = /[\W_]/g;  
    var lowRegStr = str.toLowerCase().replace(awal, '');  
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    if (lowRegStr===reverseStr){
        console.log("True, It's Palindrome");
    }
    else {
        console.log("False, It's not Palindrome");
    }
    }
    
  cekPalindrom("Belajar");