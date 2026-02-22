const menuLinks = [
  'Terminal Pizza',
  '5 Kişilik Hackathlon Pizza',
  'useEffect Tavuklu Pizza',
  'Beyaz Console Frosty',
  'Testler Geçti Mutlu Burger',
  'Position Absolute Acı Burger',
]

const instaImages = [
  '/images/iteration-2-images/footer/insta/li-0.png',
  '/images/iteration-2-images/footer/insta/li-1.png',
  '/images/iteration-2-images/footer/insta/li-2.png',
  '/images/iteration-2-images/footer/insta/li-3.png',
  '/images/iteration-2-images/footer/insta/li-4.png',
  '/images/iteration-2-images/footer/insta/li-5.png',
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col">
          <p className="footer-brand">Teknolojik<br />Yemekler</p>
          <ul className="footer-contact">
            <li><span className="footer-icon">📍</span>341 Londonderry Road, İstanbul Türkiye</li>
            <li><span className="footer-icon">✉️</span>aciktim@teknolojikyemekler.com</li>
            <li><span className="footer-icon">📞</span>+90 216 123 45 67</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Sıcacak Menüler</h3>
          <ul className="footer-menu">
            {menuLinks.map((item) => (
              <li key={item}>
                <a href="/order">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Instagram</h3>
          <div className="footer-insta">
            {instaImages.map((src, i) => (
              <img key={i} src={src} alt={`Instagram ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Teknolojik Yemekler.</p>
        <span aria-hidden="true">🐦</span>
      </div>
    </footer>
  )
}

export default Footer
