// Soal No. 1 Menggabungkan string
var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

// Buatlah agar kata-kata di atas menjadi kalimat dalam variabel string dengan nama sentence
var sentence = word + '' + second + '' + third + '' + fourth + fifth + '' + sixth + '' + seventh; //Edit variabel ini sehingga outputnya "Javascript is awesome and I love it!"

// dari sini code jangan diganggu
document.getElementById("formSentence").innerHTML = sentence
// sampai sini code jangan diganggu

// Soal No. 2 Memecah string dengan mengakses karakter berdasarkan indexnya
var kalimat = 'wow JavaScript is so cool';
var contohKataPertama = kalimat[0] + kalimat[1] + kalimat[2]; // ini contohnya
var kataKedua  = kalimat[4] + kalimat[5] + kalimat[6] + kalimat[7] + kalimat[8] + kalimat[9] + kalimat[10] + kalimat[11] + kalimat[12] + kalimat[13];
var kataKetiga  = kalimat[15] + kalimat[16];
var kataKeempat  = kalimat[18] + kalimat[19];
var kataKelima  = kalimat[21] + kalimat[22] + kalimat[23] + kalimat[24];

// -- Dari sini code jangan diganggu!
document.getElementById("firstWord").innerHTML = "First Word: " + contohKataPertama 
document.getElementById("secondWord").innerHTML = "Second Word: " + kataKedua
document.getElementById("thirdWord").innerHTML = "Third Word: " + kataKetiga
document.getElementById("fourthWord").innerHTML = "Fourth Word: " + kataKeempat
document.getElementById("fifthWord").innerHTML = "Fifth Word: " + kataKelima
// -- sampai sini code jangan diganggu

// Soal No. 3  Mengambil sebagian dari string dengan metode substring
var kalimat3 = 'wow JavaScript is so cool';
var contohKataPertama3 = kalimat3.substring(0, 3);
var kataKedua3  = kalimat3.substring(4, 13);
var kataKetiga3  = kalimat3.substring(15, 16);
var kataKeempat3  = kalimat3.substring(18, 19);
var kataKelima3  = kalimat3.substring(21, 24);

// -- Dari sini jangan diganggu!
document.getElementById("firstWord3").innerHTML = "First Word : " + contohKataPertama3 
document.getElementById("secondWord3").innerHTML = "Second Word : " + kataKedua3
document.getElementById("thirdWord3").innerHTML = "Third Word : " + kataKetiga3
document.getElementById("fourthWord3").innerHTML = "Fourth Word : " + kataKeempat3
document.getElementById("fifthWord3").innerHTML = "Fifth Word : " + kataKelima3
// -- sampai sini jangan diganggu

// Soal No. 4
var kalimat4 = 'wow JavaScript is so cool';
var contohKataPertama4 = kalimat4.substring(0, 3);
var kataKedua3  = kalimat3.substring(4, 13);
var kataKetiga3  = kalimat3.substring(15, 16);
var kataKeempat3  = kalimat3.substring(18, 19);
var kataKelima3  = kalimat3.substring(21, 24);

var panjangKataPertama4 = contohKataPertama4.length; 
var panjangKataKedua4 = kataKedua3.length;
var panjangKataKetiga4 = kataKetiga3.length;
var panjangKataKeempat4 = kataKeempat3.length;
var panjangKataKelima4 =kataKelima3.length;

document.getElementById("firstWord4").innerHTML = "First Word : " + contohKataPertama4 + ', with length: ' + panjangKataPertama4;
document.getElementById("secondWord4").innerHTML = "Second Word : " + kataKedua4 + ', with length: ' + panjangKataKedua4;
document.getElementById("thirdWord4").innerHTML = "Third Word : " + kataKetiga4 + ', with length: ' + panjangKataKetiga4;
document.getElementById("fourthWord4").innerHTML = "Fourth Word : " + kataKeempat4 + ', with length: ' + panjangKataKeempat4;
document.getElementById("fifthWord4").innerHTML = "Fifth Word : " + kataKelima4 + ', with length: ' + panjangKataKelima4;

