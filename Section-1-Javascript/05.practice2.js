// Aşağıdaki kodda değişkenleri tanımlarken yapılan yanlışları düzelt.
let sayi1 = 5;
let sayi2 = 10;
let sonuc = sayi1 * sayi2;
let vatandaslikNo = 10010010011;
let bakiye = 50000;
bakiye = bakiye - 1000;

// Aşağıda verilen kodda değişkenler tanımlanmış. Değişken isimlendirme kurallarına dikkat ederek yanlış tanımlanmış değişkenleri düzelt.
const anne_adi = "Türkan";
const mezun_oldugum_universite = "İTÜ";
let yasim = 40;
const birthYear = 1982;

// Aşağıda eski bir uygulamadan kalma bir kod parçası var. Bu koddaki değişken tanımlamalarını modern JavaScripte uygun şekilde güncelle.
let metin = "";
let birthYear = 1978;
let name = "Oğuz";
let status = "";
let age = 2023 - birthYear;

if (age < 12) {
  status = "Çocuk";
} else if (age >= 12 && age < 18) {
  status = "Genç";
} else {
  status = "Yaşlı";
}

metin = name + "'un statüsü: " + status;
console.log(metin);

// pi isminde bir değişken tanımla, değerini pi sayısı yap. cevre isimli bir değişkende yarıçapı 5 olan bir çemberin çevresini (2πr) hesaplayan kodu yaz.
let pi = Math.PI;
let yaricap = 5;
let cevre = 2 * pi * yaricap;

// Aşağıdaki koddaki yanlışlığı düzelt.

let num = 0;
if (num > 0) {
  console.log("Pozitif");
} else if (num < 0) {
  console.log("Negatif");
}else {
  console.log("Sıfır");
} 

// Aşağıdaki if ifadesinin koşul kısmına num sayısının 10 ile 20 arasında (ikisi de dahil) olup olmadığını kontrol eden koşulu yaz.
let num = 15;
if (num>= 10 && num <= 20) {
    console.log("Sayı 10 ile 20 arasındadır.");
}

/**

Aşağıdaki hava sıcaklığının durumunu konsola yazdıran koşullu ifadeyi yaz. 

- 40'tan büyük: "Aşırı Sıcak"
- 30'dan büyük: "Çok Sıcak"
- 20'den büyük: "Sıcak"
- Diğer sıcaklıklar: "Soğuk"

 */

let temp = 35;
if(temp > 40){
  console.log("Aşırı Sıcak");
}else if(temp > 30){
  console.log("Çok Sıcak");
}else if(temp > 20){
  console.log("Sıcak");
}else{
  console.log("Soğuk");
}

// Aşağıda random isimli bir değişken verilmiş. Bu değişkene 0 (dahil) ile 20 (hariç) arasında rastgele bir sayı atayan kodu yaz.
let random = Math.floor(Math.random() * 20);
console.log(random);

/**
 skor isimli sabit bir değişken tanımla. Değeri 10 ile 30 arasında rastgele bir tam sayı olsun. 

İpucu: Bu soruyu çözmek için Math.floor() fonksiyonunu araştırabilirsiniz. 
Math.floor() fonksiyonu, bir sayıyı en yakın tam sayıya yuvarlar.
 */

const skor = Math.floor(Math.random() * 20) + 10;

// str1 ve str2 isimli iki değişken tanımla ve Hello, World kelimelerini sırasıyla tanımladığın değişkenlere ata. Ardından bu değişkenleri kullanarak konsola  "Hello World" metnini yazdır.

let str1 = "Hello";
let str2 = "World";
console.log(str1 + " " + str2);

// Aşağıdaki değişkenleri kullanarak metin değişkeninin değerini Merhaba Ayşe. Benim adım Emre ve 40 yaşındayım. yap.
const talepEden = "Ayşe";
const adim = "Emre";
const yasim = 40;
const metin = "Merhaba " + talepEden + ". Benim adım " + adim + " ve " + yasim + " yaşındayım.";

// Bir kullanıcı web sitene kayıt oluyor. Şifre ve şifre doğrulama alanlarını dolduruyor. Aşağıdaki koda ekleme yap.
// Bu 2 şifre birbirine eşit ise konsola Hoş geldin. değil ise Girdiğiniz şifreler aynı değil! yazsın.
let sifre = prompt("Bir şifre oluşturunuz:");
let sifreTekrar = prompt("Şifreyi tekrar giriniz:");
if(sifre === sifreTekrar){
    console.log("Hoş geldin.");
}else{
    console.log("Girdiğiniz şifreler aynı değil!");
}

// Aşağıda hesabı yapılan işlemi, tanımlanmış değişkenleri kullanarak formul isimli değişkende formülleştir.
// 4 x 5 x (9 / 3) 

const katSayi = 4;
const sayi1 = 5;
const sayi2 = 9;
let formul = katSayi * sayi1 * (sayi2 / 3);

// Aşağıdaki ifadenin konsola Doğru yazdırması için gerekli yere ! koy.
let num = 12;
if(num < 5 || num > 14) {
 console.log("Yanlış")
} else if(!(num > 10 && num < 5) && num === 12) {
 console.log("Doğru")
}

// Verilen koddaki hatayı düzelt.
let num = 9;
if (num % 3 === 0 || num % 5 === 0) {
  console.log("3 veya 5'e tam bölünebiliyor");
}