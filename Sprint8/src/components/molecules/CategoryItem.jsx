
function CategoryItem({ icon, label, isActive = false, onClick }) {
  return (
    <button
      type="button"
      className={`category-item${isActive ? ' active' : ''}`}
      onClick={onClick}
      aria-pressed={isActive}
    >
      <img src={icon} alt="" aria-hidden="true" />
      <span>{label}</span>
    </button>
  )
}

export default CategoryItem
