import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Portofolio = () => {
  const portoImage = [
    "/porto3.webp",
    "/porto5.webp",
    "/porto6.webp",
    "/porto7.webp",
    "/porto8.webp",
    "/porto9.webp",
    "/porto11.webp",
    "/porto12.webp",
  ];

  return (
    <div className="bg-bombora-300 text-bombora-100 pb-32 mt-24 font-worksans">
      <div className="px-6 md:px-12 lg:px-14 xl:px-28 pt-24 mb-16 md:mb-20 lg:mb-24">
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-center'>
          Template Website yang Sesuai dengan Gaya Bisnis Anda
        </h2>
        <p className='mt-4 md:mt-8 md:text-lg lg:text-xl max-w-4xl mx-auto text-center'>
          Temukan template website keren yang siap bikin bisnis Anda makin menonjol!
        </p>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay]}
      >
        {portoImage.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Portofolio ${index + 1}`} className="w-full aspect-video rounded-xl" />
          </SwiperSlide>
        ))}
      </Swiper>

      <a href="/templates" className='block w-max mx-auto bg-bombora-600 px-7 py-3 text-bombora-500 font-semibold rounded-full hover:bg-bombora-400 hover:text-bombora-100 transition duration-300 mt-14 md:text-lg '>
        Temukan Desain Lainnya
      </a>
    </div>
  );
}

export default Portofolio;
