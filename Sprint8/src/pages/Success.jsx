import { Redirect } from 'react-router-dom'
import SuccessLayout from '../components/templates/SuccessLayout'
import Logo from '../components/atoms/Logo'
import Button from '../components/atoms/Button'
import SummaryRow from '../components/molecules/SummaryRow'
import OrderTotalBox from '../components/molecules/OrderTotalBox'


function Success({ orderData }) {
  if (!orderData) return <Redirect to="/order" />

  const { isim, boyut, hamur, malzemeler, pizzaAdi, toplam, id, createdAt } = orderData
  const selectionTotal = (malzemeler?.length ?? 0) * 5

  return (
    <SuccessLayout>
      <Logo as="p" size="md" />

      <div className="success-heading-wrap">
        <p className="success-eyebrow">lezzetin yolda</p>
        <h1 className="success-title">SİPARİŞ ALINDI</h1>
      </div>

      <hr className="success-divider" />

      {pizzaAdi && <p className="success-pizza-name">{pizzaAdi}</p>}

      <section className="success-details" aria-label="Sipariş detayları">
        <SummaryRow label="İsim" value={isim} />
        <SummaryRow label="Boyut" value={boyut} />
        <SummaryRow label="Hamur" value={hamur} />
        <SummaryRow
          label="Ek Malzemeler"
          value={malzemeler?.join(', ')}
          valueClassName="success-toppings"
        />
        {id && <SummaryRow label="Sipariş No" value={`#${id}`} />}
        {createdAt && (
          <SummaryRow
            label="Tarih"
            value={new Date(createdAt).toLocaleString('tr-TR')}
          />
        )}
      </section>

      {toplam && (
        <OrderTotalBox
          selectionTotal={selectionTotal}
          grandTotal={toplam}
          variant="success"
        />
      )}

      <Button variant="back" as="link" to="/">
        Anasayfaya Dön
      </Button>
    </SuccessLayout>
  )
}

export default Success
