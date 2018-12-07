/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


function alertInput() {
    var a = document.getElementById("namadepan").value;
    var b = document.getElementById("email").value;
    var c = document.getElementById("notelp").value;
    var e = document.getElementById("kategori").value;
        var h = document.getElementById("judull").value;
    var i = document.getElementById("rincian").value;

    if (a != "" && b != "" && c != "" && d != "" && e != "" && f != "" &&
        h != "" && i != "" && j != "" && k != "" && l != "" && m != "") {
        alert("Terima kasih, aspirasi anda telah disimpan!")
    }
    else {
    alert("Maaf Semua Data tidak boleh kosong !");
    }
    }
