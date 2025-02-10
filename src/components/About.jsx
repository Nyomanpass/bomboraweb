import React from 'react';


const About = () => {
  return (
    <>
      <div className="container text-text-color pt-36">
        <h2 className="md:text-4xl text-2xl line-clamp-6 max-w-xl font-semibold" style={{ lineHeight: '1.30' }}>
            <span className="text-text-color">Solusi Digital Terlengkap, <br/> Semua dalam</span>  
            <span className="text-yellow-500"> Satu Platform!</span>
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-24 mt-14"
        >
          <div className="border-t border-slate-900 py-6">
            <h1 className='font-bold mb-2 text-xl md:text-2xl'>Website Development</h1>
            <p className="text-sm md:text-lg">Situs web khusus dan profesional yang meningkatkan kehadiran online Anda, mendorong keterlibatan, dan mengubah pengunjung menjadi pelanggan setia.</p>
          </div>
          <div className="border-t border-slate-900 py-6">
            <h1 className='font-bold mb-2 text-xl md:text-2xl'>Marketing Design:</h1>
            <p className="text-sm md:text-lg">Desain kreatif yang menarik perhatian, mengomunikasikan pesan Anda, dan meningkatkan penjualan dengan menyelaraskan dengan strategi merek Anda.</p>
          </div>
          <div className="border-t border-slate-900 py-6">
            <h1 className='font-bold mb-2 text-xl md:text-2xl'>Grow online</h1>
            <p className="text-sm md:text-lg">Perluas kehadiran online Anda dengan strategi bertarget yang menarik, melibatkan, dan mengubah prospek menjadi pelanggan setia, sehingga memastikan pertumbuhan bisnis yang berkelanjutan.</p>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <div
          className="container text-text-color grid grid-cols-1 md:grid-cols-2 gap-4 py-24"
        >
          <div className="">
            
            <h1
              className='text-2xl md:text-4xl mb-4 font-semibold'
              style={{ lineHeight: '1.30' }}
            >
           Dirancang dengan baik dan dikembangkan dengan sepenuh hati
            </h1>
            <p className="text-sm md:text-lg">
            Perencanaan yang matang membuat kami percaya diri, dikembangkan dengan praktik terbaik sehingga proyek dapat dipertahankan. Kami selalu menguji proyek sebelum dikirim
            </p>
            
          </div>

          <div className="grid grid-cols-2 items-center justify-center">
            <img
              className=''
              src="/about3.png"
              alt="bomboraweb about"
            />
            <img
              className=''
              src="about4.png"
              alt="bombora web about"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
