// sayilar array'indeki çift sayıları filtreleyerek ciftSayilar isimli bir değişkende sakla.
const sayilar = [1,2,3,4,5,6,7,8,9,10];
const ciftSayilar = sayilar.filter(sayi => sayi % 2 === 0);
console.log(ciftSayilar);

// kelimeler array'inde 4 karakterden büyük olanları filtreleyin ve kelimeMd isimli bir değişkende saklayın. Bu değişkeni konsola yazdır.
const kelimeler = ["filter", "map", "reduce", "find", "includes", "indexOf", "length"]
const kelimeMd = kelimeler.filter(kelime => kelime.length > 4);
console.log(kelimeMd);


// users arrayinde rolü admin olan kullanıcıları filtrele ve admins isimli bir değişkende sakla. Sonra, konsola yazdır.
const users = [
    { name: "Alice", role: "admin" },
    { name: "Bob", role: "user" },
    { name: "Eve", role: "admin" }
];
const admins = users.filter(user => user.role === "admin");
console.log(admins);

// Bir şirkette çalışan maaşları sırasıyla: 80000, 100000, 90000, 40000'dir.
// .map() metodu kullanarak maaslar'a %40 zam yap, guncelMaaslar isimli bir değişkende sakla ve konsola güncel maaş listesini yazdır.
const maaslar = [80000, 100000, 90000, 40000];
const guncelMaaslar = maaslar.map(maas => maas * 1.4);
console.log(guncelMaaslar);

// kelimeler array'indeki kelimelerin toplam karakter sayısını .reduce() kullanarak hesapla ve toplamKarakter isimli değişkende sakla. Konsola yazdır.
const kelimeler2 = ["Merhaba", "Workintech'li", "aramıza", "hoş", "geldin."];
const toplamKarakter = kelimeler2.reduce((acc, curr) => acc + curr.length, 0);
console.log(toplamKarakter);

//sides isimli array'de kenarları verilmiş dikdörtgenlerin toplam alanını .reduce() kullanarak hesapla ve "Toplam alan XXm2'dir." metnini konsola yazdır.
const sides = [[1,3], [2,5], [3,7], [6,5], [7,5], [10,2]];
const toplamAlan = sides.reduce((acc, curr) => acc + curr[0] * curr[1], 0);
console.log(`Toplam alan ${toplamAlan}m2'dir.`);

//sayilar array'indeki en büyük ve en küçük sayı arasındaki farkı .sort() metodunu kullanarak hesapla ve konsola yazdır.
const sayilar2 = [1,4,8,10,101,-5,90,-40];
const enBuyuk = sayilar2.sort((a, b) => b - a)[0];
const enKucuk = sayilar2.sort((a, b) => a - b)[0];
const fark = enBuyuk - enKucuk;
console.log(fark);

//students array'indeki öğrecilerden 80 ve üstü alanları filtreleyin ve highScorers değişkeninde sakla. Konsola yüksek not alanları yazdır.
const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 72 },
    { name: "Charlie", grade: 90 }
];
const highScorers = students.filter(student => student.grade >= 80);
console.log(highScorers);

/*
sides isimli array'de kenarları verilmiş dikdörtgenlerin alanını .map() metodunu kullanarak areas isimli değişkende sakla. 

Bu sides ve areas değişkenlerini backtick ile kullanarak 3. index'teki eleman için "Ölçüleri 6m ve 5m olan odanın alanı 30m2'dir." metnini konsola yazdır.
*/
const sides2 = [[1,3], [2,5], [3,7], [6,5], [7,5], [10,2]];
const areas = sides2.map(side => side[0] * side[1]);
console.log(`Ölçüleri ${sides2[3][0]}m ve ${sides2[3][1]}m olan odanın alanı ${areas[3]}m2'dir.`);

//users listesindeki isimleri yazı kurallarına uygun hale getir (ilk harf büyük diğer harfler küçük) ve konsola yazdır.
const users4 = ["emre", "HASAN", "haTice", "seleN"];
const users2 = users4.map(user => user.charAt(0).toUpperCase() + user.slice(1).toLowerCase());
console.log(users2);

//Tamamlanmış taskleri filtrele ve sadece id'leri completedTaskIds adlı bir değişkende sakla. Bu id'leri konsola yazdır.
const tasks = [
    {id: 1, completed: true},
    {id: 2, completed: false},
    {id: 3, completed: true}
];
const completedTaskIds = tasks.filter(task => task.completed).map(task => task.id);
console.log(completedTaskIds);

//cumle değişkeninde "a" harfinin kaç kere tekrar ettiğini .reduce() kullanarak hesapla ve konsola yazdır.
const cumle = "6 aylık kursu başarı ile tamamladım.";
const aHarfi = cumle.split("a").length - 1;
console.log(aHarfi);

/*
Bir fonksiyon yaz, adı reverse olsun. Argüman olarak aldığı string bir değeri .reduce() kullanarak tersine çevirsin. 
"workintech" kelimesi için bu fonksiyonu çalıştır ve sonucunu konsola yazdır.

- İpucu: reduce için başlangıç değerini '' verebilirsin.
- .reverse() metodunu kullanma.
*/
function reverse(str) {
    return str.split("").reduce((acc, curr) => curr + acc, "");
}
console.log(reverse("workintech"));

/*
Adı getReport olan fonksiyon yaz. 
Kullanıcı bilgilerinden(obje) oluşan bir listeyi(array) argüman olarak alsın. 
active kullanıcıların impression sayılarının toplamını "Aktif kullanıcı impression sayısı: XXX" gibi bir metin dönsün. 
Aşağıdaki vdfUsers için bu fonksiyonu çalıştır ve sonucu konsola yazdır.
*/

const vdfUsers = [
    {name: "Erhan", impression: 101, status: "active"},
    {name: "Hatice", impression: 1001, status: "passive"},
    {name: "Melisa", impression: 10, status: "passive"},
    {name: "Murat", impression: 42, status: "active"},
]
function getReport(users) {
    return `Aktif kullanıcı impression sayısı: ${users.filter(user => user.status === "active").reduce((acc, curr) => acc + curr.impression, 0)}`;
}
console.log(getReport(vdfUsers));

// members değişkeninde saklı üyeleri yaşa göre küçükten büyüğe sırala ve konsola yazdır.
const members = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 30 }
];

const sortedMembers = members.sort((a, b) => a.age - b.age);
console.log(sortedMembers);


/*
W
Adı filteredArrays olan bir fonksiyon yaz. 
Array'lerden oluşan bir array'i ve elemanSayisi'nı parametre olarak alsın. 
Array'de, eleman sayısı istenen elemanSayisi'na eşit veya büyük olan elemanları filtreleyip, geri dönsün. 
diziler arrayini ve 3 rakamını kullanarak bu fonksiyonu çağır ve sonucunu konsola yazdır.

*/
const diziler = [[1, 2], [3, 4, 5], [6, 7]];
function filteredArrays(arrays, elemanSayisi) {
    return arrays.filter(array => array.length >= elemanSayisi);
}
console.log(filteredArrays(diziler, 3));


/**

names isimli arrayde var olan ifadelerin baş harflerinden oluşan kısaltmalarını kisaltmalar isimli bir değişkende oluştur ve konsola yazdır.

İpucu:
- .map() ile names'deki her bir ifadeyi al.
- .split() ile her ifadeyi kelimelerden oluşan bir array'e dönüştür.
- .map() ile her kelimenin ilk harfini bir değişkende sakla.
- .join() ile bu harfleri bir araya getir.
 */

const names = ["Central Processing Unit", "Graphics Processing Unit", "Command Line Interface", "Proof of Concept"];
const kisaltmalar = names.map(name => name.split(" ").map(word => word.charAt(0)).join(""));
console.log(kisaltmalar);

/*
sayilar array'inde tekrar eden sayıları .reduce() metodu ile çıkar ve elde ettiğin tekrarlı elemanı olmayan diziyi konsola yazdır.

- İpucu: .reduce() başlangıç değeri olarak boş array [] verebilirsin. 
*/
const sayilar3 = [1,1,2,3,4,4,4,5,5,5,6,6,7,8];
const tekrarlıSayilar = sayilar3.reduce((acc, curr) => {
    if (acc.includes(curr)) {
        return acc;
    }
    return [...acc, curr];
}, []);
console.log(tekrarlıSayilar);


/*
sayilar arrayinde çift sayıları bul, karesini al, toplamını bul. 
sonuc isimli değişkende tek satırda `3 farklı` metod kullanarak yap. 
Konsola sonucu yazdır.
*/

const sayilar4 = [1, 2, 3, 4, 5];
const sonuc = sayilar4.filter(sayi => sayi % 2 === 0).map(sayi => sayi * sayi).reduce((acc, curr) => acc + curr, 0);
console.log(sonuc);

/*
Aşağıdaki öğrencilerden en yüksek puan alan ilk üç öğrencinin ortalamasını konsola yazdır.
*/
const ogrenciler = [
    { name: "Erdem", score: 85 },
    { name: "Ali", score: 55 },
    { name: "Hatice", score: 95 },
    { name: "Miray", score: 70 },
    { name: "Erhan", score: 72 }
];
const enYuksekOgrenciler = ogrenciler.sort((a, b) => b.score - a.score).slice(0, 3);
const ortalama = enYuksekOgrenciler.reduce((acc, curr) => acc + curr.score, 0) / enYuksekOgrenciler.length;
console.log(ortalama);

/*
IT departmanı bütçesi 5900 $'dır. 
IT çalışanlarına yapılabilecek maksimum zam oranını yüzdelik olarak ve tam sayı olarak konsola yazdır. 

- Örn: maksimum yüzde 12 zam alabiliyorlarsa konsolda 12 yazdırmalı.
*/
const people = [
    { name: "Anna", salary:  3000, department: "IT"},
    { name: "Tom", salary: 2000, department: "Marketing"  },
    { name: "Jerry", salary: 1500, department: "Education" },
    { name: "Kate", salary: 2400, department: "IT" }
];
const itMaasToplamı = people.filter(person => person.department === "IT").reduce((acc, curr) => acc + curr.salary, 0);
const maxZamOrani = Math.floor((5900 - itMaasToplamı) / itMaasToplamı * 100);
console.log(maxZamOrani);

/*
Çan eğrisi uygulanan bir derste ortalamadan düşük olan öğrencilerin isimlerini bir array olarak isimler isimli değişkende sakla ve konsola yazdır.

*/

const scores = [
    {name: "Hatice", score: 75},
    {name: "Melis", score: 100},
    {name: "Meltem", score: 5},
    {name: "Ahmet", score: 25},
    {name: "Adem", score: 45},
    {name: "Duru", score: 55},
    {name: "Atlas", score: 65},
];
const isimler = scores.filter(score => score.score < scores.reduce((acc, curr) => acc + curr.score, 0) / scores.length).map(score => score.name);
console.log(isimler);