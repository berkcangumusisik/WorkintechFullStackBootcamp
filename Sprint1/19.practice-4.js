// Aşağıdaki kodları for döngüsü ile yaz.


const liste = ["Halil", "Meltem", "Suat"];
for(let i = 0; i < liste.length; i++ ){
    let isim = liste[i];
    if(isim.length > 5){
        console.log(isim + " uzun kelimedir.")
    } else {
        console.log(isim + " kısa kelimedir.")
    }
}


// Aşağıdaki döngü gereksiz işlemler yapıyor. Bunu engelleyecek şekilde kodda düzenleme yap.
const numbers = [ 6, 8, 10, 13, 16, 17, 21, 23]

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 5 === 0) {
      console.log("5'e tam bölünen ilk elemanın indeksi: " + i);
      break;
    }
}

// Aşağıdaki for döngüsündeki 5 hatayı düzelt.
const names = ["Hatice", "Sinem", "Selahattin", "Mustafa", "Ayşe", "Ahmet"];

for (let i = 0; i < names.length; i++) {
    if(names[i].charAt(0) === "A") {
        console.log("A ile başlayan ilk isim: " + names[i]);
        break;
    }
}

//Aşağıdaki rakamlar dizisindeki rakamların toplamı konsola bastırılmak isteniyor ama döngü sonucunda konsola undefined basıyor. Hatayı düzelt.
const rakamlar = [5, 20, 45, 60, 80];
let toplam = 0;
for (let i=0; i<rakamlar.length; i++) {
    toplam = toplam + rakamlar[i];
}
console.log(toplam);

//Aşağıdaki döngüde bir sorun var. Düzelt 

let i = 0;
while (i < 5) {
  
  console.log(i);
  i++;
}

//Aşağıdaki array'deki sayıların tek veya çift olma durumunu konsola X sayısı çift sayıdır. veya X sayısı tek sayıdır.basan kodu yazınız.

const array = [101, 48, 67, 76];

for (let i = 0; i < array.length; i++){
  if(array[i] % 2 === 0){
    console.log(array[i] + " sayısı çift sayıdır.")
  }else{
    console.log(array[i] + " sayısı tek sayıdır.")
 
  }

}

// 10'a kadar olan sayıların toplamını konsola yazdır.
let toplam2 = 0;
for (let i = 1; i < 11; i++){
  toplam2 = toplam2 + i;
}
console.log(toplam);

//1'den 10'a kadar tek sayıları while döngüsü ile konsola yazdır.

let x = 1;
while (x < 11){
  if(x % 2 !== 0){
    console.log(x);
  }
  x++;
}

// 1'den 100'e kadar(ikisi de dahil) olan sayıların toplamını while döngüsü ile hesapla, konsola yazdır.
let toplam3 = 0;
let y = 1;
while (y < 101){
  toplam3 = toplam3 + y;
  y++;
}
console.log(toplam3);

// While döngüsü kullanarak 1 ile 100 arasındaki(ikisi de dahil) hem 3'e hem de 5'e bölünebilen sayıları konsole'a yazdır.
let z = 1;
while (z < 101){
  if(z % 3 === 0 && z % 5 === 0){
    console.log(z);
  }
  z++;
}

/**
Kendisine argüman olarak verilen bir kelimenin tersten yazılmış halini geri dönen bir fonksiyon yaz.

- Fonksiyonun adı tersCevir olsun
- Bir kelimeyi parametre olarak alsın.
- Bu kelimenin tersten yazılmış halini geri dönsün.
- While döngüsü kullan.

 */

function tersCevir(kelime){
    let tersKelime = "";
    let i = kelime.length - 1;
    while (i >= 0){
        tersKelime = tersKelime + kelime[i];
        i--;
    }
    return tersKelime;
}
console.log(tersCevir("Hello"));


// Aşağıdaki kodlara bak ve console.log'un çıktısını result isimli değişkene ata.
const array1 = [3, 5, 7];
const array2 = array1;
array1.push(9);
array2.unshift(1);

console.log(array1);
const result = [1,3,5,7,9];


// Aşağıdaki döngünün mantıklı bir çıktı vermesi için 2 hatayı düzelt.
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Bir array'de search yapılıyor. Aranan değerin bulunduğu en küçük indeksi console'a yazdır.
const players = ["Hande", "Saliha", "Ece", "Derya", "Tuba", "Mediha", "Ece", "Tuba"];
const search = "Derya";

for (let i = 0; i < players.length; i++){
  if(players[i] === search){
    console.log(i);
    break;
  }
}

// Sırasıyla değerleri "A",  "K",  "Z",  "C",  "J" olan chars adında bir array tanımla. Bu array'in sıralamasını ters çevirip reversed isimli bir değişkende sakla. Konsola bu değişkeni yazdır.
// Kullanmaman gereken metodlar: .unshift(), .sort(), .reverse(), .toReversed(); 
const chars = ["A", "K", "Z", "C", "J"];
const reversed = [];
for (let i = chars.length - 1; i >= 0; i--) {
    reversed.push(chars[i]);
}
console.log(reversed);


/**
 * 
2 argüman alan(cumle, karakter) bir fonksiyon yaz. Verilen cümlede aranan karakterin kaç kere tekrar ettiğini geri dönsün.
- Fonksiyonun adı tekrarSayisi olsun
- 2 argüman alsın: cumle, karakter
- tekrar sayısını geri dönsün.


Not: Büyük harf küçük harfe eşit olmamalı. "A" != "a"
 */

function tekrarSayisi(cumle, karakter) {
  let sayac = 0;
  for (let i = 0; i < cumle.length; i++) {
    if (cumle[i] === karakter) {
      sayac++;
    }
  }
  return sayac;
}
console.log(tekrarSayisi("Hello World", "o"));

//String'lerden oluşan bir array'de en uzun kelimeyi while kullanarak bul ve konsola bas.
const kelimeler = ("String'lerden oluşan bir array'de en uzun kelimeyi while kullanarak bul ve konsola bas.").split(" ");
let enUzunKelime = "";
let j = 0;
while (j < kelimeler.length) {
  if (kelimeler[j].length > enUzunKelime.length) {
    enUzunKelime = kelimeler[j];
  }
  j++;
}
console.log(enUzunKelime);

// Aşağıdaki fonksiyon parametre olarak aldığı 2 indeks alıyor. Aşağıdaki sayilar dizisinde bu iki indeks arasında kalan elemanları yeni bir array olarak dönüyor. while döngüsü kullanarak aşağıdaki eksik fonksiyonu tamamla. 


const sayilar = [1,1,2,3,5,8,13,21,34]
function slice(start, end) {
    const result = [];
    let i = start;
    while (i < end) {
        result.push(sayilar[i]);
        i++;
    }
    return result;
}



/**
Bir sayının asal olup olmadığını dönen bir fonksiyon yaz.


- Fonksiyonun adı asalSayiMi olsun.
- Bir sayıyı parametre olarak alsın.
- Bu sayı asal ise true dönsün, değil ise false dönsün.

- Asal sayı: 1 ve kendinden başka böleni olmayan sayıdır.
- 1 asal sayı değildir!

 */

function asalSayiMi(sayi) {
    if (sayi <= 1) {
        return false;
    }
    for (let i = 2; i < sayi; i++) {
        if (sayi % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(asalSayiMi(11));

//Aşağıdaki kodlara bak ve console.log'un çıktısını result isimli değişkene ata.
const dizi1 = [2,4,6,8];
const dizi2 = [4];
dizi2.push(6,8);
dizi2.unshift(2);

if(dizi1 === dizi2){
    dizi1.push(10);
} else {
    dizi2.pop();
    dizi2.push(10);
}

console.log(dizi2);
const result2 = [2,4,6,10];

//Aşağıdaki kodlara bak ve console.log'un çıktısını result isimli değişkene ata.
const sayilar1 = [11,13,15];
const sayilar2 = sayilar1;
sayilar2.push(17);

if(sayilar1 === sayilar2) {
    console.log(sayilar1)
} else {
    sayilar1.pop(); 
    console.log(sayilar2);
}

let result3 = [11,13,15,17];

//Aşağıdaki kodlara bak ve console.log'un çıktısını result isimli değişkene ata.
const sayilar14 = [1,2,3,4,5,6,7];
const sayilar24 = sayilar14;
const sayilar3 = sayilar2;

sayilar14.push(6);
if(sayilar24 === sayilar34){
    sayilar2.push(6);
}
sayilar3.push(6);



console.log(sayilar14);
const result4 = [1,2,3,4,5,6,6];