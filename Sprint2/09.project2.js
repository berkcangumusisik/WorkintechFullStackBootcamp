/*
Gün Projesi: Final Maçı Özeti
100%
Volvo, Türkiye Basketbol Ligi'nin sponsoru olarak web sitesinde bir maç özeti simülatörü geliştirmek istiyor. Bu simülatör, oynanan maçların periyot periyot özetini ve sonucunu gösterecek.

Proje Tanımı
macOzeti isimli bir fonksiyon yazarak, iki takım arasında oynanan basketbol maçının periyot skorlarını ve sonucunu gösteren bir özet oluşturacağız.


Teknik Gereksinimler
A) Ana Fonksiyon: macOzeti

2 parametre alacak: evSahibiTakim ve deplasmanTakimi
Arrow function olarak yazılmalı
Bir dizi (array) döndürmeli

B) Fonksiyon İçeriği:

Her periyot için:

Her iki takım için 12-26 arası rastgele skor üretilmeli
Periyot skorları diziye eklenmeli
Format: "1. Periyot: {evSahibiTakim} 10 - {deplasmanTakimi} 21"
Maç Sonucu:

Ev sahibi kazanırsa: "Maç Sonucu: {evSahibiTakim} 61 - 54 kazandı"
Ev sahibi kaybederse: "Maç Sonucu: {evSahibiTakim} 61 - 68 kaybetti"
Beraberlik durumunda: "Maç 61 - 61 ile uzatmalara gitti"

Örnek Kullanım
macOzeti("Real Madrid", "Barcelona");

// Olası Sonuç 1:
[
    "1. Periyot: Real Madrid 10 - Barcelona 21",
    "2. Periyot: Real Madrid 30 - Barcelona 34",
    "3. Periyot: Real Madrid 43 - Barcelona 43",
    "4. Periyot: Real Madrid 61 - Barcelona 54",
    "Maç Sonucu: Real Madrid 61 - 54 kazandı"
]

// Olası Sonuç 2:
[
    "1. Periyot: Real Madrid 10 - Barcelona 21",
    "2. Periyot: Real Madrid 30 - Barcelona 34",
    "3. Periyot: Real Madrid 43 - Barcelona 43",
    "4. Periyot: Real Madrid 61 - Barcelona 68",
    "Maç Sonucu: Real Madrid 61 - 68 kaybetti"
]

// Olası Sonuç 3:
[
    "1. Periyot: Real Madrid 10 - Barcelona 21",
    "2. Periyot: Real Madrid 30 - Barcelona 34",
    "3. Periyot: Real Madrid 43 - Barcelona 43",
    "4. Periyot: Real Madrid 61 - Barcelona 61",
    "Maç 61 - 61 ile uzatmalara gitti"
]

Kontrol Listesi
[ ] Fonksiyon arrow function olarak yazıldı mı?

[ ] İki takım adı parametre olarak alınıyor mu?

[ ] Her periyot için:

Rastgele skorlar 12-26 arasında mı?
Skor formatı doğru mu?
[ ] Maç sonucu doğru formatta mı?

[ ] Beraberlik durumu kontrol ediliyor mu?

[ ] Metinlerdeki boşluklar tam olarak örnek ile aynı mı?


İpuçları
String birleştirmelerinde + yerine backtick (`) kullanın

Rastgele sayı üretmek için: Math.floor(Math.random() * (max - min + 1)) + min

Önce boş bir dizi oluşturup, içine periyot skorlarını ekleyin

Son olarak maç sonucunu ekleyin

Her aşamada konsola yazdırarak test edin


Not: String'lerdeki boşluklara özellikle dikkat edin, örneğin:

❌ "1.Periyot: Real Madrid 10-Barcelona 21"

✅ "1. Periyot: Real Madrid 10 - Barcelona 21"
*/

const macOzeti = (evSahibiTakim, deplasmanTakimi) => {
    let ozet = [];
    let evSkor = 0;
    let depSkor = 0;
    for (let i = 1; i <= 4; i++) {
      let evPeriyot = Math.floor(Math.random() * 15) + 12;
      let depPeriyot = Math.floor(Math.random() * 15) + 12;
      evSkor += evPeriyot;
      depSkor += depPeriyot;
      ozet.push(
        `${i}. Periyot: ${evSahibiTakim} ${evSkor} - ${deplasmanTakimi} ${depSkor}`
      );
    }
    if (evSkor > depSkor) {
      ozet.push(`Maç Sonucu: ${evSahibiTakim} ${evSkor} - ${depSkor} kazandı`);
    } else if (evSkor < depSkor) {
      ozet.push(`Maç Sonucu: ${evSahibiTakim} ${evSkor} - ${depSkor} kaybetti`);
    } else {
      ozet.push(`Maç ${evSkor} - ${depSkor} ile uzatmalara gitti`);
    }
  
    return ozet;
  };
  
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = macOzeti;
  