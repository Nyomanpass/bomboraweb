import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Portofolio from "../components/Portofolio"
import PriceList from "../components/PriceList"
import Step from "../components/Step"
import Services from "../components/Services"
import Faqitems from "../components/Faqitems"
import Footer from "../components/Footer"


const Home = () => {
  return (
    <>
        <Navbar color="text-white" gambar="/logo1.png"/>
        <Hero id="home"/>
        <About id="about"/>
        <PriceList/>
        <Step/>
        <Portofolio/>
        <Services/>
        <Faqitems/>
        <Footer/>
    </>
  )
}

export default Home