// statement and blocks 

// Statement (İfade): JavaScript'te bir işlemi gerçekleştiren kod satırıdır.
// Her statement genellikle noktalı virgül (;) ile biter.
// Örnek: let x = 5; veya console.log("Merhaba");

// Block (Blok): Süslü parantezler {} içine alınmış statement'lar grubudur.
// Bloklar, birden fazla statement'ı bir arada gruplamak için kullanılır.
// Fonksiyonlarda, if-else yapılarında, döngülerde block kullanılır.

// Tek satırlık statement'larda block kullanmak zorunlu değildir.
// Ancak birden fazla statement varsa block şarttır.
// Block içinde tanımlanan değişkenler (let, const) sadece o block içinde geçerlidir (block scope).

// {} içindeki kodlar bir block'tur.
{
    let sayi = 10; // Bu bir statement
    console.log(sayi); // Bu bir statement

}

// Yorum Satırı (Comment) Nedir?
// Yorum satırları, kodun çalışmasını etkilemeyen, sadece açıklama amaçlı yazılan satırlardır.
// JavaScript yorumlayıcısı bu satırları görmezden gelir ve çalıştırmaz.
// Yorum satırları kod okunabilirliğini artırır ve başkalarının (veya gelecekteki kendinizin) kodu anlamasını kolaylaştırır.

// Tek Satırlık Yorum: İki eğik çizgi (//) ile başlar
// Bu satır bir yorumdur ve çalıştırılmaz

/*
Çok Satırlı Yorum: 
Slash-yıldız ile başlar, yıldız-slash ile biter
Bu tür yorumlar birden fazla satıra yayılabilir
Uzun açıklamalar için kullanışlıdır
*/

// Yorum satırları kullanım alanları:
// 1. Kod açıklaması yapmak
// 2. Geçici olarak kodu devre dışı bırakmak (debugging)
// 3. TODO notları eklemek
// 4. Fonksiyon ve değişken açıklamaları yazmak

function ehliyeteBasvurabilirMi(isim, dogumYili) {
    const selamla = "Merhaba " + isim; // Bu bir statement
    const yas = 2023 - dogumYili; // Bu bir statement
    let mesaj = null; // Bu bir statement
    
    // Bu bir block
    if (yas > 18) {
        mesaj = "Ehliyet almak için biraz daha beklenen gerekecek."; // Bu bir statement
    } else {
        mesaj = "Ehliyet almak için biraz daha beklenen gerekecek."; // Bu bir statement
    }
    
    console.log(selamla + mesaj); // Bu bir statement
}


/**
Hata Mesajları Nedir?

Hata mesajları, kodunuzda bir sorun olduğunda JavaScript yorumlayıcısının size verdiği bildirimlerdir.
Bu mesajlar, hatanın ne olduğunu, nerede olduğunu ve bazen nasıl düzeltileceğini anlamanıza yardımcı olur.

Yaygın Hata Türleri:

1. SyntaxError (Sözdizimi Hatası):
   - Kodun yazım kurallarına uymadığında oluşur
   - Örnek: Parantez unutmak, noktalı virgül eksikliği, yanlış yazım
   - Örnek: console.log("Merhaba" // Kapanış parantezi eksik

2. ReferenceError (Referans Hatası):
   - Tanımlanmamış bir değişkene erişmeye çalıştığınızda oluşur
   - Örnek: console.log(tanimlanmamisDegisken); // ReferenceError

3. TypeError (Tip Hatası):
   - Bir değeri yanlış türde kullanmaya çalıştığınızda oluşur
   - Örnek: Bir sayıyı fonksiyon gibi çağırmak
   - Örnek: let sayi = 5; sayi(); // TypeError

4. RangeError (Aralık Hatası):
   - Bir değer izin verilen aralığın dışında olduğunda oluşur
   - Örnek: Negatif dizi uzunluğu

Hata mesajları genellikle şu bilgileri içerir:
- Hata türü (SyntaxError, ReferenceError, vb.)
- Hata açıklaması
- Dosya adı ve satır numarası
- Stack trace (hata izleme)

 */


/**
Scope (Kapsam) Nedir?

Scope, bir değişkenin kodun hangi bölümlerinden erişilebilir olduğunu belirleyen kuraldır. Yani bir değişkenin "görünürlük alanı"dır.

Ev Örneği ile Açıklama:
Bir evi düşünün. Evinizde yatak odanızda bir dolap var. Bu dolaptaki eşyalara sadece yatak odanızdayken erişebilirsiniz. Mutfaktayken yatak odanızdaki dolaba erişemezsiniz. İşte bu, scope kavramının günlük hayattaki karşılığıdır.

Trendyol Örneği:

Trendyol'da bir ürün sepete eklendiğinde:
- Sepet sayfasında o ürünün bilgilerine erişebilirsiniz (fiyat, adet, renk)
- Ödeme sayfasında da bu bilgilere erişebilirsiniz
- Ancak başka bir kullanıcının sepetindeki ürünlere erişemezsiniz

 */

//prompt : kullanıcıdan bir değer almak için kullanılır.
//alert : kullanıcıya bir mesaj göstermek için kullanılır.

let bilgi;
function aklindaTut(){
    bilgi = prompt("Notun ne :")
    alert("Tamam, şu notu hatırlayacağım: " + bilgi)
}

function hatirla(){
    alert ("Notun neydi?" + bilgi)
}

// hatirlat fonksiyonu neden bilgi değişkenini göremiyor olabilir? Çünkü bilgi değişkeni aklindaTut fonksiyonunun scope'u dışında tanımlı değil.

let yas = 35; // global scope'u içinde tanımlanan değişkenler tüm kod içinde erişilebilir.

// function scope'u içinde tanımlanan değişkenler sadece function içinde erişilebilir.
function yasimiYazdir(){
    const isim = "Ali";
    console.log("Benim adım " + isim);
    console.log(yas + " yaşındayım.");

    // if scope'u içinde tanımlanan değişkenler sadece if bloğu içinde erişilebilir.
    if (yas > 18) {
        let ehliyetAlabilirMi = true;
        console.log("Ehliyet alabilecek yaştayım.");
    }
}

/**
Scope Çeşitleri:

1. Global Scope (Genel Kapsam):
   - Herhangi bir fonksiyon veya blok dışında tanımlanan değişkenler
   - Kodun her yerinden erişilebilir
   - Örnek: let yas = 35; (dosyanın en üstünde)

2. Function Scope (Fonksiyon Kapsamı):
   - Bir fonksiyon içinde tanımlanan değişkenler
   - Sadece o fonksiyon içinden erişilebilir
   - var, let ve const ile tanımlanan değişkenler function scope'a sahiptir
   - Örnek: function yasimiYazdir() { const isim = "Ali"; }

3. Block Scope (Blok Kapsamı):
   - Süslü parantezler {} içinde tanımlanan değişkenler
   - Sadece let ve const ile tanımlanan değişkenler block scope'a sahiptir
   - var ile tanımlanan değişkenler block scope'a sahip değildir
   - if, for, while gibi yapılarda kullanılır
   - Örnek: if (yas > 18) { let ehliyetAlabilirMi = true; }

 */

let y = 20;
function myFunction() {
    let y = 10;

    if (true) {
        let y = 5;
        console.log(y); // 5 (block scope içindeki y)
    }
    console.log(y); // 10 (function scope içindeki y)
}
myFunction();
console.log(y); // 20 (global scope içindeki y)


let yas2 = 25;

if(true){
    let yas2 = 18;
    console.log(yas2); // 18 (block scope içindeki yas2)
}
console.log(yas2); // 25 (global scope içindeki yas2)


let sayi = 10;
function carp(){
    let sayi = 15;
    return sayi * 2;
}

console.log(carp()); // 30 (function scope içindeki sayi)
console.log(sayi); // 10 (global scope içindeki sayi)


function ornek(){
    let gizliMesaj = "Bu bir gizli mesajdır.";
    console.log(gizliMesaj);
}

ornek(); // Bu bir gizli mesajdır.
console.log(gizliMesaj); // ReferenceError: gizliMesaj is not defined