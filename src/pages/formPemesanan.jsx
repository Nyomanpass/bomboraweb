import Navbar2 from '../components/Navbar2';
import { useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';
import axios from 'axios';

const FormPemesanan = () => {
      const base_url = "https://template.bomboraweb.com/";
      const [templates, setTemplates] = useState([]);
      const [templateForm, setTemplateForm] = useState([])

      const getTemplateForm = async () => {
            try{
                  const url = `${base_url}api/template.php?request=filter&page=1&limit=5`
                  const response = await axios.get(url);
                  const templates = response.data.data;
                  const lastId = templates.length > 0 ? Math.max(...templates.map(t => t.id)) : 0;
                  const newTemplate = {
                        id: lastId + 1,
                        template_name: "custom desain",
                        category: "-",
                        thumbnail: "/portoCustom.webp",
                        foldername: "custom"
                      };
                      setTemplateForm([...templates, newTemplate]);
            }catch(error){
                  console.log(error);
            }
      }

      const getTemplates = async () => {
            try {
              const url = `${base_url}api/template.php?request=filter`; 
              const response = await axios.get(url);
              const templates = response.data.data;
              const lastId = templates.length > 0 ? Math.max(...templates.map(t => t.id)) : 0;
              const newTemplate = {
                    id: lastId + 1,
                    template_name: "custom desain",
                    category: "-",
                    thumbnail: "/portoCustom.webp",
                    foldername: "custom"
                  };
                  setTemplates([...templates, newTemplate]);
          
            } catch (error) {
              console.error("Error fetching templates:", error);
            }
          };
          
          
          // Panggil saat komponen dimount
      useEffect(() => {
        getTemplates();
        getTemplateForm()
      }, []);

      const location = useLocation();
      const queryParams = new URLSearchParams(location.search);
      const templateFromURL = queryParams.get('template');
      const paket = queryParams.get('paket');
      const [isSubmitted, setIsSubmitted] = useState(false);

     
      // const selectedTemplate = templates.find((template) => template.template_name === selectedValue);
      const [selectedTemplate, setSelectedTemplate] = useState(null);

      useEffect(() => {
            if (templateFromURL) {
                const foundTemplate = templates.find(t => t.foldername === templateFromURL);
                if (foundTemplate) {
                    setSelectedTemplate(foundTemplate);
                    setFormData((prev) => ({
                        ...prev,
                        template: templateFromURL, // Update formData.template
                    }));
                }
            }
        }, [templateFromURL, templates]);
    

 

      const [selectedPaket, setSelectedPaket] = useState(paket);
      const [selectedDomain, setSelectedDomain] = useState("com");


      const handlePaketChange = (event) => {
            const value = event.target.value;
            setSelectedPaket(value);

            if (value !== "Premium" && value !== "Custom") {
                  setSelectedDomain("com");
            }

      }

      const [formData, setFormData] = useState({
            paket: "",
            template: "",
            nama: "",
            email: "",
            telepon: "",
            domain: "",
            message: "",
            domainExtension: "",
      });
      const handleChange = (event) => {
            const { name, value } = event.target;
            setFormData((prev) => ({
                  ...prev,
                  [name]: value,
            }));
      };

      const handleCombinedChange = (event) => {
            const selectedName = event.target.value;
            const foundTemplate = templates.find(t => t.foldername === selectedName);
            setSelectedTemplate(foundTemplate);
            setFormData((prev) => ({
                  ...prev,
                  template: selectedName, // Update formData.template dengan foldername yang dipilih
              }));
        };

      const handleCombinedChange2 = (event) => {
            handlePaketChange(event);
            handleChange(event);
      }

      const handleDomainChange = (event) => {
            handleChange(event);
            setSelectedDomain(event.target.value);
      };

      const form = useRef();
      const handleSubmit = (event) => {
            event.preventDefault();
            console.log(formData);


            emailjs.sendForm('service_orto5aq', 'template_3tgkl05', form.current, 'EyCwDiqTTPBUtgyK8')
                  .then(result => {
                        console.log(result.text);
                        // alert('Message sent successfully!');
                        setIsSubmitted(true);
                        window.scrollTo(0, 0);
                        document.body.style.overflow = 'hidden';
                  }), (error) => {
                        console.log(error.text);
                        alert('Failed to send message, please try again.');
                  }

      }

      const handlePopUp = () => {
            setIsSubmitted(false);
            document.body.style.overflow = 'auto';
      }


      return (
            <>
                  <Navbar2 />
                  <div className='py-28 md:py-28 lg:py-32 font-worksans px-6 md:px-12 lg:px-14 xl:px-28 relative'>

                        <h1 className="mb-10 text-3xl md:text-4xl text-bombora-300 font-semibold text-center">Form Pemesanan</h1>
                        <form ref={form} onSubmit={handleSubmit} className='w-full max-w-5xl mx-auto overflow-hidden'>

                              <div className='flex gap-6 text-lg mb-8 md:mb-10'>
                                    <p className='text-3xl hidden sm:block font-semibold text-bombora-100 text-stroke'>1</p>
                                    <div className='flex flex-col md:text-lg w-full'>
                                          <label htmlFor="paket" className='mb-3 '>Pilih Paket Bombora</label>
                                          <select name="paket" id="paket" defaultValue={paket} onChange={handleCombinedChange2} value={selectedPaket} className='bg-bombora-100 border-bombora-500/20 w-full px-4 py-2 border rounded-md focus:outline-bombora-300'>
                                                <option selected></option>
                                                <option value="Starter">Starter</option>
                                                <option value="Growth">Growth</option>
                                                <option value="Premium">Premium</option>
                                                <option value="Custom">Custom</option>
                                          </select>
                                    </div>
                              </div>

                              <div className='flex gap-6 text-lg mb-8 md:mb-10'>
                                    <p className='text-3xl hidden sm:block font-semibold text-bombora-100 text-stroke'>2</p>
                                    <div className='flex flex-col md:text-lg w-full'>
                                    <div className="flex items-center gap-7">
                                          <p className='mb-3'>Pilih Template Website</p>
                                          <a href="/templates" className='mb-3 text-sm sm:px-5 sm:py-3 sm:border sm:border-bombora-300 sm:hover:bg-bombora-300 sm:hover:text-white sm:bg-bombora-100 text-bombora-300 rounded-full'>
                                                Lihat lebih banyak
                                          </a>
                                    </div>
                                    <p>
                                          {selectedTemplate ? <p className="sm:text-lg text-sm">Template yang dipilih: <span className="text-bombora-300">{selectedTemplate.template_name}</span></p> : ""}
                                    </p>
                                    <div className='w-full px-2 overflow-x-auto'>
                                          <div className='flex gap-4 w-max py-3 pr-20'>
                                                {templateFromURL
                                                ? templates.filter(t => t.foldername === templateFromURL).map((template, index) => (
                                                      <label key={index} className="flex gap-4 items-center cursor-pointer">
                                                            <input
                                                            type="radio"
                                                            name="template"
                                                            value={template.foldername}
                                                            className="peer hidden"
                                                            onChange={handleCombinedChange}
                                                            checked={selectedTemplate?.foldername === template.foldername} 
                                                            />
                                                            <img
                                                            src={`${base_url}image/${template.thumbnail}`}
                                                            alt={template.template_name}
                                                            className="w-80 peer-checked:outline peer-checked:outline-offset-4 peer-checked:outline-bombora-300 rounded-lg"
                                                            />
                                                      </label>
                                                ))
                                                : templateForm.map((template, index) => (
                                                      <label key={index} className="flex gap-4 items-center cursor-pointer">
                                                            <input
                                                            type="radio"
                                                            name="template"
                                                            value={template.foldername}
                                                            className="peer hidden"
                                                            onChange={handleCombinedChange}
                                                            />
                                                            <img
                                                            src={`${base_url}image/${template.thumbnail}`}
                                                            alt={template.template_name}
                                                            className="w-80 peer-checked:outline peer-checked:outline-offset-4 peer-checked:outline-bombora-300 rounded-lg"
                                                            />
                                                      </label>
                                                ))}
                                          </div>
                                    </div>
                                    </div>
                              </div>

                              <div className='flex gap-6 text-lg mb-8 md:mb-10 group'>
                                    <p className='text-3xl hidden sm:block font-semibold text-bombora-100 text-stroke'>3</p>
                                    <div className='flex flex-col md:text-lg  w-full'>
                                          <label htmlFor="nama" className='mb-3 '>Nama Owner/Bisnis</label>
                                          <input type="text" name="nama" onChange={handleChange} disabled={!formData.template} className='bg-bombora-100 border-bombora-500/20 w-full px-4 py-2 border rounded-md focus:outline-bombora-300 disabled:cursor-not-allowed' />
                                          <p className='text-xs text-bombora-300 mt-1'>{!formData.template ? "*Pilih template/custom design terlebih dahulu" : ""}</p>
                                    </div>
                              </div>

                              <div className='flex gap-2 sm:gap-6'>
                                    <p className='text-3xl hidden sm:block font-semibold text-bombora-100 text-stroke'>4</p>
                                    <div className='flex gap-6 mb-8 md:mb-10 w-1/2'>
                                          <div className='flex flex-col md:text-lg  w-full'>
                                                <label htmlFor="email" className='mb-3 '>Email</label>
                                                <input type="email" name="email" onChange={handleChange} disabled={!formData.nama} className='bg-bombora-100 border-bombora-500/20 w-full px-4 py-2 border rounded-md focus:outline-bombora-300 disabled:cursor-not-allowed' />
                                                <p className='text-xs text-bombora-300 mt-1'>{!formData.nama ? "*isi nama Owner/Bisnis terlebih dahulu" : ""}</p>
                                          </div>
                                    </div>
                                    <div className='flex gap-6 mb-8 md:mb-10 w-1/2'>
                                          <div className='flex flex-col md:text-lg  w-full'>
                                                <label htmlFor="telepon" className='mb-3 '>No. Telepon</label>
                                                <input type="number" name="telepon" onChange={handleChange} disabled={!formData.nama} className='bg-bombora-100 border-bombora-500/20 w-full px-4 py-2 border rounded-md focus:outline-bombora-300 disabled:cursor-not-allowed' />
                                                <p className='text-xs text-bombora-300 mt-1'>{!formData.nama ? "*isi nama owner/bisnis terlebih dahulu" : ""}</p>
                                          </div>
                                    </div>
                              </div>


                              <div className='flex gap-6 text-lg mb-8 md:mb-10'>
                                    <p className='text-3xl hidden sm:block font-semibold text-bombora-100 text-stroke'>5</p>
                                    <div className='flex flex-col md:text-lg w-full'>
                                          <label htmlFor="domain" className='mb-3 '>Domain</label>
                                          <div className='bg-bombora-100 border-bombora-500/20 w-full border rounded-md focus:outline-bombora-300'>
                                                <input type="text" name="domain" onChange={handleChange} disabled={!formData.email || !formData.telepon} className='w-[80%] h-full px-4 py-2 bg-bombora-100 border-bombora-500/20 borderfocus:outline-bombora-300 disabled:cursor-not-allowed' />
                                                <select name="domainExtension" value={selectedDomain}
                                                      onChange={handleDomainChange} className='w-[20%] px-4 py-2 border-l border-bombora-500/20 rounded-r-md focus:outline-bombora-300'>
                                                      <option value="com" selected>.com</option>
                                                      <option value="id" disabled={selectedPaket !== "Premium" && selectedPaket !== "Custom"} className='disabled:text-bombora-500/30'>.id</option>
                                                </select>
                                          </div>
                                          <p className='text-xs text-bombora-300 mt-1'>{!formData.email || !formData.telepon ? "*Isi email dan no. telepon terlebih dahulu" : ""}</p>
                                    </div>
                              </div>

                              <div className='flex gap-6 text-lg mb-8 md:mb-10 group'>
                                    <p className='text-3xl hidden sm:block font-semibold text-bombora-100 text-stroke'>6</p>
                                    <div className='flex flex-col md:text-lg  w-full'>
                                          <label htmlFor="message" className='mb-3 '>Website seperti apa yang Anda inginkan?</label>

                                          <textarea name="message" onChange={handleChange} disabled={!formData.domain} className='bg-bombora-100 border-bombora-500/20 w-full px-4 py-2 border rounded-md focus:outline-bombora-300 disabled:cursor-not-allowed' rows="6"></textarea>
                                          <p className='text-xs text-bombora-300 mt-1'>{!formData.domain ? "*isi domain untuk bisnis Anda terlebih dahulu" : ""}</p>
                                    </div>
                              </div>


                              <p className='text-xs  sm:ml-10 mb-3 text-bombora-300'>*pembayaran dilakukan setelah pemesanan disetujui oleh tim kami</p>
                              <button className='sm:ml-10 bg-bombora-600 text-bombora-500 font-semibold px-12 py-3 rounded-md hover:bg-bombora-700 hover:bg-bombora-300 hover:text-bombora-100 transition-all active:scale-95' type="submit">
                                    Kirim Sekarang
                              </button>
                        </form>


                        {isSubmitted && (
                              <>
                                    <div className='z-[90] fixed top-0 left-0 w-full h-full bg-black/50 opacity-0 animate-fadeIn'></div>

                                    <div className='z-[95] fixed inset-0 flex items-center justify-center'>
                                          <div className='bg-white px-12 py-8 rounded-lg shadow-lg w-[90%] max-w-xl 
                      opacity-0 scale-95 transition-all duration-300 ease-out animate-popup flex flex-col justify-center items-center'>
                                                <p className='text-xl lg:text-2xl font-semibold'>Pesanan Anda telah terkirim!</p>
                                                <p className='mt-5 mb-3 text-center md:text-lg'>kami akan segera menghubungi anda melalui email dan juga nomor yang telah anda berikan.</p>
                                                <button
                                                      onClick={handlePopUp}
                                                      className='bg-bombora-300 px-6 py-2 text-white rounded-md mt-4 hover:bg-bombora-400 transition'
                                                >
                                                      Close
                                                </button>
                                          </div>
                                    </div>
                              </>
                        )}

                  </div>
            </>
      );
};

export default FormPemesanan;
