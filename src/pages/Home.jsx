import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Why from "../components/why"
import PriceList from "../components/PriceList"
import Step from "../components/Step"
import Portofolio from "../components/Template"
// import Services from "../components/Services"
// import Faqitems from "../components/Faqitems"
import Faq from "../components/Faq"
import Footer from "../components/Footer"
const Home = () => {
  return (
    <>
      <Navbar color="text-white" gambar="/logo1.png" />
      <Hero id="home" />
      <About id="about" />
      <Why />
      <PriceList />
      <Step />
      <Portofolio />
      {/* <Services /> */}
      {/* <Faqitems /> */}
      <Faq />
      <Footer />
    </>
  )
}

export default Home