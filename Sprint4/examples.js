console.log("Hello World"); // node examples.js ile dosyayı çalıştırabiliriz.

let name = ""; 
if(name){
    console.log("Hello " + name);
} 

/**
 Falsy değerleri: Tek başına kullanıldığında false olan değerler.
 0, "", null, undefined, NaN, false
 
 Truthy değerler: Tek başına kullanıldığında true olan değerler.
 1, "Hello", true, {}, [], "0", "false"

 */

function add(number1, number2){
    return number1 + number2;
}

console.log(add(10, 20));


function ageCheck(age){
    if(age > 18){
        return "Reşitsin.";
    } else {
        return "Reşit değilsin.";
    }
}

console.log(ageCheck(19));

let metin = "Hello World";
console.log(metin.length); // 11 => Metinin uzunluğunu verir.
console.log(metin.toUpperCase()); // HELLO WORLD => Metni büyük harfe çevirir.
console.log(metin.slice(0, 4)); // Hello => 0'dan 4'e kadar olan karakterleri alır.
console.log(metin.slice(2,3))

let sayilar = [3, 6, 9, 12, 15];
console.log(sayilar[0]); // 3 => Dizinin ilk elemanını verir.
console.log(sayilar[1]); // 6 => Dizinin ikinci elemanını verir.
console.log(sayilar[sayilar.length - 1]); // 15 => Dizinin son elemanını verir.

sayilar.push(18); // 18 => Dizinin sonuna 18 ekler.
console.log(sayilar); // [3, 6, 9, 12, 15, 18]

for (let i = 0; i < sayilar.length; i++){
    console.log(sayilar[i]); // 3, 6, 9, 12, 15, 18
}

for (let sayi of sayilar){
    console.log(sayi); // 3, 6, 9, 12, 15, 18
}

for (let i = 0; i < sayilar.length; i++){
    if(sayilar[i] % 2 === 0){
        console.log(sayilar[i]); // 6, 12, 18
    }
}


let users = [
    { name: "Ali", yas: 17 },
    { name: "Ayşe", yas: 22 },
    { name: "Mehmet", yas: 19 }
];

let sayi = 0;
for( let i = 0; i < users.length; i++){

    if (users[i].yas > 18){
        console.log(users[i].name);  // Ayşe, Mehmet
    } else {
        sayi++;
    }
}
console.log(sayi); // 1 => 18'den küçük olan kişi sayısını verir.

function siparisHesapla(fiyat, adet=1, indirimOrani=0){
    let toplam = fiyat * adet;
    let indirim = toplam * indirimOrani;
    return toplam - indirim;
}
console.log(siparisHesapla(500, 3, 0.1));  // 1350 => 500'lık bir ürünü 3 adet alıp %10 indirim yaparsak 1350'lik bir sipariş oluşur.


let fiyatlar = [100, 200, 300, 400];
let indirimliHesapla = fiyatlar.map(fiyat => {
    if (fiyat > 250) {
        return fiyat * 0.75; // %25 indirim
    } else {
        return fiyat * 0.90; // %10 indirim
    }
});
console.log(indirimliHesapla); // [90, 180, 270, 300]


let yetiskinler = users.filter(user => user.yas > 18);
console.log(yetiskinler); // [{ ad: "Ayşe", yas: 25 }, { ad: "Mehmet", yas: 19 }]


let sepet = [
    { urun: "Kalem", fiyat: 10, adet: 3 },
    { urun: "Defter", fiyat: 20, adet: 2 }
];
let toplamFiyat = sepet.reduce((toplam, urun) => toplam + urun.fiyat * urun.adet, 0);
console.log(toplamFiyat); // 70 => Kalem ve Defterin toplam fiyatını verir.

let okul = {
    siniflar: [
      {
        ad: "10-A",
        ogrenciler: [
          { ad: "Ali", not: 70 },
          { ad: "Ayşe", not: 90 }
        ]
      },
      {
        ad: "10-B",
        ogrenciler: [
          { ad: "Ahmet", not: 80 },
          { ad: "Enes", not: 40 }
        ]
      }
    ]
  };

for (let sinif of okul.siniflar) {
    console.log(`Sınıf: ${sinif.ad}`);
    for (let ogrenci of sinif.ogrenciler) {
        console.log(`  ${ogrenci.ad}: ${ogrenci.not}`);
    }
}