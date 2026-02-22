import Checkbox from '../atoms/Checkbox'

function ToppingOption({ name, checked, disabled, onChange }) {
  return (
    <Checkbox
      id={`malzeme-${name}`}
      label={name}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
      data-testid={`malzeme-${name}`}
      aria-label={name}
    />
  )
}

export default ToppingOption
