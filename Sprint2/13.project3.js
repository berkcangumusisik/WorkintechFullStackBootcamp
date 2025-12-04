/*
Arkadaşınızla Dünya Kupası final maçlarında en çok gol atan takım üzerine iddiaya girdiniz. Arkadaşınız Almanya'nın en çok gol atan takım olduğunu düşünüyor. İddiayı kazananın hesabı ödemeyeceği konusunda anlaştınız.

Proje Tanımı
finallerdekiGolSayilari isimli bir fonksiyon yazarak, tüm Dünya Kupası final maçlarında atılan gollerin takımlara göre dağılımını hesaplayacağız.


Teknik Gereksinimler
A) Ana Fonksiyon: finallerdekiGolSayilari

Parametre: Dünya Kupası maç verilerini içeren bir dizi

Dönüş değeri: Takımların attığı toplam golleri içeren bir obje


B) Kodlama Standartları:

Klasik for döngüleri yerine forEach kullanın

Arrow function syntax'ını tercih edin

Kodunuzu düzenli ve okunaklı yazın

Değişken isimlerini anlamlı seçin


C) Veri Yapısı:

Her maç objesi şu bilgileri içerir:

"Home Team Name": Ev sahibi takım adı
"Away Team Name": Deplasman takımı adı
"Home Team Goals": Ev sahibi takım golleri
"Away Team Goals": Deplasman takımı golleri
"Stage": Maçın aşaması (Sadece "Final" olanlar sayılacak)

Örnek Kullanım
finallerdekiGolSayilari(fifadata);

// Beklenen çıktı:
{
    Argentina: 8,
    Brazil: 14,
    Czechoslovakia: 2,
    England: 4,
    France: 4,
    Germany: 1,
    "Germany FR": 11,
    Hungary: 4,
    Italy: 11,
    Netherlands: 2,
    Spain: 1,
    Sweden: 2,
    Uruguay: 4
}

Örnek Maç Datası
{
    "Year": 1930,
    "Stage": "Final",
    "Home Team Name": "Uruguay",
    "Home Team Goals": 4,
    "Away Team Goals": 2,
    "Away Team Name": "Argentina"
    // ... diğer bilgiler
}

Kontrol Listesi
[ ] Sadece final maçları filtreleniyor mu?

[ ] Her takımın attığı goller doğru toplanıyor mu?

[ ] forEach metodu kullanıldı mı?

[ ] Arrow function kullanıldı mı?

[ ] Sonuç objesi doğru formatta mı?


İpuçları
Önce sadece final maçlarını filtreleyin
Her maçta hem ev sahibi hem deplasman takımının gollerini sayın
Obje oluştururken:
let sonuc = {};
// Yeni takım eklerken
if (!sonuc[takimAdi]) {
  sonuc[takimAdi] = 0;
}
sonuc[takimAdi] += golSayisi;
forEach kullanımı:
dizi.forEach((eleman) => {
  // işlemler
});
*/

//aşağıdaki satırı silmeyin
const { fifaData } = require('./fifa.js');

const finallerdekiGolSayilari = (dizi) => {
  const finaller = dizi.filter((mac) => mac.Stage === 'Final');
  const sonuc = {};

  finaller.forEach((mac) => {
    const evSahibi = mac['Home Team Name'];
    const deplasmanTakimi = mac['Away Team Name'];
    const evSahibiGolleri = mac['Home Team Goals'];
    const deplasmanGolleri = mac['Away Team Goals'];

    if (!sonuc[evSahibi]) {
      sonuc[evSahibi] = 0;
    }
    sonuc[evSahibi] += evSahibiGolleri;

    if (!sonuc[deplasmanTakimi]) {
      sonuc[deplasmanTakimi] = 0;
    }
    sonuc[deplasmanTakimi] += deplasmanGolleri;
  });

  return sonuc;
};

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = finallerdekiGolSayilari;
