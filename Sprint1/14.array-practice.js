/*
.push() metodunu kullanmadan aşağıdaki alışveriş listesinin sonuna Yumurta ekle. 

- İpucu: array uzunluğunu kullanabilirsin.
*/

const alinacaklar = ["Süt", "Ekmek", "Yoğurt", "Gazete"];
alinacaklar[alinacaklar.length] = "Yumurta";
console.log(alinacaklar);

// Aşağıdaki array'in başına sırasıyla 5, 10, 15 sayılarını ekle. array'in değeri [5, 10, 15, 20] olsun.
const array = [20];
array.unshift(15);
array.unshift(10);
array.unshift(5);
console.log(array); 

/*
Verilen bir array'in, verilen bir eleman sayısından daha fazla elemanı olup olmadığını kontrol eden bir fonksiyon yaz.

- Fonksiyonun adı inLimits olsun.
- 2 parametre alsın: array, limit
- array'in eleman sayısı verilen limitten büyük ise false dönsün, limite eşit veya az ise true dönsün

*/

function inLimits(array, limit) {
    return array.length <= limit;
}
console.log(inLimits([1, 2, 3], 3)); // true

/**
 Aşağıda | kullanılarak oluşturulmuş str isimli değişkenin değerini aralarında - olacak şekilde(örn: 1-2-3-4-5) değiştir ve result isimli değişkende saklayın. Konsola yazdır.

- .replaceAll metodunu kullanma.
- stringleri parçalayıp array'e dönüştüren bir metod araştırabilirsin.
 */
const str = "1|2|3|4|5";
let result;
result = str.split("|").join("-");
console.log(result)

/*
Bir ATM makinasında, kullanıcı kredi kartını taktıktan sonra sırasıyla 4,8,7,5'i tuşluyor.
 
- keyPressed isimli bir değişken tanımla ve tuşladığı rakamları ayrı ayrı sakla.
- password isimli değişken tanımla ve kullanıcın şifresini string olarak bu değişkene ata (şifreyi 4875 olarak direk yazma, metod kullan).
- Şifreyi konsola bastır

*/
const keyPressed = [4, 8, 7, 5];
const password = keyPressed.join("");
console.log(password);

// Aşağıda verilen array'den, tam ortasında olan elemanı bir metod kullanarak çıkar ve sonuc değişkenine ata.
const array2 = [1,2,3,4,5,6,7,8,9];
let sonuc2;
sonuc2 = array2.splice(array2.length / 2, 1);
console.log(sonuc2);

/**
 str isimli değişkende saklı "JavaScript Programcılığı" metninden .slice() metodu ile "JavaScript" kelimesini çıkar.
Kalan metni sonuc isimli değişkende sakla. 
Konsola yazdır.

 */
const str2 = "JavaScript Programcılığı";
let sonuc = str2.slice(0,10);
console.log(sonuc);

/**
Aşağıdaki yönergelere uygun şekilde gerekli array işlemlerini yap.

- Adı meyveler olan bir boş array tanımla.
- İndeks kullanarak bu array'e "Elma", "Muz", "Erik" elemanlarını ekle.
- İlk elemanının değerini "Kiraz" olarak tekrar ata.
- Konsola yazdır.

 */
const meyveler = [];
meyveler[0] = "Elma";
meyveler[1] = "Muz";
meyveler[2] = "Erik";
meyveler[0] = "Kiraz";
console.log(meyveler);


/*
Bir dersin not ortalamasını hesaplayan bir fonksiyon yaz. 
Bu fonksiyonu vize = 50, final = 80 için çalıştır ve sonucu konsola yazdır.

- Fonksiyonun adı gecmeNotu olsun.
- 2 parametre alsın: vize ve final
- vize'nin etkisi %30 ve final'in etkisi %70 olacak şekilde ortalamayı bulsun.
- Bulduğu ortalamayı en yakın üst tam sayıya yuvarlayarak dönsün.
*/

function gecmeNotu(vize, final) {
    return Math.round((vize * 0.3) + (final * 0.7));
}
console.log(gecmeNotu(50, 80));

// Aşağıda verilen 2 sayıyı bölüp sonucunu tam sayıya yuvarla ve sonuc isimli değişkende sakla.
const sayi = 53;
const bolen = 8.3;
let sonuc3 = Math.round(sayi / bolen)
console.log(sonuc3)


/**
Bir fonskiyon yaz. Verilen string bir değerin istenilen indeksteki karakterini büyük harf olarak geri dönsün. "Workintech" ve 5 için oluşan çıktıyı konsola yazdır.

- Fonksiyonun adı karakter olsun.
- 2 parametre alsın: str, position
- Verilen string'in ilgili indeksteki karakterini büyük harf olarak geri dönsün.
 */
function karakter(str, position) {
    return str.charAt(position).toUpperCase();
}
console.log(karakter("Workintech", 5));

// String olarak gelen bir cümlenin tüm harflerini büyük harfe dönüştürüp geri dönen convertUpperCase isimli bir fonksiyon yaz. 

function convertUpperCase(str) {
    return str.toUpperCase();
}


/** 
En az 10 karakter girilmesi gereken bir şifre alanı var. Kullanıcı bir string ifade giriyor. Ama eksik karakter var. 
Yazılan sifre'yi argüman olarak alan ve eksik kalan harf sayısını konsola yazdıran logMissingCharCount isimli bir fonksiyon yaz. 
"ab1234" için bu fonksiyonu çalıştır.
 */

function logMissingCharCount(sifre) {
    if(sifre.length < 10) {
        console.log(10 - sifre.length);
    } else {
        console.log(0);
    }
}
logMissingCharCount("ab1234");

/**
 kelimelereDonustur isimli bir fonksiyon yaz. Gelen cümle'yi kelimelere dönüştürüp bunları array olarak geri dönsün. 

- Googlayarak veya dokümantasyonlardan(w3schools, mdn v.b.) cümleleri kelimelere dönüştürmek için bir metod araştırabilirsin.

 */

function kelimelereDonustur(cumle) {
    return cumle.split(" ");
}
console.log(kelimelereDonustur("Merhaba Dünya"));

/**
 
 2'den 10'a kadar(10 dahil) olan çift sayıları sırasıyla içeren sayilar isimli bir array tanımla. 
Yeni satırda bu array'e 0'ı ekle. (sayılar küçükten büyüğe olmalı!)
Konsola yazdır.
 */

let sayilar = [2, 4, 6, 8, 10];
sayilar.unshift(0);
console.log(sayilar);

/**
 1'den 10'a kadar olan tek sayıları sırasıyla içeren sayilar isimli bir array tanımla. 
Yeni satırda bu array'e 11'i ekle.
Konsola yazdır.
 */

let sayilar2 = [1, 3, 5, 7, 9];
sayilar2.push(11);
console.log(sayilar2);

// array1 isimli array'in 5. elemanı ve sonraki 5 elemanı metod kullanarak result isimli bir değişkene ata. Konsola yazdır.
const array1 = ["1-sa", "2-as", "3-foo", "4-bar", "5-baz", "6-qux", "7-quux", "8-corge", "9-grault", "10-garply", "11-waldo", "12-fred", "13-plugh", "14-xyzzy", "15-thud"];
let result3 = array1.slice(4, 9);
console.log(result3);