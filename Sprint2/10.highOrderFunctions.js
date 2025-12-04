/*
HIGH ORDER FUNCTIONS (Yüksek Dereceli Fonksiyonlar)

High Order Function, aşağıdaki özelliklerden en az birine sahip fonksiyonlardır:

1. Parametre olarak başka bir fonksiyon alabilir
2. Geriye bir fonksiyon döndürebilir

*/


/*
JavaScript'te Yaygın High Order Functions:

- Array.map() - Her elemanı dönüştürür
- Array.filter() - Koşula uyan elemanları filtreler
- Array.reduce() - Diziyi tek bir değere indirger
- Array.forEach() - Her eleman için işlem yapar
- Array.find() - Koşula uyan ilk elemanı bulur
- Array.some() - En az bir eleman koşulu sağlıyor mu?
- Array.every() - Tüm elemanlar koşulu sağlıyor mu?
*/


/*
Avantajları:
- Kod tekrarını azaltır
- Daha okunabilir ve anlaşılır kod
- Fonksiyonel programlama yaklaşımı
- Daha esnek ve yeniden kullanılabilir kod
*/


// Verilen kodu tamamlayın ve sayıların ortalamasını bulun.
const numbers = [5, 10, 15, 20];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
	total += numbers[i]
}

const avg = total / numbers.length;

// Verilen sayilar arrayinde, LeBron James'in 2022 yılında oynadığı maçlarda attığı sayılar var. LeBron'un sayı ortalamasını for döngüsü kullanarak bulun.
const sayilar = [31, 20, 31, 19, 33, 26, 20, 17, 27, 30, 21, 39, 21, 31, 28, 29, 21, 23, 35, 33, 30, 33, 31, 34, 38, 28, 27, 47, 43, 25, 37, 24, 35, 48, 32, 23, 37, 46, 20, 41, 28, 26, 27, 38, 21, 13, 26, 19, 25, 18, 18, 37, 33, 16, 36];

let toplamSayi = 0;

for(let i = 0; i < sayilar.length; i++ ){
  toplamSayi += sayilar[i]
}
let ortalama = toplamSayi / sayilar.length;

// Verilen kodları tamamlayarak 5'ten büyük sayıları bulan bir kod yazın.

  const numbers2 = [2, 4, 6, 8];
  const bestenBuyukler = [];

  for (let i = 0; i < numbers2.length; i++) {
    /** kod buraya **/
    if(numbers2[i] > 5){
      bestenBuyukler.push(numbers2[i]);
    }
  }

  console.log(bestenBuyukler);

// Verilen sayilar arrayine göre, LeBron’un 40 sayıdan fazla attığı sayıları bulan bir kod yazın.
const sayilar2 = [31, 20, 31, 19, 33, 26, 20, 17, 27, 30, 21, 39, 21, 31, 28, 29, 21, 23, 35, 33, 30, 33, 31, 34, 38, 28, 27, 47, 43, 25, 37, 24, 35, 48, 32, 23, 37, 46, 20, 41, 28, 26, 27, 38, 21, 13, 26, 19, 25, 18, 18, 37, 33, 16, 36];

const kirkUstu = [];

for(let i = 0; i < sayilar.length; i++){
  if(sayilar[i] > 40){
    kirkUstu.push(sayilar[i]);
  }
}

console.log(kirkUstu);

const sayilar3 = [31, 20, 31, 19, 33, 26, 20, 17, 27, 30, 21, 39, 21, 31, 28, 29, 21, 23, 35, 33, 30, 33, 31, 34, 38, 28, 27, 47, 43, 25, 37, 24, 35, 48, 32, 23, 37, 46, 20, 41, 28, 26, 27, 38, 21, 13, 26, 19, 25, 18, 18, 37, 33, 16, 36];

function kirktanBuyukMu(sayi) {
  if(sayi > 40) {
    return true;
  } else {
    return false;
  }
}

sayilar3.filter(kirktanBuyukMu);


// Verilen kodu filter metodu kullanarak tamamlayın ve sayilar dizisinde 10'dan büyük sayıları bulun.

const sayilar4 = [3, 5, 20, 32, 9, 16, -3];

function ondanBuyukMu(sayi) {
  if (sayi > 10) {
		return true;
	} else {
		return false;
	}
}

const ondanBuyukler = sayilar4.filter(ondanBuyukMu)

//Verilen kodu, parametre olarak aldığı dizi arrayindeki 20'den küçük sayıları filter kullanarak return edecek şekilde tamamlayın.
function yirmidenKucukMu(sayi) {
  if (sayi < 20) {
    return true;
  } else {
    return false;
  }
}

function yirmidenKucukler(dizi) {
  const sonuc = dizi.filter(yirmidenKucukMu);
  return sonuc;
}

// Verilen kirktanBuyukMu fonksiyonunu kirktanBuyukMu2 adında bir arrow fonksiyona dönüştürün.
function kirktanBuyukMu(sayi) {
  if(sayi > 40) {
    return true;
  } 
}
const kirktanBuyukMu2 = (sayi) => sayi > 40 ? true : false;
console.log(sayilar3.filter(kirktanBuyukMu2));


//Aşağıdaki kirktanBuyukMu fonksiyonun yaptığı işi direkt olarak filter metodu içerisine uygulayın ve fonksiyonun silin.

const over40 = sayilar3.filter((sayi) => sayi > 40);

// Verilen dizideki 32'den büyük sayıları, filter metodunun içinde bir arrow fonksiyonu kullanarak konsola yazdırın.
const rakamlar = [25, 30, 35, 40, 45];

const over32 = rakamlar.filter((sayi) => sayi > 32);
console.log(over32);

//map => Her elemanı dönüştürür
sayilar.map((sayi) => sayi - 29); // Her elemanı 29'dan çıkarır ve yeni bir dizi oluşturur.

// Verilen kodu, arrayın tüm elemanlarını 3 ile çarpıp sonucu result isimli bir değişkende saklayacak şekilde tamamlayın.

const sayilar5 = [1, 2, 3, 4];
let result = sayilar5.map((sayi) => sayi * 3) ;

// Verilen dizinin her bir elemanının başına "Favori meyvem" ekleyerek konsola yazdırmak için map metodunu kullanın.
const meyveler = ["elma", "kivi", "çilek"];
const favoriMeyveler = meyveler.map((meyve) => "Favori meyvem " + meyve);
console.log(favoriMeyveler);


let enBuyuk = 0;
for(let i = 0; i < sayilar.length; i++) {
  if(sayilar[i] > enBuyuk) {
    enBuyuk = sayilar[i];
  }
}


//Verilen kodu, arrayin en küçük elemanını bulacak şekilde tamamlayın.
const sayilar6 = [5, 12, 9, 22, 1, -5, 23];
let enKucuk = sayilar6[0];
for(let i = 0; i < sayilar6.length; i++) {
  if(sayilar6[i] < enKucuk) {
    enKucuk = sayilar6[i];
  }
}

// Verilen sayı arrayinin en büyük elemanını bulan ve max isimli bir değişkene eşitleyen bir kod yazın.
const sayilar7 = [5, 12, 9, 22, 1, -5, 23];
let max = sayilar7[0];
for(let i = 0; i < sayilar7.length; i++) {
  if(sayilar7[i] > max) {
    max = sayilar7[i];
  }
}

// Verilen sayı arrayinin en küçük elemanını bulan ve min isimli bir değişkene eşitleyen bir kod yazın.
const sayilar8 = [5, 12, 9, 22, 1, -5, 23];
let min = sayilar8[0];
for(let i = 0; i < sayilar8.length; i++) {
  if(sayilar8[i] < min) {
    min = sayilar8[i];
  }
}

// Verilen kodu, arrayin en küçük elemanını bulması için sort metodu kullanarak tamamlayın.

const sayilar9 = [12, 5, 8, 1, 4];
let enKucuk2 = sayilar9.sort((a, b) => a - b)[0];
console.log(enKucuk2);

// Aşağıdaki klasik toplama fonksiyonunun yaptığı işi, direk olarak reduce metodunun direkt içine yazın ve fonksiyonu silin.

const sayilar10 = [5, 3, 8, 1];

const toplamSayi10 = sayilar10.reduce((toplam, yeni) => toplam + yeni, 0);
console.log(toplamSayi10);
