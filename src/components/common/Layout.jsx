import Navbar from '../navbar/index'
import Footer from '../footer/index'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}