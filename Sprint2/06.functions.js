/**
 FONKSİYONLAR (Functions)
 
 JavaScript'te fonksiyonlar, belirli bir görevi yerine getiren kod bloklarıdır.
 Fonksiyonlar, kodun tekrar kullanılabilir olmasını sağlar ve programı daha düzenli hale getirir.
 
 JavaScript'te 4 ana fonksiyon türü vardır:
 
 1. KLASİK FONKSİYONLAR (Classic Functions)
    - function anahtar kelimesi ile tanımlanır
    - İsimlendirilmiş fonksiyonlardır
    - Hoisting özelliği vardır (tanımlanmadan önce çağrılabilir)
    - Kendi this bağlamına sahiptir
    Örnek: function topla(a, b) { return a + b; }
 
 2. ANONİM FONKSİYONLAR (Anonymous Functions)
    - İsimsiz fonksiyonlardır
    - Genellikle bir değişkene atanır veya callback olarak kullanılır
    - Hoisting özelliği yoktur
    - Kendi this bağlamına sahiptir
    Örnek: const topla = function(a, b) { return a + b; }
 
 3. ARROW FONKSİYONLAR (Arrow Functions)
    - ES6 ile gelen modern fonksiyon sözdizimi
    - => (ok) işareti ile tanımlanır
    - Daha kısa ve öz yazım sağlar
    - Kendi this bağlamı yoktur, üst kapsamın this'ini kullanır
    - Hoisting özelliği yoktur
    Örnek: const topla = (a, b) => a + b;
 
 4. TEK SATIR ARROW FONKSİYONLAR (Single Line Arrow Functions)
    - Arrow fonksiyonların en kısa hali
    - Tek bir ifade içerir ve otomatik olarak return eder
    - Süslü parantez ve return anahtar kelimesi kullanılmaz
    - Çok basit işlemler için idealdir
    Örnek: const kare = x => x x;
 
 Her fonksiyon türünün kendine özgü kullanım alanları ve avantajları vardır.
 Duruma göre en uygun fonksiyon türünü seçmek önemlidir.
 */

// Klasik Fonksiyonlar
function karesiniAl(sayi) {
    return sayi * sayi;
}
console.log(karesiniAl(5)); // 25

// Klasik yöntemi kullanarak, x ve y adında iki parametre alan ve toplamını return eden toplama adında bir fonksiyon yazın.

function toplama(x, y) {
    return x + y;
}

// Klasik yöntemi kullanarak, rastgele adında 0 ve 1 arasında rastgele bir sayı üretip return eden bir fonksiyon yazın.
function rastgeleSayi() {
    return Math.random();
}


// Anonim Fonksiyonlar

//Verilen fonksiyonun anonim fonksiyon olarak karşılığını toplama2 adıyla yazın.
function toplama(x, y) {
    return x + y;
}
const toplama2 = function(x, y) { return x + y; }

//Aşağıdaki kodu tamamlayın. Anonim fonksiyon a ve b adında 2 parametre almalı ve a'nın b'ye bölümünü return etmeli.

const bolme = function(a, b) { return a / b; }

// Arrow Fonksiyonlar
const karesiniAl3 = (sayi) => {
    return sayi * sayi;
}

//Aşağıdaki fonksiyonunu arrow function olarak karşılığını toplama3 adıyla yazın.
const toplama = function (x, y) {
    return x + y;
}
const toplama3 = (x, y) => x + y;

// Aşağıdaki fonksiyonunu arrow function olarak karşılığını yaziTura2 adıyla yazın.
const yaziTura = function (sayi) {
    let sonuc ="tura";
    
    if(sayi > 0.5) {
      sonuc = "yazı";
    }
    return sonuc;
}
const yaziTura2 = (sayi) => {
    let sonuc ="tura";
    if(sayi > 0.5) {
        sonuc = "yazı";
    }
    return sonuc;
}

// Tek Satır Arrow Fonksiyonlar

//Verilen fonksiyonun tek satır arrow function olarak karşılığını toplama4 adıyla yazın.

const toplama = (z, w) => {
    return z + w;
}

const toplama4 = (z, w) => z + w;


// Verilen fonksiyonun tek satır arrow function olarak karşılığını karesiniAl2 adıyla yazın.
function karesiniAl(sayi) {
    const sonuc = sayi * sayi;
    return sonuc;
}
const karesiniAl2 = (sayi) => sayi * sayi;