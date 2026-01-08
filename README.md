# Workintech Full Stack Bootcamp

> Full Stack Web Development Bootcamp - Eğitim Dökümanları ve Projeler

---



<a name="icerik"></a>
## 📑 İçindekiler

- [Sprint 1 - Javascript ve Yazılım Yapıtaşları](#sprint-1---javascript-ve-yazılım-yapıtaşları)
- [Sprint 2 - İleri Javascript](#sprint-2---ileri-javascript)

---

## Sprint 1 - Javascript ve Yazılım Yapıtaşları

[⬆️ Yukarı Dön](#icerik)

Merhaba! Bu Sprint'te Javascript'in temellerini öğrenerek yazılım geliştirme yolculuğumuza başladık. Değişkenlerden fonksiyonlara, dizilerden döngülere kadar programlamanın yapı taşlarını adım adım keşfettik. Bu süreçte sadece kod yazmayı değil, aynı zamanda programatik düşünmeyi de öğrendik. Şimdi birlikte neler öğrendiğimize bakalım! 💻

### 📚 Neler Öğrendik?

#### 1. Javascript Temelleri 
- **Değişken Tanımlama**: `var`, `let`, `const` kullanımı
- **Veri Tipleri**: 
  - Basit veri türleri (Primitive Types): string, number, boolean
  - Karmaşık veri türleri (Reference Types): array, object
- **Operatörler**: Aritmetik, karşılaştırma ve mantıksal operatörler
- **Tip Dönüşümleri**: `Number()`, `String()`, `Boolean()` fonksiyonları

#### 2. Fonksiyonlar
- **Fonksiyon Tanımlama**: Function declaration ve function expression
- **Parametreler ve Argümanlar**: Fonksiyonlara veri aktarma
- **Return İfadesi**: Fonksiyonlardan değer döndürme
- **Arrow Functions**: Modern JavaScript fonksiyon yazımı
- **Scope**: Global ve local scope kavramları

#### 3. Arrayler ve Metodlar 
- **Array Oluşturma ve Kullanımı**
- **Array Metodları**:
  - `push()`: Dizinin sonuna eleman ekleme
  - `pop()`: Dizinin sonundan eleman çıkarma
  - `shift()`: Dizinin başından eleman çıkarma
  - `unshift()`: Dizinin başına eleman ekleme
  - `splice()`: Belirli bir konumdan eleman ekleme/çıkarma
- **Array Özellikleri**:
  - `length`: Dizinin eleman sayısı
  - Index kullanımı

#### 4. Döngüler 
- **While Döngüsü**: Koşul sağlandığı sürece çalışır
- **For Döngüsü**: Belirli sayıda tekrar için kullanılır
- **Break ve Continue**: Döngü kontrolü
- **Döngülerle Array İşlemleri**: Dizileri döngülerle gezme

#### 5. Önemli Kavramlar
- **Const ile Array Kullanımı**: 
  - `const` ile tanımlanan array'lerin elemanları değiştirilebilir
  - Ancak array başka bir array'e eşitlenemez
- **Referans vs Değer**:
  - Basit veri türleri değer olarak kopyalanır
  - Karmaşık veri türleri (array, object) referans olarak kopyalanır

#### 6. Kullanıcı Etkileşimi
- **prompt()**: Kullanıcıdan veri alma
- **console.log()**: Konsola çıktı verme
- **alert()**: Kullanıcıya mesaj gösterme

### 🎯 Projeler
- **Gün 1 Projesi**: Javascript Temelleri
- **Gün 2 Projesi**: Fonksiyonlar
- **Gün 3 Projesi**: Arrayler ve Metodlar
- **Gün 4 Projesi**: Döngüler

[⬆️ Yukarı Dön](#icerik)

---

## Sprint 2 - İleri Javascript

[⬆️ Yukarı Dön](#icerik)

Sprint 2'de JavaScript'in ileri seviye özelliklerini öğrenerek programlama becerilerimizi bir üst seviyeye taşıdık. Nesnelerden modern JavaScript özelliklerine, callback fonksiyonlardan yüksek dereceli fonksiyonlara kadar kapsamlı bir öğrenme yolculuğu gerçekleştirdik. Ayrıca web geliştirmenin temellerini ve geliştirme ortamı kurulumlarını öğrendik. 🚀

### 📚 Neler Öğrendik?

#### 1. Objects (Nesneler)
- **Object Tanımlama**: Key-value çiftleri ile veri saklama
- **Erişim Yöntemleri**: 
  - Nokta notasyonu: `object.key`
  - Köşeli parantez: `object["key"]`
- **Object İşlemleri**:
  - Özellik ekleme ve güncelleme
  - Özellik silme: `delete object.key`
- **Object Metodları**: 
  - Objeler içinde fonksiyon tanımlama
  - `this` keyword kullanımı
- **OOP Kavramı**: Nesne Yönelimli Programlama yaklaşımı

#### 2. Spread Operatörü
- **Array Spread**: `[...array]` ile dizileri genişletme
- **Object Spread**: `{...object}` ile nesneleri genişletme
- **Birleştirme İşlemleri**: Birden fazla array veya object'i birleştirme
- **Kopyalama**: Immutable (değiştirilemez) veri işlemleri

#### 3. Modern JavaScript Özellikleri
- **Ternary If**: `koşul ? doğruysa : yanlışsa` kısa koşul yazımı
- **Template Literals (Backtick)**: 
  - String interpolation: `${değişken}`
  - Çok satırlı string'ler
- **Default Parametreler**: Fonksiyonlarda varsayılan değer atama
  - Örnek: `function selamla(isim = "Misafir")`

#### 4. İleri Düzey Fonksiyonlar
- **Fonksiyon Türleri**:
  - Klasik Fonksiyonlar: `function ad() {}`
  - Anonim Fonksiyonlar: `const ad = function() {}`
  - Arrow Fonksiyonlar: `const ad = () => {}`
  - Tek Satır Arrow: `const ad = () => değer`
- **Hoisting**: Fonksiyon tanımlamalarının yukarı taşınması
- **This Bağlamı**: Arrow fonksiyonlarda `this` davranışı

#### 5. Callback Fonksiyonlar ve Asenkron Programlama
- **Callback Kavramı**: Fonksiyonları parametre olarak geçirme
- **Senkron Programlama**: Sıralı, bloklanan kod çalıştırma
- **Asenkron Programlama**: 
  - Non-blocking kod yapısı
  - Event queue ve call stack
- **setTimeout**: Zamanlayıcı fonksiyonları
  - `setTimeout(callback, delay)`
- **Single Thread**: JavaScript'in tek iş parçacıklı yapısı

#### 6. High Order Functions (Yüksek Dereceli Fonksiyonlar)
- **Kavram**: Fonksiyon alan veya döndüren fonksiyonlar
- **Array Metodları**:
  - `map()`: Her elemanı dönüştürür
  - `filter()`: Koşula uyan elemanları filtreler
  - `reduce()`: Diziyi tek bir değere indirger
  - `forEach()`: Her eleman için işlem yapar
  - `find()`: Koşula uyan ilk elemanı bulur
  - `some()`: En az bir eleman koşulu sağlıyor mu?
  - `every()`: Tüm elemanlar koşulu sağlıyor mu?
- **Arrow Fonksiyonlarla Kullanım**: `array.filter(x => x > 5)`

#### 7. İleri Düzey Array İşlemleri
- **Array Metodları ile Veri İşleme**:
  - Filtreleme ve dönüştürme
  - Toplama ve ortalama hesaplama
  - En büyük/en küçük değer bulma
- **Method Chaining**: Metodları zincirleme kullanım
- **Sort Metodu**: Dizileri sıralama

#### 8. Web Temelleri
- **İnternet ve Web Kavramları**:
  - İstemci (Client) ve Sunucu (Server)
  - HTTP/HTTPS protokolleri
  - DNS ve IP adresleri
  - URL yapısı
- **Statik vs Dinamik Web Sayfaları**
- **Frontend (Ön Yüz)**:
  - HTML, CSS, JavaScript
  - Tarayıcıda çalışan kodlar
  - Kullanıcı arayüzü
- **Backend (Arka Yüz)**:
  - Sunucu tarafında çalışan kodlar
  - Node.js, Express.js
  - API oluşturma
- **Database (Veritabanı)**:
  - SQL ve NoSQL veritabanları
  - Veri saklama ve yönetimi
- **Request/Response Döngüsü**:
  - HTTP metodları (GET, POST, PUT, DELETE)
  - Status kodları (200, 404, 500 vb.)
  - Request ve Response yapısı

#### 9. Git, GitHub ve NPM
- **Git Temelleri**:
  - Versiyon kontrol sistemi
  - Repository oluşturma ve klonlama
  - Commit, push, pull işlemleri
  - Branch (dal) yönetimi
- **GitHub**:
  - Kod barındırma ve paylaşım platformu
  - Fork ve clone işlemleri
  - Pull Request süreci
- **NPM (Node Package Manager)**:
  - Paket yönetimi
  - `npm install`, `npm uninstall`
  - `package.json` dosyası
  - Dependencies ve devDependencies
  - Script çalıştırma: `npm run`

#### 10. Geliştirme Ortamı Kurulumu
- **VS Code**: Kod editörü kurulumu ve kullanımı
- **Node.js**: JavaScript runtime ortamı
- **Git ve GitHub Desktop**: Versiyon kontrol araçları
- **Proje Yapılandırması**: Geliştirme ortamının hazırlanması

### 🎯 Projeler
- **Gün 1 Projesi**: Objects ve Spread Operatörü
- **Gün 2 Projesi**: İleri Düzey Fonksiyonlar ve Modern Javascript
- **Gün 3 Projesi**: İleri Düzey Array İşlemleri
- **Gün 4 Projesi**: Github, VS Code ve Node Kurulumları

[⬆️ Yukarı Dön](#icerik)

---
