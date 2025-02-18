
const About = () => {
  return (
    <>
      <div className="font-worksans mx-auto px-6 md:px-12 lg:px-14 xl:px-28 pt-20 md:pt-24 lg:pt-28 xl:pt-32 text-bombora-500">
        <h2 className="text-2xl md:text-3xl lg:text-4xl  max-w-xl font-semibold" >
          Semua Kebutuhan Digital Anda, Kini Ada <span className="text-bombora-600">dalam Satu Tempat</span>
        </h2>

        <div
          className="flex flex-col lg:flex-row md:gap-9 gap-10 lg:gap-16 mt-14"
        >
          <div className="lg:w-1/3">
            <h1 className='font-semibold mb-3 text-xl lg:text-2xl border-t border-bombora-500 pt-7'>Website Development</h1>
            <p className="xl:text-lg">Kami buat website profesional & custom yang gak cuma keren, tapi juga bantu bisnis Anda lebih mudah ditemukan, menarik pelanggan, dan meningkatkan penjualan!</p>
          </div>
          <div className="lg:w-1/3">
            <h1 className='font-bold mb-3 text-xl lg:text-2xl border-t border-bombora-500 pt-7'>Marketing Design:</h1>
            <p className="xl:text-lg">Desain kreatif yang bukan cuma menarik, tapi juga menyampaikan pesan bisnis Anda dengan tepat. Brand makin dikenal, penjualan makin naik!</p>
          </div>
          <div className="lg:w-1/3">
            <h1 className='font-bold mb-3 text-xl lg:text-2xl border-t border-bombora-500 pt-7'>Grow online</h1>
            <p className="xl:text-lg">Strategi digital yang tepat untuk menjangkau lebih banyak pelanggan, membangun interaksi, dan mengubah mereka jadi pelanggan setia. Bisnis tumbuh lebih cepat!</p>
          </div>
        </div>
      </div>

    </>
  );
};

export default About;
