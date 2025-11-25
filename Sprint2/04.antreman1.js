// Aşağıda bir kişi için bazı bilgiler değişkenlerde tanımlanmıştır. user isimli yeni bir değişken tanımla ve bu bilgileri uygun veri türünü kullanarak bu değişkene ata.

const name = "Melis";
const surname = "Koçak";
const age= 45;
const langs = ["English", "Türkçe", "German"];

let user = {
  name: "Melis",
  surname: "Koçak",
  age:45,
  langs:["English", "Türkçe", "German"]
}

;//car isimli boş bir obje tanımla. Daha sonra, markası MERCEDES, modeli C180, model yılı 2022, üretim yeri Almanya olacak şekilde bu objeye ekle.
//Not:  Özellikleri tanımlarken gerektiğinde dot operatörü, gerektiğinde köşeli parantez operatörü kullan.

const car = {};
car.marka = "MERCEDES";
car.model = "C180";
car["model yılı"] = 2022;
car["üretim yeri"] = "Almanya";

console.log(car);


/**
Aşağıdaki bilgileri kullanarak adı okul olan bir obje tanımla. Bilgileri değişkeni tanımlarken kullan, sonradan ekleme.

- name => "İTÜ"
- location => "Maslak" 
- phone => "(0212) 285 30 30"
- established => 1773
 */
const okul = {
    name: "İTÜ",
    location: "Maslak",
    phone: "(0212) 285 30 30",
    established: 1773
}
console.log(okul);

/*

car objesindeki özellikleri kullanarak aşağıdaki 2 cümleyi köşeli parantez yöntemi kullanarak sırasıyla ve ayrı ayrı konsola yazdır.

- "Arabamız, 2011 model Beyaz renktir."
- "Otomatik vitesli olup, Dizel yakıt ile çalışmaktadır."
*/
const car = {
    renk: "Beyaz",
    "model yılı":  2011,
    vites: "Otomatik",
    "yakıt türü": "Dizel"
}
console.log("Arabamız " + car["model yılı"] + " model " + car.renk + " renktir.");
console.log(car.vites + " vitesli olup, " + car["yakıt türü"] + " yakıt ile çalışmaktadır.");


/**
Bir objede istenilen özelliği verilen bir değer ile değiştiren fonksiyon yaz.


- Fonksiyonun adı changeProperty olsun.
- 3 argüman alsın: object, key, value
- objedeki key'in değerini gelen value ile değiştirsin.
- güncel objeyi dönsün.
 */

function changeProperty(object, key, value) {
    object[key] = value;
    return object;
}


/*
person objesi için aşağıdaki işlemleri dot operatörü kullanarak yap.

- oyVerebilir(booelan) özelliğini ekle. Eğer yaşı 18'e eşit veya büyükse değerini true, değilse false yap.
- surname özelliğini ekle. Değerini Koçak yap.

*/

const person = {
    yas: 46,
    name: "Emre",

}
person.oyVerebilir = person.yas >= 18;
person.surname = "Koçak";

// cohort0824 array'ini ogrenciler isimli bir değişkene kopyala ve sonuna Erhan'ı ekle.
const cohort0824 = ["Ali", "Ceren", "Derya", "Melisa"];
const newCohort = [...cohort0824, "Erhan"];


//Aşağıdaki kodun konsol çıktısını result isimli değişkene atayın.
const array = [1,2,3,4,5];
const merged = [...array, ...array, array.length];
console.log(merged);
let result = merged;

/*
Aşağıdaki kodun konsol çıktısını result isimli değişkene atayın.

const user10082019 = {
    name: "Hale",
    age: 32
}

const user11092022 = {
    name: "Hale",
    id: 121
}

const user01012023 = {
    name: "Hale",
    age: 36
}

const user = {...user10082019,
...user01012023,
...user11092022,
["name"]: "Hatice",
age: 37
}
console.log(user.name + " " + user.age + " yaşındadır.")
let result = user.name + " " + user.age + " yaşındadır.";
*/

// brands array'ine Mercedes'i en başta olacak şekilde ekle ve adı brandsFinal olan yeni bir değişkende sakla. (.push() metodu veya döngü kullanma.)

const brands = ["Ford", "BMW", "Audi", "Toyota"];
const brandFinal = ["Mercedes", ...brands]

//human objesine learn metodu ekleyin. Argüman olarak aldığı language bilgisini kendi langs özelliğine eklesin.
const human = {
    name: "Marry",
    age: 45,
    location: "San Francisco",
    langs: ["English", "German"]
}
human.learn = function(language) {
    this.langs.push(language);
    return this.langs;
}

/*
araba objesine aşağıdaki metodları ekle.

- getKilometers(): Arabanın güncel kilometresi {kilometre} km'dir. metnini konsola yazdırsın.
- getYear(): Araba {yil} modeldir. metnini konsola yazdırsın.
*/
const araba = {
    model: 'VW Passat',
    "üretim yılı": 2011,
    kilometre: 153000,
    fiyat: 800000
}
araba.getKilometers = function() {
    console.log("Arabanın güncel kilometresi " + this.kilometre + " km'dir.");
}
araba.getYear = function() {
    console.log("Araba " + this["üretim yılı"] + " modeldir.");
}
araba.getKilometers();
araba.getYear();


// Aşağıdaki araba objesine yeni bir satırda start isminde metod ekle. Bu metod konsola Araba çalıştırıldı metnini yazsın. Yeni bir satırda bu metodu çağır.
const araba = {
    marka: "Mercedes",
    model: "C180",
    "üretim yılı": 2022,
    start: function() {
        console.log("Araba çalıştırıldı.");
    }
}
araba.start();


/*
Aşağıdaki fonksiyonu tamamlayın. 5 argüman alsın. Bu argümanlardan bir araba objesi oluştursun ve dönsün.

Fonksiyonun adı getCarObject olsun.
Argüman olarak sırasıyla id, model, yakit, vites, yas değerlerini alsın.
Gelen bu değerler ile üretim yılını hesaplasın ve id, model, yakit, vites, uretimYili bilgileri olan bir objeyi geri dönsün. (bulunduğumuz yılı 2024 kabul edin)

*/
function getCarObject(id, model, yakit, vites, yas) {
    const araba = {
        id: id,
        model: model,
        yakit: yakit,
        vites: vites,
        uretimYili: 2024 - yas
    }
    return araba;
}
console.log(getCarObject(1, "C180", "Dizel", "Otomatik", 4));

/*
user objesinde aşağıdaki değişiklikleri yeni satırlarda tek tek yap.

Doğum tarihi göçmen olduğu için otomatik 1 Temmuz olarak atanmış. Mahkeme kararı ile "30 Haziran 1978" olarak güncellemiş. Objede güncelle. 
Yaş değerini objeden çıkar.
Tc No olarak 49900121212 ekle.
*/

const user2 = {
    "Tam Adı": "Serdar Toprak",
    "Doğum Tarihi": "1 Temmuz 1978",
    "Yaş": 44,
    "Doğum Yeri": "Üsküp",
    "Tc No": 49900121212
}
user2["Doğum Tarihi"] = "30 Haziran 1978";
delete user2["Yaş"];
user2["Tc No"] = 49900121212;
console.log(user2);


/*
Bir objede istenilen özelliği verilen bir değer kadar artıran fonksiyon yaz.

- Fonksiyonun adı incrementProperty olsun.
- 3 argüman alsın: object, key, value
- Objede bu key varsa key'in değerine argüman olarak gelen value'yu eklesin.
- Yoksa gelen değeri direk eklesin.
- Güncel objeyi dönsün.
*/

function incrementProperty(object, key, value) {
    if (object[key]) {
        object[key] += value;
    } else {
        object[key] = value;
    }
    return object;
}

/**
Aşağıdaki metni company objesindeki özellikleri kullanarak console'a yazdır. Sadece dot operatörü kullan.

- "Workintech şirketi, Kadıköy ilçesinde Caddebostan mahallesindedir. 2022 yılında kurulmuştur."
 */

const company = {
    ad: "Workintech",
    kurulus: 2022,
    adres: {
        mahalle: "Caddebostan",
        cadde: "Bağdat",
        ilce: "Kadıköy",
        apartman: "Bağdat Palas",
        no: 302
    }
}
console.log(company.ad + " şirketi, " + company.adres.ilce + " ilçesinde " + company.adres.mahalle + " mahallesindedir. " + company.kurulus + " yılında kurulmuştur.");

// Şampiyonlar ligi için torbalar belli oldu.Lige katılacak tüm takımları katilimciTakimlar değişkeninde spread operatörü ile kopyalayarak bir araya getir. Wilcard verilerek turnuvaya ekstra davet alan Stuttgart takımını da en sonuna ekle. (push metodu kullanma)
const torba1 = ["Manchester City", "Bayern Münih", "Real Madrid", "PSG", "Liverpool", "Inter", "Borussia Dortmund", "Leipzig", "Barcelona"];
const torba2 = ["Bayer Leverkusen", "Atletico Madrid", "Atalanta", "Juventus", "Benfica", "Arsenal", "Club Brugge", "Shakhtar Donetsk", "Milan"];
const torba3 = ["Feyenoord", "Sporting Lizbon", "PSV", "Dinamo Zagreb", "Salzburg", "Lille", "Kızılyıldız", "Young Boys", "Celtic"]
let katilimciTakimlar = [...torba1, ...torba2, ...torba3, "Stuttgart"];

// Aynı kullanıcıya ait aşağıda tanımlanmış bilgileri user isimli bir objede bir araya getir. address olarak Emanet sk. No:5 Kadiköy İstanbul ekle.
const kisiselBilgiler = {
    name: "Emre",
    surname: "Merdan",
    birthDate: "01 Ocak 1970"
}

const kurumsalBilgiler = {
    company: "Text A.Ş.",
    department: "IT"
}

const ozelBilgiler = {
    workPhone: "212 100 01 01",
    mobilePhone: "532 500 10 10"
}
const user3 = {
    ...kisiselBilgiler,
    ...kurumsalBilgiler,
    ...ozelBilgiler,
    address: "Emanet sk. No:5 Kadiköy İstanbul"
}
console.log(user3);

/*
araba objesine aşağıdaki metodu ekle ve yeni bir satırda arabanın fiyatını yüzde 40 zamlı hale getirip döndüğü metni konsola yazdır.

- changePrice(percentage): arabanın güncel fiyatını gelen oran kadar zamlı hale getirsin ve Araba'nın güncel fiyatı {fiyat} TL'dir. metnini dönsün.

NOT: percentage yüzdelik zam oranı. örn: 10 -> yüzde 10 zam.

*/

const araba = {
    model: 'VW Passat',
    "üretim yılı": 2011,
    kilometre: 153000,
    fiyat: 800000
}
araba.changePrice = function(percentage) {
    this.fiyat += this.fiyat * percentage / 100;
    return "Araba'nın güncel fiyatı " + this.fiyat + " TL'dir.";
}
console.log(araba.changePrice(40));

/**
Aşağıdaki user isimli objeye learn isimli bir metod ekleyin. 

- Argüman olarak bir konu alsın. 
- Konsola Bugün {konu} konusunu öğrendim metnini yazdırsın.

 */

const user4 = {
    name: "Emre",
    age:36,

}
user4.learn = function(konu) {
    console.log("Bugün " + konu + " konusunu öğrendim.");
}
user4.learn("JavaScript");

/**
Aşağıdaki team objesine yeni satırda transfer isminde bir metod ekle. Daha sonra bu metoda argüman olarak Rafa Silva'yı vererek çağır ve döndüğü metni konsola yazdır.
- Bu metodda futbolcu adında bir parametre tanımlayın.
- {futbolcu} takımımıza transfer oldu. Kendisine başarılar diliyoruz. metnini return etsin.
 */

const team = {
    name: "Beşiktaş",
    "kuruluş yılı": 1903,
}

team.transfer = function(futbolcu) {
    return futbolcu + " takımımıza transfer oldu. Kendisine başarılar diliyoruz.";
}
console.log(team.transfer("Rafa Silva"));

// calculator isimli bir obje tanımla. İçinde toplama, carpma, bolme, cikarma isminde metodlar olsun. Bu metodlar argüman olarak a ve b isminde 2 değer alsın. Gerekli işlemi yapıp sonucu dönsün. 

const calculator = {
    toplama: function(a, b) {
        return a + b;
    },
    carpma: function(a, b) {
        return a * b;
    },
    bolme: function(a, b) {
        return a / b;
    },
    cikarma: function(a, b) {
        return a - b;
    }
}

/**
Argüman olarak aldığı objeden yeni bir obje yaratan ve içine yeni özellikler ekleyip dönen fonksiyon yaz.

Fonksiyonun adı newCar olsun.
Argüman olarak bir arabanın özelliklerini obje olarak alsın.
Gelen arabanın bir kopyasını yaratsın.
İçine otv özelliği eklesin: Arabanın fiyatı 1450000'den az ise ÖTV oranı 10, değil ise 40 olsun.
İçine mtv özelliği eklesin: Yıllık Motorlu Taşıtlar Vergisi 1-10 yaşındaki arabalar için 1773, 10 yaş üstü arabalar için 520 olsun.
İçine isDomestic özelliği eklesin: Araba yerli üretimse true, değilse false olmalı. (yerli marka: TOGG)


Örnek Kullanım:
newCar({
	id: 121,
	model: 'TOGG T10X',
	yakit: 'Elektrikli',
	vites: 'Otomatik',
	yas: 2,
	fiyat: 1800000
})
 */

function newCar(araba) {
    const newCar = {
        ...araba,
        otv: araba.fiyat < 1450000 ? 10 : 40,
        mtv: araba.yas <= 10 ? 1773 : 520,
        isDomestic: araba.model === "TOGG" ? true : false
    }
    return newCar;
}
console.log(newCar({
    id: 121,
    model: 'TOGG T10X',
    yakit: 'Elektrikli',
    vites: 'Otomatik',
    yas: 2,
    fiyat: 1800000
}));


/**
Sayılardan oluşan bir array'i argüman olarak alan bir fonksiyon yaz. Bu fonksiyon içindeki sayıların tekrar sıklığını bir objede key&value ikilisi olarak saklasın ve o objeyi geri dönsün.

Fonksiyonun adı frequency olsun.
Argüman olarak sayilar'dan oluşan bir array'i alsın.
Sayıların tekrar sıklıklarını saklamak için adı depo olan bir boş obje oluşturun.
Argüman olarak gelen array için bir döngü yapın.
Her iterasyonda eldeki sayi obje'de var mı kontrol edin.
Varsa değerini 1 tane artırın.
Yoksa değeri 1 olacak şekilde ekleyin.


Örnek kullanım: 
frequency([1,1,1,1,1,2,2,2,2,13]);

Output:
{
    1: 5,
    2: 4,
    13: 1
}


 */

function frequency(sayilar) {
    const depo = {};
    for (let i = 0; i < sayilar.length; i++) {
        if (depo[sayilar[i]]) {
            depo[sayilar[i]]++;
        } else {
            depo[sayilar[i]] = 1;
        }
    }
    return depo;
}
console.log(frequency([1,1,1,1,1,2,2,2,2,13]));