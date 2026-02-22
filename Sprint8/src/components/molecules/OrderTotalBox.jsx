
function OrderTotalBox({ selectionTotal, grandTotal, variant = 'form' }) {
  if (variant === 'success') {
    return (
      <div className="success-total-card" aria-label="Sipariş toplamı">
        <p className="success-total-title">Sipariş Toplamı</p>
        <div className="success-total-row">
          <span>Seçimler</span>
          <span>{Number(selectionTotal).toFixed(2)}₺</span>
        </div>
        <div className="success-total-row">
          <span>Toplam</span>
          <span className="success-total-price">
            {Number(grandTotal).toFixed(2)}₺
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="order-total-box">
      <p className="order-total-title">Sipariş Toplamı</p>
      <div className="order-total-row">
        <span>Seçimler</span>
        <span>{Number(selectionTotal).toFixed(2)}₺</span>
      </div>
      <div className="order-total-row total-highlight">
        <span>Toplam</span>
        <span className="total-price">{Number(grandTotal).toFixed(2)}₺</span>
      </div>
    </div>
  )
}

export default OrderTotalBox
