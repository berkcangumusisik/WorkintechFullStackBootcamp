import { useState } from 'react'
import CategoryItem from '../molecules/CategoryItem'

function CategoriesBar({ categories = [] }) {
  const [active, setActive] = useState(categories[0]?.label ?? '')

  return (
    <nav className="categories-bar" aria-label="Yemek kategorileri">
      {categories.map((cat) => (
        <CategoryItem
          key={cat.label}
          icon={cat.icon}
          label={cat.label}
          isActive={active === cat.label}
          onClick={() => setActive(cat.label)}
        />
      ))}
    </nav>
  )
}

export default CategoriesBar
