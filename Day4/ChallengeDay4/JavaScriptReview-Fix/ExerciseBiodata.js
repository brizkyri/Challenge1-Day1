let brizky = {
    nama_depan : "Brizky Ramadhani",
    nama_belakang : "Ismanto",
    umur : 27, 
    hobi : ["Makan", "Lari", "Berenang", "Hiking", "Belajar"],
    angka_favorit : 2,
    memakai_kacamata : true,
    jumlah_saudara : 2,
}

//tampilkan setip properti
console.log(brizky);

//cetak nama lengkap dengan console.log
console.log(brizky.nama_depan + " " + brizky.nama_belakang);

//ubah angka_favorit dengan 8
brizky.anga_favorit = 8;
console.log(brizky.angka_favorit);

//tambahkan satu hobi "coding"
brizky.hobi.push("Coding");
console.log(brizky.hobi);

//tambahkan 1 property lulusan -- value hacktive 8
brizky.lulusan = "Hacktive 8";
console.log(brizky.lulusan);

//cetak satu satu hobi dengan loop
console.log("Hobi Brizky adalah");
brizky.hobi.map((hobiBrizky) => {
    console.log(hobiBrizky);
});

//cetak semua key milik object dan cetak semua values milik object
let keyObject = Object.keys(brizky);
console.log(keyObject);

let valuesObject = Object.values(brizky);
console.log(valuesObject);

//gunakan loop untuk cetak semua property milik object dengan format key : values
for (const key in brizky){
    console.log(`${key}: ${brizky[key]}`)
}



