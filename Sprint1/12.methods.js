// Metod nedir ve nasıl kullanılır?
// Metod, bir nesnenin bir işlem yapmasını sağlayan fonksiyonlardır.
/**
 Math.random() : 0 ile 1 arasında rastgele bir sayı verir.
 Math.round() : Bir sayıyı en yakın tam sayıya yuvarlar. Örnek: Math.round(3.5) -> 4, Math.round(3.4) -> 3
 Math.floor() : Bir sayıyı aşağı yuvarlar. Örnek: Math.floor(3.5) -> 3, Math.floor(3.4) -> 3
 Math.ceil() : Bir sayıyı yukarı yuvarlar. Örnek: Math.ceil(3.5) -> 4, Math.ceil(3.4) -> 4
 */

console.log(Math.random());
console.log(Math.round(3.5)); // 4
console.log(Math.floor(3.5)); // 3
console.log(Math.ceil(3.5)); // 4
console.log(Math.ceil(4.01)); // 5

// Aşağıdaki fonksiyonu tamamlayın. Bu fonksiyon, verilen sayıyı yukarıya doğru yuvarlamalıdır.
function yukariYuvarla(sayi) {
    return Math.ceil(sayi);
}

function rastgele() {
    return Math.random();
}
console.log(rastgele());

function yuvarlaVeTopla() {
    return Math.round(4.6) + Math.ceil(4.2);
}
console.log(yuvarlaVeTopla()); 

function sonucuYazdir() {
    return Math.round(3.49);
}
console.log(sonucuYazdir()); // 3


// String Metodları

const yorum = "BUGÜN hava ÇOK güzel!";
console.log(yorum.length); // 21 => Metin uzunluğunu verir.
console.log(yorum.toUpperCase()); // BUGÜN HAVA ÇOK GÜZEL! => Tüm harfler büyük yapılır.
console.log(yorum.toLowerCase()); // bugün hava çok güzel! => Tüm harfler küçük yapılır.
const enUzun = "MuvaffakiyetsizleştiricileştiriveremeyebileceklerimizdenmisinizcesineinizsinizMuvaffakiyetsizleştiricileştiriveremeyebileceklerimizdenmisinizcesineinizsiniz";
console.log(enUzun.length); // 100 => Metin uzunluğunu verir. length normalde bir propertydir.

    
const kelime = "Merhaba Dünya";
kelime.toUpperCase(); // MERHABA DÜNYA => Tüm harfler büyük yapılır.

const cumle = "Javascript öğreniyorum";
cumle.length; // 20 => Metin uzunluğunu verir. length normalde bir propertydir.

const kedim = "dumi";
let newKedim = kedim.charAt(0).toUpperCase() + kedim.slice(1);
console.log(newKedim); // Dumi

// charAt() : Bir metindeki bir karakteri verir. Örnek: "Merhaba".charAt(0) -> "M"
// slice() : Bir metinden bir kısmını alır. Örnek: "Merhaba".slice(1) -> "erhaba"

const kelime2 = "YAZILIM";
console.log(kelime2.charAt(0) + kelime2.slice(1).toLowerCase()); // Yazılım

// Fonksiyona verilen stringin sadece ilk harfini küçük yapacak, geri kalanını büyük yapacak kodlar ekleyin.
function ilkHarfKucuk(kelime) {
    return kelime.charAt(0).toLowerCase() + kelime.slice(1).toUpperCase();
}

// includes() : Bir metin içinde başka bir metin var mı kontrol eder. Örnek: "Merhaba".includes("Merhaba") -> true
// replace() : Bir metindeki bir kısmı başka bir kısıyla değiştirir. Örnek: "Merhaba".replace("Merhaba", "Selam") -> "Selam"

const ad = "berkcan gümüşışık"
const sonuc = ad.toUpperCase()
                .replace("GÜMÜŞIŞIK", "G.")
                .slice(0, 10);
console.log(sonuc); // BERKC G.