import Button from '../atoms/Button'

function PromoCard({ variant = 'red', title, subtitle, img, imgAlt = '' }) {
  const cls = variant === 'red' ? 'promo-card promo-red' : 'promo-card promo-dark'

  return (
    <article className={cls}>
      <div className="promo-card-text">
        <h2
          dangerouslySetInnerHTML={{ __html: title }}
          style={{ fontSize: '1.2rem', lineHeight: 1.2, marginBottom: '0.75rem', fontWeight: 700, fontFamily: "'Barlow', sans-serif" }}
        />
        {subtitle && <p>{subtitle}</p>}
        <Button variant="promo" as="link" to="/order">
          Sipariş Ver
        </Button>
      </div>
      {img && (
        <img src={img} alt={imgAlt} className="promo-card-img" aria-hidden={!imgAlt} />
      )}
    </article>
  )
}

export default PromoCard
