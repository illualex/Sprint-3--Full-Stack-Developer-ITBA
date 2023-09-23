import '@/styles/globals.css'
import '@/styles/sidebar.css'
import '@/styles/about.css'
import '@/styles/lending.css'
import '@/styles/movement.css'
import '@/styles/price.css'
import '@/styles/profile.css'
import Footer from '@/components/footer'
import Header from '@/components/header'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
