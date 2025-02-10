import React from 'react';
import word from '/world.png';




const services = [
  {
    title: "Website Development",
    description: "Desain dan fitur website yang disesuaikan dengan kebutuhan bisnis Anda. Mulai dari website perusahaan, portofolio, hingga platform e-commerce.",
    icon: <ion-icon name="globe-outline"></ion-icon>
  },
  {
    title: "Mobile App Development",
    description: "Membuat aplikasi mobile yang menarik dan fungsional untuk platform iOS dan Android.",
    icon:<ion-icon name="phone-portrait-outline"></ion-icon>
  
  },
  {
    title: "Graphic Design",
    description: "Kami menyediakan layanan desain grafis, termasuk pembuatan logo, brosur, desain media sosial, serta desain UI/UX.",
    icon: <ion-icon name="color-palette-outline"></ion-icon>
  },
  {
    title: "Digital Marketing",
    description: "Strategi pemasaran digital yang mencakup iklan media sosial, Google Ads, dan kampanye email marketing.",
    icon: <ion-icon name="bar-chart-outline"></ion-icon>
  
  },
  {
    title: "Social Media Management",
    description: "Membantu Anda mengelola akun media sosial untuk meningkatkan kesadaran merek dan keterlibatan audiens.",
    icon: <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
  
  },
  {
    title: "Pemeliharaan dan Pembaruan",
    description: "Layanan pemeliharaan dan pembaruan rutin untuk memastikan website dan aplikasi Anda tetap berjalan dengan optimal.",
    icon:<ion-icon name="hammer-outline"></ion-icon>
  }
];

const Services = () => {


  return (
    <>
      <div className="py-24 container">

        <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-semibold">
            <span className="text-text-color">Solusi Terbaik unutk Kebutuhan </span>
            <span className="text-yellow-500">Bisnis Anda</span>
            </h2>
            <p className="text-text-color text-sm md:text-xl mt-5 max-w-2xl mx-auto mb-36">
            Kami menyediakan solusi terbaik yang dirancang khusus untuk memenuhi kebutuhan bisnis Anda. 
            </p>
        </div>
          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg p-6"
        
                >
                  <div className="flex items-center justify-center h-14 w-14 md:h-20 md:w-20 rounded-md bg-customLight text-white mb-4">
                    <span className="text-3xl md:text-5xl">{service.icon}</span>
                  </div>
                  <h3 className=" text-xl md:text-2xl font-semibold leading-6  text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-sm md:text-lg text-gray-500">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-bl from-[#a7e6ed] to-customLight rounded-2xl border-box py-20 px-5 md:px-32 mt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between">
              <div>
               
                <h2 className="text-2xl md:text-4xl line-clamp-6 max-w-xl font-semibold" style={{ lineHeight: '1.30' }}>
                    <span className="text-white">Mari Diskusi Proyek & Bisnis Anda Dengan Kami</span>  
                </h2>
                <p className='mt-8 font-inter md:text-lg text-sm md:text-md text-slate-200'>
                  Website profesional adalah aset berharga bagi bisnis Anda. Percayakan kepada kami untuk menciptakan website profesional dengan hasil terbaik.
                </p>
                <button className='font-inter text-md md:text-lg mt-10 bg-lightgreen hover:bg-customLight hover:text-white text-white duration-200 inline-block px-8 py-3 rounded-full border border-lightgreen hover:border-white'>
                  Mulai Sekarang
                </button>
              </div>

              <div className="flex justify-center">
                <img  className='w-[220px] md:w-[300px]' src={word} alt="" />
              </div>
            </div>
          </div>
        </div>

       
    </>
  );
};


export default Services;
