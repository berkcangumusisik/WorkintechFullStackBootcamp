/**
DÖNGÜLER (LOOPS)

Döngüler, belirli bir kod bloğunu tekrar tekrar çalıştırmak için kullanılan programlama yapılarıdır.

NEDEN DÖNGÜ KULLANILIR?
- Aynı işlemi birçok kez yapmak gerektiğinde kod tekrarından kaçınmak için
- Diziler, listeler gibi veri koleksiyonları üzerinde işlem yapmak için
- Belirli bir koşul sağlanana kadar işlem tekrarlamak için

GERÇEK HAYATTAN ÖRNEKLER:
1. Fotokopi Makinesi: Bir belgeyi 10 kez fotokopi etmek istiyorsunuz. 
   Her seferinde aynı işlemi tekrarlarsınız - bu bir döngüdür.

2. Öğrenci Yoklaması: Öğretmen sınıftaki her öğrencinin ismini tek tek okur.
   Her isim için aynı işlemi (yoklama alma) tekrarlar.

3. Alışveriş Sepeti: Market kasiyeri sepetteki her ürünü tek tek okutup 
   fiyatını toplar. Her ürün için aynı işlem tekrarlanır.
İterasyon(Yineleme) : Bir döngünün her adımına verilen isim.

For Döngüsü : Belirli bir sayıda tekrar için kullanılan döngüdür.
for (let başlangıç; koşul; artış) {
    // Döngü içinde yapılacak işlemler
}
i++ : i = i + 1

Sonsuz Döngü : Bir döngünün sonsuza kadar tekrarlanmasıdır.
 */

for (let i = 0; i < 3; i++) {
    console.log("Dövüş Kulübü'nün kurala, Dövüş Kulübü hakkında konuşmamaktır.");
}

for (let i = 0; i < 5; i++) {
    console.log(i);
} // 0 1 2 3 4

for(let i = 1; i <= 2; i++) {
    console.log(i);
  } // 1 2


// Konsola 1'den 5'e kadar olan sayıları yazdırmak için bir döngü yaz.
for(let i = 1; i <= 5; i++) {
    console.log(i);
} // 1 2 3 4 5


for(let i = 0; i < 4; i = i+2) {
    console.log(i);
  } // 0 2

for (let i = 0; i < 4; i++) {
    if (i % 2 === 0) {
      console.log("JavaScript");
    }
} // JavaScript JavaScript

for (let i = 3; i > 0; i--) {
  console.log(i);
} // 3 2 1

for (let i = 0; i < 5; i = i + 2) {
  console.log(i);
} // 0 2 4

for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
} // 0 2 4

// Verilen döngü kodunu, 1 ile 32 arasında 5 ile bölünebilen sayıları konsola yazdıracak şekilde tamamlayın.
for (let p= 5 ; p < 32 ; p = p + 5) {
  console.log(p);
}

const sehirler = ["İstanbul", "Ankara", "İzmir", "Bursa", "Adana"];
for (let i = 0; i < sehirler.length; i++) {
  console.log(sehirler[i]);
}

let sayilar = [10, 20, 30, 40];
let toplam = 0;
for (let i = 0; i < sayilar.length; i++) {
  toplam = toplam + sayilar[i];
}
console.log(toplam); // 100


const katilimcilar = ["ömer", "melisa", "asli", "tuğrul", "gökhan"];
console.log("Tebrikler! " + katilimcilar[0]);
console.log("Tebrikler! " + katilimcilar[1]);
console.log("Tebrikler! " + katilimcilar[2]);
console.log("Tebrikler! " + katilimcilar[3]);
console.log("Tebrikler! " + katilimcilar[4]);

for (let i = 0; i < katilimcilar.length; i++) {
  console.log("Tebrikler! " + katilimcilar[i]);
} 


const meyveler = ["elma", "muz", "karpuz"];
for(let i = 0; i < meyveler.length; i++) {
  console.log(meyveler[i]);
} // elma muz karpuz

// Verilen arraydeki tüm elemanları konsola yazdıran bir for döngüsü yazın.
const diziler = ["Game of Thrones", "Aşk-ı Memnu", "Friends"];
for(let i=0; i < diziler.length; i++){
  console.log(diziler[i]);
}

const hayvanlar = ["kedi", "köpek", "kuş"];
for(let i = 0; i < 2; i++) {
  console.log(hayvanlar[i]);
} // kedi köpek

// Verilen kodu, her dizi adından önce "Favorim" yazacak şekilde değiştirin.
const diziler2 = ["Game of Thrones", "Aşk-ı Memnu", "Friends"];
for(let i = 0; i < diziler.length; i++) {
  console.log("Favorim " +diziler2[i]);
}

const sehirler2 = ["İstanbul", "Ankara", "İzmir"];
for(let i = sehirler.length - 1; i >= 0; i--) {
  console.log(sehirler2[i]);
} // İzmir Ankara İstanbul


// Verilen kodu, dizi adından önce sırasıyla "1. Favorim", "2. Favorim", "3. Favorim" yazacak şekilde değiştirin.
const diziler3 = ["Game of Thrones", "Aşk-ı Memnu", "Friends"];
for(let i = 0; i < diziler3.length; i++) {
  console.log(i+1 + ". Favorim " + diziler3[i]);
} // 1. Favorim Game of Thrones 2. Favorim Aşk-ı Memnu 3. Favorim Friends


// WHILE DÖNGÜSÜ
// while döngüsü, belirli bir koşul doğru olduğu sürece kod bloğunu tekrar tekrar çalıştırır.
// Koşul false olduğunda döngü durur.


// for vs while: 
// for döngüsü genellikle kaç kez döneceğini bildiğimizde kullanılır.
// while döngüsü bir koşul sağlandığı sürece dönmesi gerektiğinde kullanılır.


/**
while(koşul){
  // koşul doğru olduğu sürece bu kod bloğu çalışır
} 
 */
const hedefSayi = Math.ceil(Math.random() * 25); // 1-25 arasında rastgele bir sayı
let tahminSayisi = 0;
while (tahminSayisi < 6) {
  const tahmin = prompt("Sence doğru sayı kaç?");
  tahminSayisi = tahminSayisi + 1;

  if (Number(tahmin) === hedefSayi) {
    alert("Oyunu kazandın!");
    break;
  } else if (Number(tahmin) > hedefSayi) {
    alert("Daha küçük bir tahmin yap");
  } else if (Number(tahmin) < hedefSayi) {
    alert("Daha büyük bir tahmin yap");
  } else {
    alert("Tahminin bir sayı olmalı");
  }
}

// 0 ile 50 arasında (ikisi de dahil olacak şekilde) rastgele bir sayı üretecek bir kod yaz. (İpucu: Sayıları aşağı yuvarlamak işine yarayabilir.)

let sayi = Math.floor(Math.random() * 51);


let index = 0;
while (index < 3) {
  console.log("Merhaba");
  index++;
} // Merhaba Merhaba Merhaba

let sayi2 = 1;
while (sayi2 <= 3) {
    console.log(sayi2);
    sayi2++;
} // 1 2 3

// Verilen kodu, 1'den 5'e kadar tek sayıları yazdıracak şekilde düzenleyin.

let s = 1;
while (s <= 5) {
  console.log(s);
  s = s + 2;
} // 1 3 5

// 1 ile 10 arasında (ikisi de dahil olacak şekilde) rastgele bir sayı üretecek bir kod yaz.

let sayi3 = Math.floor(Math.random() * 10) + 1;

// Kullanıcıya "Sence sayı kaç?" diye soracak ve cevabı tahmin adında bir değişkende saklayacak bir kod yaz.
const sayi4 = Math.ceil(Math.random() * 10);
let tahmin4 = prompt("Sence sayı kaç?")


// tahmin değişkenini sayi değişkeniyle kıyaslayan bir koşullu ifade yazmaya çalış. Eşitse konsola "Doğru", değilse "Tekrar dene" yazdırsın.

const sayi5 = Math.ceil(Math.random() * 10);
let tahmin = prompt("Sence sayı kaç"); // Prompt'a yazılan her veri string türündedir.
tahmin = Number(tahmin); // Number metodu ile alınan değeri numbera çeviriyoruz.

if(tahmin === sayi5){
  console.log("Doğru");
}else{
  console.log("Tekrar dene")
}

// break keyword'ü: break keyword'ü, döngüyü sonlandırır.
// continue keyword'ü: continue keyword'ü, döngünün o anki adımını atlar ve bir sonraki adıma geçer.

let sayi6 = 5;
while (sayi6 > 0) {
    if (sayi6 === 3) {
        break;
    }
    console.log(sayi6);
    sayi6--;
}


const tahmin2 = prompt("Bir sayı girin:");
if (Number(tahmin2) > 10) {
    alert("Büyük tahmin!");
} else {
    alert("Küçük tahmin.");
} 


/*
Verilen kodu, ders videolarındaki gibi while kullanarak tamamla bir tahmin oyunu koduna çevir.
Oyuncunun en fazla 4 tahmin hakkı olsun. 
Gerekli yerde break ve Number() kullan.
prompt satırının while içinde olduğundan emin ol.
Oyuncunun tahmin sayısı için bir tahminSayisi adında bir değişken tanımlamayı unutma.
*/
let sayi7 = Math.ceil(Math.random() * 10);
let tahminSayisi7 = 0;

while (tahminSayisi7 < 4) {
  let tahmin = prompt("Sence sayı kaç");
  tahmin = Number(tahmin);
  tahminSayisi7++;
  
  if (sayi7 === tahmin) {
    console.log("Bravo!");
    break;
  } else {
    console.log("Tekrar dene!");
  }
}

// Array'de const ile tanımlanan değişkenlerin elemanlarını değiştirebiliriz.
const ulkeler = ["Türkiye", "Almanya", "Fransa", "İtalya", "İspanya"];
ulkeler.shift();


// Basit veri türleri (Primitive Types)
// Basit veri türleri, tek bir değer tutar ve doğrudan bellekte saklanır.
// Örnek: const yil = 2025; 
// yil değişkeni sadece 2025 sayısını tutar, basit bir veri türüdür (number).

// Karmaşık veri türleri (Reference Types)
// Karmaşık veri türleri, birden fazla değer tutar ve bellekte referans olarak saklanır.
// Örnek: const ulkeler = ["fas", "japonya"];
// ulkeler değişkeni birden fazla değer (string'ler) içeren bir array'dir.
// Array'ler karmaşık veri türleridir ve referans olarak saklanır.

const yil = 2025;
// ✗ Basit veri türündeyse değiştiremeyiz.
// ✓ Array türündeyse değiştirebiliriz.
// ✗ Array türünde elemanları başka bir arraye eşitleyemeyiz.

const sayilar1 = [1, 2, 3, 4, 5];
const sayilar2 = [1, 2, 3, 4, 5];

console.log(sayilar1 === sayilar2); // false çünkü sayilar1 ve sayilar2 farklı adreslerde saklanıyor.

const sayilar3 = [1, 2, 3, 4, 5];
const sayilar4 = sayilar3;

console.log(sayilar3 === sayilar4); // true çünkü sayilar3 ve sayilar4 aynı adreslerde saklanıyor.


let evAdresim = "Kadıköy, İstanbul";
let ofisAdresim = evAdresim; // evAdresim'in adresini ofisAdresim'e atar. Yani kopyalar. evAdresim'in değerini değiştirirsek ofisAdresim'in değeri değişmiyor.

const ulkeler3 = ["Türkiye", "Almanya", "Fransa", "İtalya", "İspanya"];
const ulkeler4 = ulkeler3;
ulkeler4.push("Japonya"); // ulkeler4'ün değerini değiştirirsek ulkeler3'ün değeri değişir. Çünkü ulkeler3 ve ulkeler4 aynı adreslerde saklanıyor.