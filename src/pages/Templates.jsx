
import Navbar2 from "../components/Navbar2";
import PortoCard from "../components/portoCard";
import Footer from "../components/Footer";


const Templates = () => {

  const cards = [
    {
      image: "/porto6.webp",
      title: "Marathon Running - Pushing The Spirit",
    },
    {
      image: "/porto9.webp",
      title: "The Best & Freshest Bread in Indonesia",
    },
    {
      image: "/porto11.webp",
      title: "Innovative Packaging for Your Business",
    },
    {
      image: "/porto2.webp",
      title: "Marathon Running - Pushing The Spirit",
    },
    {
      image: "/porto7.webp",
      title: "The Best & Freshest Bread in Indonesia",
    },
    {
      image: "/porto3.webp",
      title: "Innovative Packaging for Your Business",
    },
    {
      image: "/porto4.webp",
      title: "Marathon Running - Pushing The Spirit",
    },
    {
      image: "/porto12.webp",
      title: "The Best & Freshest Bread in Indonesia",
    },
    {
      image: "/porto5.webp",
      title: "Innovative Packaging for Your Business",
    },
  ];

  return (
    <>
      <Navbar2 />
      <div className="text-bombora-500 pt-36 pb-24 md:py-32 lg:pt-48 lg:pb-32 font-worksans px-6 md:px-12 lg:px-14 xl:px-28">
        <h1 className="text-center text-3xl md:text-4xl xl:text-5xl  font-semibold text-bombora-400 lg:max-w-xl xl:max-w-3xl mx-auto">Bikin Website <span className="text-bombora-600">Gak Perlu Ribet,</span> Pilih Template Bombora Saja!</h1>
        <p className="text-center md:text-lg  mt-4 max-w-3xl mx-auto">Pilih template favorit Anda, lalu beri tahu kami bagian yang ingin disesuaikan. Kami siap bantu wujudkan website impian Anda.</p>
      </div>
      <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 lg:gap-8 mt font-worksans px-6 md:px-12 lg:px-14 xl:px-28">
        {
          cards.map((item, index) => {
            return (
              <PortoCard key={index} title={item.title} image={item.image} hoverImage={item.hoverImage} linktoWeb={item.linktoWeb} icon={"eye"} />
            )
          })
        }
      </div>



      <Footer />

    </>
  );
};

export default Templates;
