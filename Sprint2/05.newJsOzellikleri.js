/**
Ternary If
Ternary if, JavaScript'te koşullu ifadeleri kısa ve öz bir şekilde yazmamızı sağlayan bir operatördür.
Geleneksel if-else yapısının tek satırlık alternatifidir.
Sözdizimi: koşul ? doğruysa_bu_değer : yanlışsa_bu_değer
Koşul true ise soru işaretinden sonraki değer döner,
Koşul false ise iki nokta üst üste işaretinden sonraki değer döner.
Bu yapı özellikle değişken atamaları ve return ifadelerinde çok kullanışlıdır.
 */

function sepetiBosalt() {
    const onay = confirm("Sepetindeki ürünler silinecek. Emin misin?")
    console.log(onay ? "Silindi." : "İptal edildi.")
}

function sepetiBosaltUzunHali() {
    const onay = confirm("Sepetindeki ürünler silinecek. Emin misin?")
    if (onay) {
        console.log("Silindi.")
    } else {
        console.log("İptal edildi.")
    }
}

//*Aşağıdaki fonksiyonun ternary ifade ile yazılmış karşılığı nedir?

function silmeOnayi(onay) {
    if (onay) {
      console.log("Silindi");
    } else {
      console.log("İptal Edildi");
    }
  }

function silmeOnayiTernary(onay) {
    return onay ? console.log("Silindi") : console.log("İptal Edildi");
}

// Aşağıdaki fonksiyonun ternary ifade ile yazılmış karşılığı nedir?
if (yas >= 18) {
    console.log("Yetişkin");
  } else {
    console.log("Çocuk");
  }

function yasKontroluTernary(yas) {
    return yas >= 18 ? console.log("Yetişkin") : console.log("Çocuk");
}

// Ternary if kullanarak yaş kontrolü yapan örnekler

let age = 20;
let result = age >= 18 ? "Yetişkin" : "Çocuk";
console.log(result); // Yetişkin

let isLoggedIn = true;
let text = isLoggedIn ? "Hoş geldin!" : "Lütfen giriş yap.";
console.log(text);

let score = 85;

let grade = 
    score >= 90 ? "AA" :
    score >= 80 ? "BA" :
    score >= 70 ? "BB" :
    score >= 60 ? "CB" :
    "FF";

console.log(grade); // BA

/**
Backtick Nedir?
Backtick (`), JavaScript'te template literal (şablon dizesi) oluşturmak için kullanılan özel bir tırnak işaretidir.
Klavyede genellikle Tab tuşunun üstünde, 1 rakamının solunda bulunur.

Backtick'in avantajları:
- String interpolation: ${} sözdizimi ile değişkenleri ve ifadeleri doğrudan string içine yerleştirebiliriz
- Çok satırlı string'ler: Enter tuşu ile kolayca çok satırlı metinler oluşturabiliriz
- Daha okunabilir kod: Özellikle dinamik içerik oluştururken + operatörüne göre daha temiz görünür

Backtick ile daha temiz ve okunabilir kod yazabiliriz.
*/

let logged = true;

let mesaj = `Durum: ${logged ? "Giriş yapıldı" : "Giriş yapılmadı"}`;
console.log(mesaj);

let a = 5;
let b = 7;

let sonuc = `Toplam: ${a + b}`;
console.log(sonuc);


function karsila(kullaniciAdi, sepet) {
    const sepetMesaji = sepet === null ? "Henüz alışverişe başla!" : `Sepetinizde ${sepet} adet ürünleri ürünler var!`;
    return alert(`Hoşgeldin ${kullaniciAdi} ${sepetMesaji}`);
}

//Aşağıdaki fonksiyonu tamamlayın. Fonksiyon, verilen isme göre bir karşılama mesajı döndürmelidir. Fonksiyon, "Merhaba Ali!" gibi bir cümle return etmelidir.

function selamVer(isim) {
    return `Merhaba ${isim}!`;
}

// Aşağıdaki fonksiyonu ternary if kullanarak tamamlayın. Fonksiyon, verilen yaşa göre "Ehliyet: alabilir" veya "Ehliyet: alamaz" return etmelidir. (Ehliyet, yaş 18'den küçükse alınamaz, 18 ve üzeriyse alınabilir.)

function ehliyetAlabilirMi(yas) {
    return yas >= 18 ? "Ehliyet: alabilir" : "Ehliyet: alamaz";
  }

/*
Default Parametre Nedir?
Default parametre, bir fonksiyona parametre verilmediğinde kullanılacak varsayılan değeri belirtmemizi sağlar.
ES6 ile birlikte JavaScript'e eklenen bu özellik, fonksiyonları daha esnek ve güvenli hale getirir.

Avantajları:
- Fonksiyon çağrılırken parametre verilmezse hata almayız
- Kod daha temiz ve okunabilir olur
- Parametre kontrolü yapmaya gerek kalmaz

Örnek kullanım:
function selamla(isim = "Misafir") {
    return `Merhaba ${isim}!`;
}
*/

function indirimYap(urun, fiyat, yuzde = 20) {
    const indirim = (fiyat * yuzde)/100;
    const indirimliFiyat = fiyat - indirim;
}

// Aşağıdaki fonksiyonu tamamlayın. Fonksiyon, verilen fiyat ve KDV oranına göre KDV dahil fiyatı döndürmelidir. Aksi belirtilmedikçe ürünlerin KDV'si %20 olsun.

function kdvDahilFiyatHesapla(fiyat, kdv = 20) {
    return fiyat + (fiyat * kdv / 100);
  }