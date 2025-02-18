import Navbar2 from '../components/Navbar2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaketBombora = () => {
      const [showDetail, setShowDetail] = useState(false);
      const navigate = useNavigate();

      const handleOrderClick = (paket) => {
            navigate(`/form-pemesanan?paket=${paket}`)
      }

      return (
            <>
                  <Navbar2 />
                  <div className="pt-40 pb-16 px-6 md:px-12 lg:px-14 xl:px-28 font-worksans">
                        <h1 className='text-center text-3xl md:text-4xl xl:text-5xl  text-bombora-300 font-semibold'><span className='text-bombora-600'>Go Digital</span> dengan Paket Website Bombora</h1>
                        <p className='text-lg lg:text-xl text-bombora-500 text-center mt-3'>Pilih paket website yang sesuai dengan kebutuhan bisnis Anda</p>

                        <div className='mt-20'>
                              <div className="flex flex-col lg:flex-row justify-center gap-5  mt-14 w-full ">
                                    <div className=" md:mx-auto lg:mx-0  px-7 md:px-10 lg:px-5 xl:px-7 py-10 md:aspect-[4/3] md:w-[35rem] lg:aspect-[0.61/1] lg:w-fit lg:h-[32rem] xl:h-[36rem] rounded-xl text-bombora-500  hover:outline hover:outline-offset-8 hover:outline-bombora-200 transition-all bg-bombora-100">
                                          <div>
                                                <p className="text-sm md:text-base lg:text-sm mb-1">Langkah Awal Go Online</p>
                                                <h3 className="text-[20px] xs:text-3xl lg:text-2xl xl:text-3xl font-semibold text-bombora-300">Starter</h3>
                                          </div>
                                          <div className="mt-3 ">
                                                <p className="text-[20px] xs:text-3xl lg:text-2xl xl:text-3xl font-semibold text-bombora-300">Rp 1.000.000 <span className="text-sm md:text-base lg:text-sm text-bombora-500 font-semibold">/tahun ke-1</span></p>
                                                <p className="mt-2 text-bombora-500 font-light text-sm md:text-base lg:text-sm ">Perpanjang Rp 000.000 /tahun</p>
                                          </div>
                                          <div className="mt-10 border-t border-bombora-500 pt-7">
                                                <p>
                                                      <FontAwesomeIcon icon={faCheck} className='font-semibold pr-4' />
                                                      1-2 Halaman Website
                                                </p>
                                                <p className='mt-1'>
                                                      <FontAwesomeIcon icon={faCheck} className='font-semibold pr-4' />
                                                      1x Revisi
                                                </p>
                                                <p className='mt-1'>
                                                      <FontAwesomeIcon icon={faCheck} className='font-semibold pr-4' />
                                                      Gratis Domain .com
                                                </p>
                                                <p className='mt-1'>
                                                      <FontAwesomeIcon icon={faCheck} className='font-semibold pr-4' />
                                                      Gratis Email Bisnis
                                                </p>
                                                <p className='mt-1'>
                                                      <FontAwesomeIcon icon={faCheck} className='font-semibold pr-4' />
                                                      Mobile Friendly
                                                </p>
                                          </div>
                                          <button onClick={() => handleOrderClick('Starter')} className='mt-10 lg:mt-20 xl:mt-28 block mx-auto w-full  px-10 py-3 bg-bombora-600 font-semibold rounded-xl active:scale-95 transition-all duration-300'>
                                                Pesan Sekarang
                                          </button>
                                    </div>

                                    <div className=" md:mx-auto lg:mx-0 bg-bombora-400 px-7 md:px-10 lg:px-5 xl:px-7 py-10 md:aspect-[4/3] md:w-[35rem] lg:aspect-[0.61/1] lg:w-fit lg:h-[36rem] xl:h-[40rem] rounded-xl relative text-bombora-100 hover:outline hover:outline-offset-8 hover:outline-bombora-200 transition-all">
                                          <div className='w-full h-48 bg-transparent absolute top-0 left-0 right-0 overflow-hidden'>
                                                <div className='absolute top-9 -right-12 px-10 py-2 bg-bombora-600 rotate-45 text-sm font-semibold text-bombora-100'><p>RECOMMENDED</p></div>
                                          </div>
                                          <div>
                                                <p className="text-sm md:text-base lg:text-sm mb-1">lebih Profesionl, Lebih Dikenal</p>
                                                <h3 className="text-[20px] xs:text-3xl lg:text-2xl xl:text-3xl font-semibold text-bombora-600">Growth</h3>
                                          </div>
                                          <div className="mt-3 ">
                                                <p className="text-[20px] xs:text-3xl lg:text-2xl xl:text-3xl font-semibold text-bombora-600">Rp 2.500.000 <span className="text-sm md:text-base lg:text-sm text-bombora-100 font-semibold">/tahun ke-1</span></p>
                                                <p className="mt-2 text-bombora-100 font-light text-sm md:text-base lg:text-sm ">Perpanjang Rp 000.000 /tahun</p>
                                          </div>
                                          <div className="mt-10 border-t border-bombora-100 pt-7 flex flex-col gap-3">
                                                <p>
                                                      <FontAwesomeIcon icon={faCheck} className='font-semibold pr-4' />
                                                      3-5 Halaman Website
                                                </p>
                                                <p >
                                                      <FontAwesomeIcon icon={faCheck} className='font-semibold pr-4' />
                                                      2x Revisi
                                                </p>
                                                <p >
                                                      <FontAwesomeIcon icon={faCheck} className='font-semibold pr-4' />
                                                      SEO Basic
                                                </p>
                                                <p >
                                                      <FontAwesomeIcon icon={faCheck} className='font-semibold pr-4' />
                                                      Gratis Domain .com
                                                </p>
                                                <p >
                                                      <FontAwesomeIcon icon={faCheck} className='font-semibold pr-4' />
                                                      Gratis Email Bisnis
                                                </p>
                                                <p >
                                                      <FontAwesomeIcon icon={faCheck} className='font-semibold pr-4' />
                                                      Animasi Interaktif
                                                </p>
                                                <p >
                                                      <FontAwesomeIcon icon={faCheck} className='font-semibold pr-4' />
                                                      Mobile Friendly
                                                </p>
                                          </div>
                                          <button onClick={() => handleOrderClick('Growth')} className='mt-10 lg:mt-7 xl:mt-16 block mx-auto w-full  px-10 py-3 bg-bombora-600 font-semibold rounded-xl text-bombora-500 active:scale-95 transition-all duration-300'>
                                                Pesan Sekarang
                                          </button>
                                    </div>

                                    <div className="md:mx-auto lg:mx-0  px-7 md:px-10 lg:px-5 xl:px-7 py-10 md:aspect-[4/3] md:w-[35rem] lg:aspect-[0.61/1] lg:w-fit lg:h-[32rem] xl:h-[36rem] rounded-xl text-bombora-500 hover:outline hover:outline-offset-8 hover:outline-bombora-200 transition-all bg-bombora-100">
                                          <div>
                                                <p className="text-sm md:text-base lg:text-sm mb-1">Impresi Kuat, Pelanggan Terpikat</p>
                                                <h3 className="text-[20px] xs:text-3xl lg:text-2xl xl:text-3xl font-semibold text-bombora-300">Premium</h3>
                                          </div>
                                          <div className="mt-3 ">
                                                <p className="text-[20px] xs:text-3xl lg:text-2xl xl:text-3xl font-semibold text-bombora-300">Rp 5.000.000 <span className="text-sm md:text-base lg:text-sm text-bombora-500 font-semibold">/tahun ke-1</span></p>
                                                <p className="mt-2 text-bombora-500 font-light text-sm md:text-base lg:text-sm ">Perpanjang Rp 000.000 /tahun</p>
                                          </div>
                                          <div className="mt-10 border-t border-bombora-500 pt-7">
                                                <p>
                                                      <FontAwesomeIcon icon={faCheck} className='font-semibold pr-4' />
                                                      6-10 Halaman Website
                                                </p>
                                                <p className='mt-1'>
                                                      <FontAwesomeIcon icon={faCheck} className='font-semibold pr-4' />
                                                      5x Revisi
                                                </p>
                                                <p className='mt-1'>
                                                      <FontAwesomeIcon icon={faCheck} className='font-semibold pr-4' />
                                                      SEO Advanced
                                                </p>
                                                <p className='mt-1'>
                                                      <FontAwesomeIcon icon={faCheck} className='font-semibold pr-4' />
                                                      Gratis Domain .com / .id
                                                </p>
                                                <p className='mt-1'>
                                                      <FontAwesomeIcon icon={faCheck} className='font-semibold pr-4' />
                                                      Gratis Email Bisnis
                                                </p>
                                                <p className='mt-1'>
                                                      <FontAwesomeIcon icon={faCheck} className='font-semibold pr-4' />
                                                      Animasi Interaktif
                                                </p>
                                                <p className='mt-1'>
                                                      <FontAwesomeIcon icon={faCheck} className='font-semibold pr-4' />
                                                      Mobile Friendly
                                                </p>
                                          </div>
                                          <button onClick={() => handleOrderClick('Premium')} className='mt-10 lg:mt-5 xl:mt-14 block mx-auto w-full  px-10 py-3 bg-bombora-600 font-semibold rounded-xl active:scale-95 transition-all duration-300'>
                                                Pesan Sekarang
                                          </button>
                                    </div>
                              </div>

                              <div className="mt-12 md:mt-16 lg:mt-20 w-full bg-bombora-400 rounded-xl flex flex-col items-center py-12 md:py-14 px-4 text-center hover:outline hover:outline-offset-8 hover:outline-bombora-200 transition-all text-bombora-100">
                                    <h3 className='font-semibold text-xl md:text-2xl lg:text-3xl'>Paket DIatas Masih Tidak Cocok Dengan Kebutuhan Anda?</h3>
                                    <a className='mt-5 font-medium md:text-xl w-[90%] cursor-pointer'>Coba Paket Custom dan Konsultasikan Masalah Anda Disini <span className='text-bombora-600 font-semibold'>GRATIS</span></a>
                              </div>
                        </div>

                        <div className="mt-16 flex flex-col justify-center">
                              <button onClick={() => setShowDetail(!showDetail)} className="text-lg font-semibold text-bombora-300 flex items-center gap-5 mx-auto ">
                                    Lihat Detail Paket
                                    <FontAwesomeIcon icon={faChevronDown} className='text-bombora-300' />
                              </button>
                              <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${showDetail ? 'max-h-[60rem]' : 'max-h-0'} `}>
                                    <div className="relative overflow-x-auto py-12">
                                          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded- overflow-hidden">
                                                <thead className="md:text-lg text-bombora-500 bg-bombora-200 uppercase ">
                                                      <tr>
                                                            <th scope="col" className="px-6 py-10">
                                                                  Spesifikasi Layanan
                                                            </th>
                                                            <th scope="col" className="px-6 py-10">
                                                                  Starter
                                                            </th>
                                                            <th scope="col" className="px-6 py-10">
                                                                  Growth
                                                            </th>
                                                            <th scope="col" className="px-6 py-10">
                                                                  Premium
                                                            </th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      <tr className="bg-white border-b  border-gray-200">
                                                            <th scope="row" className="px-6 py-8 font-semibold text-bombora-500 whitespace-nowrap ">
                                                                  Jumlah halaman Webiste
                                                            </th>
                                                            <td className="px-6 py-8">
                                                                  1-3 halaman
                                                            </td>
                                                            <td className="px-6 py-8">
                                                                  3-5 halaman
                                                            </td>
                                                            <td className="px-6 py-8">
                                                                  6-10 halaman
                                                            </td>
                                                      </tr>
                                                      <tr className="bg-white border-b  border-gray-200">
                                                            <th scope="row" className="px-6 py-8 font-semibold text-bombora-500 whitespace-nowrap ">
                                                                  Waktu Pengerjaan
                                                            </th>
                                                            <td className="px-6 py-8">
                                                                  3-5 hari
                                                            </td>
                                                            <td className="px-6 py-8">
                                                                  7-10 hari
                                                            </td>
                                                            <td className="px-6 py-8">
                                                                  10-14 hari
                                                            </td>
                                                      </tr>
                                                      <tr className="bg-white border-b  border-gray-200">
                                                            <th scope="row" className="px-6 py-8 font-semibold text-bombora-500 whitespace-nowrap ">
                                                                  Free Domain
                                                            </th>
                                                            <td className="px-6 py-8">
                                                                  <FontAwesomeIcon icon={faCheck} className='text-lg md:text-xl' />
                                                            </td>
                                                            <td className="px-6 py-8">
                                                                  <FontAwesomeIcon icon={faCheck} className='text-lg md:text-xl' />
                                                            </td>
                                                            <td className="px-6 py-8">
                                                                  <FontAwesomeIcon icon={faCheck} className='text-lg md:text-xl' />
                                                            </td>
                                                      </tr>
                                                      <tr className="bg-white border-b  border-gray-200">
                                                            <th scope="row" className="px-6 py-8 font-semibold text-bombora-500 whitespace-nowrap ">
                                                                  Free Email Bisnis
                                                            </th>
                                                            <td className="px-6 py-8">
                                                                  <FontAwesomeIcon icon={faCheck} className='text-lg md:text-xl' />
                                                            </td>
                                                            <td className="px-6 py-8">
                                                                  <FontAwesomeIcon icon={faCheck} className='text-lg md:text-xl' />
                                                            </td>
                                                            <td className="px-6 py-8">
                                                                  <FontAwesomeIcon icon={faCheck} className='text-lg md:text-xl' />
                                                            </td>
                                                      </tr>
                                                      <tr className="bg-white border-b  border-gray-200">
                                                            <th scope="row" className="px-6 py-8 font-semibold text-bombora-500 whitespace-nowrap ">
                                                                  Free Hosting
                                                            </th>
                                                            <td className="px-6 py-8">
                                                                  1 GB
                                                            </td>
                                                            <td className="px-6 py-8">
                                                                  10 GB
                                                            </td>
                                                            <td className="px-6 py-8">
                                                                  10 GB
                                                            </td>
                                                      </tr>
                                                      <tr className="bg-white border-b  border-gray-200">
                                                            <th scope="row" className="px-6 py-8 font-semibold text-bombora-500 whitespace-nowrap ">
                                                                  SSL Security
                                                            </th>
                                                            <td className="px-6 py-8">
                                                                  <FontAwesomeIcon icon={faCheck} className='text-lg md:text-xl' />
                                                            </td>
                                                            <td className="px-6 py-8">
                                                                  <FontAwesomeIcon icon={faCheck} className='text-lg md:text-xl' />
                                                            </td>
                                                            <td className="px-6 py-8">
                                                                  <FontAwesomeIcon icon={faCheck} className='text-lg md:text-xl' />
                                                            </td>
                                                      </tr>
                                                      <tr className="bg-white border-b  border-gray-200">
                                                            <th scope="row" className="px-6 py-8 font-semibold text-bombora-500 whitespace-nowrap ">
                                                                  Revisi
                                                            </th>
                                                            <td className="px-6 py-8">
                                                                  1x
                                                            </td>
                                                            <td className="px-6 py-8">
                                                                  3x
                                                            </td>
                                                            <td className="px-6 py-8">
                                                                  5x
                                                            </td>
                                                      </tr>
                                                      <tr className="bg-white border-b  border-gray-200">
                                                            <th scope="row" className="px-6 py-8 font-semibold text-bombora-500 whitespace-nowrap ">
                                                                  Biaya penambahan halaman
                                                            </th>
                                                            <td className="px-6 py-8">
                                                                  Rp 50.000 / halaman
                                                            </td>
                                                            <td className="px-6 py-8">
                                                                  Rp 50.000 / halaman
                                                            </td>
                                                            <td className="px-6 py-8">
                                                                  Rp 50.000 / halaman
                                                            </td>
                                                      </tr>
                                                </tbody>
                                          </table>

                                    </div>

                              </div>
                        </div>

                  </div>
                  <Footer />
            </>
      )
}

export default PaketBombora;