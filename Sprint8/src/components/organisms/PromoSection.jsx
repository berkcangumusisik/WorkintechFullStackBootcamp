import PromoCard from '../molecules/PromoCard'


function PromoSection({ mainPromo, stackPromos = [] }) {
  return (
    <section className="promo-section" aria-label="Özel fırsatlar">
      <PromoCard {...mainPromo} variant="red" />

      <div className="promo-stack">
        {stackPromos.map((promo, i) => (
          <PromoCard key={i} {...promo} variant="dark" />
        ))}
      </div>
    </section>
  )
}

export default PromoSection
