
// function terimaAngka(angka) {
//     if (typeof angka !== 'number' || isNaN(angka)) {
//         console.log("Its a String");
//     }
//     else if (angka % 2 !==0) {
//         console.log("Ganjil");
//     }
//     else if (angka % 2 == 0){
//         console.log("Genap");
//     }

// }

// console.log(terimaAngka(2));
// console.log(terimaAngka(3));
// console.log(terimaAngka(20));
// console.log(terimaAngka(21));
// console.log(terimaAngka("a"));


function terimaAngka(data) {
    // Validasi data
    var isValidData = typeof data === "number" || !isNaN(data);
  
    // Pengkondisian 1, untuk angka genap
    if (isValidData && data % 2 === 0) {
      return "Genap, tipe data: " + typeof data;
    }
  
    // Pengkondisian 2, untuk angka ganjil
    if (isValidData && data % 2 !== 0) {
        return "Ganjil";
    }
  
    // Default return apabila tidak memenuhi kondisi 1 dan 2
    return "Invalid Data";
  };
  
  
  function terimaAngkaSatu(data) {
    // Validasi data
    var isValidData = typeof data === "number" || !isNaN(data);
  
    // Validasi data genap
    var isEvenData = data % 2 === 0
  
    // Validasi data ganjil
    var isOddData = data % 2 !== 0
  
    // Pengkondisian 1, untuk angka genap
    if (isValidData && isEvenData) {
      return "Genap, tipe data: " + typeof data;
    }
  
    // Pengkondisian 2, untuk angka ganjil
    if (isValidData && isOddData) {
        return "Ganjil, tipe data: " + typeof data;
    }
  
    // Default return apabila tidak memenuhi kondisi 1 dan 2
    return "Invalid Data";
  }
  
  
  function terimaAngkaDua(data) {
    // Validasi data
    var isValidData = typeof data === "number" || !isNaN(data);
  
    // Validasi data genap
    var isEvenData = data % 2 === 0
  
    // Pengkondisian 1, untuk angka genap
    if (isValidData && isEvenData) {
      return "Genap, tipe data: " + typeof data;
    }
  
    // Pengkondisian 2, untuk angka ganjil
    if (isValidData && !isEvenData) {
        return "Ganjil, tipe data: " + typeof data;
    }
  
    // Default return apabila tidak memenuhi kondisi 1 dan 2
    return "Invalid Data";
  }
  
  console.log(terimaAngkaDua(2));
  console.log(terimaAngkaDua(3));
  console.log(terimaAngkaDua(20));
  console.log(terimaAngkaDua(21));
  console.log(terimaAngkaDua("A"));