import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
    </>
  )
}

export default MyApp
