import Button from '../atoms/Button'

function MenuCard({ img, name, rating, reviews, price }) {
  return (
    <article className="menu-card">
      <div className="menu-card-img-wrap">
        <img src={img} alt={name} />
      </div>
      <div className="menu-card-body">
        <h3 className="menu-card-name">{name}</h3>
        <div className="menu-card-meta">
          <span className="menu-card-rating">⭐ {rating} {reviews}</span>
          <span className="menu-card-price">{price}</span>
        </div>
        <Button variant="card" as="link" to="/order">
          Sipariş Ver
        </Button>
      </div>
    </article>
  )
}

export default MenuCard
