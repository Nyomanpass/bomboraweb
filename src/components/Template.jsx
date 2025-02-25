import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Portofolio = () => {

  const [images, setImages] = useState([]);
  let base_url = "http://localhost:8888/bomboratemplates/";

  const getTemplates = async () => {
    let url = `${base_url}api/template.php?request=filter&page=1&limit=8`
    try{
      const response = await axios.get(url)
      setImages(response.data.data);
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    getTemplates();
  },[])



  return (
    <div className="bg-bombora-300 text-bombora-100 pb-32 pt-16 font-worksans">
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
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={`${base_url}/image/${image.thumbnail}`} alt={`Portofolio ${index + 1}`} className="w-full aspect-video rounded-xl" />
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
