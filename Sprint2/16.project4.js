/*
Yeni işinizde size verilen bilgisayarın kurulumunu yapmanız ve bazı görevleri tamamlamanız isteniyor. Bu görevlerin tamamlandığını raporlayan bir fonksiyonu güncelleyeceksiniz.

Proje Tanımı
bilgisayarinHazirMi isimli bir fonksiyon hazırlanmış. Kurulum ve görev listenizdeki maddelerin durumunu raporlayacağız.


Teknik Gereksinimler
A) Temel Yazılım Kurulumları:

VSCode editörü

Node.js

Git

Github Desktop


B) GitHub İşlemleri:

Hesap oluşturma
Repoyu forklama: https://github.com/Workintech/FSWeb-S2G4-JavaScript-tekrar
Github Desktopa login olma
Forkladığınız repoyu bilgisayara klonlama
Çözümleri commit'leme

Örnek Kullanım
bilgisayarinHazirMi();

// Beklenen örnek çıktı:
{
    "computer": "mac",
    "demo_project_url": "https://github.com/EmreSahiner/FSWeb-S2G4-JavaScript-tekrar",
    "github": "https://github.com/Workintech",
    "node_version": "v16.13.0",
    "vscode_version": "1.84.2"
}

İpuçları
A) Versiyon Kontrolleri:

Node.js versiyonu için terminal komutu:
node --version
VSCode versiyonu için:
VSCode'u açın

Help > About menüsüne tıklayın

veya Mac'te Code > About Visual Studio Code


B) GitHub İşlemleri:

GitHub hesabı oluşturma:

github.com'a gidin
Sign Up'a tıklayın
Adımları takip edin
Repo forklama:

Verilen repo URL'ine gidin
Sağ üstteki "Fork" butonuna tıklayın
Repo klonlama:

Github Desktop'ı yükleyin
Login olun.
'Clone Repository'i seçin
Arama yaparak projeyi bulun ve bilgisayarınızda uygun bir yere klonlayın
'Open in Visual Studio Code' ile VS Code'da açın

Önemli Notlar
İşletim sistemi adını küçük harflerle yazın
URL'leri tam ve doğru şekilde girin(sonunda .git olmamalı)
URL'in çalışır durumda olduğunu kontrol edin (repo public olmalı)
Versiyon numaralarını tam olarak ve doğru formatta yazın
Tüm görevleri sırasıyla tamamlayın
*/

function bilgisayarinHazirMi() {
    const checklist = {
      // GitHub hesabınızın url'i: örn. "github: 'https://github.com/Workintech'"
      github: 'https://github.com/berkcangumusisik',
  
      // İşletim sisteminiz ["mac", "windows", "linux"]'tan biri: örn. "computer: 'mac'"
      computer: 'windows',
  
      // Vscode'unuzn versiyon numarası: örn. "vscode_version: '1.84.2'"
      vscode_version: 'Version: 1.106.3',
  
      // Node versiyon numarası: örn. "node_version: 'v16.13.0'"
      node_version: 'v22.15.0',
  
      // Demo projesini forlayıp, clonelayıp çözdükten sonra commit atıp pushladıktan sonra repo url'ini girmek.
      demo_project_url:
        'https://github.com/berkcangumusisik/FSWeb-S2G4-JavaScript-tekrar',
    };
  
  
    return checklist;
  }
  
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = bilgisayarinHazirMi;