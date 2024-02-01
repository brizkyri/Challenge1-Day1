for(let orangke = 1; orangke<=120; orangke++) {
    if (orangke % 2 !=0 && orangke < 100){
        console.log("\n");
        console.log("Halo, saya orang ke ", orangke);
            for (let nilaio = 0; nilaio < 100; nilaio++) {
                process.stdout.write("0"); 
                // console.log("O",) - output print kebawah
            }
    }
    else {
        console.log("\n");
        console.log("Halo, saya orang ke ", + orangke);
        console.log(" ");
    }
    
}