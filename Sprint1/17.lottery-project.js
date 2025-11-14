/**
Elektrikli Araba Çekilişi
Proje Tanımı
ElectroCar'ın elektrikli araç lansmanı için 11 aracın farklı kurallara göre dağıtılacağı bir çekiliş sistemi geliştireceğiz. Bu sistem adil, şeffaf ve tekrar edilebilir sonuçlar üretecek.

🎯 Hedefler
%0
Kodunun kalitesi %80'nin üstünde olsun.

Teknik Gereksinimler
'lottery' adında bir JavaScript fonksiyonu geliştirmen gerekiyor
Fonksiyon, başvuranların isimlerini içeren bir array alacak
Çıktı olarak 11 kazananın isimlerini içeren bir array dönecek
Toplam 11 adet elektrikli araç hediye edilecek
İlk 5 araç başvuru yapan ilk 5 kişiye
Sonraki 5 araç, başvuru sırasına göre sıradaki her 10. kisiye (10., 20., 30., 40., 50. kişiler)
Son araç ise rastgele bir şanslı kişiye verilecek
Örnek Kullanım
lottery(["user1", "user3", "user4", "user5", "user10", “user12”,  ... , "user100"])

//["user1", "user3", "user4", "user5", "user10", "user20", "user30", "user40", "user50", "userXX"] gibi bir sonuç dönmeli.
İpuçları
İlk 5 için .slice metodunu kullanabilirsin. w3schools sitesinden öğrenebilirsin.
Hiçbir katılımcı birden fazla araç kazanmamalı.
Array'lerde index 0'dan başlar. 10. şanslı kişinin index'i kaç olur?
Rastgele seçtiğim kişi daha önce seçilenler ile aynı olmamalı! O zaman listeden seçtiklerimi çıkarmalıyım.
Çıkarırken hangi sırada çıkmalı veya neye dikkat etmeliyim? İlk 5 kişiyi listeden çıkarırsam 10. kişi hala 10. kişi değildir!
Seçtiklerini bir array'e eklemelisin. O array'i de geri dönmelisin.
Döngü nedir biliyorsan döngüsüz yapmayı dene.
 */
function lottery(isimler){
    let kazananlar = [];
    let kalanIsimler = [...isimler];
    
    // İlk 5 kişi
    kazananlar.push(...kalanIsimler.slice(0, 5));
    kalanIsimler.splice(0, 5);
    
    // Her 10. kişi (5 kişi daha)
    kazananlar.push(kalanIsimler[9]);
    kazananlar.push(kalanIsimler[19]);
    kazananlar.push(kalanIsimler[29]);
    kazananlar.push(kalanIsimler[39]);
    kazananlar.push(kalanIsimler[49]);
    
    // Seçilenleri listeden çıkar (sondan başa doğru)
    kalanIsimler.splice(49, 1);
    kalanIsimler.splice(39, 1);
    kalanIsimler.splice(29, 1);
    kalanIsimler.splice(19, 1);
    kalanIsimler.splice(9, 1);
    
    // Rastgele bir kişi
    const rastgeleIndex = Math.floor(Math.random() * kalanIsimler.length);
    kazananlar.push(kalanIsimler[rastgeleIndex]);
    
    return kazananlar;
}