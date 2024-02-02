<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width", initial-scale="1.0">
        <title>"Kalkulator Gaji Bersih</title>

    </head>
    <body>
        <form>
            <div>
                <label>Gaji Pokok</label> <br>
                <input name="gajiPokok" type="text" placeholder="Masukkan Nama"> <br>
            </div>
            <div>
                <label>Tunjangan</label> <br>
                <input name="tunjangan" type="text" placeholder="Masukkan Tunjangan"> <br>
            </div>
            <div>
                <label>Potongan</label> <br>
                <input name="potongan" type="text" placeholder="Masukkan Potongan"> <br>
            </div>
            <button onClick="calcultae">Calculate</button> <br>
            <hr>

                <?php
                
                function gajiBersih(){
                    $gajiPokok = @$_GET["gajiPokok"];
                    $tunjangan = @$_GET["tunjangan"];
                    $potongan = @$_GET["potongan"];

                    if (is_numeric($gajiPokok) && is_numeric($tunjangan) && is_numeric($potongan) && 
                    $gajiPokok > 0 && $tunjangan > 0 && $potongan > 0){
                    
                    $gajiBurto = $gajiPokok + $tunjangan;
                    $pajakPenghasilan = $gajiBruto * 10/100;
                    $asuransiKes = $gajiBruto * 5/100;
                    $gajiBersih = $gajiBruto - $pajakPenghasilan - $asuransiKes;


                    echo "Gaji Pokok Anda adalah Rp. ", $gajiPokok;
                    echo "\n";
                    echo "Tunjangan Anda adalah Rp. ", $tunjangan;
                    echo "\n";
                    echo "Potongan Anda senilai Rp. ", $potongan;
                    echo "\n";

                    }
                    else {
                        echo "INVALID, please re-enter";
                    }

                }

                gajiBersih();
                ?>
            
        </form>
    </body>
</html>