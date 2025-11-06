// Adı merhaba olan ve konsola Workintech'e hoş geldin yazdıran bir fonksiyon yaz.
function merhaba(){
    console.log("Workintech'e hoş geldin");
}

//Aşağıdaki fonksiyonlarda yapılan isimlendirme hataları düzelt.
function emailGonder () {
    console.log("Email gönderildi")
}

function smsGonder () {
    console.log("SMS gönderildi")
}

function bolumundenKalan () {
    console.log("Kalan hesaplanıyor")
}

/** 
 * Sırasıyla, isim ve yas adlarında iki parametre alan ve konsola ____ _____ yaşında. metnini yazdıran ozet isminde bir fonksiyon yaz.
 */

function ozet(isim, yas){
    console.log(isim + " " + yas + " yaşında.");
}

// Aşağıda verilen fonksiyonu, argüman olarak "VW Passat", 2016, 100000, "Beyaz" değerlerini vererek çağır.
function arabaHakkinda(renk, yil, marka, km) {
    console.log(renk + " renk " + marka + " marka arabanın üretim yılı " + yil + "'dır ve araba " + km + " kilometrededir.")
}
arabaHakkinda("Beyaz", 2016, "VW Passat", 100000);

// Aşağıdaki fonksiyon 2 sayı alıp, çarpıp, sonucunu geri dönmesi için yazılmış. Ama istenenleri yapmıyor. Hataları bul ve düzelt.
function carp(a,b) {
    return a * b;
}
const sonuc = carp(3,5);
console.log(sonuc);

// yariCap adında bir parametre alan ve çemberin alanı hesaplayıp dönen cemberinAlani isminde bir fonksiyon tanımla.
const pi = 3.14;
function cemberinAlani(yariCap){
    return pi * yariCap * yariCap;
}

/**
 yaziTura adında bir function yaz. Function içinde sayi adında ve 0 ile 1 arasında rastgele bir değer alan sabit bir değişken tanımla. Eğer bu değişken 0.5'ten küçük ise fonksiyon Yazı, değil ise Tura değerini dönsün. 
 */

function yaziTura(){
    const sayi = Math.random();
    if(sayi < 0.5){
        return "Yazı";
    }else{
        return "Tura";
    }
}
console.log(yaziTura());

// Aşağıdaki fonksiyon konsola bir şey basmıyor. Basması için gerekli düzenlemeyi yap. (İpucu: console.log neden soluk görünüyor?)
function bolme(a,b) {
    const sonuc = a/b;
    console.log("Sonuç: ", sonuc)
    return sonuc;
}

// Aşağıdaki fonksiyonda yaş 18'den küçük olduğunda, kullanıya Oy kullanma hakkınız yok! uyarısını verecek şekilde düzenle.
function yasKontrol(yas) {
    if(yas < 18) {
        console.log("Oy kullanma hakkınız yok!")
    } else {
        console.log("Oy kullanabilir.")
    }
}

// Aşağıdaki kod TypeError: Attempted to assign to readonly property.  at index-aee291a018a8:5 hatasını basıyor. Hatayı bul ve düzelt.
function deger(num) {
    let sonuc = "Sıfır";
    if (num < 0) {
      sonuc = "Negatif";
    } else if (num > 0) {
      sonuc = "Pozitif";
    } else {
      sonuc = "Sıfır";
    }
    console.log(sonuc);
  }
  
  deger(5)

// Aşağıdaki kod konsola SyntaxError: Unexpected identifier 'number5'  at index-12_11_13.js:81 hatasını  basıyor. Hatanın bulunduğu satır numarasını aşağıdaki değişkene değer olarak ata.

let hataliSatirNo;
hataliSatirNo = 81;

// Aşağıdaki kod konsola ReferenceError: Cannot access 'x' before initialization hatasını basıyor. Hatayı düzeltmek için gerekli düzenlemeyi yap.
let x = 5;
console.log(x);

// Aşağıda yazılmış olan fonksiyon konsola SyntaxError: Unexpected token '{' hatasını basıyor. Hatayı bul ve düzelt.
function greet() {
    console.log("Hello");
}


//  Aşağıdaki kod konsola SyntaxError: Unexpected identifier 'motherName' at index.js:3 hatasını basıyor. Hatayı bul ve düzelt.

const name = "Emre";
const fatherName = "Ahmet";
const motherName = "Ayşe";

const metin = "Adı: " + name + ". Baba Adı: " + fatherName + ". Anne Adı: " + motherName + ".";

console.log(metin);
