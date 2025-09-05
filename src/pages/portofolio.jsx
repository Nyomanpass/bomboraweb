import Navbar2 from "../components/Navbar2";
import PortoCard from "../components/portoCard";
import Footer from "../components/Footer";


const Portofolio = () => {
      const porto = [
            {
                  linktoWeb: "jrprintshopbali.com",
                  title: "JR Design Print Shop",
                  image: "/JrDesign.png",
                  hoverImage: "/logoJrDesign.png",
            },
            {
                  linktoWeb: "yankartagym.com",
                  title: "Yankarta GYM",
                  image: "/yankartaGym.png",
                  hoverImage: "/logoYankartaGym.png",
            },
            {
                  linktoWeb: "davillamanagement.com",
                  title: "Villa Management",
                  image: "/villaManagement.png",
                  hoverImage: "/logoVillaManagement.png",
            },
            // tunggu launching
            // {
            //       linktoWeb: "infusionbali.com",
            //       title: "Infusion Bali",
            //       image: "/infusionBali.png",
            //       hoverImage: "/logoInfusionBali.png",
            // },
            {
                  linktoWeb: "uluwatutempleguide.id",
                  title: "Uluwatu Temple Guide",
                  image: "/uluwatuTempleGuide.png",
                  hoverImage: "/logoUluwatuTemple.png",
            },
            {
                  linktoWeb: "lawyerdibali.com",
                  title: "Lawyer Bali",
                  image: "/lawyerBali.png",
                  hoverImage: "/logoLawyer.png",
            },
            {
                  linktoWeb: "arifinbatik.com",
                  title: "Arifin Batik",
                  image: "/arifinBatik.webp",
                  hoverImage: "/logoArifinBatik.webp",
            },
            {
                  linktoWeb: "nadiaartshop.com",
                  title: "Nadia Art Shop",
                  image: "/nadiaShop.webp",
                  hoverImage: "/logoNadiaShop.webp",
            },
            {
                  linktoWeb: "baritotehnik.com",
                  title: "Barito Tehnik",
                  image: "/baritoTehnik.webp",
                  hoverImage: "/logoBaritoTehnik.webp",
            },


      ]
      return (
            <>
                  <Navbar2 />
                  <div className='bg-bombora-100 py-24 md:py-28 lg:py-32 font-worksans px-6 md:px-12 lg:px-14 xl:px-28'>
                        <div className="my-12 lg:mb-28">
                              <p className="text-center text-lg md:text-2xl font-semibold text-bombora-600 mb-2">Portofolio</p>
                              <h1 className="text-center text-3xl md:text-4xl font-semibold text-bombora-400 ">Karya Terbaik Kami untuk Bisnis Terbaik Anda </h1>
                        </div>
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 lg:gap-8">
                              {
                                    porto.map((item, index) => {
                                          return (
                                                <PortoCard key={index} title={item.title} image={item.image} hoverImage={item.hoverImage} linktoWeb={item.linktoWeb} icon={"link"} />
                                          )
                                    })
                              }
                        </div>
                  </div>
                  <Footer />
            </>
      )
}

export default Portofolio;