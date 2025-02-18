import Navbar2 from '../components/Navbar2';
import { useLocation } from 'react-router-dom';
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

// Pindahkan pilihanTemplate ke atas sebelum digunakan
const pilihanTemplate = [
      { image: "/porto6.webp", value: "travelAgent1", title: "Travel Agent" },
      { image: "/porto9.webp", value: "travelAgent2", title: "Travel Agent 2" },
      { image: "/porto5.webp", value: "travelAgent3", title: "Travel Agent 3" },
      { image: "/porto4.webp", value: "organicStore", title: "Organic Store" },
      { image: "/porto2.webp", value: "organicStore2", title: "Organic Store 2" },
      { image: "/porto7.webp", value: "productExportir", title: "Product Exportir" },
      { image: "/porto8.webp", value: "lifeStyleCourse", title: "Life Style Course" },
      { image: "/porto4.webp", value: "handyCraftProduct", title: "Handy Craft Product" },
      { image: "/porto12.webp", value: "foodandBeverage", title: "Food and Beverage Business" },
      { image: "/portoCustom.webp", value: "customDesign", title: "Custom Design Website" },
];

const FormPemesanan = () => {
      const location = useLocation();
      const queryParams = new URLSearchParams(location.search);
      const paket = queryParams.get('paket');
      const [isSubmitted, setIsSubmitted] = useState(false);

      const [selectedValue, setSelectedValue] = useState("");
      const selectedTemplate = pilihanTemplate.find((template) => template.value === selectedValue);

      const handleTemplateChange = (event) => {
            setSelectedValue(event.target.value);
      };


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
            handleTemplateChange(event);
            handleChange(event);
      }

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
                  <div className='py-24 md:py-28 lg:py-32 font-worksans px-6 md:px-12 lg:px-14 xl:px-28 relative'>

                        <h1 className="mb-10 text-3xl md:text-4xl text-bombora-300 font-semibold text-center">Form Pemesanan</h1>
                        <form ref={form} onSubmit={handleSubmit} className='w-full max-w-5xl mx-auto overflow-hidden'>

                              <div className='flex gap-6 text-lg mb-8 md:mb-10'>
                                    <p className='text-3xl font-semibold text-bombora-100 text-stroke'>1</p>
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
                                    <p className='text-3xl font-semibold text-bombora-100 text-stroke'>2</p>
                                    <div className='flex flex-col md:text-lg w-full'>
                                          <p className='mb-3'>Pilih Template Website</p>
                                          <p>{selectedTemplate ? <>Template yang dipilih: <span className="text-bombora-300">{selectedTemplate.title}</span></> : ""}</p>
                                          <div className='w-full overflow-x-auto'>
                                                <div className='flex gap-4 w-max py-3 pr-20'>
                                                      {pilihanTemplate.map((template, index) => (
                                                            <label key={index} className="flex gap-4 items-center cursor-pointer">
                                                                  <input
                                                                        type="radio"
                                                                        name="template"
                                                                        value={template.value}
                                                                        className="peer hidden"
                                                                        onChange={handleCombinedChange}
                                                                  />
                                                                  <img
                                                                        src={template.image}
                                                                        alt={template.title}
                                                                        className="w-80 peer-checked:outline peer-checked:outline-offset-4 peer-checked:outline-bombora-300 rounded-lg "
                                                                  />
                                                            </label>
                                                      ))}
                                                </div>
                                          </div>
                                    </div>
                              </div>

                              <div className='flex gap-6 text-lg mb-8 md:mb-10 group'>
                                    <p className='text-3xl font-semibold text-bombora-100 text-stroke'>3</p>
                                    <div className='flex flex-col md:text-lg  w-full'>
                                          <label htmlFor="nama" className='mb-3 '>Nama Owner/Bisnis</label>
                                          <input type="text" name="nama" onChange={handleChange} disabled={!formData.template} className='bg-bombora-100 border-bombora-500/20 w-full px-4 py-2 border rounded-md focus:outline-bombora-300 disabled:cursor-not-allowed' />
                                          <p className='text-xs text-bombora-300 mt-1'>{!formData.template ? "*Pilih template/custom design terlebih dahulu" : ""}</p>
                                    </div>
                              </div>

                              <div className='flex gap-6'>
                                    <p className='text-3xl font-semibold text-bombora-100 text-stroke'>4</p>
                                    <div className='flex gap-6 mb-8 md:mb-10 w-1/2'>
                                          <div className='flex flex-col md:text-lg  w-full'>
                                                <label htmlFor="email" className='mb-3 '>Email</label>
                                                <input type="email" name="email" onChange={handleChange} disabled={!formData.nama} className='bg-bombora-100 border-bombora-500/20 w-full px-4 py-2 border rounded-md focus:outline-bombora-300 disabled:cursor-not-allowed' />
                                                <p className='text-xs text-bombora-300 mt-1'>{!formData.nama ? "*isi nama Owner/Bisnis terlebih dahulu" : ""}</p>
                                          </div>
                                    </div>
                                    <div className='flex gap-6  mb-8 md:mb-10 w-1/2'>
                                          <div className='flex flex-col md:text-lg  w-full'>
                                                <label htmlFor="telepon" className='mb-3 '>No. Telepon</label>
                                                <input type="number" name="telepon" onChange={handleChange} disabled={!formData.nama} className='bg-bombora-100 border-bombora-500/20 w-full px-4 py-2 border rounded-md focus:outline-bombora-300 disabled:cursor-not-allowed' />
                                                <p className='text-xs text-bombora-300 mt-1'>{!formData.nama ? "*isi nama owner/bisnis terlebih dahulu" : ""}</p>
                                          </div>
                                    </div>
                              </div>


                              <div className='flex gap-6 text-lg mb-8 md:mb-10'>
                                    <p className='text-3xl font-semibold text-bombora-100 text-stroke'>5</p>
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
                                    <p className='text-3xl font-semibold text-bombora-100 text-stroke'>6</p>
                                    <div className='flex flex-col md:text-lg  w-full'>
                                          <label htmlFor="message" className='mb-3 '>Website seperti apa yang Anda inginkan?</label>

                                          <textarea name="message" onChange={handleChange} disabled={!formData.domain} className='bg-bombora-100 border-bombora-500/20 w-full px-4 py-2 border rounded-md focus:outline-bombora-300 disabled:cursor-not-allowed' rows="6"></textarea>
                                          <p className='text-xs text-bombora-300 mt-1'>{!formData.domain ? "*isi domain untuk bisnis Anda terlebih dahulu" : ""}</p>
                                    </div>
                              </div>


                              <p className='text-xs  ml-10 mb-3 text-bombora-300'>*pembayaran dilakukan setelah pemesanan disetujui oleh tim kami</p>
                              <button className='ml-10 bg-bombora-600 text-bombora-500 font-semibold px-12 py-3 rounded-md hover:bg-bombora-700 hover:bg-bombora-300 hover:text-bombora-100 transition-all active:scale-95' type="submit">
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
