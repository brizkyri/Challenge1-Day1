// const printDate = "";
//toDateString() -- ada hari + tanggal 
//toLocalDateString -- tanggal aja 
//getDate == tanggal aja 


function cetakTanggal(){
    const currentDate = new Date().getDate();
    console.log(currentDate);
}

function panggilTanggal(){
    const currentDate = new Date().getDate();
    return currentDate;
   
}

cetakTanggal();

console.log(panggilTanggal());

