// isim adında bir parametre alan ve bu ismi konsola Merhaba _____ şeklinde yazdıran karsila adında bir fonksiyon tanımla.

function karsila(isim){
    console.log("Merhaba " + isim);
}

// sayi1 ve sayi2 adıyla 2 parametre alan ve sayıi1'in sayi2 ile bölümünden kalanı geri dönen kalan isminde bir fonksiyon yaz.
function kalan(sayi1, sayi2){
    return sayi1 % sayi2;
}

// 2 parametre alan ve bu 2 parametreyi toplayıp sonucu geri dönen topla isimli bir fonksiyon yaz. Bu fonksiyonu kullanarak konsola 3 + 5 = 8 metnini yazdır. 
function topla(number1, number2){
    return number1 + number2;
}
console.log(topla(3, 5) + " = " + topla(number1, number2));


// Parametre olarak a ve b isminde 2 sayi alan enBuyuk adında bir fonksiyon yaz. Bu fonksiyon ilk sayı daha büyükse ilk sayıyı, değilse diğerini geri dönsün.
function enBuyuk(a, b){
    if(a > b){
        return a;
    }else{
        return b;
    }
}
console.log(enBuyuk(3, 5));

// Aşağıdaki kod SyntaxError: Unexpected token ';'. Expected an opening '{' at the start of a function body. hatasını basıyor. Sebebini bul ve düzelt.

function deneme()
{
  function fn () {
    return "elma"
  }
  return fn()
}

console.log(deneme())


// Hadi tahmin yürüt: Alttaki kod konsolda çalıştırıldığında hangi değerleri yazdırır? Tahminlerini, aralarına - ekleyerek output değişkenine yaz.
const x = 100;
{
    const x = 200;
    console.log(x);
}
console.log(x);

const output = "200 - 100";

// Kullanıcıya Adın ne? sorusunu sorarak bir isim al ve bunu name adında bir değişkende sakla.
function isimAl(){
    const name = prompt("Adın ne?");
    return name;
}

// locationCheck adında bir fonksiyon yaz. Kullanıcıya Nerede oturuyorsun? sorusunu sorsun ve cevabı location değişkeninde saklasın. Kullanıcı Ankara yazarsa true return etsin, değilse Şu an sadece Ankara'da ikamet edenlere hizmet verebiliyoruz! uyarısını göstersin.
function locationCheck(){
    const location = prompt("Nerede oturuyorsun?");
    if(location === "Ankara"){
        return true;
    }else{
        return "Şu an sadece Ankara'da ikamet edenlere hizmet verebiliyoruz!";
    }
}


// Aşağıdaki kod SyntaxError: Return statements are only valid inside functions. hatasını veriyor. Hatayı bul ve düzelt.
function yasGrubu(age) {
    let grup = "";
    if (age < 13) {
      grup = "Çocuk";
    } else if (age >= 13 && age <= 19) {
      grup = "Genç";
    } else {
      grup = "Yetişkin";
    }
  return grup;
}