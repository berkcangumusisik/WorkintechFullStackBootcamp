/**
 Aşağıdaki sayilar listesindeki en büyük 2. sayıyı result isimli değişkende sakla ve konsola yazdır.
 
 - Önce küçükten büyüğe sırala.
 - En büyük 2. rakamı result isimli sabit değişkende sakla.
 - Konsola yazdır.
 */

let sayilar = [45, 12, 78, 23, 89, 56, 34];
sayilar.sort((a, b) => a - b);
const result = sayilar[sayilar.length - 2];
console.log(result);


/*

Kendisine gelen kelimelerden oluşan bir listedeki en büyük kelimeyi dönen bir fonksiyon yaz. word isimli array'deki kelimeler için çalıştır ve sonucu konsola yazdır.

- Fonksiyonun adı longestWord olsun. Arrow fonksiyon olarak tanımla.
- Kelimelerden oluşan bir array'i argüman olarak alsın: words.
- for of döngüsü ile her kelimeye tek tek bakarak en uzun kelimeyi bulsun. (for of için araştırabilirsin).
- En uzun kelimeyi longest isimli değişkende saklasın.
- En uzun kelimeyi dönsün.

- İpucu: 
for of döngüsünden önce longest değişkenini bo string olarak tanımlayabilirsin. 
Döngünün her iterasyonunda baktığın longest'dan büyük mü diye kontrol edebilirsin.
Döngü bitince longest en uzundur.
*/
const longestWord = (words) => {
    let longest = "";
    
    for (const word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    
    return longest;
};

const words = ["Melisa", "Workintech", "Emre", "Burak", "Sümeyye", "Fatih"];

console.log(longestWord(words));


/**
Bir basamak sayısını argüman olarak alıp o basamak sayısına sahip en büyük sayıyı dönen(örn: 3 basamaklı en büyük sayı 999) fonksiyon yaz ve 5 için çalıştır, sonucu konsola yazdır.

- Fonksiyonun adı getBiggest olsun. Arrow fonksiyon olarak tanımla.
- Bir sayıyı argüman olarak alsın: digit
- O basamak sayısına ait en büyük sayıyı sayı veri türünde dönsün.

- İpucu
biggest isimli boş bir string tanımlayabilirsin.
while döngüsü ile her digit için biggest'a 9 string'ini ekleyebilirsin.
biggest'ı sayı veri türünde dönebilirsin.


 */

const getBiggest = (digit) => {
    let biggest = "";
    let count = 0;
    
    while (count < digit) {
        biggest += "9";
        count++;
    }
    
    return Number(biggest);
};

const result5 = getBiggest(5);
console.log(result5);


/*
Kendisine gelen sayılardan oluşan bir listedeki pozitif sayıların toplamını dönen bir fonksiyon yaz. sayilar arrayi için çalıştır ve sonucu konsola yazdır.

- Fonksiyonun adı sumOfPositives olsun. Arrow fonksiyon olarak tanımlayın.
- Sayılardan oluşan bir listeyi argüman olarak alsın: nums.
- positives isimli bir sabit değişkende pozitif sayıları filtrelesin.
- sum isimli bir sabir değişkende reduce ile sayıları toplasın.
- sonucu geri dönsün.
- sayilar isimli array için fonskiyonu çalıştır ve sonucu konsola yazdır.

-Dikkat: metodlar için sadece tek satır arrow fonksiyon kullanın.
*/

const sayilar2 = [1, -4, 7, 12, -3, 8, -2, 5];

const sumOfPositives = (nums) => {
    const positives = nums.filter(num => num > 0);
    const sum = positives.reduce((acc, num) => acc + num, 0);
    return sum;
};

const result6 = sumOfPositives(sayilar2);
console.log(result6);


/*
Tekrar eden harfleri bir string olarak geri dönen fonksiyon yaz. 
"6 aylık yazılımcı eğitimini başarıyla tamamladım" metni için çalıştır ve sonucunu konsola yazdır.

- Fonksiyonun adı duplicateCharacters olsun.
- Bir argüman alsın: metin.
- Tekrar eden harfleri metindeki sırasıyla geri dönsün.
- "6 aylık yazılımcı eğitimini başarıyla tamamladım" metni için çalıştır ve sonucunu konsola yazdır.

- İpucu: 
Boş bir string oluştur, adı tekrarEdenler olsun.
İç içe 2 for döngüsü yaz. 2. döngü ilk döngüden sonraki karakterden başlasın.
Aynı karakteri(charAt kullan) bulursa tekrarEdenler bu karakteri içeriyor mu diye baksın.
İçermiyorsa eklesin ve 2. döngüden çıksın.
*/

const duplicateCharacters = (metin) => {
    let tekrarEdenler = "";
    
    for (let i = 0; i < metin.length; i++) {
        for (let j = i + 1; j < metin.length; j++) {
            if (metin.charAt(i) === metin.charAt(j)) {
                if (!tekrarEdenler.includes(metin.charAt(i))) {
                    tekrarEdenler += metin.charAt(i);
                    break;
                }
            }
        }
    }
    
    return tekrarEdenler;
};

const result7 = duplicateCharacters("6 aylık yazılımcı eğitimini başarıyla tamamladım");
console.log(result7);
