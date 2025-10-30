/**
DEĞİŞKEN NEDİR?
Veriyi saklamak için kullanılan yapılardır.

SYNTAX (YAZIM KURALLARI):

let variableName = value;

Kodlar yukarıdan aşağıya doğru çalışır. Bu yüzden değişkenleri en üstte tanımlamak en iyidir.
*/

let isim = "Ali"; // string (metin)
console.log(isim);


let yas = 20; // number (sayı)
console.log(yas);

/*
DEĞİŞKEN TANIMLAMA YÖNTEMLER: LET, CONST, VAR

JavaScript'te değişken tanımlamak için 3 farklı anahtar kelime kullanılır:
1. let
2. const
3. var

1. LET NEDİR?
- Modern JavaScript'te en çok kullanılan değişken tanımlama yöntemidir
- Değeri sonradan değiştirilebilir (yeniden atanabilir)
- Block scope'a sahiptir (sadece tanımlandığı blok içinde geçerlidir)
- Aynı isimle tekrar tanımlanamaz

KULLANIM:
*/
let sehir = "İstanbul";
console.log(sehir); // İstanbul
sehir = "Ankara"; // Değer değiştirilebilir
console.log(sehir); // Ankara

/*
2. CONST NEDİR?
- "Constant" (sabit) kelimesinden gelir
- Değeri sonradan DEĞİŞTİRİLEMEZ
- Tanımlanırken mutlaka bir değer atanmalıdır
- Block scope'a sahiptir
- Değişmeyecek değerler için kullanılır (örn: PI sayısı, API URL'leri)

KULLANIM:
*/
const piSayisi = 3.14;
console.log(piSayisi); // 3.14
// piSayisi = 3.15; // HATA! const ile tanımlanan değişkenin değeri değiştirilemez

const ulke = "Türkiye";
console.log(ulke);

/*
3. VAR NEDİR?
- Eski JavaScript'te kullanılan değişken tanımlama yöntemidir
- Artık kullanılması önerilmez (let ve const tercih edilir)
- Değeri sonradan değiştirilebilir
- Function scope'a sahiptir (block scope değil)
- Aynı isimle tekrar tanımlanabilir (bu karışıklığa yol açabilir)

KULLANIM:
*/
var renk = "Kırmızı";
console.log(renk); // Kırmızı
renk = "Mavi"; // Değer değiştirilebilir
console.log(renk); // Mavi

/*
HANGISINI KULLANMALIYIM?

1. Değeri değişmeyecekse -> CONST kullan
   Örnek: const vergiOrani = 0.18;

2. Değeri değişecekse -> LET kullan
   Örnek: let puan = 0;

3. VAR kullanma -> Eski bir yöntemdir, let ve const daha güvenlidir

ÖZET TABLO:
┌──────────┬─────────────────┬──────────────┬─────────────────┐
│ Anahtar  │ Değer Değişir?  │ Scope        │ Kullanım Önerisi│
├──────────┼─────────────────┼──────────────┼─────────────────┤
│ let      │ Evet            │ Block        │ ✅ Kullan       │
│ const    │ Hayır           │ Block        │ ✅ Kullan       │
│ var      │ Evet            │ Function     │ ❌ Kullanma     │
└──────────┴─────────────────┴──────────────┴─────────────────┘
*/


// Veri Türleri: String, Number, Boolean, Null, Undefined, Symbol, Object, Array, Function
// String : Metin verileri için kullanılır.
let ad = "Ayse";
console.log(ad);

// Number : Sayı verileri için kullanılır.
let yas2 = 20;
console.log(yas2);

// Boolean : Doğru veya yanlış verileri için kullanılır.
let aktifMi = true;
console.log(aktifMi);

// Undefined : Henüz değer atanmamış veri için kullanılır.
let adres;
console.log(adres);

// Null : Bilinçli olarak boş değer atanmış veri için kullanılır.
let bos = null;
console.log(bos);

let mesaj = "Merhaba Dünya";
console.log(mesaj);
console.log(mesaj.length); // length : metin uzunluğunu verir.
console.log(mesaj.toUpperCase()); // toUpperCase : metni büyük harfe çevirir.

let sayi1 = 10;
let sayi2 = 20;
let toplam = sayi1 + sayi2; // + : toplama işlemi 
console.log(toplam)
console.log(typeof toplam); // typeof : veri tipini verir.

let girisYapildiMi = true;
console.log(girisYapildiMi);

let sifreDogrulandiMi = false;
console.log(sifreDogrulandiMi);