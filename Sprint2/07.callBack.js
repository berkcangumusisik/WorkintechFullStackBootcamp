/*
  CALLBACK FONKSİYONLARI
  
  Callback fonksiyonları, başka bir fonksiyona parametre olarak geçirilen ve 
  belirli bir işlem tamamlandığında çağrılan fonksiyonlardır.
  
  GERÇEK HAYATTAN ÖRNEK: RESTORAN SİSTEMİ
  
  Bir restoranda düşünelim:
  1. Müşteri (siz) garsondan yemek sipariş eder
  2. Garson siparişi mutfağa iletir
  3. Aşçı yemeği hazırlar (bu zaman alır)
  4. Yemek hazır olunca garson size getirir
  
  Bu senaryoda:
  - Aşçı = Ana fonksiyon (asıl işi yapan)
  - Garson = Callback fonksiyonu (iş bitince çağrılan)
  - Müşteri = Fonksiyonu çağıran kod
 */

// Callback fonksiyonu örneği - Mail gönderme sistemi
function mailGonder(baslik) {
    // burada mail gönderme işlemlerini yapan kodlar var
    
    console.log(baslik + " baslikli email gonderildi");
}


function satinAl(urun) {
    //
    // burada ödeme işlemlerini yapan kodlar var
    // ödeme başarılıysa, odemeAlindi true, değilse false
    //
    if (odemeAlindi) {
        console.log("ödeme yapıldı");
    } else {
        console.log("ödeme başarısız");
    }
}



function satinAl(urun, callback) {
    //
    // burada ödeme işlemlerini yapan kodlar var
    // ödeme başarılıysa, odemeAlindi true, değilse false
    //
    if (odemeAlindi) {
        console.log("ödeme yapıldı");
        callback(urun + " siparişiniz onaylandı");
    } else {
        console.log("ödeme başarısız");
    }
}

satinAl("mavi gömlek", mailGonder);


//Aşağıdaki toplam fonksiyonunu tamamlayın. Fonksiyon, verilen iki sayının toplamını, callback fonksiyonundan işleyerek döndürmelidir. Fonksiyon, x ve y'nin toplamını, callback’e argüman olarak vermelidir.

function raporla(sey) {
    console.log(sey);
  }
  
  function toplam(x, y, callback) {
    const sonuc = x + y;
    /*kod buraya **/
    callback(sonuc);
  }
  
  /alttaki kod konsola 7 yazdırmalı */
  toplam(3, 4, raporla)


  /**
 SENKRON VE ASENKRON PROGRAMLAMA
 
 SENKRON (Synchronous) Programlama:
 - Kodlar sırayla, yukarıdan aşağıya doğru çalışır
 - Bir işlem bitmeden diğer işlem başlamaz
 - Her satır bir önceki satırın tamamlanmasını bekler
 - Bloklanma (blocking) vardır
 - Örnek: Normal matematiksel işlemler, değişken atamaları
 
 Senkron Örnek:
 console.log("1. işlem");
 console.log("2. işlem");
 console.log("3. işlem");
 // Çıktı sırası: 1, 2, 3 (her zaman aynı sırada)
 
 ASENKRON (Asynchronous) Programlama:
 - Kodlar sırayla başlar ama bitmesini beklemeden diğer kod çalışabilir
 - Uzun süren işlemler arka planda çalışır
 - Program akışı bloklanmaz (non-blocking)
 - Callback, Promise, async/await ile yönetilir
 - Örnek: API çağrıları, dosya okuma, zamanlayıcılar (setTimeout)
 
 
 Neden Asenkron Kullanırız?
 - Kullanıcı deneyimini iyileştirir (sayfa donmaz)
 - Performansı artırır (birden fazla işlem aynı anda yapılabilir)
 - Sunucu isteklerinde bekleme süresini optimize eder
 
 Callback Fonksiyonlar ve Asenkron İlişkisi:
 - Callback'ler asenkron işlemlerin tamamlanmasını yönetmek için kullanılır
 - Bir işlem bittiğinde ne yapılacağını belirtir
 - Örnek: Veri geldiğinde ekrana yazdır, dosya okunduktan sonra işle

 /**
 SINGLE THREAD (Tek İş Parçacığı) Nedir?
 
 JavaScript, single-threaded (tek iş parçacıklı) bir programlama dilidir.
 Bu, JavaScript'in aynı anda sadece bir işlemi gerçekleştirebileceği anlamına gelir.
 
 Single Thread Özellikleri:
 - Kodlar tek bir ana iş parçacığında (main thread) çalışır
 - Aynı anda sadece bir kod satırı işlenir
 - Call Stack (çağrı yığını) tek bir tane vardır
 - Bir işlem bitene kadar diğer işlem bekler

 
 */


 /**
  setTimeout fonksiyonu nasıl çalışır?
 
  setTimeout, JavaScript'te asenkron programlama için kullanılan bir zamanlayıcı fonksiyonudur. Belirli bir süre bekledikten sonra bir callback fonksiyonunu çalıştırır.
 
  Söz Dizimi (Syntax):
  setTimeout(callback, delay, arg1, arg2, ...)
 
  Parametreler:
  - callback: Belirtilen süre sonunda çalıştırılacak fonksiyon
  - delay: Bekleme süresi (milisaniye cinsinden, 1000ms = 1 saniye)
  - arg1, arg2, ...: (Opsiyonel) Callback fonksiyonuna gönderilecek parametreler
 
  Dönüş Değeri:
  - Bir zamanlayıcı ID'si döner (clearTimeout ile iptal etmek için kullanılır)
 
  Örnek Kullanımlar:
 
  // Basit kullanım
  setTimeout(() => {
    console.log("3 saniye sonra çalıştı");
  }, 3000);
 
  // Parametre ile kullanım
  setTimeout((isim, yas) => {
    console.log(`Merhaba ${isim}, yaşınız ${yas}`);
  }, 2000, "Ahmet", 25);
 
  // Zamanlayıcıyı iptal etme
  const timerId = setTimeout(() => {
    console.log("Bu mesaj görünmeyecek");
  }, 5000);
  clearTimeout(timerId); // Zamanlayıcı iptal edildi
 
  Önemli Notlar:
  - setTimeout asenkron çalışır, yani kodu bloklamaz
  - Delay süresi garanti değildir, minimum bekleme süresidir
  - Delay 0 olsa bile callback hemen çalışmaz, event queue'ya eklenir
  - Browser'da minimum delay genellikle 4ms'dir
 
  */

  function bilgiVer() {
    console.log("Giriş başarılı, profiline yönlendiriliyorsun");
  }

  setTimeout(bilgiVer, 3000);

//Aşağıdaki fonksiyon, 3 saniye sonra konsola "Zaman doldu!" mesajını yazdırmalıdır. Gerekli düzenlemeleri yapın.

function zamanDoldu() {
    console.log("Zaman doldu!");
  }

  setTimeout(zamanDoldu, 3000);


