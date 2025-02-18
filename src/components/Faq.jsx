import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Faq = () => {
      const FAQ = [
            {
                  question: "Kenapa website penting untuk bisnis saya?",
                  answer: "Website adalah wajah digital bisnis Anda yang bisa diakses oleh siapa saja, kapan saja, dan di mana saja. Dengan memiliki website, bisnis Anda akan terlihat lebih profesional, mudah ditemukan oleh calon pelanggan, dan bisa menjangkau pasar yang lebih luas. Website juga membantu meningkatkan kepercayaan pelanggan, memudahkan promosi produk atau layanan, dan bahkan bisa menjadi alat penjualan 24/7. Jadi, jika Anda ingin bisnis makin berkembang di era digital ini, website adalah investasi yang wajib dimiliki!"
            },
            {
                  question: "Apa saja yang saya dapatkan dalam paket website Bombora?",
                  answer: "Setiap paket sudah termasuk domain, hosting, desain responsif, keamanan SSL, dan fitur sesuai pilihan paket. Layanan tambahan seperti SEO atau integrasi khusus tersedia di paket tertentu."
            },
            {
                  question: "Berapa lama waktu pengerjaan website?",
                  answer: "Waktu pengerjaan tergantung pada paket yang dipilih. Starter sekitar 3-5 hari, Growth sekitar 7-10 hari, dan Premium bisa memakan waktu 10-14 hari. Paket Custom bergantung pada fitur yang diinginkan. Kami akan memberikan estimasi waktu pengerjaan yang lebih akurat setelah detail kebutuhan website Anda diketahui."
            },
            {
                  question: "Bagaimana sistem pembayarannya?",
                  answer: "Pembayaran bisa dilakukan dengan transfer bank atau kartu kredit. Untuk pemesanan website, Anda dapat membayar 50% dari harga paket yang anda pilih dan 50% sisanya dapat Anda bayar setelah websitenya selesai."
            },
            {
                  question: "Apakah saya bisa request desain khusus?",
                  answer: "Ya! jika anda tidak menemukan template yang sesuai, kami juga menerima desain khusus sesuai keinginan Anda. Tim kami akan membantu mewujudkan desain website yang sesuai dengan brand dan kebutuhan bisnis Anda."
            },
            {
                  question: "Apa yang terjadi jika website saya sudah lebih dari 1 tahun?",
                  answer: "Anda bisa memperpanjang domain dan hosting website Anda dengan harga yang tercantum pada tiap paket. Jika Anda ingin meningkatkan fitur atau kapasitas website, kami juga menyediakan layanan upgrade paket."
            },
            {
                  question: "Apakah website saya akan aman dari serangan hacker?",
                  answer: "Kami menggunakan keamanan SSL (HTTPS) dan menerapkan standar keamanan terbaik untuk melindungi website Anda."
            }
      ]
      return (
            <>
                  <section className="px-6 md:px-12 lg:px-14 xl:px-28 mt-20 lg:mt-28 font-worksans text-bombora-500">
                        <p className='text-center font-semibold text-bombora-600 md:text-lg xl:text-xl mb-1'>Frequently Ask Question</p>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center ">
                              Pertanyaan Seputar Bombora
                        </h2>
                        <div className="w-full mt-4 md:mt-6 lg:mt-12 lg:w-[80%] mx-auto">
                              {FAQ.map((faq, index) => (
                                    <button key={index} className="group w-full justify-center border-b-2 border-warna-300 py-5 px-2 mt-4 transition-all text-left">
                                          <div className="flex items-center justify-between hover:text-warna-300">
                                                <p className="font-medium md:text-lg w-[88%] group-focus:font-semibold group-focus:text-arifin-400">{faq.question}</p>
                                                <FontAwesomeIcon icon={faChevronDown} className="group-focus:-rotate-90 transition-all" />
                                          </div>
                                          <div className="max-h-0 overflow-hidden transition-[max-height] duration-500 ease-in-out group-focus:max-h-40">
                                                <p className="mt-2 py-3 md:text-lg">
                                                      {faq.answer}
                                                </p>
                                          </div>
                                    </button>
                              ))}
                        </div>
                  </section>
            </>
      );
};
export default Faq;