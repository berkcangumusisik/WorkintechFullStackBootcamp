const takipcilerim = ["ilkokul öğretmenim", "teyzem", "Şeyma Subaşı"];
takipcilerim.unshift("Sergen Yalçın", "Fatih Terim");
console.log(takipcilerim);

//unshift metodu ile array'in başına eleman eklemek için kullanılır.
//shift metodu ile array'in başındaki elemanı silmek için kullanılır.

const siralama = ["hamilton", "verstappen", "alonso", "vettel"];
const yarisDisiKalanPilot = siralama.shift();
console.log("Güncel sıralama: " + siralama);
console.log("Yarışa veda eden pilot: " + yarisDisiKalanPilot);


const takipcilerim2 = ["ilkokul öğretmenim", "teyzem", "Şeyma Subaşı"];
takipcilerim2.unshift("Sergen Yalçın", "Fatih Terim");
console.log(takipcilerim.length); // 5

// Verilen renkler arayının başına beyaz ve siyah renklerini ekleyin.
const renkler = ["sarı", "mor", "mavi"];
renkler.unshift("beyaz","siyah");
console.log(renkler);

// renkler arrayinin ilk sırasındaki elemanı arrayden çıkaran ve silinenRenk adında bir değişkende saklayan bir kod yazın. Daha sonra değişkeni konsola yazdıran bir kod ekleyin.

const renkler2 = ["beyaz", "siyah", "sarı", "mor", "mavi"];
const silinenRenk = renkler2.shift();
console.log(silinenRenk);


function ekle(array, eleman) {
    array.unshift(eleman);
    return array;
}

const sonuc = ekle([1,2,3,4],5);
console.log(sonuc); // [5,1,2,3,4]

// Aşağıdaki kod, yeniElemanı arrın başına eklemeli. Eksik olan kısmı tamamla.

function arrayBasinaEkle(arr, yeniEleman) {
    arr.unshift(yeniEleman);
    return arr;
}

//join metodu ile array'in elemanlarını birleştirmek için kullanılır.
const siralama2 = ["Verstappen", "Alonso", "Vettel"];
console.log("Güncel sıralama: " + siralama2.join("---"));

//slice metodu ile array'in belirli bir kısmını almak için kullanılır. slice(başlangıç, bitiş) bitiş index dahil değildir.
const meyveler = ["elma", "ayva", "muz", "üzüm", "erik", "kivi", "mango"];
const indirimliMeyveler = meyveler.slice(1, 5);
console.log(indirimliMeyveler); // ["ayva", "muz", "üzüm", "erik"]


// Aşağıdaki fonksiyonu tamamlayın. Fonksiyon, verilen arrayin belirli bir bölümünü alarak yeni bir array oluşturmalıdır.

function arrayKesitiAl(array, baslangic, bitis) {
    return array.slice(baslangic, bitis);
}

//Aşağıdaki fonksiyonu tamamlayın. Fonksiyon, verilen arrayin elemanlarını bir ayırıcı ile birlikte stringe çevirmelidir.

function arrayiStringeCevir(array, ayirici) {
    return array.join(ayirici);
}


// Bazı array metodları orijinal arrayi değiştirmez. Bu metodlar yeni bir array oluşturur.
// indexOf metodu ile array'in belirli bir elemanının indexini almak için kullanılır. indexOf(eleman) elemanın indexini döner. Eğer eleman yoksa -1 döner.

// meyveler arrayi içindeki 'muz' elemanının sırasını konsola yazdıracak bir kod yaz.

const meyveler2 = ["elma", "muz", "üzüm"];
console.log(meyveler2.indexOf("muz"));

// Aşağıdaki kodda eksik olan kısmı tamamlayın: Bu fonksiyon, bir array ve bir değeri parametre olarak alır, değerin array içindeki indeksini döndürür.

function findValueIndex(arr, value) {
    return arr.indexOf(value);
  }

  