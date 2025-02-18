
import { useState } from 'react';

const Navbar2 = () => {

      let [open, setOpen] = useState(false)

      return (
            <>
                  <header className={`font-worksans z-50 fixed w-100 w-full duration-500 shadow-md bg-white `}>
                        <div className=' mx-auto px-6 md:px-12 lg:px-14 xl:px-28 py-4 md:py-6 flex justify-between items-center'>
                              <a href='/' className='md:hidden lg:block'>
                                    <img src="/logo.png" className="w-[130px] md:w-[150px]" alt="icon bombora" />
                              </a>

                              <a href="/" className='hidden md:block lg:hidden'>
                                    <img src="/bombora_icon.png" className="w-9" alt="icon bombora" />
                              </a>

                              <ul className='md:flex hidden md:flex-row mt-2 flex-col gap-8  font-medium'>
                                    <li className='group w-max'>
                                          <a href="/paket-bombora" className="text-bombora-500">Paket Bombora</a>
                                          <div className={`mt-1 w-0 h-[2px] group-hover:w-full transition-all duration-300  bg-bombora-500`} ></div>
                                    </li>
                                    <li className='group w-max'>
                                          <a href="/templates" className="text-bombora-500">Templates</a>
                                          <div className={`mt-1 w-0 h-[2px] group-hover:w-full transition-all duration-300  bg-bombora-500`} ></div>
                                    </li>
                                    <li className='group w-max'>
                                          <a href="/portofolio" className="text-bombora-500">Portofolio</a>
                                          <div className={`mt-1 w-0 h-[2px] group-hover:w-full transition-all duration-300  bg-bombora-500`} ></div>
                                    </li>
                              </ul>

                              <div className='hidden md:block'>
                                    <a href="/konsultasi" className={`font-semibold px-4 py-3 lg:px-5 lg:py-4 rounded-full transition-all duration-300 text-bombora-100 bg-bombora-400 hover:bg-bombora-100 hover:text-bombora-400 hover:border-[3px] hover:border-bombora-400 `}>Konsultasi Gratis</a>
                              </div>


                              {/* mobile navbar */}
                              <nav className={`z-20 lg:hidden absolute lg:static duration-500 md:w-auto shadow-lg md:shadow-none top-0 left-0 w-full bg-bombora-100 md:bg-transparent px-6 py-5 md:py-0 ${open ? 'top-0 pb-10' : 'top-[-1000%]'}`}>
                                    <img src="/logo.png" className="w-[130px] md:w-[150px] mt-3 duration-500" alt="" />
                                    <ul className='flex sm:hidden md:flex-row flex-col gap-6 mt-10 md:mt-0 tracking-wide'>
                                          <li><a href="/paket-bombora" className=' text-bombora-500'>Paket Bombora</a></li>
                                          <li><a href="/templates" className='  text-bombora-500'>Templates</a></li>
                                          <li><a href="/portofolio" className=' text-bombora-500'>Portofolio</a></li>
                                          <li><a href="/konsultasi" className=' text-bombora-300 font-semibold text-lg'>Konsultasi Gratis</a></li>
                                    </ul>

                                    <div className=" flex md:hidden text-customLight mt-9 items-center gap-6 pr-6 pt-3 lg:pr-10">
                                          <a href="https://www.instagram.com/bomboraweb?igsh=ZGk3ajR2cm53aHl6" target='_blank'>
                                                <div className="text-2xl"><ion-icon name="logo-instagram"></ion-icon></div>
                                          </a>
                                          <a href="https://www.tiktok.com/@bomboraweb?_t=ZS-8tvnCJtAdwW&_r=1" target='_blank'>
                                                <div className="text-2xl"><ion-icon name="logo-tiktok"></ion-icon></div>
                                          </a>
                                    </div>

                              </nav>


                              <div
                                    onClick={() => setOpen(!open)}
                                    className={`z-20 text-3xl pt-3 md:hidden duration-500  text-bombora-500`}
                              >
                                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                              </div>

                              <div className={`h-screen w-full bg-black/50 absolute top-0 bottom-0 left-0 right-0 z-10 duration-500 ${open ? 'block' : 'hidden'}`} onClick={() => setOpen(!open)} />

                        </div>
                  </header >
            </>
      )
}

export default Navbar2;