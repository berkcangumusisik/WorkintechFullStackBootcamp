
function RadioButton({ id, name, value, label, checked, onChange, ...props }) {
  return (
    <div className="size-option">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        {...props}
      />
      <label className="size-label" htmlFor={id}>
        {label}
      </label>
    </div>
  )
}

export default RadioButton
