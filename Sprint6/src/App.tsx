import './style.css'
import Quote from './Quote'

function App() {

  return (
    <div>
      <h1>Hello World</h1>
      <Quote />
    </div>
  )
}

export default App


/* React, kullanıcı ara yüzleri (UI) oluşturmak için kullanılan popüler bir JavaScript kütüphanesidir. 
2013 yılında Facebook tarafından geliştirilmiştir. React'in temel amacı, web uygulamalarında dinamik ve hızlı kullanıcı arayüzleri oluşturmaktır.
JSX (JavaScript XML), JavaScript içinde HTML benzeri sözdizimi kullanmamızı sağlayan bir teknolojidir. React projelerinde sıkça kullanılır ve bileşenlerin yapısının daha okunabilir ve anlaşılabilir olmasını sağlar. Tarayıcılar JSX'i doğrudan anlayamaz, bu yüzden derleyiciler (ör. Babel) JSX kodunu standart JavaScript'e çevirir.

JSX ÖZELLİKLERİ:
1. HTML benzeri sözdizimi: HTML'e benzer görünür ama JavaScript içinde kullanılır
2. JavaScript ifadeleri: {} içinde JavaScript ifadeleri yazılır
   Örnek: <div>Merhaba {name}</div>
3. Özel attribute'lar: class yerine className, for yerine htmlFor kullanılır
4. Self-closing etiketler: Tek etiketler kapatılmalı (<img />, <br />)
5. Component isimlendirme: Component'ler büyük harfle başlar (<Button /> component, <button /> HTML)
6. Fragment'ler: Gereksiz wrapper'lar için <></> veya <React.Fragment></React.Fragment>
7. Koşullu render: {isLoggedIn ? <Dashboard /> : <Login />} veya {error && <ErrorMessage />}
8. Liste render: map() ile listeler render edilir, her elemana key verilir
   Örnek: {items.map(item => <li key={item.id}>{item.name}</li>)}
9. Inline stiller: Obje olarak verilir <div style={{color: 'red', fontSize: 20}}>
10. Event handler'lar: onClick, onChange gibi camelCase kullanılır
    Örnek: <button onClick={handleClick}>Tıkla</button>

REACT COMPONENTS (BİLEŞENLER):
Component'ler, React uygulamalarının yapı taşlarıdır. UI'ı yeniden kullanılabilir parçalara bölerler.

1. FUNCTION COMPONENT (Fonksiyon Bileşeni):
   - En yaygın ve modern yaklaşım
   - JavaScript fonksiyonu olarak tanımlanır
   - JSX return eder
   Örnek:
   function Button() {
     return <button>Tıkla</button>
   }

2. ARROW FUNCTION COMPONENT:
   - Daha kısa sözdizimi
   Örnek:
   const Button = () => {
     return <button>Tıkla</button>
   }

3. PROPS (Özellikler):
   - Component'lere veri geçirmek için kullanılır
   - Read-only (salt okunur) verilerdir
   Örnek:
   function Greeting(props) {
     return <h1>Merhaba {props.name}</h1>
   }
   Kullanım: <Greeting name="Ahmet" />

4. DESTRUCTURING PROPS:
   - Props'ları daha temiz kullanmak için
   Örnek:
   function Greeting({ name, age }) {
     return <h1>Merhaba {name}, yaşın {age}</h1>
   }

5. COMPONENT COMPOSITION (Bileşen Birleştirme):
   - Component'ler iç içe kullanılabilir
   Örnek:
   function App() {
     return (
       <div>
         <Header />
         <Content />
         <Footer />
       </div>
     )
   }

6. CONDITIONAL RENDERING (Koşullu Render):
   - Koşullara göre farklı içerik gösterme
   Örnek:
   function User({ isLoggedIn }) {
     return isLoggedIn ? <Dashboard /> : <Login />
   }

7. LISTS & KEYS:
   - Liste render ederken her elemana unique key verilir
   Örnek:
   function TodoList({ todos }) {
     return (
       <ul>
         {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
       </ul>
     )
   }

8. DEFAULT PROPS:
   - Props için varsayılan değerler
   Örnek:
   function Button({ text = "Tıkla", color = "blue" }) {
     return <button style={{color}}>{text}</button>
   }

9. CHILDREN PROP:
   - Component içine içerik geçirmek için
   Örnek:
   function Card({ children }) {
     return <div className="card">{children}</div>
   }
   Kullanım: <Card><p>İçerik</p></Card>

10. COMPONENT REUSABILITY (Yeniden Kullanılabilirlik):
    - Aynı component'i farklı verilerle tekrar kullanabilirsiniz
    - DRY (Don't Repeat Yourself) prensibini uygular

JAVASCRIPT MODULES (ES6 MODULES):
JavaScript modülleri, kodunuzu daha organize ve yeniden kullanılabilir hale getirmenizi sağlar. 
Kodunuzu farklı dosyalara bölebilir ve bu dosyaları birbirine bağlayabilirsiniz.

1. EXPORT (Dışa Aktarma):
   - Bir dosyadan değişken, fonksiyon veya class'ı dışa aktarmak için kullanılır
   
   a) NAMED EXPORT (İsimli Dışa Aktarma):
      - Birden fazla şeyi dışa aktarabilirsiniz
      - İsimlerle import edilir
      Örnek:
      // utils.js
      export const name = "Ahmet"
      export function greet() {
        return "Merhaba"
      }
      export const age = 25
      
      // Kullanım (import)
      import { name, greet, age } from './utils'
      
   b) DEFAULT EXPORT (Varsayılan Dışa Aktarma):
      - Dosya başına sadece bir tane olabilir
      - İsimsiz import edilebilir
      Örnek:
      // Button.js
      function Button() {
        return <button>Tıkla</button>
      }
      export default Button
      
      // Kullanım (import)
      import Button from './Button'
      // veya farklı isimle
      import MyButton from './Button'

2. IMPORT (İçe Aktarma):
   - Başka bir dosyadan kod kullanmak için kullanılır
   
   a) NAMED IMPORT:
      Örnek:
      import { name, greet } from './utils'
      
   b) DEFAULT IMPORT:
      Örnek:
      import Button from './Button'
      
   c) MIXED IMPORT (Karışık):
      Örnek:
      import Button, { name, greet } from './components'
      
   d) ALIAS IMPORT (Takma İsim):
      Örnek:
      import { name as userName, greet as sayHello } from './utils'
      
   e) NAMESPACE IMPORT (Tümünü İçe Aktarma):
      Örnek:
      import * as utils from './utils'
      // Kullanım: utils.name, utils.greet()

3. RE-EXPORT (Yeniden Dışa Aktarma):
   - Bir modülden import edip başka bir modülden export etmek
   Örnek:
   // index.js
   export { Button } from './Button'
   export { Card } from './Card'
   // Tek yerden tüm component'leri import edebilirsiniz
   import { Button, Card } from './components'

4. MODULE TYPES (Modül Türleri):
   
   a) ES6 MODULES (ESM):
      - Modern JavaScript modül sistemi
      - import/export kullanır
      - Tarayıcı ve Node.js'de desteklenir
      - package.json'da "type": "module" gerekir
      
   b) COMMONJS (CJS):
      - Node.js'in eski modül sistemi
      - require() ve module.exports kullanır
      Örnek:
      const fs = require('fs')
      module.exports = { name: "Ahmet" }

5. MODULE BENEFITS (Modül Avantajları):
   - Kod organizasyonu: Kodunuzu mantıklı parçalara bölebilirsiniz
   - Yeniden kullanılabilirlik: Aynı kodu farklı yerlerde kullanabilirsiniz
   - Namespace pollution önleme: Global scope'u kirletmezsiniz
   - Dependency management: Hangi dosyanın neye ihtiyacı olduğunu açıkça görebilirsiniz
   - Tree shaking: Kullanılmayan kod otomatik olarak bundle'dan çıkarılır
   - Lazy loading: İhtiyaç duyulduğunda modüller yüklenebilir

MODULE BUNDLERS (Modül Paketleyiciler):
Module bundler'lar, birden fazla JavaScript dosyasını ve bağımlılıklarını tek bir veya birkaç dosyaya 
birleştiren (bundle eden) araçlardır. Modern web geliştirmede kritik bir rol oynarlar.

1. BUNDLER NEDİR VE NEDEN KULLANILIR?
   
   a) PROBLEM:
      - Tarayıcılar ES6 modüllerini doğrudan destekler ama her modül için ayrı HTTP isteği gerekir
      - Çok sayıda dosya = çok sayıda HTTP isteği = yavaş yükleme
      - Eski tarayıcılar ES6 modüllerini desteklemez
      - JSX, TypeScript, Sass gibi dilleri tarayıcılar anlayamaz
   
   b) ÇÖZÜM:
      - Tüm modülleri tek bir dosyaya birleştirir (bundle)
      - Modern JavaScript'i eski tarayıcılar için uyumlu hale getirir (transpile)
      - JSX, TypeScript gibi dilleri JavaScript'e çevirir
      - CSS, resimler gibi diğer asset'leri de işleyebilir
      - Code splitting ve lazy loading ile optimizasyon yapar

2. BUNDLER'IN YAPTIĞI İŞLEMLER:
   
   a) DEPENDENCY RESOLUTION (Bağımlılık Çözümleme):
      - import/require ifadelerini bulur
      - Dosya yollarını çözer
      - Bağımlılık ağacını (dependency tree) oluşturur
   
   b) TRANSFORMATION (Dönüştürme):
      - JSX → JavaScript
      - TypeScript → JavaScript
      - ES6+ → ES5 (Babel ile)
      - Sass/Less → CSS
   
   c) BUNDLING (Paketleme):
      - Tüm dosyaları tek bir dosyaya birleştirir
      - Modül sistemini çözer (ES6 → IIFE, CommonJS vb.)
   
   d) OPTIMIZATION (Optimizasyon):
      - Minification: Kodu küçültür
      - Tree shaking: Kullanılmayan kodu çıkarır
      - Code splitting: Kod parçalara böler
      - Asset optimization: Resimleri optimize eder

3. POPÜLER MODULE BUNDLERS:

   a) WEBPACK:
      - En popüler ve eski bundler
      - Çok esnek ve yapılandırılabilir
      - Plugin ekosistemi çok geniş
      - Öğrenmesi zor, yapılandırması karmaşık
      - Büyük projeler için idealdir
      Örnek kullanım:
      // webpack.config.js
      module.exports = {
        entry: './src/index.js',
        output: {
          filename: 'bundle.js'
        }
      }
   
   b) VITE:
      - Modern ve hızlı bundler
      - Development'ta çok hızlı (ESM kullanır)
      - Production'da Rollup kullanır
      - Sıfır yapılandırma ile çalışır
      - React, Vue, Svelte için resmi destek
      - Bu projede Vite kullanılıyor!
      Özellikler:
      - HMR (Hot Module Replacement): Değişiklikleri anında görürsünüz
      - Pre-bundling: node_modules'ü önceden bundle eder
      - Native ESM: Modern tarayıcılar için doğrudan ES modülleri kullanır
   
   c) ROLLUP:
      - Küçük bundle boyutları için optimize edilmiş
      - Tree shaking çok iyi çalışır
      - Kütüphane geliştirme için idealdir
      - Vite production build'inde kullanılır
   
   d) PARCEL:
      - Sıfır yapılandırma
      - Otomatik olarak her şeyi algılar
      - Çok kolay kullanım
      - Küçük-orta projeler için uygundur
   
   e) ESBUILD:
      - Go ile yazılmış, çok hızlı
      - Vite ve diğer bundler'lar tarafından kullanılır
      - Doğrudan kullanımı nadirdir

4. BUNDLER KARŞILAŞTIRMASI:

   Özellik          Webpack      Vite        Rollup      Parcel
   Hız (Dev)       Orta         Çok Hızlı   Orta        Hızlı
   Hız (Prod)      Hızlı        Hızlı       Çok Hızlı   Hızlı
   Yapılandırma    Karmaşık     Basit       Orta        Yok
   Plugin Sayısı   Çok          Orta        Az          Az
   Bundle Boyutu   Orta         Küçük       En Küçük    Orta
   Öğrenme Eğrisi  Zor          Kolay       Orta        Çok Kolay

5. VITE NASIL ÇALIŞIR?

   a) DEVELOPMENT MODE:
      - Tarayıcıya doğrudan ES modülleri servis eder
      - Her modül ayrı dosya olarak yüklenir
      - Değişikliklerde sadece ilgili modül yeniden yüklenir
      - Çok hızlı başlangıç ve HMR
   
   b) PRODUCTION MODE:
      - Rollup kullanarak bundle oluşturur
      - Code splitting yapar
      - Minification ve optimization uygular
      - Tek veya birkaç optimize edilmiş dosya üretir

6. BUNDLER YAPILANDIRMASI (Vite Örneği):
   
   // vite.config.ts
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   
   export default defineConfig({
     plugins: [react()],
     build: {
       outDir: 'dist',
       sourcemap: true,
       rollupOptions: {
         output: {
           manualChunks: {
             vendor: ['react', 'react-dom']
           }
         }
       }
     }
   })

7. BUNDLER AVANTAJLARI:
   - Performans: Daha az HTTP isteği, daha hızlı yükleme
   - Uyumluluk: Modern kod eski tarayıcılarda çalışır
   - Optimizasyon: Minification, tree shaking, code splitting
   - Developer Experience: HMR, source maps, hot reload
   - Asset Management: CSS, resimler, fontlar otomatik işlenir
   - Production Ready: Production için optimize edilmiş kod üretir

8. BUNDLE ÇIKTILARI:
   
   a) SINGLE BUNDLE:
      - Tüm kod tek dosyada
      - Küçük projeler için uygun
      - İlk yükleme yavaş olabilir
   
   b) CODE SPLITTING:
      - Kod mantıklı parçalara bölünür
      - Lazy loading ile ihtiyaç duyulduğunda yüklenir
      - Daha hızlı ilk yükleme
      Örnek:
      // Lazy loading
      const LazyComponent = React.lazy(() => import('./LazyComponent'))

9. MODERN TREND:
   - Vite gibi ESM tabanlı bundler'lar popülerlik kazanıyor
   - Development'ta native ESM kullanımı
   - Production'da optimize edilmiş bundle
   - Daha hızlı build süreleri
   - Daha iyi developer experience

PROPS (Özellikler):
Props, React'te component'ler arasında veri aktarımı için kullanılan temel mekanizmadır.
"Props" kelimesi "properties" (özellikler) kelimesinin kısaltmasıdır.

1. PROPS NEDİR?
   - Component'lere veri geçirmek için kullanılan parametrelerdir
   - Read-only (salt okunur) - component içinde değiştirilemez
   - Parent component'ten child component'e veri aktarımı sağlar
   - HTML attribute'larına benzer ama JavaScript değerleri geçirebilirsiniz

2. TEMEL KULLANIM:

   a) PROPS GEÇİRME:
      Örnek:
      function Greeting(props) {
        return <h1>Merhaba {props.name}</h1>
      }
      
      // Kullanım
      <Greeting name="Ahmet" />
      <Greeting name="Ayşe" />
   
   b) DESTRUCTURING PROPS:
      - Daha temiz ve okunabilir kod
      Örnek:
      function Greeting({ name, age }) {
        return <h1>Merhaba {name}, yaşın {age}</h1>
      }
      
      <Greeting name="Ahmet" age={25} />

3. PROPS TÜRLERİ:

   a) STRING PROPS:
      <Button text="Tıkla" />
   
   b) NUMBER PROPS:
      <Counter initialValue={10} />
   
   c) BOOLEAN PROPS:
      <Modal isOpen={true} />
      // Kısa yazım: <Modal isOpen />
   
   d) ARRAY PROPS:
      <TodoList items={['Todo 1', 'Todo 2']} />
   
   e) OBJECT PROPS:
      <User user={{ name: 'Ahmet', age: 25 }} />
   
   f) FUNCTION PROPS (CALLBACKS):
      <Button onClick={() => console.log('Tıklandı')} />
   
   g) JSX/ELEMENT PROPS:
      <Card>
        <h2>Başlık</h2>
        <p>İçerik</p>
      </Card>

4. CHILDREN PROP:
   - Özel bir prop'tur
   - Component açılış ve kapanış etiketleri arasındaki içeriği temsil eder
   Örnek:
   function Card({ children }) {
     return <div className="card">{children}</div>
   }
   
   // Kullanım
   <Card>
     <h2>Başlık</h2>
     <p>İçerik buraya gelir</p>
   </Card>

5. DEFAULT PROPS:
   - Props için varsayılan değerler tanımlayabilirsiniz
   
   a) FUNCTION PARAMETRESİNDE:
      function Button({ text = "Tıkla", color = "blue" }) {
        return <button style={{color}}>{text}</button>
      }
   
   b) COMPONENT.DEFAULT_PROPS (Eski Yöntem):
      function Button({ text, color }) {
        return <button style={{color}}>{text}</button>
      }
      Button.defaultProps = {
        text: "Tıkla",
        color: "blue"
      }

6. PROPS VALIDATION (TypeScript ile):
   - TypeScript kullanarak props tiplerini tanımlayabilirsiniz
   Örnek:
   interface ButtonProps {
     text: string
     onClick: () => void
     disabled?: boolean  // Opsiyonel prop
   }
   
   function Button({ text, onClick, disabled = false }: ButtonProps) {
     return (
       <button onClick={onClick} disabled={disabled}>
         {text}
       </button>
     )
   }

7. PROPS SPREAD OPERATOR:
   - Tüm props'ları bir kerede geçirmek için
   Örnek:
   const buttonProps = {
     text: "Tıkla",
     onClick: handleClick,
     disabled: false
   }
   
   <Button {...buttonProps} />
   
   // Veya mevcut props'ları genişletme
   <Button {...buttonProps} className="custom-button" />

8. PROPS KURALLARI:
   - Props read-only'dir, component içinde değiştirilemez
   - Props değişikliği için parent component'i güncellemek gerekir
   - Props sadece parent'tan child'a aktarılır (one-way data flow)
   - Props isimleri camelCase kullanır (onClick, className vb.)
   - JSX içinde JavaScript ifadeleri için {} kullanılır
   - String değerler için tırnak işareti kullanılabilir

9. PROPS vs STATE:
   
   PROPS:
   - Parent'tan child'a geçirilir
   - Read-only (değiştirilemez)
   - Component dışından kontrol edilir
   - Statik veya parent state'inden gelir
   
   STATE:
   - Component içinde yönetilir
   - setState ile değiştirilebilir
   - Component içinden kontrol edilir
   - Dinamik ve değişkendir

10. PRATİK ÖRNEKLER:

    a) BASIT COMPONENT:
       function Welcome({ name }) {
         return <h1>Hoş geldin, {name}!</h1>
       }
       
       <Welcome name="Ahmet" />

    b) MULTIPLE PROPS:
       function UserCard({ name, email, age }) {
         return (
           <div>
             <h2>{name}</h2>
             <p>Email: {email}</p>
             <p>Yaş: {age}</p>
           </div>
         )
       }
       
       <UserCard name="Ahmet" email="ahmet@example.com" age={25} />

    c) CONDITIONAL RENDERING WITH PROPS:
       function Message({ isError, text }) {
         return (
           <div className={isError ? 'error' : 'success'}>
             {text}
           </div>
         )
       }
       
       <Message isError={true} text="Bir hata oluştu!" />

    d) LIST RENDERING WITH PROPS:
       function TodoList({ todos }) {
         return (
           <ul>
             {todos.map(todo => (
               <li key={todo.id}>{todo.text}</li>
             ))}
           </ul>
         )
       }
       
       <TodoList todos={[
         { id: 1, text: 'Todo 1' },
         { id: 2, text: 'Todo 2' }
       ]} />

    e) CALLBACK PROPS:
       function Counter({ count, onIncrement, onDecrement }) {
         return (
           <div>
             <p>Sayı: {count}</p>
             <button onClick={onIncrement}>Artır</button>
             <button onClick={onDecrement}>Azalt</button>
           </div>
         )
       }
       
       function App() {
         const [count, setCount] = useState(0)
         return (
           <Counter
             count={count}
             onIncrement={() => setCount(count + 1)}
             onDecrement={() => setCount(count - 1)}
           />
         )
       }

11. BEST PRACTICES (En İyi Uygulamalar):
    - Props isimlerini açıklayıcı yapın
    - Gereksiz props geçirmeyin
    - Props'ları destructure edin (daha temiz kod)
    - TypeScript kullanarak tip güvenliği sağlayın
    - Callback props'lara "on" prefix'i ekleyin (onClick, onSubmit)
    - Boolean props'lar için kısa yazım kullanın (<Modal isOpen />)
    - Children prop'unu gerektiğinde kullanın
    - Default props değerleri tanımlayın

12. COMMON MISTAKES (Yaygın Hatalar):
    - Props'ları component içinde değiştirmeye çalışmak
    - Props isimlerinde yazım hatası
    - Gerekli props'ları geçirmemek
    - Props'ları state ile karıştırmak
    - Callback props'larda fonksiyonu doğru çağırmamak

VERİ AKIŞ YÖNÜ (DATA FLOW DIRECTION):
React'te veri akışı tek yönlüdür (one-way data flow). Bu, React'in temel prensiplerinden biridir
ve uygulamanın nasıl çalıştığını anlamak için kritik öneme sahiptir.

1. ONE-WAY DATA FLOW (Tek Yönlü Veri Akışı):
   - Veri sadece parent component'ten child component'e doğru akar
   - Child component'ler parent'tan gelen veriyi doğrudan değiştiremez
   - Veri değişikliği için parent component'teki state'i güncellemek gerekir
   - Bu yaklaşım kodun daha öngörülebilir ve debug edilebilir olmasını sağlar

2. VERİ AKIŞ YÖNÜ ŞEMASI:

   PARENT COMPONENT (State)
         |
         | Props (aşağı doğru)
         ↓
   CHILD COMPONENT
         |
         | Callback (yukarı doğru)
         ↑
   PARENT COMPONENT (State Update)

3. AŞAĞI DOĞRU VERİ AKIŞI (DOWNWARD DATA FLOW):

   a) PROPS İLE VERİ GEÇİRME:
      function Parent() {
        const [name, setName] = useState("Ahmet")
        return <Child name={name} />
      }
      
      function Child({ name }) {
        return <h1>Merhaba {name}</h1>
      }
   
   b) ÇOKLU SEVİYE AKIŞ:
      function App() {
        const [user, setUser] = useState({ name: "Ahmet", age: 25 })
        return <Parent user={user} />
      }
      
      function Parent({ user }) {
        return <Child user={user} />
      }
      
      function Child({ user }) {
        return <div>{user.name} - {user.age}</div>
      }

4. YUKARI DOĞRU VERİ AKIŞI (UPWARD DATA FLOW):

   a) CALLBACK FUNCTIONS İLE:
      - Child component'ten parent'a veri göndermek için callback kullanılır
      - Event handler'lar parent'tan child'a prop olarak geçirilir
      - Child bu fonksiyonu çağırdığında parent'taki state güncellenir
      
      Örnek:
      function Parent() {
        const [count, setCount] = useState(0)
        
        const handleIncrement = () => {
          setCount(count + 1)
        }
        
        return <Child count={count} onIncrement={handleIncrement} />
      }
      
      function Child({ count, onIncrement }) {
        return (
          <div>
            <p>Sayı: {count}</p>
            <button onClick={onIncrement}>Artır</button>
          </div>
        )
      }
   
   b) FORM VERİSİ GÖNDERME:
      function Parent() {
        const [formData, setFormData] = useState({ name: '', email: '' })
        
        const handleSubmit = (data) => {
          setFormData(data)
          console.log('Form gönderildi:', data)
        }
        
        return <Form onSubmit={handleSubmit} />
      }
      
      function Form({ onSubmit }) {
        const [name, setName] = useState('')
        const [email, setEmail] = useState('')
        
        const handleSubmit = (e) => {
          e.preventDefault()
          onSubmit({ name, email })
        }
        
        return (
          <form onSubmit={handleSubmit}>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit">Gönder</button>
          </form>
        )
      }

5. LIFTING STATE UP (State'i Yukarı Taşıma):
   - Birden fazla component aynı state'i kullanıyorsa, state en yakın ortak parent'a taşınır
   - Bu, state'in tek bir kaynakta tutulmasını sağlar
   
   Örnek:
   function App() {
     const [temperature, setTemperature] = useState(20)
     
     return (
       <div>
         <Celsius temp={temperature} onTempChange={setTemperature} />
         <Fahrenheit temp={temperature} onTempChange={setTemperature} />
       </div>
     )
   }
   
   function Celsius({ temp, onTempChange }) {
     return (
       <div>
         <input 
           type="number" 
           value={temp} 
           onChange={(e) => onTempChange(Number(e.target.value))}
         />
         <span>°C</span>
       </div>
     )
   }
   
   function Fahrenheit({ temp, onTempChange }) {
     const fahrenheit = (temp * 9/5) + 32
     return (
       <div>
         <input 
           type="number" 
           value={fahrenheit} 
           onChange={(e) => onTempChange((Number(e.target.value) - 32) * 5/9)}
         />
         <span>°F</span>
       </div>
     )
   }

6. VERİ AKIŞI KURALLARI:

   a) PROPS READ-ONLY:
      - Props'lar child component'te değiştirilemez
      - Değişiklik için parent'taki state güncellenmelidir
      
      ❌ YANLIŞ:
      function Child({ count }) {
        count++  // HATA! Props değiştirilemez
        return <div>{count}</div>
      }
      
      ✅ DOĞRU:
      function Parent() {
        const [count, setCount] = useState(0)
        return <Child count={count} onIncrement={() => setCount(count + 1)} />
      }

   b) SINGLE SOURCE OF TRUTH:
      - Her veri parçası için tek bir kaynak olmalı
      - Aynı veri birden fazla yerde tutulmamalı
      
      ❌ YANLIŞ:
      function App() {
        const [count1, setCount1] = useState(0)  // Aynı veri
        const [count2, setCount2] = useState(0)  // İki yerde
        return (
          <div>
            <Counter count={count1} />
            <Counter count={count2} />
          </div>
        )
      }
      
      ✅ DOĞRU:
      function App() {
        const [count, setCount] = useState(0)  // Tek kaynak
        return (
          <div>
            <Counter count={count} />
            <Counter count={count} />
          </div>
        )
      }

7. VERİ AKIŞI ÖRNEKLERİ:

   a) BASIT COUNTER:
      function App() {
        const [count, setCount] = useState(0)
        
        return (
          <div>
            <Display count={count} />
            <Controls 
              onIncrement={() => setCount(count + 1)}
              onDecrement={() => setCount(count - 1)}
            />
          </div>
        )
      }
      
      function Display({ count }) {
        return <h1>{count}</h1>
      }
      
      function Controls({ onIncrement, onDecrement }) {
        return (
          <div>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
          </div>
        )
      }

   b) TODO LIST:
      function App() {
        const [todos, setTodos] = useState([])
        
        const addTodo = (text) => {
          setTodos([...todos, { id: Date.now(), text }])
        }
        
        const deleteTodo = (id) => {
          setTodos(todos.filter(todo => todo.id !== id))
        }
        
        return (
          <div>
            <TodoForm onAdd={addTodo} />
            <TodoList todos={todos} onDelete={deleteTodo} />
          </div>
        )
      }
      
      function TodoForm({ onAdd }) {
        const [text, setText] = useState('')
        
        const handleSubmit = (e) => {
          e.preventDefault()
          onAdd(text)
          setText('')
        }
        
        return (
          <form onSubmit={handleSubmit}>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button type="submit">Ekle</button>
          </form>
        )
      }
      
      function TodoList({ todos, onDelete }) {
        return (
          <ul>
            {todos.map(todo => (
              <li key={todo.id}>
                {todo.text}
                <button onClick={() => onDelete(todo.id)}>Sil</button>
              </li>
            ))}
          </ul>
        )
      }

8. VERİ AKIŞI AVANTAJLARI:

   a) PREDICTABILITY (Öngörülebilirlik):
      - Veri nereden geldiği ve nasıl değiştiği açıktır
      - Debug etmek daha kolaydır
   
   b) MAINTAINABILITY (Bakım Kolaylığı):
      - Kod daha organize ve anlaşılır
      - Değişikliklerin etkisi kolayca takip edilebilir
   
   c) PERFORMANCE (Performans):
      - React hangi component'in yeniden render edileceğini bilir
      - Gereksiz render'lar önlenir
   
   d) TESTING (Test Edilebilirlik):
      - Component'ler izole olarak test edilebilir
      - Mock props ile kolayca test yazılabilir

9. VERİ AKIŞI PATTERN'LERİ:

   a) CONTAINER/PRESENTATION PATTERN:
      - Container component: State ve logic'i yönetir
      - Presentation component: Sadece UI render eder
      
      function TodoContainer() {
        const [todos, setTodos] = useState([])
        // Logic burada
        return <TodoList todos={todos} onAdd={addTodo} />
      }
      
      function TodoList({ todos, onAdd }) {
        // Sadece UI
        return <div>...</div>
      }
   
   b) COMPOUND COMPONENTS:
      - İlişkili component'ler birlikte çalışır
      - State parent'ta tutulur
      
      function Tabs({ children }) {
        const [activeTab, setActiveTab] = useState(0)
        return <div>{children}</div>
      }
      
      function Tab({ index, children }) {
        // activeTab state'ini kullanır
      }

10. YAYGIN HATALAR:

    a) PROPS'U DEĞİŞTİRMEYE ÇALIŞMAK:
       ❌ function Child({ count }) {
            count = count + 1  // HATA!
          }
    
    b) STATE'I YANLIŞ YERDE TUTMAK:
       ❌ function App() {
            return <Parent />
          }
          
          function Parent() {
            const [count, setCount] = useState(0)
            return <Child count={count} />
          }
          
          function Child({ count }) {
            const [localCount, setLocalCount] = useState(count)  // HATA!
          }
    
    c) CALLBACK'I YANLIŞ ÇAĞIRMAK:
       ❌ <Button onClick={handleClick()} />  // Hemen çağrılır!
       ✅ <Button onClick={handleClick} />     // Doğru
       ✅ <Button onClick={() => handleClick()} />  // Doğru

11. ÖZET:
    - Veri akışı parent'tan child'a doğrudur (props ile)
    - Child'tan parent'a veri göndermek için callback kullanılır
    - State en yakın ortak parent'ta tutulmalıdır
    - Props read-only'dir, değiştirilemez
    - Tek yönlü veri akışı React'in gücünü ve öngörülebilirliğini sağlar

   
*/
