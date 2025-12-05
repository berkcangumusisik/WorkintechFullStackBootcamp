// GİTHUB VE GİT KOMUTLARI

/*
GİTHUB NEDİR?
- GitHub, Git versiyon kontrol sistemi kullanan bir web tabanlı hosting servisidir
- Yazılım projelerini saklamak, paylaşmak ve işbirliği yapmak için kullanılır
- Açık kaynak projelerin barındırılması için popüler bir platformdur
- Kod inceleme, proje yönetimi, dokümantasyon gibi özellikler sunar
*/

/*
GİT NEDİR?
- Git, dağıtık bir versiyon kontrol sistemidir
- Kod değişikliklerini takip etmek için kullanılır
- Birden fazla geliştirici aynı proje üzerinde çalışabilir
- Değişiklikleri geri alabilir, dallar (branch) oluşturabilirsiniz
*/

// TEMEL GİT KOMUTLARI

// 1. Git Kurulumu ve Yapılandırma
// git config --global user.name "Adınız Soyadınız"
// git config --global user.email "email@example.com"

// 2. Yeni Bir Repository Oluşturma
// git init                    // Mevcut klasörde yeni bir git repository başlatır

// 3. Repository Klonlama
// git clone <url>             // Uzak bir repository'yi bilgisayarınıza kopyalar
// Örnek: git clone https://github.com/kullanici/proje.git

// 4. Dosya Durumunu Kontrol Etme
// git status                  // Değişiklikleri ve dosya durumlarını gösterir

// 5. Dosyaları Staging Area'ya Ekleme
// git add <dosya>             // Belirli bir dosyayı ekler
// git add .                   // Tüm değişiklikleri ekler
// git add *.js                // Belirli uzantıdaki dosyaları ekler

// 6. Commit (Değişiklikleri Kaydetme)
// git commit -m "Açıklama"    // Değişiklikleri mesaj ile kaydeder
// git commit -am "Açıklama"   // Add ve commit'i birlikte yapar

// 7. Uzak Repository İşlemleri
// git remote add origin <url> // Uzak repository bağlantısı ekler
// git remote -v               // Uzak repository'leri listeler
// git push origin main        // Değişiklikleri uzak repository'ye gönderir
// git pull origin main        // Uzak repository'den değişiklikleri çeker

// 8. Branch (Dal) İşlemleri
// git branch                  // Mevcut branch'leri listeler
// git branch <branch-adi>     // Yeni branch oluşturur
// git checkout <branch-adi>   // Başka bir branch'e geçer
// git checkout -b <branch-adi> // Yeni branch oluşturur ve geçer
// git merge <branch-adi>      // Belirtilen branch'i mevcut branch ile birleştirir
// git branch -d <branch-adi>  // Branch'i siler

// 9. Geçmiş ve Log İşlemleri
// git log                     // Commit geçmişini gösterir
// git log --oneline           // Kısa formatta commit geçmişi
// git log --graph             // Grafik şeklinde gösterir

// 10. Değişiklikleri Geri Alma
// git reset <dosya>           // Staging area'dan dosyayı çıkarır
// git reset --hard            // Tüm değişiklikleri geri alır (DİKKAT!)
// git revert <commit-id>      // Belirli bir commit'i geri alır
// git checkout -- <dosya>     // Dosyadaki değişiklikleri geri alır

// 11. Fark Görüntüleme
// git diff                    // Değişiklikleri gösterir
// git diff --staged           // Staging area'daki değişiklikleri gösterir

// 12. Stash (Geçici Saklama)
// git stash                   // Değişiklikleri geçici olarak saklar
// git stash pop               // Saklanan değişiklikleri geri getirir
// git stash list              // Saklanan değişiklikleri listeler

// 13. Tag (Etiket) İşlemleri
// git tag                     // Mevcut tag'leri listeler
// git tag v1.0                // Yeni tag oluşturur
// git push origin v1.0        // Tag'i uzak repository'ye gönderir

// 14. Diğer Yararlı Komutlar
// git rm <dosya>              // Dosyayı siler ve silme işlemini stage'e ekler
// git mv <eski> <yeni>        // Dosyayı yeniden adlandırır
// git clean -fd               // İzlenmeyen dosyaları siler

// ÖRNEK İŞ AKIŞI
/*
1. git clone https://github.com/kullanici/proje.git
2. cd proje
3. git checkout -b yeni-ozellik
4. // Kod değişiklikleri yapın
5. git add .
6. git commit -m "Yeni özellik eklendi"
7. git push origin yeni-ozellik
8. // GitHub'da Pull Request oluşturun
9. git checkout main
10. git pull origin main
*/

// GİTHUB WORKFLOW
/*
1. Fork: Başkasının projesini kendi hesabınıza kopyalama
2. Clone: Projeyi bilgisayarınıza indirme
3. Branch: Yeni özellik için dal oluşturma
4. Commit: Değişiklikleri kaydetme
5. Push: Değişiklikleri GitHub'a gönderme
6. Pull Request: Değişikliklerinizi ana projeye önerme
7. Merge: Değişikliklerin ana projeye dahil edilmesi
*/

// NPM (Node Package Manager) NEDİR?
/*
NPM, Node.js için paket yöneticisidir. JavaScript kütüphanelerini ve araçlarını 
yönetmek için kullanılır. Dünya çapında en büyük yazılım kayıt defterlerinden biridir.

NPM İKİ ŞEYDİR:
1. Komut satırı aracı (CLI) - Paketleri yüklemek ve yönetmek için
2. Online paket deposu - npmjs.com üzerinde milyonlarca paket
*/

// NPM TEMEL KOMUTLARI

// 1. NPM Versiyonunu Kontrol Etme
// npm --version               // NPM versiyonunu gösterir
// npm -v                      // Kısa versiyon

// 2. Proje Başlatma
// npm init                    // Yeni bir Node.js projesi başlatır (interaktif)
// npm init -y                 // Varsayılan ayarlarla hızlı başlatır (package.json oluşturur)

// 3. Paket Yükleme
// npm install <paket-adı>     // Paketi yükler ve package.json'a ekler
// npm install express         // Örnek: Express framework'ü yükler
// npm i <paket-adı>           // Kısa versiyon
// npm install                 // package.json'daki tüm paketleri yükler

// 4. Paket Yükleme Seçenekleri
// npm install <paket> --save              // Production bağımlılığı olarak ekler (varsayılan)
// npm install <paket> --save-dev          // Development bağımlılığı olarak ekler
// npm install <paket> -D                  // --save-dev kısa hali
// npm install <paket> -g                  // Global olarak yükler (sistem geneli)
// npm install <paket>@<versiyon>          // Belirli versiyon yükler
// npm install express@4.17.1              // Örnek: Express 4.17.1 versiyonu

// 5. Paket Kaldırma
// npm uninstall <paket-adı>   // Paketi kaldırır
// npm uninstall express       // Örnek
// npm un <paket-adı>          // Kısa versiyon
// npm remove <paket-adı>      // Alternatif komut

// 6. Paket Güncelleme
// npm update                  // Tüm paketleri günceller
// npm update <paket-adı>      // Belirli paketi günceller
// npm outdated                // Güncel olmayan paketleri listeler

// 7. Paket Bilgisi
// npm list                    // Yüklü paketleri listeler
// npm list --depth=0          // Sadece ana paketleri gösterir
// npm view <paket-adı>        // Paket hakkında bilgi gösterir
// npm search <anahtar>        // Paket arar

// 8. Script Çalıştırma
// npm run <script-adı>        // package.json'daki script'i çalıştırır
// npm start                   // "start" script'ini çalıştırır
// npm test                    // "test" script'ini çalıştırır
// npm run dev                 // Örnek: "dev" script'ini çalıştırır

// 9. Cache İşlemleri
// npm cache clean --force     // NPM cache'ini temizler
// npm cache verify            // Cache'i doğrular

// 10. Audit (Güvenlik Kontrolü)
// npm audit                   // Güvenlik açıklarını kontrol eder
// npm audit fix               // Güvenlik açıklarını otomatik düzeltir

// PACKAGE.JSON DOSYASI
/*
{
  "name": "proje-adi",
  "version": "1.0.0",
  "description": "Proje açıklaması",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.20",
    "jest": "^29.0.0"
  },
  "keywords": ["node", "express"],
  "author": "İsim Soyisim",
  "license": "MIT"
}
*/

// VERSİYON NUMARALARI (Semantic Versioning)
/*
"express": "4.18.2"
           MAJOR.MINOR.PATCH

^4.18.2  -> 4.x.x (Minor ve patch güncellemelerine izin verir)
~4.18.2  -> 4.18.x (Sadece patch güncellemelerine izin verir)
4.18.2   -> Tam olarak bu versiyon
*        -> En son versiyon
*/

// POPÜLER NPM PAKETLERİ
/*
- express: Web framework
- react: UI kütüphanesi
- lodash: Utility fonksiyonları
- axios: HTTP istekleri
- mongoose: MongoDB ORM
- dotenv: Ortam değişkenleri
- nodemon: Otomatik yeniden başlatma
- jest: Test framework
- eslint: Kod kalitesi kontrolü
- webpack: Module bundler
*/

// NPM vs YARN vs PNPM
/*
NPM:  Node.js ile birlikte gelir, en yaygın kullanılan
YARN: Facebook tarafından geliştirildi, daha hızlı
PNPM: Disk alanı tasarrufu sağlar, performanslı
*/

// ÖRNEK İŞ AKIŞI
/*
1. mkdir yeni-proje && cd yeni-proje
2. npm init -y
3. npm install express
4. npm install nodemon --save-dev
5. // package.json'da script ekle: "dev": "nodemon index.js"
6. npm run dev
*/
