
const Hero = () => {
    return (
        <>
            <div className="bg-bombora-300 w-full flex items-center pt-36 pb-20 md:pb-10 md:pt-40 lg:pt-48  font-worksans">
                <div className="mx-auto px-6 md:px-12 lg:px-14 xl:px-28 text-center flex flex-col">
                    <div className="order-2 md:order-1">
                        <h1 className="lg:w-[90%] xl:max-w-[80%] text-white font-semibold text-4xl md:text-5xl 2xl:text-6xl mx-auto font-plusJakarta">
                            Buat Bisnismu Makin Laris dengan Website yang Profesional
                        </h1>

                        <div className="max-w-4xl text-center mx-auto mt-7 md:mt-10">
                            <p className="font-inria text-white text-lg lg:text-xl xl:text-2xl">
                                Punya website itu bukan cuma gaya, tapi cara biar bisnis anda lebih dipercaya. <br />
                                Yuk, online-kan bisnismu sekarang!
                            </p>
                        </div>

                        <button className="px-8 py-4 bg-bombora-600 text-bombora-500 font-semibold rounded-full hover:bg-bombora-400 hover:text-bombora-100 transition duration-300 mt-14 text-lg lg:text-xl active:scale-95 shadow-md">
                            Online-kan Sekarang
                        </button>
                    </div>

                    <div className="order-1 md:order-2 mb-10 md:mb-0 md:mt-8 lg:mt-20">
                        <img src="/hero_image.webp" alt="hero image" className="max-w-[95%] md:max-w-[85%] mx-auto" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Hero