
function Select({ id, name, value, onChange, options = [], ...props }) {
  return (
    <select
      id={id}
      name={name}
      className="form-select"
      value={value}
      onChange={onChange}
      {...props}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  )
}

export default Select
