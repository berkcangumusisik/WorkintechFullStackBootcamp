/*
  OBJECT (Nesne) Kavramı
 
  Object, JavaScript'te en temel veri yapılarından biridir.
  Birden fazla ilişkili veriyi bir arada tutmak için kullanılır.
    
  Özellikler:
  - Key-Value (Anahtar-Değer) çiftleri şeklinde veri saklar
  - Key'ler string veya symbol olabilir. Tırnak kullanmadan değişken Tanımlama kurallarına uygun olarak tanımlanmalıdır.
  - Value'lar herhangi bir veri tipi olabilir (string, number, array, function, başka object vb.)
  - Gerçek hayattaki nesneleri modellemek için idealdir
  
  Obje Tanımlama Yöntemleri:
  const objectName = {
    key1: value1,
    key2: value2,
    key3: value3
  };

  Object'e erişim yöntemleri:
  objectName.key; Tırnak olmadan erişim yapılır.
  objectName["key"]; Tırnak kullanarak erişim yapılır.

  Object Düzenleme Yöntemleri:
  objectName.key = value; Tırnak olmadan düzenleme yapılır.
  objectName["key"] = value; Tırnak kullanarak düzenleme yapılır.

  Yeni Key-Value Pair Ekleme Yöntemleri:
  objectName.key = value; Tırnak olmadan ekleme yapılır.
  objectName["key"] = value; Tırnak kullanarak ekleme yapılır.

  Key-Value Pair Silme Yöntemleri:
  delete objectName.key; Tırnak olmadan silme yapılır.
  delete objectName["key"]; Tırnak kullanarak silme yapılır.

 */


const kedim = {
    isim: "Portakal",
    cinsi: "Tekir",
    "Doğum Yılı": 2020,
    "Aşıları tam mı?": true,
    renkleri: ["Beyaz", "Turuncu"]
}
console.log(kedim); // Object'i konsola yazdırır.
console.log(kedim.isim); // Object'in isim key'ine erişir.
console.log(kedim["cinsi"]); // Object'in cinsi key'ine erişir.
kedim["Doğum Yılı"] = 2019; // Object'in Doğum Yılı key'ine 2019 değerini atar.
kedim.cinsi = "Sarman"; // Object'in cinsi key'ine Van Kedisi değerini atar.
kedim.kilo = 5; // Object'in kilo key'ine 5 değerini atar. Yeni bir key-value pair ekler.
kedim["Göz Rengi"] = "Mavi"; // Object'in Göz Rengi key'ine Mavi değerini atar. Yeni bir key-value pair ekler.
delete kedim.kilo; // Object'in kilo key'ini siler.
delete kedim["Göz Rengi"]; // Object'in Göz Rengi key'ini siler.

// ilkPokemonum adında ve object türünde bir değişken tanımlayın. isim keyi "pikachu", yas keyi 2 değerine sahip olsun.
const ilkPokemonum = {
    isim: "pikachu",
    yas: 2,
    cins: "elektrik"
  }

// Verilen koda, voleybolcu objesindeki yas key'inde saklanan değeri yazdırmak için gereken kodu ekleyin.
const voleybolcu = {
    ad: "Melissa Vargas",
    yas: 24
  };
  
  console.log(voleybolcu.yas);

// Verilen koda, ev objesindeki "Oda Sayısı" key'inde saklanan değeri yazdırmak için gereken kodu ekleyin.
const ev = {
    "Oda Sayısı": 4,
    "Banyo Sayısı": 2
  };
  console.log(ev["Oda Sayısı"])

// Verilen ogrenci nesnesine yeni bir anahtar-değer çifti ekleyin: "bolum" değeri "Bilgisayar Bilimi" olmalı.
const ogrenci = {
    ad: "Emre",
    yas: 22
  };
ogrenci.bolum = "Bilgisayar Bilimleri";

// Arabanın modelini "Corolla" olarak güncelleyin.
const araba = {
    marka: "Toyota",
    model: "Camry"
  };
araba.model = "Corolla";

// Verilen sehir objesinden nufus anahtarını ve değerini silin.
const sehir = {
    ad: "İstanbul",
    ulke: "Türkiye",
    nufus: 15000000
  };
  delete sehir.nufus;

const fare = {
    renk: "Siyah",
    hiz: 5,
    solTik : function() {
        return "Fare sol tıklandı.";
    },
    hizRaporu : function() {
        return "Fare hızı " + this.hiz; //this keyword'u objeyi kendisi olarak tanımlar.
    },
    hizlan: function() {
        if (this.hiz < 10) {
            this.hiz++;
        }
        return "Yeni hız: " + this.hiz;
    },
    yavasla: function() {
        if (this.hiz > 1) {
            this.hiz--;
        }
        return "Yeni hız: " + this.hiz;
    },
    hizDegistir: function(degisimyonu) {
        if (degisimyonu === "arttır") {
            if(this.hiz < 10) {
                this.hiz++;
            }
            return "Yeni hız: " + this.hiz;
        } else if (degisimyonu === "azalt") {
            if(this.hiz > 1) {
                this.hiz--;
            }
            return "Yeni hız: " + this.hiz;
        } else {
            return "yanlış argüman";
        }
    }
}
console.log(fare.hizRaporu());
fare.solTik(); // Bir objeye ait olan bir fonksiyona method denir.

// Verilen kodu "Merhaba, ben Ahmet" yazdıracak şekilde düzenleyin.

const kisi = {
    isim: "Ahmet",
    selamVer: function() {
      return "Merhaba, ben " + this.isim;
    }
  }
  kisi.selamVer();

// Verilen kodu, "Merve 20 yaşında" yazdıracak şekilde düzenleyin.
const ogrenci = {
    ad: "Merve",
    yas: 20,
    bilgiAl: function() {
      return this.ad + " " + this.yas + " yaşında.";
    }
  }
  ogrenci.bilgiAl();

// Verilen kodu "Bu araba TOGG markasının T10X modelidir." yazdıracak şekilde düzenleyin ve metodu çağırın.
  const araba = {
    marka: "TOGG",
    model: "T10X",
    bilgiVer: function() {
      return "Bu araba " + this.marka + " markasının " + this.model + " modelidir.";
    }
  }
  console.log(araba.bilgiVer());

// fare objesi için hizlan adında bir metod oluşturun. Çalıştırıldığında fare objesinin değerini 1 arttırsın. Hız değeri en çok 10 olsun.

const fare2 = {
    renk: "siyah",
    hiz: 5,
    hizRaporu: function() {
      return "fare hızı: " + this.hiz;
    },
    hizlan: function() {
        this.hiz++;
        if (this.hiz > 10) {
            this.hiz = 10;
        }
    }
  }
  fare2.hizlan();
  console.log(fare2.hizRaporu());

/*
yasHesapla metoduna future adında bir parametre ekleyin.
yasHesapla metodu, Mehmet'in future parametresine gönderilecek yılda kaç yaşında olacağını return etmelidir.
Örneğin birey.yasHesapla(2026) kodu çalıştırıldığında "Mehmet 2026 yılında 30 yaşında olacak." çıktısını vermelidir.
Kodu bu doğrultuda tamamlayın.
*/


const birey = {
    ad: "Mehmet",
    dogumYili: 1996,
    yasHesapla: function(future) {
      const yas = future - this.dogumYili;
      return this.ad + " " + future + " yılında " + yas + " yaşında olacak.";
    }
  }

// OOP (Object Oriented Programming - Nesne Yönelimli Programlama) Nedir?
// OOP, gerçek hayattaki nesneleri kod içinde modellemek için kullanılan bir programlama yaklaşımıdır.
// Bir ev düşünelim:
// - Ev bir nesnedir (object)
// - Evin özellikleri vardır: renk, oda sayısı, metrekare, adres gibi (properties)
// - Evin yapabileceği işlemler vardır: kapıyı aç, ışığı yak, ısıtma sistemi çalıştır gibi (methods)
// 
