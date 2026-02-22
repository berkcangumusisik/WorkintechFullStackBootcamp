import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default DefaultLayout
