import { Link } from 'react-router-dom'

function Breadcrumb({ items = [] }) {
  return (
    <nav className="breadcrumb" aria-label="İzlenen yol">
      {items.map((item, i) => {
        const isLast = i === items.length - 1
        return (
          <span key={item.label}>
            {i > 0 && <span> - </span>}
            {isLast || !item.to ? (
              <span className={isLast ? 'breadcrumb-active' : undefined}>
                {item.label}
              </span>
            ) : (
              <Link to={item.to}>{item.label}</Link>
            )}
          </span>
        )
      })}
    </nav>
  )
}

export default Breadcrumb
