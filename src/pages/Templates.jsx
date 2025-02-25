import Navbar2 from "../components/Navbar2";
import PortoCard from "../components/portoCard";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";


const Templates = () => {
  const [templates, setTemplates] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");

  const base_url = "https://template.bomboraweb.com/";

  const getTemplates = async (page, selectedCategory = "") => {
    setLoading(true);
    try {
      let url = `${base_url}api/template.php?request=filter&page=${page}&limit=6`;
      
      // Tambahkan filter kategori jika dipilih
      if (selectedCategory) url += `&category=${selectedCategory}`;
  
      const response = await axios.get(url);
      setTemplates(response.data.data);
      setTotalPages(response.data.total_pages || 1);
    } catch (error) {
      console.error("Error fetching templates:", error);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    getTemplates(currentPage, category);
  }, [currentPage, category]);
  

  const getVisiblePages = (currentPage, totalPages, maxVisible = 5) => {
    const halfRange = Math.floor(maxVisible / 2);
    let start = Math.max(1, currentPage - halfRange);
    let end = Math.min(totalPages, currentPage + halfRange);

    if (end - start + 1 < maxVisible) {
      if (start === 1) {
        end = Math.min(totalPages, start + maxVisible - 1);
      } else if (end === totalPages) {
        start = Math.max(1, end - maxVisible + 1);
      }
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <>
      <Navbar2 />
      <div className="text-bombora-500 pt-36 md:pt-32 lg:pt-48 pb-10 font-worksans px-6 md:px-12 lg:px-14 xl:px-28 text-center">
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-bombora-400 lg:max-w-xl xl:max-w-3xl mx-auto">
          Bikin Website <span className="text-bombora-600">Gak Perlu Ribet,</span> Pilih Template Bombora Saja!
        </h1>
        <p className="md:text-lg mt-4 max-w-3xl mx-auto">
          Pilih template favorit Anda, lalu beri tahu kami bagian yang ingin disesuaikan. Kami siap bantu wujudkan website impian Anda.
        </p>
      </div>

      <div className="flex flex-wrap justify-center px-5 md:px-10 gap-4 mb-20 md:mb-24">
        {["all", "agriculture", "company", "jasa/service", "restaurant", "otomotif"].map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setCategory(cat === "all" ? "" : cat);
              setCurrentPage(1); // Reset ke halaman pertama saat filter berubah
            }}
            className={`px-6 py-2 rounded-full ${
              (cat === "all" && category === "") || category === cat
                ? "bg-bombora-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>



      {/* Kontainer Template */}
      <div className="w-full px-6 md:px-12 lg:px-14 xl:px-28">
        {loading ? (
          <p className="text-center text-lg font-semibold">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {templates.map((item, index) => (
              <PortoCard 
                key={index}
                title={item.template_name}
                image={item.thumbnail}
                hoverImage={item.hoverImage}
                linktoWeb={item.foldername}
                icon="template"
              />
            ))}
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="px-6 md:px-12 lg:px-16 xl:px-28 mt-6 flex items-center justify-center gap-2 lg:text-lg font-raleway">
        <button
          onClick={() => {
            setCurrentPage((prev) => Math.max(prev - 1, 1));
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          disabled={currentPage === 1}
          className="px-3 lg:px-4 py-1 rounded disabled:opacity-50"
        >
          
          <FontAwesomeIcon icon={faChevronLeft}/>
        </button>

        {getVisiblePages(currentPage, totalPages).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => {
              if (currentPage !== pageNumber) {
                setCurrentPage(pageNumber);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className={`px-3 aspect-square rounded ${currentPage === pageNumber ? "bg-bombora-300 text-white" : "bg-gray-200 text-gray-700"}`}
          >
            {pageNumber}
          </button>
        ))}

        <button
          onClick={() => {
            setCurrentPage((prev) => Math.min(prev + 1, totalPages));
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          disabled={currentPage === totalPages}
          className="px-3 lg:px-4 py-1 rounded disabled:opacity-50"
        >
          
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Templates;
