// İnternet Nedir?

/*
İnternet, dünya çapında birbirine bağlı bilgisayar ağlarının oluşturduğu dev bir ağdır.
Milyarlarca cihazın birbirleriyle iletişim kurmasını ve veri paylaşmasını sağlar.
Tarayıcı (Browser): Web sayfalarını görüntülemek için kullanılan yazılımdır.
- Örnekler: Chrome, Firefox, Safari, Edge
- HTML, CSS ve JavaScript kodlarını yorumlayarak görsel arayüz oluşturur
- Kullanıcı ile sunucu arasında aracı görevi görür


Temel Kavramlar:
1. İstemci (Client): Bilgi talep eden cihaz (örn: tarayıcınız)
2. Sunucu (Server): Bilgi sağlayan güçlü bilgisayarlar
3. HTTP/HTTPS: Web sayfalarının iletişim protokolü
4. IP Adresi: Her cihazın internetteki benzersiz adresi
5. DNS: Alan adlarını IP adreslerine çeviren sistem
6. URL: Web sayfalarının adresi (örn: https://www.example.com)

Web Nasıl Çalışır?
- Tarayıcınıza bir URL yazarsınız
- DNS, alan adını IP adresine çevirir
- Tarayıcı, sunucuya HTTP isteği gönderir
- Sunucu, HTML, CSS, JavaScript dosyalarını gönderir
- Tarayıcı bu dosyaları işleyerek sayfayı görüntüler

Statik ve Dinamik Web Sayfaları:

Statik Web Sayfaları:
- Sabit içerikli web sayfalarıdır
- Her kullanıcı için aynı içeriği gösterir
- Sadece HTML, CSS ve temel JavaScript içerir
- Sunucuda değişiklik yapılmadıkça içerik değişmez
- Hızlı yüklenir ve barındırması ucuzdur
- Örnekler: Portfolyo siteleri, blog sayfaları, tanıtım siteleri
- Avantajlar: Hızlı, güvenli, SEO dostu
- Dezavantajlar: İçerik güncellemesi zor, etkileşim sınırlı

Dinamik Web Sayfaları:
- İçeriği kullanıcıya, zamana veya diğer faktörlere göre değişir
- Veritabanı ile çalışır
- Sunucu tarafında kod çalıştırır (PHP, Node.js, Python vb.)
- Kullanıcı etkileşimine göre içerik üretir
- Örnekler: Sosyal medya, e-ticaret, haber siteleri
- Avantajlar: Kişiselleştirilebilir, etkileşimli, kolay güncelleme
- Dezavantajlar: Daha yavaş, daha pahalı, daha karmaşık

Örnek Senaryo:
- Statik: Bir şirketin "Hakkımızda" sayfası - herkes aynı bilgiyi görür
- Dinamik: Facebook ana sayfası - her kullanıcı kendi arkadaşlarının paylaşımlarını görür

Frontend (Ön Yüz):
- Kullanıcının gördüğü ve etkileşimde bulunduğu kısımdır
- Tarayıcıda çalışır (client-side)
- Kullanılan teknolojiler: HTML, CSS, JavaScript
- Framework'ler: React, Vue, Angular
- Görevleri:
  * Kullanıcı arayüzü tasarımı
  * Kullanıcı etkileşimlerini yönetme
  * Verileri görsel olarak sunma
  * Backend'e istek gönderme
- Örnek: Bir e-ticaret sitesinde ürünlerin listelenmesi, sepete ekleme butonları, form alanları

Backend (Arka Yüz):
- Sunucu tarafında çalışan, kullanıcının görmediği kısımdır
- Sunucuda çalışır (server-side)
- Kullanılan teknolojiler: Node.js, Python, Java, PHP, C#
- Framework'ler: Express.js, Django, Spring Boot, Laravel
- Görevleri:
  * İş mantığını yönetme
  * Veritabanı işlemleri
  * Kimlik doğrulama ve yetkilendirme
  * API'ler oluşturma
  * Veri işleme ve hesaplamalar
- Örnek: Kullanıcı girişi kontrolü, ürün fiyat hesaplama, sipariş işleme

Database (Veritabanı):
- Verilerin organize bir şekilde saklandığı sistemdir
- Kalıcı veri depolama sağlar
- Türleri:
  * İlişkisel (SQL): MySQL, PostgreSQL, Oracle
    - Tablolar ve ilişkiler kullanır
    - Yapılandırılmış veri için idealdir
  * NoSQL: MongoDB, Redis, Cassandra
    - Esnek veri yapısı
    - Büyük veri ve hızlı okuma/yazma için uygundur
- Görevleri:
  * Veri saklama (Create)
  * Veri okuma (Read)
  * Veri güncelleme (Update)
  * Veri silme (Delete)
- Örnek: Kullanıcı bilgileri, ürün envanteri, sipariş geçmişi

Üçünün Birlikte Çalışması:
1. Kullanıcı frontend'de bir işlem yapar (örn: giriş yapmak ister)
2. Frontend, backend'e HTTP isteği gönderir
3. Backend, isteği işler ve gerekirse veritabanına sorgu yapar
4. Veritabanı, istenen veriyi backend'e gönderir
5. Backend, veriyi işler ve frontend'e yanıt döner
6. Frontend, yanıtı alır ve kullanıcıya gösterir

Örnek Senaryo - E-ticaret Sitesi:
- Frontend: Ürün listesi, sepet, ödeme formu (kullanıcının gördüğü)
- Backend: Ürün fiyat hesaplama, stok kontrolü, ödeme işleme (arka planda çalışan)
- Database: Ürün bilgileri, kullanıcı hesapları, sipariş kayıtları (verilerin saklandığı yer)

Request (İstek) ve Response (Yanıt):

Request (İstek):
- İstemciden (client/frontend) sunucuya (server/backend) gönderilen taleptir
- HTTP protokolü üzerinden gönderilir
- Bileşenleri:
  * HTTP Method (Metod): GET, POST, PUT, DELETE, PATCH
  * URL/Endpoint: İsteğin gönderileceği adres
  * Headers (Başlıklar): İstek hakkında meta bilgiler (content-type, authorization vb.)
  * Body (Gövde): Gönderilen veri (POST, PUT isteklerinde)
  * Query Parameters: URL'de gönderilen parametreler (?id=123&name=ahmet)
- Örnek Request:
  ```
  GET /api/users/123 HTTP/1.1
  Host: example.com
  Authorization: Bearer token123
  Content-Type: application/json
  ```

Response (Yanıt):
- Sunucudan (server/backend) istemciye (client/frontend) dönen cevaptır
- İsteğe karşılık olarak gönderilir
- Bileşenleri:
  * Status Code (Durum Kodu): İsteğin sonucunu belirtir
    - 200: Başarılı (OK)
    - 201: Oluşturuldu (Created)
    - 400: Hatalı istek (Bad Request)
    - 401: Yetkisiz (Unauthorized)
    - 404: Bulunamadı (Not Found)
    - 500: Sunucu hatası (Internal Server Error)
  * Headers (Başlıklar): Yanıt hakkında meta bilgiler
  * Body (Gövde): Dönen veri (JSON, HTML, XML vb.)
- Örnek Response:
  ```
  HTTP/1.1 200 OK
  Content-Type: application/json
  
  {
    "id": 123,
    "name": "Ahmet",
    "email": "ahmet@example.com"
  }
  ```

Request-Response Döngüsü Örneği:
1. Kullanıcı bir ürünü sepete eklemek için butona tıklar (Frontend)
2. Frontend, POST isteği gönderir:
   ```
   POST /api/cart/add
   Body: { "productId": 456, "quantity": 2 }
   ```
3. Backend isteği alır, işler ve veritabanını günceller
4. Backend yanıt döner:
   ```
   Response: 200 OK
   Body: { "success": true, "cartTotal": 5 }
   ```
5. Frontend yanıtı alır ve kullanıcıya "Ürün sepete eklendi" mesajı gösterir

Gerçek Hayat Örneği - Kullanıcı Girişi:
Request:


*/

