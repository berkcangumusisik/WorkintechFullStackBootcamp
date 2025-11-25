// SPREAD OPERATÖRÜ (...)
// Spread operatörü, bir diziyi veya nesneyi genişletmek (yaymak) için kullanılır.

const ulkeler = ["Türkiye", "Almanya", "Fransa", "İtalya", "İspanya"];
const yeniUlkeler = [...ulkeler, "Japonya", "Avusturya"];
console.log(yeniUlkeler); // ["Türkiye", "Almanya", "Fransa", "İtalya", "İspanya", "Japonya", "Avusturya"]

const telefon = {
    model: "iPhone 6",
    hdd: "32gb",
    ram: "4gb",
    camera: "8mp",
    screen: 6,
};

const telefon2 = { ...telefon, nfc: true };
console.log(telefon2); // { model: "iPhone 6", hdd: "32gb", ram: "4gb", camera: "8mp", screen: 6, nfc: true }
console.log(telefon); // { model: "iPhone 6", hdd: "32gb", ram: "4gb", camera: "8mp", screen: 6 }

// Bir obje ya da arrayin var olan değerlerine yenilerini ekleyerek, yeni bir obje ya da array oluştururuz.


const yurtici = ["Muğla","İstanbul","İzmir","Antalya","Bursa"];
const yurtdısı = ["Japonya","Amerika","Almanya","Fransa","İtalya"];
const sehirler = [...yurtici, ...yurtdısı];
console.log(sehirler); // ["Muğla", "İstanbul", "İzmir", "Antalya", "Bursa", "Japonya", "Amerika", "Almanya", "Fransa", "İtalya"]

const sinemKimlik = {
    kimlikNo: 12312312313,
    tamAd: "Sinem Yılmaz",
    dogumYeri: "Bolu"
};

const sinemEhliyet = {
    kimlikNo: 12312312313,
    tamAd: "Sinem Yılmaz Demirci",
    tur: "B"
};

const sinemBilgi = { ...sinemKimlik, ...sinemEhliyet };
console.log(sinemBilgi);

// Spread operatörü birleştirme için kullanıldığında,
// Obje ve arrayleri yazma sıramız sonucu değiştirir.
// Objeler içindeki ortak olmayan keyleri ve değerlerini olduğu gibi yeni objeye taşır.
// Objeler içindeki ortak keyleri yeni objeye taşır, o keye ait değeri sona yazılan objeden alır.

// yaz ve kis meyvelerini, önce yaz meyveleri olacak şekilde birleştirecek bir kod yazın. yeni değişkenin adı meyveler olsun.
const yaz = ["çilek", "muz", "karpuz"];
const kis = ["armut", "portakal", "elma"];
const meyveler = [...yaz, ...kis]