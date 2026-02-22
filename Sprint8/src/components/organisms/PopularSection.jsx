import { useState } from 'react'
import MenuCard from '../molecules/MenuCard'

const TABS = ['Ramen', 'Pizza', 'Burger', 'French-fries', 'Fast food', 'Soft drinks']


function PopularSection({ eyebrow, title, menuItems = [] }) {
  const [activeTab, setActiveTab] = useState('Pizza')

  return (
    <section className="popular-section" aria-labelledby="popular-title">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title" id="popular-title">{title}</h2>

      <div className="menu-tabs" role="tablist" aria-label="Yemek kategorileri">
        {TABS.map((tab) => (
          <button
            key={tab}
            role="tab"
            type="button"
            className={`menu-tab${activeTab === tab ? ' active' : ''}`}
            aria-selected={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {menuItems.map((item) => (
          <MenuCard key={item.name} {...item} />
        ))}
      </div>
    </section>
  )
}

export default PopularSection
