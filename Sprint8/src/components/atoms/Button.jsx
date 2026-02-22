import { Link } from 'react-router-dom'

const variantClass = {
  hero: 'btn-hero',
  promo: 'btn-promo',
  submit: 'btn-submit',
  card: 'btn-order-card',
  back: 'success-home-btn',
}

function Button({
  children,
  variant = 'hero',
  as = 'button',
  to,
  type = 'button',
  disabled = false,
  onClick,
  fullWidth = false,
  className = '',
  ...props
}) {
  const cls = `${variantClass[variant] ?? 'btn-hero'} ${className}`.trim()

  if (as === 'link' && to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={cls}
      disabled={disabled}
      onClick={onClick}
      style={fullWidth ? { width: '100%' } : undefined}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
