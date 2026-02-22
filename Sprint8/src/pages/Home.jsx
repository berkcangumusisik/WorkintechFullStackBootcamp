import DefaultLayout from '../components/templates/DefaultLayout'
import HeroSection from '../components/organisms/HeroSection'
import CategoriesBar from '../components/organisms/CategoriesBar'
import PromoSection from '../components/organisms/PromoSection'
import PopularSection from '../components/organisms/PopularSection'
import heroBanner from '/images/iteration-1-images/home-banner.png'

const CATEGORIES = [
  { icon: '/images/iteration-2-images/icons/1.svg', label: 'Yeni Kase' },
  { icon: '/images/iteration-2-images/icons/2.svg', label: 'Pizza' },
  { icon: '/images/iteration-2-images/icons/3.svg', label: 'Burger' },
  { icon: '/images/iteration-2-images/icons/4.svg', label: 'Kızartmalar' },
  { icon: '/images/iteration-2-images/icons/5.svg', label: 'Fast food' },
  { icon: '/images/iteration-2-images/icons/6.svg', label: 'Sıcak İçecek' },
]

const MAIN_PROMO = {
  title: 'Özel<br/>Lezzetus',
  subtitle: 'Position Absolute Acı Burger',
  img: '/images/iteration-2-images/cta/kart-1.png',
  imgAlt: 'Özel Lezzetus',
}

const STACK_PROMOS = [
  {
    title: 'Hackathlon<br/>Burger Menü',
    img: '/images/iteration-2-images/cta/kart-2.png',
    imgAlt: 'Hackathlon Burger',
  },
  {
    title: '<span style="color:#FDC913">Çoooook</span> hızlı<br/>npm gibi kurye',
    img: '/images/iteration-2-images/cta/kart-3.png',
    imgAlt: 'Hızlı kurye',
  },
]

const MENU_ITEMS = [
  {
    img: '/images/iteration-2-images/pictures/food-1.png',
    name: 'Terminal Pizza',
    rating: '4.9',
    reviews: '(200)',
    price: '85₺',
  },
  {
    img: '/images/iteration-2-images/pictures/food-2.png',
    name: 'Position Absolute Acı Pizza',
    rating: '4.8',
    reviews: '(185)',
    price: '80₺',
  },
  {
    img: '/images/iteration-2-images/pictures/food-3.png',
    name: 'useEffect Tavuklu Burger',
    rating: '4.8',
    reviews: '(422)',
    price: '75₺',
  },
]

function Home() {
  return (
    <DefaultLayout>
      <HeroSection
        eyebrow="fırsatı kaçırma"
        heading={<>Kod Açıktırır<br />Pizza, Doyurur</>}
        imgSrc={heroBanner}
        imgAlt="Nefis pizza"
        orderPath="/order"
      />
      <CategoriesBar categories={CATEGORIES} />
      <PromoSection mainPromo={MAIN_PROMO} stackPromos={STACK_PROMOS} />
      <PopularSection
        eyebrow="en çok paketlenen menüler"
        title="Acıktıran Kodlara Doyuran Lezzetler"
        menuItems={MENU_ITEMS}
      />
    </DefaultLayout>
  )
}

export default Home
