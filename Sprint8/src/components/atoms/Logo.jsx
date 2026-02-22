import { Link } from 'react-router-dom'

const sizeStyles = {
  sm: { fontSize: '1.1rem' },
  md: { fontSize: '1.4rem' },
  lg: { fontSize: '1.8rem' },
}

function Logo({ as = 'p', to = '/', size = 'md', className = '' }) {
  const style = { ...sizeStyles[size], fontFamily: "'Barlow', sans-serif", fontWeight: 700, letterSpacing: '0.02em' }

  if (as === 'link') {
    return (
      <Link to={to} className={`header-brand ${className}`.trim()} style={style}>
        Teknolojik Yemekler
      </Link>
    )
  }

  return (
    <p className={`success-brand ${className}`.trim()} style={style}>
      Teknolojik Yemekler
    </p>
  )
}

export default Logo
