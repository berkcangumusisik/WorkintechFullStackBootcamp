function Checkbox({ id, label, checked, disabled = false, onChange, ...props }) {
  return (
    <div className="topping-option">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        {...props}
      />
      <label className="topping-label" htmlFor={id}>
        {label}
      </label>
    </div>
  )
}

export default Checkbox
