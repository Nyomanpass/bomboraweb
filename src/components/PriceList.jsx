import React from 'react'


const PriceList = () => {
  return (
    <>
     <div className="bg-customLight text-white py-32 px-6">
      <div className="container">
      <h2 className="text-center font-inria text-2xl md:text-3xl font-bold mb-16">
        Pilih Paket yang Sesuai dengan Bisnis Anda
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-6">
        {/* Starter Package */}
        <div className="bg-white text-black px-6 py-14 rounded-xl w-full shadow-lg flex flex-col h-full">
            <p className="text-gray-600 text-sm my-3">Langkah Awal Go Online</p>
            <h3 className="text-3xl mb-1 font-semibold text-footer">Starter</h3>
            <p className="text-4xl font-bold text-footer mb-3">Rp 1.000.000 <span className="text-sm font-normal text-text-color">/ tahun ke-1</span></p>
            <p className="text-gray-600 text-sm mb-8">Perpanjang Rp 000.000 /tahun</p>
            <hr />
            <ul className="text-sm space-y-2 mt-10 mb-10 flex-grow">
                <li>✓ 1 Halaman Website</li>
                <li>✓ 1x Revisi</li>
                <li>✓ Gratis Domain .com (1 tahun)</li>
                <li>✓ Gratis Email Bisnis</li>
                <li>✓ Gratis Hosting (1 GB)</li>
                <li>✓ Gratis SSL</li>
                <li>✓ Mobile Friendly</li>
            </ul>
            <button className="mt-auto w-full bg-button  text-white py-2 rounded-lg font-semibold">
                Pesan Sekarang
            </button>
        </div>


         {/* recomand Package */}
         <div className="bg-footer text-black px-8 py-14 rounded-xl w-full shadow-lg flex flex-col h-full">
            <div className="flex-grow">
                <p className="text-slate-200 text-sm my-3">Lebih Profesional, Lebih Dikenal!</p>
                <h3 className="text-3xl mb-1 font-semibold text-button">Growth</h3>
                <p className="text-4xl font-bold text-button mb-3">Rp 2.500.000 <span className="text-sm font-normal text-slate-200">/ tahun ke-1</span></p>
                <p className="text-slate-200 text-sm mb-8">Perpanjang Rp 000.000 /tahun</p>
                <hr />
                <ul className="text-sm text-white space-y-2 mb-10 mt-10">
                    <li>✓ 3-5 Halaman Website</li>
                    <li>✓ 2x Revisi</li>
                    <li>✓ SEO Basic</li>
                    <li>✓ Gratis Domain .com (1 tahun)</li>
                    <li>✓ Gratis Email Bisnis</li>
                    <li>✓ Gratis Hosting Cepat (10 GB)</li>
                    <li>✓ Gratis SSL</li>
                    <li>✓ Animasi Interaktif</li>
                    <li>✓ Mobile Friendly</li>
                </ul>
            </div>
            <button className="mt-auto w-full bg-button text-white py-2 rounded-lg font-semibold">
                Pesan Sekarang
            </button>
        </div>



        {/* Premium Package */}
        <div className="bg-white text-black px-8 py-14 rounded-xl w-full shadow-lg flex flex-col h-full">
            <div className="flex-grow">
                <p className="text-gray-600 text-sm my-3">Solusi Terbaik untuk Bisnis Anda</p>
                <h3 className="text-3xl mb-1 font-semibold text-footer">Premium</h3>
                <p className="text-4xl font-bold text-footer mb-3">Rp 5.000.000 <span className="text-sm font-normal text-text-color">/ tahun ke-1</span></p>
                <p className="text-gray-600 text-sm mb-8">Perpanjang Rp 000.000 /tahun</p>
                <hr />
                <ul className="text-sm space-y-2  mb-10 mt-10">
                    <li>✓ 6-10 Halaman Website</li>
                    <li>✓ 5x Revisi</li>
                    <li>✓ SEO Advanced</li>
                    <li>✓ Gratis Domain .com /.id (1 tahun)</li>
                    <li>✓ Gratis Email Bisnis</li>
                    <li>✓ Gratis Hosting Cepat (10 GB)</li>
                    <li>✓ Gratis SSL</li>
                    <li>✓ Animasi Interaktif</li>
                    <li>✓ Mobile Friendly</li>
                </ul>
            </div>
            <button className="mt-auto w-full bg-button text-white py-2 rounded-lg font-semibold">
                Pesan Sekarang
            </button>
        </div>


      </div>

      {/* Custom Plan Section */}
      <div className="mt-10 bg-footer px-5 text-black py-10 text-center rounded-xl">
        <h3 className="md:text-2xl font-semibold text-white mb-4">
          Paket Diatas Masih Tidak Cocok Dengan Kebutuhan Anda?
        </h3>
        <p className='text-slate-200 text-md mt-5'>Coba Paket Custom dan Konsultasikan disini <span className='font-bold text-2xl text-button'>Gratis</span></p>
      </div>
      </div>
    </div>
    </>
  )
}

export default PriceList