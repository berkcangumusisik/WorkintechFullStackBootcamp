import Button from '../atoms/Button'

function HeroSection({ eyebrow, heading, imgSrc, imgAlt, orderPath = '/order' }) {
  return (
    <section className="home-hero" aria-label="Hero bölümü">
      <div className="hero-text">
        <p className="hero-eyebrow">{eyebrow}</p>
        <h1 className="hero-heading">{heading}</h1>
        <Button variant="hero" as="link" to={orderPath} data-testid="home-order-btn">
          Sipariş Ver
        </Button>
      </div>
      <div className="hero-pizza" aria-hidden="true">
        <img src={imgSrc} alt={imgAlt} />
      </div>
    </section>
  )
}

export default HeroSection
