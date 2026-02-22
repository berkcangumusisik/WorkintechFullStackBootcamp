
function QuantityCounter({ value, onDecrement, onIncrement, min = 1 }) {
  return (
    <div className="quantity-wrap">
      <button
        type="button"
        className="qty-btn"
        onClick={onDecrement}
        disabled={value <= min}
        aria-label="Azalt"
      >
        -
      </button>
      <span className="qty-value" aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        className="qty-btn"
        onClick={onIncrement}
        aria-label="Artır"
      >
        +
      </button>
    </div>
  )
}

export default QuantityCounter
