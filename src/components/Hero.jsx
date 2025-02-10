import React from 'react'

const Hero = () => {
  return (
    <>
        <div className="bg-gradient-to-tl from-footer to-customLight h-auto pb-28 2xl:pb-60 w-full flex items-center py-32 md:pt-40 2xl:pt-52">
            <div className="container mx-auto text-center">
                {/* Hero Section */}
                <div>
                <h1
                    className="text-white xl:max-w-7xl md:max-w-6xl mx-auto xl:text-5xl text-4xl font-inter"
                    style={{ lineHeight: "1.30" }}
                >
                    Tingkatkan Bisnis Anda dengan{" "}
                    <span className="text-button font-bold">Solusi Website</span>
                </h1>

                <div className="max-w-4xl text-center mx-auto mt-7">
                    <p className="font-inria text-white text-md xl:text-xl">
                    Miliki website profesional yang responsif, mudah ditemukan di pencarian, dan
                    meningkatkan kredibilitas bisnis Anda. Raih lebih banyak pelanggan dan dorong
                    pertumbuhan bisnis di era digital!
                    </p>
                </div>

                <div className="flex gap-3 justify-center items-center mt-4">
                    <button className="hover:bg-customLight font-bold text-white border border-button hover:border-white duration-200 hover:text-white font-inter text-md mt-7 mb-4 md:mt-10 md:mb-7 inline-block px-8 py-3 rounded-2xl bg-button">
                     Mulai Sekarang
                    </button>
                </div>
                </div>

                {/* Chatbox & Theme Section */}
                <div className="flex items-start gap-4 justify-center p-5 md:mt-6">
                {/* Chatbox */}
                <div className="hidden md:block">
                    <div className="mt-5 p-4 py-6 w-[300px] rounded-2xl bg-white/30 border border-white">
                    <div className="space-y-5">
                        <div className="flex justify-start">
                        <div className="bg-[#97e1e9] text-black p-4 text-sm rounded-xl">
                            Bisakah Anda membuat situs web?
                        </div>
                        </div>
                        <div className="flex justify-end">
                        <div className="bg-gray-300 text-black p-4 text-sm rounded-xl">
                            Tentu, halaman dan desain apa?
                        </div>
                        </div>
                        <div className="flex justify-start">
                        <div className="bg-[#97e1e9] text-black p-4 text-sm rounded-xl">
                            Profile perusahaan dan aplikasi web
                        </div>
                        </div>
                    </div>
                    </div>

                    {/* Theme Options */}
                    <div className="w-[300px] mt-5 bg-white/30 border p-4 border-white flex flex-col justify-start items-start rounded-2xl">
                    <p className="text-white">Site Theme</p>
                    <div className="mt-4 flex p-2 border border-white rounded-lg">
                        <div className="w-[60px] h-[37px] bg-[#97e1e9]"></div>
                        <div className="w-[60px] h-[37px] bg-[#95bedf]"></div>
                        <div className="w-[60px] h-[37px] bg-[#f6e7e1]"></div>
                        <div className="w-[60px] h-[37px] bg-[#003c64]"></div>
                    </div>
                    </div>
                </div>

                {/* Desktop Preview Image */}
                <div className="hidden lg:block mt-5 p-3 w-[600px] rounded-2xl bg-white/30 border border-white">
                    <img className="rounded-2xl w-full h-[370px]" src="/home.png" alt="Home" />
                </div>

                {/* URL & Mobile Preview */}
                <div>
                    <div className="md:mt-5 w-[250px] h-[40px] bg-white/30 border text-white border-white rounded-2xl flex items-center justify-center">
                    https://bomboraweb.com
                    </div>

                    <div className="mt-5 p-3 w-[250px] rounded-2xl bg-white/30 border border-white">
                    <img className="rounded-2xl w-full h-[310px]" src="/mobile.png" alt="Mobile" />
                    </div>
                </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Hero