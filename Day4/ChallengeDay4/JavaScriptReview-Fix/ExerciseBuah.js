let fruits = ["Banana", "Grape", "Orange", "Apple", "Durian"];
const buah = ["Melon", "Semangka", "Pir", "Nangka", "Buah Naga"];
    //menambahkan satu buah
    console.log("Menambahkan satu buah: \n");
    fruits.push("Mango");
    buah.push("Mangga");
    console.log(fruits);
    console.log(buah);
    console.log("\n");

    //edit atau ubah 1 buah
    console.log("Edit atau ubah satu buah: \n");
    fruits.unshift("Ananas");
    buah.shift(1 , 2, "Pepaya");
    console.log(fruits);
    console.log(buah);
    console.log("\n");

    //kurangi 1 buah terakhir dari array
    console.log("Mengurangi 1 terakhir dari array: \n");
    fruits.pop();
    console.log(fruits);
    console.log(buah);
    console.log("\n");

