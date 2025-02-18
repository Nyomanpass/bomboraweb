import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const AboutPage = () => {
      return (
            <>
                  <Navbar />
                  <div className='bg-bombora-300 h-max pt-32 pb-24 px-6 md:px-12 lg:px-14 xl:px-28 text-bombora-100 font-worksans flex flex-col lg:flex-row justify-between items-center gap-12'>
                        <div className='order-2 lg:order-1 lg:w-[50%]'>
                              <p className='text-lg font-medium'>tentang Kami</p>
                              <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 '>Partner Terbaik untuk Kesuksesan <span className='text-bombora-600'>Bisnis Anda</span></h1>
                              <p className='text-pretty  md:text-lg mt-10'>Di Bombora, kami percaya bahwa setiap bisnis punya potensi untuk sukses melalui dunia digital. Dengan misi sederhana kami: membangun website dan solusi digital yang tidak hanya keren dilihat, tapi juga bantu anda mencapai tujuan bisnis yang anda inginkan. Mulai dari peningkatan penjualan, perluas jangkauan pasar, hingga meningkatkan branding anda. Jadi, jangan ragu untuk bergabung bersama kami</p>
                        </div>
                        <div className='order-1 lg:order-2 lg:w-[45%]'>
                              <img src='/tentang_kami.webp' alt='about bombora' className='w-[90%] mx-auto mt-10' />
                        </div>
                  </div>
                  <Footer />
            </>
      );
};

export default AboutPage;