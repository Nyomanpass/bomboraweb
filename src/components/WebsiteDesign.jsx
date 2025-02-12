import React from 'react';

const designStyles = [
  {
    title: "Notion-style Website",
    image: "/porto1.png", // Ganti dengan path gambar yang sesuai
  },
  {
    title: "Photography-style Website",
    image: "/porto2.png", // Ganti dengan path gambar yang sesuai
  },
  {
    title: "Glassmorphism-style Website",
    image: "/porto3.png", // Ganti dengan path gambar yang sesuai
  },
  {
    title: "Neumorphism-style Website",
    image: "/porto4.png", // Ganti dengan path gambar yang sesuai
  },
];

const WebsiteDesign = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {designStyles.map((design, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img src={design.image} alt={design.title} className="w-full h-36 object-cover"/>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebsiteDesign;
