/*
araba objesindeki fiyata bakarak hangi ötv dilimine girdiğini konsola ternary if kullanarak yazdır.

- Arabanın fiyatı 1950000'ye eşit veya büyük ise %40, değil ise %10'dur.
- Konsola "ÖTV: %40" formatında bir metin yazdırsın.

*/
const araba = {
    marka: "VOLVO",
    model: "XC40 Recharge",
    fiyat: 2400000
}
console.log(`ÖTV: ${araba.fiyat >= 1950000 ? "%40" : "%10"}`);

/*
Bir sayının Tek veya Çift olup olmadığını ternary if ile result isimli bir değişkende sakla ve konsola yazdır.

- Tek veya Çift olma durumunu result isimli bir değişkende sakla. (ternary if kullan)
- result'ı konsola yazdır.
*/

const sayi =  47;
const result = sayi % 2 === 0 ? "Çift" : "Tek";
console.log(result);

/*
Argüman olarak aldığı kelime'nin uzunluğunu özel bir metin ile dönen fonksiyon yaz.

- Fonksiyonun adı getLengthStr olsun.
- Argüman olarak bir kelime'yi alsın.
- "XXX kelimesi YYY karakterdir." metnini geri dönsün.

*/

function getLengthStr(kelime) {
    return `${kelime} kelimesi ${kelime.length} karakterdir.`;
}
console.log(getLengthStr("Merhaba"));

/*

Aşağıda tanımlı değişkenleri kullan ve hedeflenen URL'i backtick kullanarak oluştur.

Örn:
https://web.journeyapp.com/notifications
"web" subdomain,  "journeyapp.com" domain name'dir. "notifications" ise endpoint'tir.
*/

const subDomain = "app";
const domain = "example.com";
const endPoint = "users";
let URL = `https://${subDomain}.${domain}/${endPoint}`;


/*Aldığı 4 argümanı kullanarak bir obje oluşturan fonksiyon yaz. Fonksiyon çağırılır iken smsOnayi ve epostaOnayi belirtilmemiş ise değeri false olsun. (if veya ternary if kullanma)

- Fonksiyonun adı userModel olsun.
- 4 argüman alsın: isim, eposta, smsOnayi, epostaOnayi.
- smsOnayi, emailOnayi argüman olarak gelmez ise değeri false olsun.
- Gelen bilgilerden user isimli bir obje oluştururken isim yerine name, eposta için email, smsOnayi için hasSMSpermission, epostaOnayi için hasEmailPermission kullan. */

function userModel(isim, eposta, smsOnayi, epostaOnayi) {
    const user = {
        name: isim,
        email: eposta,
        hasSMSpermission: smsOnayi || false,
        hasEmailPermission: epostaOnayi || false
    }
    return user;
}
console.log(userModel("John", "john@example.com", true, true));

/**Adı sendSMS olan bir anonim fonskiyon tanımla 2 argüman alsın ve aşağıdaki metni backtick ile oluştursun ve dönsün.

- Fonksiyonun adı sendSMS olsun.
- 2 argüman alsın: value, location(default değeri: İstanbul).
- "Maltepe ilçesinde ATM'den 100 TL çektiniz." metnini oluştursun ve geri dönsün. */

const sendSMS = (value, location = "İstanbul") => {
    return `${location} ilçesinde ATM'den ${value} TL çektiniz.`;
}

/*
0-10 arası rastgele bir sayı oluşturup dönen bir arrow function yaz. 

- Fonksiyonun adı randomNumber olsun.
- 0-10 arası(10 hariç) bir tam sayı oluştursun ve dönsün.
- Bu fonksiyonu çağırıp, çıktısını konsola yazdır.
*/

const randomNumber = () => {
    return Math.floor(Math.random() * 10);
}
console.log(randomNumber());

/*
Aşağıda tanımlanmış fonksiyonu mümkün olduğu kadar az karakter kullanarak arrow function olarak yeniden tanımla.

- Eski halini silmeyi unutma!
*/


const sum = (a,b) => a + b;

// Aşağıdaki fonksiyonu tek satır arrow fonksiyon olarak tekrar yaz. (mümkün olduğunca parantez kullanma)

function ilkHarfBuyuk (kelime) {
    return kelime.charAt(0).toUpperCase() + kelime.slice(1);
}

const ilkHarfBuyuk = (kelime) =>  kelime.charAt(0).toUpperCase() + kelime.slice(1);


//Aşağıdaki kod'daki fonksiyon çalıştırılınca hata veriyor. Hatayı düzelt.
const calculate = (a,b) =>  a*b;

/*
Aşağıda calculate isimli bir fonksiyon tanımlanmış. 
Yeni bir satırda bu fonksiyonu çağır:
- callback olarak aldığı 2 sayının toplamını return eden bir fonksiyonu ve 
- 10, 22 sayılarını argüman olarak ver.

*/

const calculate2 = (callback, a, b) => {
    console.log(`${a} ve ${b} sayısının işlem sonucu ${callback(a,b)}'dir.`)    
}
calculate2((a,b) => a+b, 10, 22);


/*
Adı format olan bir fonksiyon tanımla. Argüman olarak aldığı bir sayıyı konsola "Sayı: XXX" şeklinde yazdırsın.
Adı run olan başka bir fonksiyon tanımla. 2 argüman alsın: callback fonksiyon ve bir sayi. callback fonksiyonunu bu sayi için çalıştırsın.

run fonksiyonuna format fonksiyonunu ve 10 sayısını argüman olarak yollayarak çalıştır.

- Fonksiyonları tek satır arrow function olarak tanımlayın.
*/

const format = (sayi) => console.log(`Sayı: ${sayi}`);
const run = (callback, sayi) => callback(sayi);

run(format, 10);

// Adı yazdir olan anonim fonksiyon yaz. Çalıştırıldıktan 3sn sonra konsola "3sn sonra çalıştı..." yazdırsın.

const yazdir = () => {
    console.log("3sn sonra çalıştı...");
}
setTimeout(yazdir, 3000);


/*
şağıdaki kodun konsol çıktısını -aralara tire koyarak- result isimli değişkene atayın.

Örn: let result = "1-3-2-5-4";

setTimeout(function (){
    console.log(1);
    console.log(2);
}, 0);
console.log(3)
setTimeout(function (){
    console.log(4);
}, 1000);
setTimeout(function (){
    console.log(5);
}, 1000);
let result = "3-1-2-4-5";
*/


/*Çalıştırıldığında konsola hemen "Started..." yazan. Aradan 2 sn geçtikten sonra da "Completed..." yazdıran kodu yaz.
 
- Fonksiyonları tek satır arrow function olarak tanımlayın.
*/

const started = () => console.log("Started...");
const completed = () => console.log("Completed...");

started();
setTimeout(completed, 2000);


/*
Aşağıdaki kodun konsol çıktısını -aralara tire koyarak- result isimli değişkene atayın.

Örn: let result = "1-3-2-5-4";

function log() {
    console.log(0);
}
console.log(1);
setTimeout(function (){
    console.log(2)
}, 1000);
console.log(3);
setTimeout(log, 0);
console.log(4);
let result = "1-3-4-0-2";
*/

/*
sayi isimli değişkenin değerinin;
Pozitif sayı, Negatif sayı veya Sıfır"olma durumunu,  
tek satırda ternary if kullanarak 
sonuc isimli bir değişkene ata. 
sonuc'u konsola yazdır.

*/

const sayi2 = 10;
const sonuc2 = sayi2 > 0 ? "Pozitif sayı" : sayi2 < 0 ? "Negatif sayı" : "Sıfır";
console.log(sonuc2);

/*
"Merhaba. Benim adım Emre. 46 yaşındayım ve İstanbul'un Maltepe ilçesinde oturuyorum. Yabancı dil biliyorum." metnini konsola backtick kullanarak yazdır.

- Tüm bilgileri user isimli objeden alsın.
- Yabancı dil biliyorsa biliyorum, bilmiyorsa bilmiyorum yazdırsın.
*/
const user = {
    name: "Emre",
    age: 46,
    location: "Maltepe",
    foreignLangs: ["English", "German"]
}
console.log(`Merhaba. Benim adım ${user.name}. ${user.age} yaşındayım ve İstanbul'un ${user.location} ilçesinde oturuyorum. ${user.foreignLangs.length > 0 ? "Yabancı dil biliyorum." : "Yabancı dil bilmiyorum."}`);


/*
Argüman olarak array alan bir fonksiyon yaz. Array'in her elemanını "1. eleman: XXX" olarak konsola yazdırsın.

- Fonksiyonun adını printItems olsun.
- Bir array'i argüman olarak alsın.
- Her elemanı konsola tek tek "1. eleman: XXX" şeklinde yazdırsın.
*/

function printItems(array) {
    array.forEach((item, index) => {
        console.log(`${index + 1}. eleman: ${item}`);
    });
}

/*
şağıdaki kod çalışınca oluşan konsol çıktısını result isimli değişkene ata.

function emeklilikZamani(iseGirisTarihi, primGun, yas, cinsiyet, hedefPrimGun = 5000) {
    if(primGun >= hedefPrimGun) {
        if(cinsiyet === "Kadın" && yas >= 60) {
            console.log(`${hedefPrimGun} prim gününü doldurdunuz.`)
        } else if (cinsiyet === "Erkek" && yas >= 65){
            console.log(`${hedefPrimGun} prim gününü doldurdunuz.`)
        } 
    } else {
        console.log(`${hedefPrimGun - primGun} prim gün eksiğiniz bulunmaktadır.`) 
    }
}

emeklilikZamani(2014, 4500, 68, "Erkek");
let result = "500 prim gün eksiğiniz bulunmaktadır.";
*/


/*
2 argüman alan ve kendisine gelen metni istendiği gibi büyük veya küçük harfe çeviren bir anonim fonksiyon yaz. 
"300 tek sayıdır" metnini ve toUpper değerini true kullanarak çağır ve geri döndüğü değeri konsola yazdır.

- Fonksiyonun adı changeCase olsun.
- 2 argüman alsın: text, toUpper(boolean).
- toUpper true ise büyükharfe dönüştürsün, değil ise küçük harfe dönüştürsün ve dönsün.
- "300 tek sayıdır" metnini ve toUpper değerini true kullanarak çağır ve geri döndüğü değeri konsola yazdır.
*/

const changeCase = (text, toUpper) => {
    return toUpper ? text.toUpperCase() : text.toLowerCase();
}
console.log(changeCase("300 tek sayıdır", true));


/*
Faktöriyel hesaplayan bir arrow fonksiyon yaz. 10 değeri için çalıştır ve sonucunu konsola'a yaz.

Faktöriyel: n, 1'den büyük bir doğal sayı olmak üzere; 1'den n'e kadar olan doğal sayıların çarpımına n'in faktöriyeli veya kısaca n faktöriyel denir.

- Fonksiyonun adı factoriyel olsun.
- Bir sayıyı argüman olarak alsın: n.
- Faktöriyel'ini hesaplayıp dönsün.
- 10 değeri için bu fonksiyonu çalıştır ve sonucunu konsola'a yaz.
*/

const factoriyel = (n) => {
    let result = 1;
    for(let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factoriyel(10));

/*
Aşağıdaki araba objesinde getKilometer metodu'nu anonim function kullanarak tanımla.

- Metodun adı getKilometer olsun.
- "Ruhsat Seri No XXX olan araba YYY km'dir." metnini dönsün.
- Metodu anonim function olarak yaz.

*/

const araba2 = {
    seriNo: "AB 50590",
    plaka: "34 TB 3501",
    km: 3500
}
araba2.getKilometer = function() {
    return `Ruhsat Seri No ${araba2.seriNo} olan araba ${araba2.km} km'dir.`;
}
console.log(araba2.getKilometer());


/**login fonksiyonunu verilen user objesi için çağırın. 
Callback olarak,  ternary if kullanarak notificationChannel ayarı "SMS" ise smsGonder'i, değil ise emailGonder'i yollayan fonksiyon kullan. */

const smsGonder = message => console.log("SMS: " + message);
const emailGonder = message => console.log("EMAIL: " + message);

const login = (user, notification) => {
    const text = "Merhaba " + user.name + ", " + new Date() + " tarihinde login oldunuz.";
    notification(text);
}

const user2 = {
    name: "Erdem Yavuz",
    email: "erdem@wit.com.tr",
    notificationChannel: "SMS"
}
login(user2, user2.notificationChannel === "SMS" ? smsGonder : emailGonder);


/*
Üyelik paketine göre fazladan çekiliş hakkı veriliyor. Çekiliş hakkını ve çekiliş fonksiyonunu callback olarak alan bir fonksiyon yaz. Çekiliş hakkı kadar callback fonksiyonunu çalıştırsın.

- Fonksiyonun adı carkiCevir olsun.
- 2 argüman alsın: cekilisHakki, callback.
- cekilisHakki kadar callback fonksiyonu çalıştırsın.
- Çekiliş hakkı 3 olan kullanıcı için kodu çalıştır.

*/

const cekilis = () => {
    const random = Math.floor(Math.random()*500);
    if(random === 399) {
        console.log("Cep telefonu kazandınız.")
    } else if(random % 4 === 0) {
        console.log("Sinema bileti kazandınız.") 
    }
}

const carkiCevir = (cekilisHakki, callback) => {
    for(let i = 0; i < cekilisHakki; i++) {
        callback();
    }
}

carkiCevir(3, cekilis);

/*
Verilen 3 sayıdan küçük olanı tek satırda ve ternary if kullanarak enKucuk isimli değişkenine ata. Konsola yazdır.

- İpucu: Bir sayı diğer sayılardan küçük ise en küçüktür, yoksa diğer sayılardan küçük olan en küçüktür.
*/
let x = 12, y = 8, z = 15;
const enKucuk = x < y ? x : y < z ? y : z;
console.log(enKucuk);


/*

Argüman olarak bir array alan anonim fonksiyon yaz. 3'e tam bölünen sayıların toplamını dönsün. 
sayilar array'ini bu fonksiyonda kullanarak "Sayılar array'inde 3'e tam bölünen sayıların toplamı: XXX'dir." metnini konsola backtick ile yazdır.

- Fonksiyonun adı kalanlar olsun.
- Bir array'i argüman olarak alsın.
- Bu array'de 3'e tam bölünen sayıların toplamını dönsün.
- "Sayılar array'inde 3'e tam bölünen sayıların toplamı: XXX'dir." metnini backtick kullanarak konsola yazdır.
- Metindeki toplam değerini(XXX) fonksiyonu sayilar array'i için çağırarak kullan.
*/
const sayilar = [3, 6, 9, 10, 12, 15, 17];
const kalanlar = (array) => {
    return array.filter(item => item % 3 === 0).reduce((acc, curr) => acc + curr, 0);
}
console.log(`Sayılar array'inde 3'e tam bölünen sayıların toplamı: ${kalanlar(sayilar)}'dir.`);


/**
Bir simülasyon uygulaması için skor isimli bir fonksiyon yaz. 10-25 arasında rastgele sayı dönsün.

- Fonksiyonun adı skor olsun.
- Bir argüman almadan  10-25 arası sayı oluştursun.
- 10(dahil)-25(dahil) arasında rastgele bir tam sayı oluştursun ve dönsün.
- Tek satır arrow fonksiyon olarak yaz.
 */

const skor = () => Math.floor(Math.random() * 16) + 10;
console.log(skor());


/*

Bir basketbol maçı için aşağıdaki macSimulation fonksiyonunu tamamla.
"Fenerbahçe" ve "Galatasaray" takımları için macSimulation fonksiyonunu çalıştır. Sonucunu konsola yazdır.

- Her takım için ayrı ayrı 55-100 arası(ikisi de dahil) random bir skor oluştursun.
- "Beşiktaş: 85 - Anadolu Efes: 100" şeklinde bir metin dönsün.
*/
const skorOlustur = (a,b) => Math.floor(Math.random()*(b-a+1)+a);

const macSimulation = (callback, evSahibiTakimAdi, konukTakimAdi) => {
    const evSahibiSkoru = callback(55, 100);
    const konukSkoru = callback(55, 100);
    return `${evSahibiTakimAdi}: ${evSahibiSkoru} - ${konukTakimAdi}: ${konukSkoru}`;
}

console.log(macSimulation(skorOlustur, "Fenerbahçe", "Galatasaray"));


/*
3 argüman alan bir fonksiyon yaz. Aldığı sayının tek veya çift olmasına göre argüman olarak gelen callback fonksiyonlardan birini kullansın.
Sonra, bu fonksiyonu çağır.

- Fonksiyonun adı sayiKontrol olsun.
- 3 argüman alsın: sayi, ciftSayiCallback, tekSayiCallback.
- Sayı çift ise ciftSayiCallback'i, tek ise tekSayiCallback'i çalıştırsın.
- Sonra bu fonksiyonu 3 sayısı için çağır. Callback fonksiyonları sayiKontrol'u çağırırken tanımla.
- ciftSayiCallback bir sayıyı argüman olarak alsın ve "XXX çift sayıdır." metnini konsola yazdırsın.
- tekSayiCallback bir sayıyı argüman olarak alsın ve "XXX tek sayıdır." metnini konsola yazdırsın.
*/

const sayiKontrol = (sayi, ciftSayiCallback, tekSayiCallback) => {
    return sayi % 2 === 0 ? ciftSayiCallback(sayi) : tekSayiCallback(sayi);
}
console.log(sayiKontrol(3, (sayi) => console.log(`${sayi} tek sayıdır.`), (sayi) => console.log(`${sayi} çift sayıdır.`)));
