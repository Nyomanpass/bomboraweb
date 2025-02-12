import React from "react";
import Navbar from "../components/Navbar";
import WebsiteDesign from "../components/WebsiteDesign";
import StatsSection from "../components/StatsSection";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Templates = () => {

  const cards = [
    {
      image: "/porto6.png",
      title: "Marathon Running - Pushing The Spirit",
      likes: 4,
    },
    {
      image: "/porto9.png",
      title: "The Best & Freshest Bread in Indonesia",
      likes: 22,
    },
    {
      image: "/porto11.png",
      title: "Innovative Packaging for Your Business",
      likes: 9,
    },
    {
      image: "/porto2.png",
      title: "Marathon Running - Pushing The Spirit",
      likes: 4,
    },
    {
      image: "/porto7.png",
      title: "The Best & Freshest Bread in Indonesia",
      likes: 22,
    },
    {
      image: "/porto3.png",
      title: "Innovative Packaging for Your Business",
      likes: 9,
    },
    {
      image: "/porto4.png",
      title: "Marathon Running - Pushing The Spirit",
      likes: 4,
    },
    {
      image: "/porto12.png",
      title: "The Best & Freshest Bread in Indonesia",
      likes: 22,
    },
    {
      image: "/porto5.png",
      title: "Innovative Packaging for Your Business",
      likes: 9,
    },
  ];

  return (
    <>
      <Navbar color="text-white" gambar="/logo1.png"/>
      <div className="relative bg-customLight text-white h-auto pb-28 2xl:pb-60 w-full flex items-center py-32 md:pt-40 2xl:pt-52">
        {/* Background Image */}
       

        <div className="relative container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl ">Solusi Desain Cepat & Berkualitas</h1>
          <p className="text-lg mt-4">Temukan berbagai template dan elemen kreatif untuk proyek desain Anda</p>
          
          {/* Search Bar */}
          <div className="mt-6 flex justify-center">
            <input
              type="text"
              placeholder="Search all templates"
              className="w-2/3 md:w-1/2 px-4 py-3 text-black rounded-l-lg focus:outline-none"
            />
            <button className="bg-button px-6 py-3 rounded-r-lg text-white">Search</button>
          </div>
        </div>
      </div>


      <div className="relative bg-white container py-4 px-2 mt-[-1rem] mx-auto shadow-xl rounded-xl w-full z-20">
        <WebsiteDesign/>
      </div>


      {/* Categories */}
      <div className="container mx-auto py-2 mt-10">
      <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "Editors Choice", "Personal", "Notion Templates", "Online Course", "Ebook", "Coaching", "Prox"].map(
            (category) => (
              <button
                key={category}
                className="px-7 py-5 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-100 transition-colors"
              >
                {category}
              </button>
            )
          )}
        </div>
      </div>

      <div className="text-center mt-10">
            <h2 className="text-2xl md:text-4xl font-semibold">
            <span className="text-text-color">Favorite Pembuatan </span>
            <span className="text-yellow-500">Website</span>
            </h2>
            <p className="text-text-color text-sm md:text-xl mt-5 max-w-2xl mx-auto mb-14">
            Jelajahi beragam template terbaik dari bomboraweb
            </p>
        </div>
      
      <div className="grid container grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {cards.map((card, index) => (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden border">
          <img src={card.image} alt={card.title} className="w-full h-56 object-cover" />
              <div className="flex justify-between items-center p-4">
                <div className="">
                <h3 className="text-lg text-text-color">{card.title}</h3>
               
                </div>
                <div className="flex gap-2">
                  <button className="border w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-200">
                    <ion-icon name="checkmark-outline"></ion-icon>
                  </button>
                  <a href="http://localhost:8888/bomboratemplates/templates/template1/" className="border w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-200">
                    <ion-icon name="eye-outline"></ion-icon>
                  </a>
                </div>
              </div>
        </div>
        ))}
      </div>
      
      <StatsSection/>
      <div className="bg-gradient-to-bl container bg-customDark rounded-2xl border-box py-14 px-5 md:px-28 mt-32">
            <div className="grid text-center grid-cols-1 gap-10 justify-between">
              <div>
               
                <h2 className="text-2xl md:text-4xl line-clamp-6 font-semibold" style={{ lineHeight: '1.30' }}>
                    <span className="text-white">Mari Diskusi Proyek & Bisnis Anda Dengan Kami</span>  
                </h2>
                <p className='mt-8 font-inter md:text-lg text-sm md:text-md text-slate-200'>
                  Website profesional adalah aset berharga bagi bisnis Anda. Percayakan kepada kami untuk menciptakan website profesional dengan hasil terbaik.
                </p>
                <Link to={`/templates/list`} className='font-inter text-md md:text-lg mt-10 bg-lightgreen hover:bg-customLight hover:text-white text-white duration-200 inline-block px-8 py-3 rounded-full border border-lightgreen hover:border-white'>
                  Mulai Sekarang
                </Link >
              </div>

             
            </div>
          </div>
          
      <Footer/>
      
    </>
  );
};

export default Templates;
