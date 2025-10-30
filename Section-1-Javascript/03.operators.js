/*
OPERATÖRLER (OPERATORS)

JavaScript'te operatörler, değişkenler ve değerler üzerinde işlemler yapmamızı sağlar.

1. ARİTMETİK OPERATÖRLER (Arithmetic Operators)
   Matematiksel işlemler için kullanılır.

   + : Toplama
   - : Çıkarma
   * : Çarpma
   / : Bölme
   % : Mod alma (bölümden kalan)
   ** : Üs alma
   ++ : Bir artırma
   -- : Bir azaltma
*/

console.log(17 % 5);

// Aşağıdaki kodda, ortalama değişkeninin değerini, num1, num2 ve num3 değişkenlerinin aritmetik ortalaması olarak ayarla ve konsola yazdır. İşlem önceliği gerektiğinde parantez kullanmayı unutma.

// (Aritmetik ortalama, sayıların toplamının sayı adedine bölünmesiyle bulunur.)
const num1 = 10;
const num2 = 20;
const num3 = 30;
let ortalama;

ortalama = (num1 + num2 + num3) /3
console.log(ortalama);


// Aşağıdaki kodda, sonuc değişkeninin değerini, a ve b değişkenlerinin çarpımı olarak ayarla ve konsola yazdır.
let a = 5;
let b = 3;
let sonuc = a * b;
console.log(sonuc)

// Aşağıdaki kodda, kalan değişkeni oluştur ve değerini, x değişkeninin y değişkenine bölümünden kalan olarak ayarla ve konsola yazdır.
const x = 17;
const y = 5;

let kalan = x % y;
console.log(kalan)


/*
2. KARŞILAŞTIRMA OPERATÖRLERİ (Comparison Operators)
   İki değeri karşılaştırmak için kullanılır. Sonuç her zaman boolean (true/false) döner.

   == : Eşit mi? (değer kontrolü)
   === : Kesinlikle eşit mi? (değer ve tip kontrolü)
   != : Eşit değil mi? (değer kontrolü)
   !== : Kesinlikle eşit değil mi? (değer ve tip kontrolü)
   > : Büyük mü?
   < : Küçük mü?
   >= : Büyük veya eşit mi?
   <= : Küçük veya eşit mi?

ÖNEMLİ NOT:
- == ve != operatörleri tip dönüşümü yapar (5 == "5" true döner)
- === ve !== operatörleri tip dönüşümü yapmaz (5 === "5" false döner)
- Karşılaştırmalarda === kullanmak daha güvenlidir!
*/

// Aşağıdaki kodda, esitMi adında bir değişken oluştur. Bunu a ve b değişkenlerinin eşit olup olmadığı değerine eşitle ve konsola yazdır.

const ab = 5;
const bc = "5";
let esitMi = ab === bc;
console.log(esitMi);

// Aşağıdaki kodda, esitDegilMi değişkeninin değerini, kelime1 ve kelime2 stringlerinin eşit olmaması değerine eşitleyin ve bunu konsola yazdırın.

const kelime1 = "merhaba";
const kelime2 = "Merhaba";
let esitDegilMi;
esitDegilMi = kelime1 !== kelime2;
console.log(esitDegilMi);

/*
KULLANICIDAN BİLGİ ALMA (User Input)

JavaScript'te kullanıcıdan bilgi almak için farklı yöntemler vardır:

1. PROMPT() - Tarayıcıda kullanıcıdan metin girişi almak için
   - Kullanıcıya bir soru sorar ve cevabını string olarak döner
   - Kullanıcı iptal ederse null döner
   - Tarayıcı ortamında çalışır (Node.js'te çalışmaz)

   Sözdizimi: prompt("Soru metni", "Varsayılan değer")

   Örnek:
*/
let kullaniciAdi = prompt("Adınız nedir?");
console.log("Merhaba " + kullaniciAdi);

const parola = prompt("Parolayı giriniz:");
if (parola === "Açıl Susam açıl!") {
    console.log("Kapı açılıyor...");
} else {
    console.log("Buradan git yabancı!");
}


/*
3. MANTIKSAL OPERATÖRLER (Logical Operators)
   Birden fazla koşulu birleştirmek veya tersini almak için kullanılır.
   Sonuç her zaman boolean (true/false) döner.

   && : VE (AND) - Her iki koşul da doğruysa true döner
   || : VEYA (OR) - Koşullardan en az biri doğruysa true döner
   ! : DEĞİL (NOT) - Koşulun tersini alır

   MANTIKSAL OPERATÖRLER DOĞRULUK TABLOSU:

    && (VE) Operatörü:
    ┌───────┬───────┬─────────┐
    │   A   │   B   │  A && B │
    ├───────┼───────┼─────────┤
    │ true  │ true  │  true   │
    │ true  │ false │  false  │
    │ false │ true  │  false  │
    │ false │ false │  false  │
    └───────┴───────┴─────────┘

    || (VEYA) Operatörü:
    ┌───────┬───────┬─────────┐
    │   A   │   B   │  A || B │
    ├───────┼───────┼─────────┤
    │ true  │ true  │  true   │
    │ true  │ false │  true   │
    │ false │ true  │  true   │
    │ false │ false │  false  │
    └───────┴───────┴─────────┘

    ! (DEĞİL) Operatörü:
    ┌───────┬────────┐
    │   A   │   !A   │
    ├───────┼────────┤
    │ true  │ false  │
    │ false │ true   │
    └───────┴────────┘

*/


const parolaCevabi = prompt("Parolayı giriniz:");
const isim = prompt("İsminizi giriniz:");

if(parolaCevabi === "Açıl Susam açıl!" && isim === "Ali Baba") {
    console.log("Kapı açılıyor...");
} else {
    console.log("Buradan git yabancı!");
}


/*
TRUTHY VE FALSY DEĞERLER

JavaScript'te her değer bir boolean bağlamında (if, while gibi) kullanıldığında
otomatik olarak true veya false'a dönüştürülür.

FALSY DEĞERLER (false olarak değerlendirilen değerler):
- false
- 0 (sıfır)
- -0 (negatif sıfır)
- "" (boş string)
- null
- undefined
- NaN (Not a Number)

TRUTHY DEĞERLER (true olarak değerlendirilen değerler):
- Yukarıdaki falsy değerler dışında KALAN TÜM DEĞERLER truthy'dir
- Örnekler:
  * true
  * 1, -1, 42 (sıfır olmayan tüm sayılar)
  * "0", "false" (boş olmayan stringler)
  * [] (boş array)
  * {} (boş object)
  * function(){} (fonksiyonlar)

*/

let altinSayisi = 100;
if (altinSayisi) {
    console.log("Kapı kapanmalı");
} 


let c = 10;
let d = 20;
console.log(c + d);
console.log(c > d);

let t = 7;
let u = "7";
console.log(t === u); // false
console.log(t == u); // true

let yas = prompt("Yaşınızı giriniz:");
if (yas >= 18) {
    console.log("Reşitsiniz.");
} else {
    console.log("Reşit değilsiniz.");
}

let age = 25;
let ehliyetVar = true;
if (age >= 18 && ehliyetVar) {
    console.log("Araç kullanabilirsiniz.");
} else {
    console.log("Araç kullanamazsınız.");
}

if (""){
    console.log("Bu yazı görünmez (falsy)");
}

if ("Merhaba"){
    console.log("Bu yazı görünecek (truthy)");
}


console.log(10 % 3); // 1 : 10'un 3'e bölümünden kalan
console.log(10 % 5); // 0 : 10'un 5'e bölümünden kalan
console.log(7 % 2); // 1 : 7'nin 2'ye bölümünden kalan
console.log(8 % 2); // 0 : 8'in 2'ye bölümünden kalan

let sayi = prompt("Bir sayı giriniz:");
if (sayi % 2 === 0) {
    console.log("Bu sayı çift sayıdır.");
} else {
    console.log("Bu sayı tek sayıdır.");
}
// prompt ile aldığımız ifade string olarak döner. Bu yüzden % 2 ile bölümünden kalanı alamayız. Bu yüzden Number() ile sayıya çevirmeliyiz.