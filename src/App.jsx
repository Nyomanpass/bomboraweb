import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Templates from './pages/Templates'
import Portofolio from './pages/portofolio'
import AboutPage from './pages/aboutPage'
import ContactPage from './pages/contactPage'
import PaketBombora from './pages/paketBombora'
import FormPemesanan from './pages/formPemesanan'
import Konsultasi from './pages/konsultasi'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/portofolio" element={<Portofolio />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/paket-bombora" element={<PaketBombora />} />
          <Route path="/form-pemesanan" element={<FormPemesanan />} />
          <Route path="/konsultasi" element={<Konsultasi />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
