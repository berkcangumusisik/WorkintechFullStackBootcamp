import FormField from '../molecules/FormField'
import SizeSelector from '../molecules/SizeSelector'
import ToppingOption from '../molecules/ToppingOption'
import QuantityCounter from '../molecules/QuantityCounter'
import OrderTotalBox from '../molecules/OrderTotalBox'
import Breadcrumb from '../molecules/Breadcrumb'
import Input from '../atoms/Input'
import Textarea from '../atoms/Textarea'
import Select from '../atoms/Select'
import Button from '../atoms/Button'

const SIZES = [
  { value: 'S', label: 'S' },
  { value: 'M', label: 'M' },
  { value: 'L', label: 'L' },
]

const CRUST_OPTIONS = [
  { value: '', label: 'Hamur Kalınlığı Seç' },
  { value: 'İnce', label: 'İnce' },
  { value: 'Orta', label: 'Orta' },
  { value: 'Kalın', label: 'Kalın' },
  { value: 'Süpper İnce', label: 'Süpper İnce' },
]

const TOPPINGS = [
  'Pepperoni', 'Domates', 'Biber',
  'Sosis', 'Mısır', 'Sucuk',
  'Kanada Jambonu', 'Ananas', 'Kabak',
  'Tavuk Izgara', 'Jalepeno', 'Soğan',
  'Sarımsak',
]

const MAX_TOPPINGS = 10
const MIN_TOPPINGS = 4

const BREADCRUMB_ITEMS = [
  { label: 'Anasayfa', to: '/' },
  { label: 'Seçenekler' },
  { label: 'Sipariş Oluştur' },
]

function OrderFormBody({
  pizzaName,
  basePrice,
  formData,
  errors,
  isLoading,
  networkError,
  isFormValid,
  toppingTotal,
  total,
  onChange,
  onCheckbox,
  onAdet,
  onSubmit,
}) {
  const toppingCount = formData.malzemeler.length

  return (
    <main className="order-page">
      {/* Yuvarlak pizza görseli */}
      <div className="order-pizza-img-wrap" aria-hidden="true">
        <img
          src="/images/iteration-2-images/pictures/food-1.png"
          alt=""
          className="order-pizza-img"
        />
      </div>

      <div className="order-content">
        <Breadcrumb items={BREADCRUMB_ITEMS} />

        <h1 className="order-pizza-name">{pizzaName}</h1>
        <div className="order-price-row">
          <span className="order-price">{basePrice.toFixed(2)}₺</span>
          <span className="order-rating">⭐ 4.9</span>
          <span className="order-reviews">(200)</span>
        </div>
        <p className="order-desc">
          Frontend Dev olarak hala position:absolute kullananlar bu çok acı pizza tam sana
          göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış,
          daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen,
          genellikle yuvarlak, düzleştirilmiş mayalı buğday hamurdan oluşan İtalyan
          kökenli lezzetli bir yemektir.
        </p>

        <form
          className="order-form"
          onSubmit={onSubmit}
          noValidate
          aria-label="Pizza sipariş formu"
        >
          {/* Ağ hatası */}
          {networkError && (
            <div className="alert-error" role="alert">
              ⚠️ {networkError}
            </div>
          )}

          {/* İsim + Hamur */}
          <div className="form-row-two">
            <FormField
              label="İsim"
              required
              error={errors.isim}
              errorId="isim-error"
            >
              <Input
                id="isim"
                name="isim"
                placeholder="Adınızı girin"
                value={formData.isim}
                onChange={onChange}
                hasError={!!errors.isim}
                aria-describedby={errors.isim ? 'isim-error' : undefined}
                data-testid="isim-input"
                required
              />
            </FormField>

            <FormField label="Hamur Seç" required>
              <Select
                id="hamur"
                name="hamur"
                value={formData.hamur}
                onChange={onChange}
                options={CRUST_OPTIONS}
                data-testid="hamur-select"
              />
            </FormField>
          </div>

          {/* Boyut */}
          <SizeSelector
            sizes={SIZES}
            selected={formData.boyut}
            onChange={onChange}
          />

          {/* Malzemeler */}
          <fieldset className="form-group">
            <legend className="form-label">Ek Malzemeler</legend>
            <p className="form-hint">
              En Fazla {MAX_TOPPINGS} malzeme seçebilirsiniz. 5₺
            </p>
            <div className="topping-grid">
              {TOPPINGS.map((topping) => {
                const isChecked = formData.malzemeler.includes(topping)
                const isDisabled = !isChecked && toppingCount >= MAX_TOPPINGS
                return (
                  <ToppingOption
                    key={topping}
                    name={topping}
                    checked={isChecked}
                    disabled={isDisabled}
                    onChange={() => onCheckbox(topping)}
                  />
                )
              })}
            </div>
          </fieldset>

          {/* Sipariş Notu */}
          <FormField label="Sipariş Notu">
            <Textarea
              id="notlar"
              name="notlar"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              value={formData.notlar}
              onChange={onChange}
              data-testid="notlar-input"
            />
          </FormField>

          {/* Alt kısım */}
          <div className="order-footer">
            <hr className="order-divider" />
            <div className="order-bottom">
              <QuantityCounter
                value={formData.adet}
                onDecrement={() => onAdet(-1)}
                onIncrement={() => onAdet(1)}
              />
              <OrderTotalBox
                selectionTotal={toppingTotal}
                grandTotal={total}
                variant="form"
              />
            </div>
            <Button
              variant="submit"
              type="submit"
              disabled={!isFormValid || isLoading}
              fullWidth
              data-testid="submit-btn"
              aria-disabled={!isFormValid || isLoading}
            >
              {isLoading ? 'Gönderiliyor...' : 'SİPARİŞ VER'}
            </Button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default OrderFormBody
