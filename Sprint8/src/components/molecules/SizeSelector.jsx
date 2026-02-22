import RadioButton from '../atoms/RadioButton'


function SizeSelector({ sizes, selected, onChange }) {
  return (
    <fieldset className="form-group">
      <legend className="form-label">
        Boyut Seç <span className="required">*</span>
      </legend>
      <div className="size-group" role="radiogroup">
        {sizes.map((s) => (
          <RadioButton
            key={s.value}
            id={`boyut-${s.value}`}
            name="boyut"
            value={s.value}
            label={s.label}
            checked={selected === s.value}
            onChange={onChange}
            data-testid={`boyut-${s.value}`}
            aria-label={`Boyut ${s.label}`}
          />
        ))}
      </div>
    </fieldset>
  )
}

export default SizeSelector
