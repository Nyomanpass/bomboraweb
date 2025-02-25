
const Step = () => {
  const steps = [
    {
      number: 1,
      title: "Pilih Paket dan Template yang Sesuai Dengan Kebutuhan Anda",
      description: "Tentukan paket website yang paling sesuai dengan kebutuhan bisnis Anda. Anda juga dapat memilih salah satu template yang kami sediakan atau ajukan desain custom kepada kami. ",
      image: "/step_1.webp",
      reverse: true,
    },
    {
      number: 2,
      title: "Konsultasikan Kebutuhan Website Anda",
      description: "Diskusikan ide dan kebutuhan website anda bersama tim kami. Kami akan memberikan saran terbaik agar website anda bisa maksimal mendukung bisnis Anda. Anda juga bisa memilih desain website yang sudah kami sediakan.",
      image: "/step_2.webp",
      reverse: false,
    },
    {
      number: 3,
      title: "Lakukan Pemesanan dan Pembayaran",
      description: "Lakukan pemesanan dan pembayaran awal sesuai kesepakatan. Kami akan segera memperoses pesanan anda setelah pembayaran diterima.",
      image: "/step_3.webp",
      reverse: true,
    },
    {
      number: 4,
      title: "Kirimkan Konten & Materi Website",
      description: "Kirimkan materi atau konten yang dibutuhkan untuk website anda. seperti text, gambar, atau logo. Tim kami akan mengolahnya menjadi webiste yang menarik dan profesional.",
      image: "/step_4.webp",
      reverse: false,
    },
    {
      number: 5,
      title: "Website Anda Akan Diproses Sesuai Kesepakatan",
      description: "Tim kami akan mengerjakan website anda dengan detail dan presisi. Anda bisa pantau progresnya dan memberikan feedback jika diperlukan.",
      image: "/step_5.webp",
      reverse: true,
    },
    {
      number: 6,
      title: "Selamat! Website Anda Siap untuk Online!",
      description: "Setelah website selesai dibuat, kami memastikan bahwa website tetap berjalan dengan optimal, aman, dan selalu up-to-date. ",
      image: "/step_6.webp",
      reverse: false,
    },
  ];

  return (
    <>
      <section className="px-6 md:px-12 lg:px-14 xl:px-28 py-24 md:py-28 font-worksans bg-bombora-100 text-bombora-500">
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">6 Langkah Simpel Untuk Punya <span className="text-bombora-600">Website Profesional</span></h2>
          <p className="mt-4 md:mt-8 md:text-lg lg:text-xl max-w-4xl mx-auto">Proses pesan website di Bombora gampang banget, loh! Cukup ikuti 6 langkah ini, dan website profesional Anda siap membantu bisnis makin berkembang</p>
        </div>
        {/* Steps */}
        <div className="flex w-full flex-col gap-12 lg:w-[90%] mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10 group">
              <div className={`w-full lg:w-1/2 ${step.reverse ? "lg:order-2" : ""}`}>
                <img src={step.image} alt={step.title} className="w-full xl:max-w-2xl group-hover:scale-105 transition duration-300" />
              </div>
              <div className="w-full lg:w-1/2 flex gap-3 md:gap-5 lg:mt-10">
                <p className="text-5xl xl:text-6xl font-semibold text-bombora-100 text-stroke mt-2 md:mt-1">
                  {step.number}
                </p>
                <div>
                  <h3 className="text-2xl font-semibold lg:w-3/4">{step.title}</h3>
                  <p className="mt-4 text-pretty md:text-lg">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Step;
