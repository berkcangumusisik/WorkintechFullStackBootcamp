/**
 Fonksiyon Nedir?
 Bir işi yapan kod bloklarıdır. Kodları tekrar tekrar yazmak yerine fonksiyon olarak tanımlayıp istediğimiz zaman çağırabiliriz.

 Fonskiyonların ana amacı belli bir görevi yapmak için yazılmış kodları bir araya getirip kolayca çağırabilmek için oluşturulan yapılardır.

 Örnek: Kahve Makinesi
 Bir kahve makinesini düşünelim. Kahve makinesi bir fonksiyon gibidir.
 - Makineye kahve çekirdeği, su ve şeker koyarsınız (parametreler/girdiler)
 - Makine içinde kahveyi hazırlar (işlem)
 - Size hazır kahve verir (return/çıktı) 
 Her kahve yapmak istediğinizde aynı süreci tekrar tekrar yapmak yerine, sadece butona basarsınız (fonksiyonu çağırırsınız).

 Nasıl Tanımlanır?

 function fonksiyonAdi(parametre1, parametre2, ...) {
    // Fonksiyon içindeki kodlar
    return sonuc;
 }

 Çağrılışı:
 fonksiyonAdi(parametre1, parametre2, ...);

 */

function yaziTura() {
    let rastgele = Math.random();
    if(rastgele > 0.5) {
        console.log("Tura");
    }else{
        console.log("Yazı");
    }
}

yaziTura();

/*Konsola Günaydın! yazdıran selamla adında bir fonksiyon oluşturun. */
function selamla() {
    console.log("Günaydın!");
}
selamla();

/*
return ile bir fonksiyonun sonucunu döndürmek için kullanılır. Fonksiyonun sonucunu bir değişkene atayarak kullanabiliriz.
return altını okumaz. Yani return altındaki kodlar çalıştırılmaz.
*/

function yaziTura2() {
    let rastgele = Math.random();
    if(rastgele > 0.5) {
        return "Tura";
    }else{
        return "Yazı";
    }
}

const sonuc2 = yaziTura2();
console.log(sonuc2);

function topla(a, b) {
    return a + b;
}

const sonuc3 = topla(10, 20);
console.log(sonuc3);

function kartGoster() {
    console.log("Kartınızı almayı unutmayınız.");
}
kartGoster();

/**
 Parametreli Fonksiyonlar
 Fonksiyonların içinde parametreler alabilir. Parametreler fonksiyonun içinde kullanılır.
 Parametreler fonksiyonun içinde kullanılır.
 function fonksiyonAdi(parametre1, parametre2, ...) {
    // Fonksiyon içindeki kodlar
}
 fonksiyonAdi(argüman1, argüman2, ...);
 */

function uyariGoster(mesaj) {
    console.log(mesaj);
}
uyariGoster("Kartınızı almayı unutmayınız.");
uyariGoster("Şifre yanlış. Lütfen tekrar deneyiniz.");

// yas adında bir parametre alan ve konsola "Yaşın" kelimesinden sonra onu yazdıran yasSoyle adında bir fonksiyon oluşturun.
function yasSoyle(yas) {
    console.log("Yaşın: " + yas);
}

yasSoyle(20);


function uyariGoster2(mesaj, isim) {
    console.log(mesaj + " " + isim);
}

uyariGoster2("Yine Bekleriz", "Ahmet");

//Parametre olarak sayi1, sayi2 ve sayi3 alan ve bunları çarpıp return eden carp adında bir fonksiyon yazın.
function carp(sayi1, sayi2, sayi3) {
    return sayi1 * sayi2 * sayi3;
}

const sonuc4 = carp(10, 20, 30);
console.log(sonuc4);

function yasMesaj(yas){
    if(yas < 18){
        return "Reşit değilsiniz.";
    }else{
        return "Reşitsiniz.";
    }
}

console.log(yasMesaj(10)); // Reşit değilsiniz.
console.log(yasMesaj(20)); // Reşitsiniz.


function indirimliFiyat(fiyat, indirimOrani) {
    let yeniFiyat = fiyat - (fiyat * indirim / 100);
    return yeniFiyat;
}

console.log("İndirimli fiyat: " + indirimliFiyat(200, 25)); // 150
console.log("İndirimli fiyat: " + indirimliFiyat(100, 10)); // 90

function netMaas(brutMaas, vergiOrani) {
    let kesinti = (brutMaas * vergiOrani) / 100;
    return brutMaas - kesinti;
}

console.log("Net maaş: " + netMaas(20000, 15)); // 17000

function ortalamaHesapla(not1, not2, not3) {
    let ortalama = (not1 + not2 + not3) / 3;

    if(ortalama >= 50){
        return "Geçti";
    }else{
        return "Kaldı";
    }
}

console.log(ortalamaHesapla(50, 50, 50)); // Geçti
console.log(ortalamaHesapla(40, 40, 40)); // Kaldı




function hipotenusHesapla(kenar1, kenar2) {
    return Math.sqrt(kenar1 * kenar1 + kenar2 * kenar2);
}

console.log("Hipotenüs: " + hipotenusHesapla(3, 4)); // 5