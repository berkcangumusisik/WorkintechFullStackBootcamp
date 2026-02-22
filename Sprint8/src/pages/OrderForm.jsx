import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import DefaultLayout from '../components/templates/DefaultLayout'
import OrderFormBody from '../components/organisms/OrderFormBody'

const PIZZA_NAME = 'Position Absolute Acı Pizza'
const BASE_PRICE = 85.5
const TOPPING_PRICE = 5
const MIN_TOPPINGS = 4
const MAX_TOPPINGS = 10

function OrderForm({ setOrderData }) {
  const history = useHistory()

  const [formData, setFormData] = useState({
    isim: '',
    boyut: '',
    hamur: '',
    malzemeler: [],
    notlar: '',
    adet: 1,
  })

  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [networkError, setNetworkError] = useState(null)

  const validateField = (name, value) => {
    let msg = ''
    if (name === 'isim' && value.trim().length > 0 && value.trim().length < 3) {
      msg = 'İsim en az 3 karakter olmalıdır.'
    }
    setErrors((prev) => ({ ...prev, [name]: msg }))
  }

  const isFormValid =
    formData.isim.trim().length >= 3 &&
    formData.boyut !== '' &&
    formData.malzemeler.length >= MIN_TOPPINGS &&
    formData.malzemeler.length <= MAX_TOPPINGS

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    validateField(name, value)
  }

  const handleCheckbox = (topping) => {
    setFormData((prev) => {
      const isSelected = prev.malzemeler.includes(topping)
      if (!isSelected && prev.malzemeler.length >= MAX_TOPPINGS) return prev
      const updated = isSelected
        ? prev.malzemeler.filter((t) => t !== topping)
        : [...prev.malzemeler, topping]
      return { ...prev, malzemeler: updated }
    })
  }

  const handleAdet = (delta) => {
    setFormData((prev) => ({ ...prev, adet: Math.max(1, prev.adet + delta) }))
  }

  const toppingTotal = formData.malzemeler.length * TOPPING_PRICE
  const total = (BASE_PRICE + toppingTotal) * formData.adet

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isFormValid) return

    setIsLoading(true)
    setNetworkError(null)

    const payload = {
      isim: formData.isim,
      boyut: formData.boyut,
      hamur: formData.hamur,
      malzemeler: formData.malzemeler,
      notlar: formData.notlar,
      adet: formData.adet,
      pizzaAdi: PIZZA_NAME,
      toplam: total,
    }

    const mockResponse = {
      ...payload,
      id: Math.floor(Math.random() * 900) + 100,
      createdAt: new Date().toISOString(),
    }

    try {
      const response = await axios.post(
        'https://reqres.in/api/pizza',
        payload,
        { headers: { 'x-api-key': 'reqres-free-v1' } }
      )
      console.log('Sipariş yanıtı:', response.data)
      setOrderData({ ...response.data, ...payload })
      history.push('/success')
    } catch (err) {
      const isApiKeyError =
        err.response?.data?.error === 'missing_api_key' ||
        err.response?.status === 401

      if (isApiKeyError) {
        console.warn('reqres.in API key gerekiyor. Yanıt simüle ediliyor.')
        console.log('Sipariş yanıtı (simüle):', mockResponse)
        setOrderData(mockResponse)
        history.push('/success')
      } else {
        setNetworkError(
          'Sipariş gönderilemedi. İnternet bağlantınızı kontrol edip tekrar deneyin.'
        )
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <DefaultLayout>
      <OrderFormBody
        pizzaName={PIZZA_NAME}
        basePrice={BASE_PRICE}
        formData={formData}
        errors={errors}
        isLoading={isLoading}
        networkError={networkError}
        isFormValid={isFormValid}
        toppingTotal={toppingTotal}
        total={total}
        onChange={handleChange}
        onCheckbox={handleCheckbox}
        onAdet={handleAdet}
        onSubmit={handleSubmit}
      />
    </DefaultLayout>
  )
}

export default OrderForm
