import React from 'react'
import gambar2 from '/logo1.png'

const Footer = () => {
  return (
    <>
      <div className="footer md:pt-32 md:pb-20 pt-20 pb-14 bg-footer text-[#bbb] text-[.9rem] mt-20">
      <div className="container">
          <div className="grid gap-5 md:grid-cols-2 md:gap-10 lg:flex md:justify-between">
            <div className="header max-w-sm">
              <div className="flex items-center gap-3">
                <img className='w-[130px] md:w-[200px]' src={gambar2} alt="Bombora - Ahli Pengembangan Website" /> 
              </div>
              <p className="mt-3 md:text-[.9rem] text-[.9rem]">
                BomboraWeb adalah perusahaan pengembang perangkat lunak yang menyediakan layanan pembuatan website, aplikasi mobile, dan desktop untuk bisnis B2B dan B2C.
              </p>
            </div>

            <div className="lg:max-w-[250px]">
              <h1 className="text-white md:text-xl text-lg mb-3">Hubungi Kami</h1>
              <p className="mb-2">Jimbaran, Kuta Selatan, Badung</p>
              <p className="flex items-center mb-2 gap-2">
                <ion-icon name="mail" className="text-white text-xl"></ion-icon>
                <a href="mailto:info@bomboraweb.com" target="_blank" rel="noopener noreferrer">info@bomboraweb.com</a>
              </p>
              <a href="https://wa.me/6282114300284?text=Saya%20tertarik%20dengan%20layanan%20Anda.%20Bisakah%20Anda%20memberikan%20informasi%20lebih%20lanjut?" target="_blank" rel="noopener noreferrer">
                <p className="flex items-center mb-2 gap-2">
                  <ion-icon name="call" className="text-white text-xl"></ion-icon>
                  +6282114300284
                </p>
              </a>
            </div>

            <div className="">
              <h1 className="text-white md:text-xl text-lg mb-3">Tautan Cepat</h1>
              <ul className=''>
                <li><a href="/#home">Beranda</a></li>
                <li><a href="/#about">Tentang Kami</a></li>
                <li><a href="/#gallery">Portofolio</a></li>
                <li><a href="/#contact">Kontak</a></li>
              </ul>
            </div>

            <div className="">
              <h1 className="text-white md:text-xl text-lg mb-3">Mengapa Memilih Kami?</h1>
              <ul className="list-disc ml-6">
                <li>Desain Kustom</li>
                <li>Teknologi Terbaru</li>
                <li>Tim Berpengalaman</li>
                <li>Dukungan Personal</li>
                <li>Harga Transparan</li>
              </ul>
            </div>
            
          </div>
          <p className="text-center md:mt-28 mt-20">© 2025 <span className="text-lightgreen">bomboraweb</span>. All Rights Reserved.</p>
        </div>

      </div>
    </>
  )
}

export default Footer
