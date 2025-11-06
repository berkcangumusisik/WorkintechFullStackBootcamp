/**
 Müşteri web sitesi için interaktif bir Taş-Kağıt-Makas oyunu geliştireceğiz. Bu modül, kullanıcı ve bilgisayar arasında klasik oyun kurallarına göre çalışacak ve sonucu kullanıcıya bildirecek.

🎯 Hedefler
120
Projeyi 120 dakika içinde tamamla.

Teknik Gereksinimler
tasKagitMakas adında bir JavaScript fonksiyonu geliştirmen gerekiyor
Fonksiyon, kullanıcının seçimini parametre olarak alacak
Bilgisayar rakip olarak kullanılacak ve rastgele seçimler yapacak
Klasik Taş-Kağıt-Makas kuralları geçerli olacak (Taş makası, makas kağıdı, kağıt taşı yener)
Aynı seçimler yapıldığında beraberlik ilan edilecek
Senin seçimin: makas. Bilgisayarın seçimi: kağıt. Kazandın! metnini dönecek.(örnek kullanımlara bakabilirsin).
Örnek Kullanım
tasKagitMakas("makas");

"Senin seçimin: makas. Bilgisayarın seçimi: kağıt. Kazandın!" 
//Demek ki bu sefer bilgisayar seçimi kağıtmış.
tasKagitMakas("kağıt");

"Senin seçimin: kağıt. Bilgisayarın seçimi: taş. Kazandın!" 
//Demek ki bu sefer bilgisayar seçimi taşmış.
tasKagitMakas("taş");

"Senin seçimin: taş. Bilgisayarın seçimi: taş. Beraberlik!" 
//Demek ki bu sefer bilgisayar seçimi taşmış.
İpuçları
Fonksiyonumuz ismiyle tanimli geliyor (function tasKagitMakas()). Önce parametre tanımlayarak başlayabilirsin.
Bilgisayar rastgele 3 seçimden birini yapmalı. Bunu bilgisayar isimli değişkende saklayabilirsin.
0-3 arası rastgele sayı oluşturmayı biliyorsun peki 3 seçenekten biri nasıl oluşturulabilir?
Kazananı belirlemek için if else if yapısını hatırlayabilirsin.
Örnek kullanımdaki metinlere, sembollere ve boşluklara dikkat etmeliyiz.
Bilgisayar seçimini rastgele oluştururken "taş-kağıt-makas" sırasıyla atama yap. Örn: 0,1,2 sayılarını rastgele oluşturdu isen, 0 => "taş", 1=>"kağıt", 2=>"makas" olsun.
 */
function tasKagitMakas(secim){
    const bilgisayar = Math.floor(Math.random() * 3);
    if(secim === "taş"){
        if(bilgisayar === 0){
            return "Senin seçimin: taş. Bilgisayarın seçimi: taş. Beraberlik!";
        }else if(bilgisayar === 1){
            return "Senin seçimin: taş. Bilgisayarın seçimi: kağıt. Kaybettin!";
        }else{
            return "Senin seçimin: taş. Bilgisayarın seçimi: makas. Kazandın!";
        }
    }else if(secim === "kağıt"){
        if(bilgisayar === 0){
            return "Senin seçimin: kağıt. Bilgisayarın seçimi: taş. Kazandın!";
        }else if(bilgisayar === 1){
            return "Senin seçimin: kağıt. Bilgisayarın seçimi: kağıt. Beraberlik!";
        }else{
            return "Senin seçimin: kağıt. Bilgisayarın seçimi: makas. Kaybettin!";
        }
    }else if(secim === "makas"){
        if(bilgisayar === 0){
            return "Senin seçimin: makas. Bilgisayarın seçimi: taş. Kaybettin!";
        }else if(bilgisayar === 1){
            return "Senin seçimin: makas. Bilgisayarın seçimi: kağıt. Kazandın!";
        }else{
            return "Senin seçimin: makas. Bilgisayarın seçimi: makas. Beraberlik!";
        }
    }
}
console.log(tasKagitMakas("taş"));
console.log(tasKagitMakas("kağıt"));
console.log(tasKagitMakas("makas"));