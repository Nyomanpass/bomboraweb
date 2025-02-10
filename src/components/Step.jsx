
const Step = () => {
    const steps = [
        {
          number: 1,
          title: "Pilih Paket yang Sesuai Dengan Kebutuhan Anda",
          description: "Tentukan paket website yang paling sesuai dengan kebutuhan bisnis Anda. Mulai dari paket simpel hingga custom, kami siap bantu wujudkan website impian Anda.",
          image: "/langkah1.png",
          reverse: true,
        },
        {
          number: 2,
          title: "Konsultasikan Kebutuhan Website Anda",
          description: "Diskusikan ide dan kebutuhan website anda bersama tim kami. Kami akan memberikan saran terbaik agar website anda bisa maksimal mendukung bisnis.",
          image: "/langkah2.png",
          reverse: false,
        },
        {
          number: 3,
          title: "Lakukan Pemesanan dan Pembayaran",
          description: "Lakukan pemesanan dan pembayaran awal sesuai kesepakatan. Kami akan segera memperoses pesanan anda setelah pembayaran diterima.",
          image: "/langkah3.png",
          reverse: true,
        },
        {
          number: 4,
          title: "Kirimkan Konten & Materi Website",
          description: "Kirimkan materi atau konten yang dibutuhkan untuk website anda. seperti text, gambar, atau logo. Tim kami akan mengolahnya menjadi webiste yang menarik dan profesional.",
          image: "/langkah4.png",
          reverse: false,
        },
        {
          number: 5,
          title: "Website Anda Akan Diproses Sesuai Kesepakatan",
          description: "Tim kami akan mengerjakan website anda dengan detail dan presisi. Anda bisa pantau progresnya dan memberikan feedback jika diperlukan.",
          image: "/langkah5.png",
          reverse: true,
        },
        {
          number: 6,
          title: "Dukungan dan Pemeliharaan",
          description: "Kami tetap mendukung Anda dengan layanan pemeliharaan dan pembaruan jika dibutuhkan. Setelah website selesai dibuat, kami memastikan bahwa situs tetap berjalan dengan optimal, aman, dan selalu up-to-date. ",
          image: "/langkah6.png",
          reverse: false,
        },
      ];
  return (
    <section className="py-36 px-6 md:px-20">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-semibold">
          <span className="text-text-color">Langkah Simpel untuk Punya </span>
          <span className="text-yellow-500">Website Profesional</span>
        </h2>
        <p className="text-text-color text-sm md:text-xl mt-5 max-w-2xl mx-auto mb-36">
          Proses pesan website di Bombora gampang banget! Cukup ikuti 6 langkah simpel ini, dan website profesional Anda siap membantu bisnis makin berkembang.
        </p>
      </div>
        {/* Steps */}
        <div className="container">
            <div className="flex w-full flex-col gap-6 ">
                {steps.map((step, index) => (
                    <div
                    key={index}
                    className={`flex mx-auto md:gap-x-56 flex-col md:flex-row items-center justify-around gap-8 ${step.reverse ? 'md:flex-row-reverse' : ''}`}
                >
          
                    {/* Gambar */}
                    <img src={step.image} alt={`Langkah ${step.number}`} className="w-[400px] md:w-[460px] h-auto" />

                    {/* Teks */}
                    <div className="flex items-start">
                         <span className="text-4xl font-bold text-purple-700 mr-4">{step.number}</span>
                        <div className="max-w-lg">
                            <div>
                                <h3 className="font-bold text-text-color text-md md:text-3xl">{step.title}</h3>
                                <p className="text-gray-600 text-sm md:text-md mt-1">{step.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Step;
