import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <>
      <div className="bg-bombora-300 text-bombora-100 py-10 md:py-14 mt-24 lg:mt-36 font-worksans xs:w-[90%] md:w-[70%] lg:w-[85%] mx-auto xs:rounded-2xl flex flex-col items-center px-6 md:px-12 lg:px-14 xl:px-28 text-center">
        <h3 className="text-3xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-5">Perlu Bantuan?</h3>
        <p className="md:text-lg xl:text-xl mb-9 md:mb-12 font-medium">Jangan ragu untuk menghubungi kami setiap hari!</p>
        <a href="/konsultasi" className="block w-max bg-bombora-600 px-7 md:px-8 lg:px-14 xl:px-16 py-3 lg:py-4 lg:text-lg rounded-lg text-bombora-500 font-semibold hover:bg-bombora-400 hover:text-bombora-100 transition-all duration-300">Hubungi Sekarang</a>
      </div>
      <div className="mt-10 px-6 md:px-12 lg:px-14 xl:px-28 bg-bombora-400 font-worksans text-bombora-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-12 py-14 md:pt-24">
          <div className=''>
            <img src="/logo1.png" alt="white logo bombora" className="w-48" />
            <p className='text-sm mt-4 text-pretty'>penyedia jasa pembuatan website yang dapat membantu bisnis anda semakin berkembang. Dari usaha kecil hingga bisnis besar, kami siap bantu bisnis Anda go digital.</p>
            <div className='flex gap-3 mt-6 text-bombora-100'>
              <a href="https://www.instagram.com/bomboraweb?igsh=ZGk3ajR2cm53aHl6" target='blank'>
                <FontAwesomeIcon icon={faInstagram} className='text-lg p-2 border border-bombora-100 rounded-lg hover:bg-bombora-500 hover:border-none transition-all duration-300' />
              </a>
              <a href="https://www.tiktok.com/@bomboraweb?_t=ZS-8tvnCJtAdwW&_r=1" target='blank'>
                <FontAwesomeIcon icon={faTiktok} className='text-lg p-2 border border-bombora-100 rounded-lg hover:bg-bombora-500 hover:border-none transition-all duration-300' />
              </a>
            </div>
          </div>
          <div className='lg:justify-self-center'>
            <h2 className='md:text-lg font-semibold mt-10 md:mt-0 '>
              Layanan
            </h2>
            <ul className="mt-4">
              <li className="mt-2">
                <a href="/paket-bombora">Paket Bombora</a>
              </li>
              <li className="mt-2">
                <a href="/portofolio">Klien Kami</a>
              </li>
              <li className="mt-2">
                <a href="/about">Tentang Kami</a>
              </li>
              <li className="mt-2">
                <a href="/contact">Hubungi Kami</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='md:text-lg font-semibold mt-10 md:mt-0'>
              Kenapa Pilih Kami?
            </h2>
            <ul className="mt-4 list-disc ml-4">
              <li className="mt-2">Desain Custom</li>
              <li className="mt-2">Harga Terjangkau</li>
              <li className="mt-2">Tim Berpengalaman</li>
              <li className="mt-2">Teknologi Terbaru</li>
            </ul>
          </div>
          <div>
            <h2 className='md:text-lg font-semibold mt-10 md:mt-0'>
              Kontak
            </h2>
            <ul className="mt-4">
              <li className="mt-2">Jimbaran, Kuta Selatan, Bali</li>
              <li className="mt-3">
                <p>
                  <FontAwesomeIcon icon={faEnvelope} className='mr-3 text-lg' />
                  info@bomboraweb.com
                </p>
              </li>
              <li className="mt-2">
                <p>
                  <FontAwesomeIcon icon={faPhone} className='mr-3 ' />
                  (+62) 821 2356 4667
                </p>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center text-xs pb-5 pt-6">© 2025 <span className="text-lightgreen">bomboraweb</span>. All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer
