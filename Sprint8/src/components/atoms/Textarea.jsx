
function Textarea({
  id,
  name,
  value,
  onChange,
  placeholder,
  rows = 3,
  ...props
}) {
  return (
    <textarea
      id={id}
      name={name}
      className="form-textarea"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      {...props}
    />
  )
}

export default Textarea
