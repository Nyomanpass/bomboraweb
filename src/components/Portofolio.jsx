import React from 'react';
import porto1 from '/porto9.png';
import porto2 from '/porto2.png';
import porto3 from '/porto3.png';
import porto4 from '/porto4.png';
import porto5 from '/porto5.png';
import porto6 from '/porto12.png';
import porto7 from '/porto7.png';

const Portofolio = () => {
  return (
    <>
      <div
        className="bg-customLight h-auto pt-24 pb-32"
      >
        <div className="container">
          <div className="text-center md:max-w-5xl mx-auto">
            <p
              className='font-inria font-semibold text-2xl md:text-4xl text-white'
              style={{ lineHeight: '1.30' }}
             
            >
              Template situs web yang menyiapkan Anda untuk sukses
            </p>
            <p
              className='font-inria text-[.9rem] md:text-lg text-gray-200 mt-6'
            
            >
             Temukan bagaimana solusi khusus kami telah mengubah bisnis. Dari situs web hingga pemasaran yang berdampak, pekerjaan kami membuktikannya. Biarkan hasil kami menginspirasi proyek Anda berikutnya.
            </p>
            <button
              className='font-inter font-bold text-md mt-10 mb-7 hover:bg-lightgreen hover:text-customDark duration-200 inline-block text-white px-8 py-3 rounded-full border border-white bg-button'
             
            >
              Mulai Sekarang
            </button>
          </div>
          <div
            className="overflow-x-scroll whitespace-nowrap mt-9"
          >
            <img
              className="w-[650px] h-[300px] md:h-[370px] inline-block mr-6 rounded-lg"
              src={porto5}
              alt=""
            />
            <img
              className="w-[650px] h-[300px] md:h-[370px] inline-block mr-6 rounded-lg"
              src={porto7}
              alt=""
            />
            <img
              className="w-[650px] h-[300px] md:h-[370px] inline-block mr-6 rounded-lg"
              src={porto6}
              alt=""
            />
            <img
              className="w-[650px] h-[300px] md:h-[370px] inline-block mr-6 rounded-lg"
              src={porto4}
              alt=""
            />
            <img
              className="w-[650px] h-[300px] md:h-[370px] inline-block mr-6 rounded-lg"
              src={porto3}
              alt=""
            />
            <img
              className="w-[650px] h-[300px] md:h-[370px] inline-block mr-6 rounded-lg"
              src={porto1}
              alt=""
            />
            <img
              className="w-[650px] h-[300px] md:h-[370px] inline-block mr-6 rounded-lg"
              src={porto2}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Portofolio;
