import Navbar2 from '../components/Navbar2';
import { useState } from 'react';

const Konsultasi = () => {
      const [formData, setFormData] = useState({
            nama: '',
            pesan: ''
      })


      const handleChange = (e) => {
            setFormData({
                  ...formData,
                  [e.target.name]: e.target.value
            })
      }

      const sendMessage = (e) => {
            e.preventDefault()

            const { nama, pesan } = formData;
            if (!nama || !pesan) {
                  alert('Please fill in all fields.');
                  return;
            }
            const phoneNumber = "6282123564667";

            const encodedMessage = encodeURIComponent(
                  `Halo, saya ingin konsultasi tentang website. Nama saya ${nama}, dan saya ingin bertanya tentang "${pesan}"`
            );

            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

            window.open(whatsappURL, "_blank");
      }
      return (
            <>
                  <Navbar2 />

                  <div className="bg-bombora-100 pt-36 pb-24 md:py-32 lg:pt-44 lg:pb-32 font-worksans px-6 md:px-12 lg:px-14 xl:px-28">

                        <h1 className='text-bombora-300 text-3xl md:text-4xl xl:text-5xl text-center font-semibold mb-20'>Apa Keluhan Anda?</h1>

                        <form onSubmit={sendMessage} className='mt-10 max-w-5xl mx-auto'>
                              <div className='flex flex-col md:text-lg  w-full'>
                                    <label htmlFor="nama" className='mb-3 '>Nama Owner/Bisnis</label>
                                    <input type="text" name="nama" onChange={handleChange} className='bg-bombora-100 border-bombora-500/20 w-full px-4 py-2 border rounded-md focus:outline-bombora-300 disabled:cursor-not-allowed' />
                              </div>
                              <div className='flex flex-col md:text-lg w-full mt-6'>
                                    <label htmlFor="nama" className='mb-3'>Pertanyaan Anda</label>
                                    <textarea name="pesan" onChange={handleChange} className='bg-bombora-100 border-bombora-500/20 w-full px-4 py-2 border rounded-md focus:outline-bombora-300 disabled:cursor-not-allowed' rows="5"></textarea>
                              </div>
                              <button type='submit' className='mt-10 font-semibold px-6 py-3 lg:px-10 lg:py-4 rounded-full transition-all text-bombora-500 bg-bombora-600 hover:bg-bombora-100 hover:text-bombora-500 hover:border-[3px] hover:border-bombora-400 active:scale-95'>
                                    Kirim Pesan
                              </button>
                        </form>
                  </div>
            </>
      )
}

export default Konsultasi;