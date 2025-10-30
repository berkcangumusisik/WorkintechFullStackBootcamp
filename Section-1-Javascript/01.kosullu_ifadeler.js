/*
KOŞULLU İFADELER NEDİR VE NE İŞE YARAR?

Koşullu ifadeler, programlama dillerinde belirli koşulların sağlanıp sağlanmadığını kontrol ederek
programın akışını yönlendiren yapılardır. Yani, "eğer şu durum gerçekleşirse, şunu yap; 
aksi takdirde başka bir şey yap" mantığıyla çalışırlar.

GÜNLÜK HAYATTAN ÖRNEK:
- Eğer hava yağmurluysa, şemsiye al; değilse almana gerek yok.
- Eğer yaşın 18'den büyükse, ehliyet alabilirsin; değilse alamazsın.

PROGRAMLAMADA KULLANIM ALANLARI:
1. Kullanıcı girişlerini kontrol etmek (örn: şifre doğru mu?)
2. Farklı durumlara göre farklı işlemler yapmak
3. Hata kontrolü yapmak
4. Kullanıcı yetkilerini kontrol etmek
5. Veri doğrulama işlemleri yapmak
*/

// Süslü parantezler alt gr + 7 tuşlarıyla yazılır.
let randomNumber = Math.random();
if (randomNumber > 0.5) {
    console.log("Tura");
} else {
    console.log("Yazı");
}

/*
/*
BOOL (BOOLEAN) NEDİR?
Boolean, programlamada sadece iki değer alabilen bir veri tipidir: TRUE (doğru) veya FALSE (yanlış).
Türkçe'de "mantıksal" veya "boolean" olarak adlandırılır.

Boolean değerler, koşullu ifadelerde karar verme mekanizmasının temelidir.
Bir koşul ya doğrudur (true) ya da yanlıştır (false).

BOOLEAN KULLANIM ALANLARI:
- If-else koşullarında
- While ve for döngülerinde
- Kullanıcı durumlarını kontrol etmek için (örn: giriş yapmış mı?)
- Özellikleri açıp kapatmak için (örn: karanlık mod aktif mi?)



IF NEDİR?
"If" kelimesi İngilizce'de "eğer" anlamına gelir. Programlamada bir koşulu test etmek için kullanılır.
Yani "Eğer bu durum doğruysa, şu işlemi yap" demektir.

If bloğu içindeki kod, sadece koşul TRUE (doğru) olduğunda çalışır. Koşul FALSE (yanlış) ise, if bloğu atlanır ve çalıştırılmaz.

ELSE NEDİR?
"Else" kelimesi İngilizce'de "aksi takdirde, yoksa" anlamına gelir.
If koşulu sağlanmadığında (FALSE olduğunda) çalışacak alternatif kodu belirtir.
Yani "Eğer koşul doğru değilse, bu işlemi yap" demektir.

Else bloğu opsiyoneldir, yani kullanmak zorunda değilsiniz. Ama kullanırsanız, mutlaka bir if'ten sonra gelmelidir.

SYNTAX (YAZIM KURALLARI):

if (koşul) {
    // Koşul TRUE ise bu kod çalışır
} else {
    // Koşul FALSE ise bu kod çalışır
}

ÖNEMLİ NOTLAR:
- Koşul her zaman parantez () içinde yazılır
- Çalıştırılacak kodlar süslü parantez {} içinde yazılır
- Koşul TRUE veya FALSE sonucu üretmelidir
- Birden fazla koşul için else if kullanılabilir
*/


/**
rastgele adında bir değişken tanımla, bu değişkenin içine Math.random() metodu ile ürettiğin sayıyı koy. Videodaki gibi bir if bloğu yazmaya çalış. Eğer sayı 0.5'ten büyükse konsola "Büyük", değilse "Küçük" yazdır. 
*/
let rastgele = Math.random();

if(rastgele > 0.5){
  console.log("Büyük");
}else{
  console.log("Küçük");
}

/*
ELSE IF NEDİR?
"Else if" birden fazla koşulu sırayla test etmek için kullanılır. İlk if koşulu FALSE olduğunda, else if ile başka bir koşul kontrol edilir. Yani "Eğer ilk koşul doğru değilse, bu ikinci koşulu kontrol et" demektir.

ELSE IF KULLANIM AMACI:
- Birden fazla farklı durumu kontrol etmek için kullanılır
- İstediğiniz kadar else if ekleyebilirsiniz
- Koşullar yukarıdan aşağıya sırayla kontrol edilir
- İlk TRUE olan koşulun bloğu çalışır, geri kalanlar atlanır

SYNTAX (YAZIM KURALLARI):

if (koşul1) {
    // Koşul1 TRUE ise bu kod çalışır
} else if (koşul2) {
    // Koşul1 FALSE ama Koşul2 TRUE ise bu kod çalışır
} else if (koşul3) {
    // Koşul1 ve Koşul2 FALSE ama Koşul3 TRUE ise bu kod çalışır
} else {
    // Hiçbir koşul TRUE değilse bu kod çalışır
}

ÖNEMLİ NOTLAR:
- Else if mutlaka bir if'ten sonra gelmelidir
- İstediğiniz kadar else if kullanabilirsiniz
- Sadece ilk TRUE olan koşulun bloğu çalışır
- En sonda else kullanmak opsiyoneldir
- Else if yerine ayrı if'ler de kullanabilirsiniz, ama mantık farklıdır
*/

let yas = 10;
if (yas > 60) {
  console.log('%25 indirim')
} else if (yas < 15) {
  console.log('%50 indirim')
} else {
  console.log('İndirim yok :(')
}

/**
Verilen kod, konsola 65 yaş üstüne 50% indirim yapıldığını yazdırıyor. else if kullanın ve konsola 12 yaş altına %25 indirim olduğunu yazdırın.
*/

if (yas > 65) {
  console.log('%50 indirim');
} else if (yas < 12) {
  console.log('%25 indirim');
} else {
  console.log('İndirim yok :(');
}
