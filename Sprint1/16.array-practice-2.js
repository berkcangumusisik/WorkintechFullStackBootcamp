/*
Bir takımda "Emre", "Melisa", "Fatih", "Dilara" isimlerinde 4 kişi var. Verilecek bir görevi kimse üstlenmediği için aralarından biri rastgele seçilecek.

- Bu takımdan rastgele bir kişiyi seçip gorevli isimli değişkende sakla.
- Bu kişiyi konsola yazdır.
*/

let gorevli;
let takim = ["Emre", "Melisa", "Fatih", "Dilara"];
gorevli= takim[Math.floor(Math.random(1 , takim.length - 1))];
console.log(gorevli);

//50 ile 75 arasında(50 ve 75 dahil) rastgele bir sayı oluştur ve bunu konsola yazdır.
let sayi = Math.floor(Math.random() * 26) + 50;
console.log(sayi)

/*
Aşağıdaki sample isimli değişkendeki rastgele bir harfi sadece metod kullarak 3 adımda console'a yazdır.

- Rastgele bir indeks oluştur. 
- sample metninden karakteri alıp karakter isimli değişkende sakla.
- Konsola yazdır.
*/

const sample = "Hello World";
let index = Math.floor(Math.random(1 , sample.length - 1)) ;
let karakter = sample[index]
console.log(karakter);


// hasUpperCase isimli bir fonksiyon yaz. Argüman olarak gelen bir kelimede büyük harf varsa true, yoksa false dönsün. 
//- İpucu: hepsi küçük harf ise küçük harfe dönüşmüş haline eşittir.
function hasUpperCase(str){
  if(str === str.toLowerCase()){
    return false;
  }else{
    return true;
  }
}

//Aşağıdaki name isimli değişkenin 5. karakterini büyükharfe dönüştürüp konsola basın.
const name = "Melisa yılmaz";
console.log(name.charAt(4).toUpperCase())


// sayilar isimli array'deki son 3 elemanı çıkartan tek satırlık bir kod yaz.

//- .pop() kullanma.
//- Konsola yazdır, kontrol et.
const sayilar = [1,2,3,4,5];
sayilar.splice(sayilar.length - 3, 3);
console.log(sayilar);


