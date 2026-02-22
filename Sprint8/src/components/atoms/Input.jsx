
function Input({
  id,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  hasError = false,
  required = false,
  ...props
}) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      className={`form-input${hasError ? ' error' : ''}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      aria-invalid={hasError || undefined}
      {...props}
    />
  )
}

export default Input
