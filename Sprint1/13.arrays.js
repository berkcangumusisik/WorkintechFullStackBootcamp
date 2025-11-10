// Array (Dizi) Nedir?
// Array, birden fazla değeri tek bir değişken içinde saklamak için kullanılan veri yapısıdır.
// Diziler köşeli parantez [] ile tanımlanır ve içindeki elemanlar virgülle ayrılır.
// Her elemanın bir index (sıra) numarası vardır ve 0'dan başlar.

// Dizi Tanımlama Yöntemleri:
// degiskenTipi degiskenAdi = [eleman1, eleman2, eleman3, ...];


const katilimci = ["Ahmet", "Ayşe", "Mehmet", "Fatma", "Ali"];

// Elemanları "kiraz", "muz", "incir" olan sevdigimMeyveler adında bir değer tanımlayın.
let sevdigimMeyveler = ["kiraz", "muz", "incir"];

// Array elemanlarına erişim:
// degiskenAdi[index];

console.log(katilimci[0]); // Ahmet

// Array elemanlarına değer atama:
katilimci[0] = "Mehmet";
console.log(katilimci[0]); // Mehmet

// Verilen sevdigimMeyveler arrayini kullanarak konsola "incir" yazdıracak bir kod yazın.
const sevdigimMeyveler2 = ["kiraz", "muz", "incir"];
console.log(sevdigimMeyveler2[2]); // incir

const katilimcilar = ["ömer", "melisa", "aslı"];
console.log(katilimcilar[1]); // melisa
katilimcilar[1] = "melek";
console.log(katilimcilar[1]); // melek

// Bir arrayi parametre olarak alan ve onun ilk elemanını döndüren ilkEleman adında bir fonksiyon yazın.
function ilkEleman(array) {
    return array[0];
}

// arrayde olmayan bir indexe erişmeye çalışırsak ne olur? undefined döner.
const renkler = ["mavi","kırmızı","mor","yeşil"]
renkler[renkler.length - 1]; // yeşil

// Liste Metodları
// length : Arrayin eleman sayısını verir.
const takipcilerim = ["Ahmet", "Ayşe", "Mehmet", "Fatma", "Ali"];
console.log(takipcilerim.length); // 5

// push() : Arrayin sonuna yeni bir eleman ekler.
const sinifListesi = ["ömer", "melisa", "aslı"];
sinifListesi.push("melek");

//pop() : Arrayin sonundaki elemanı siler.
const yemekler = ["pizza", "burger", "kebab", "tatlı"];
yemekler.pop();
console.log(yemekler); // ["pizza", "burger", "kebab"]


const colors = new Array("mavi", "kırmızı", "mor", "yeşil");
console.log(colors); // ["mavi", "kırmızı", "mor", "yeşil"]
// new Array() : Yeni bir array oluşturur.

const hayvanlar = new Array("kedi", "köpek", "at", "kuş");
console.log(hayvanlar); // ["kedi", "köpek", "at", "kuş"]
console.log(hayvanlar[2]); // at

// eleman değiştirme
hayvanlar[2] = "köpek";
console.log(hayvanlar); // ["kedi", "köpek", "köpek", "kuş"]

const numbers = [1,2,3,4,5];
console.log(numbers.length); // 5
sayilar.push(6);
console.log(numbers); // [1,2,3,4,5,6]
sayilar.pop();
console.log(numbers); // [1,2,3,4,5]
sayilar.unshift(0); // unshift() : Arrayin başına yeni bir eleman ekler.
console.log(numbers); // [0,1,2,3,4,5]
numbers.shift(); // shift() : Arrayin başındaki elemanı siler.
console.log(numbers); // [1,2,3,4,5]

const meyveler = ["elma", "armut", "kiraz", "muz", "incir"];
console.log(meyveler); // ["elma", "armut", "kiraz", "muz", "incir"]
console.log(meyveler.includes("armut")); // true
console.log(meyveler.includes("üzüm")); // false
const ilkIki = meyveler.slice(0, 2);
console.log(ilkIki); // ["elma", "armut"]
meyveler.splice(1,1,"üzüm"); // splice() : Arrayin bir elemanını siler ve yerine başka bir eleman ekler.
console.log(meyveler); // ["elma", "armut", "kiraz", "muz", "incir"]