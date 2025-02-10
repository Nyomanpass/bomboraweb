import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
    className="border-b"
  >
    <button
      className="w-full text-left py-5 px-2 flex justify-between items-center"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="md:text-md xl:text-xl font-inter">{question}</span>
      <svg
        className={`w-6 h-6 transform ${isOpen ? "rotate-180" : "rotate-0"} transition-transform`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
    {isOpen && (
      <div className="px-2 py-2 md:text-sm xl:text-lg text-[.9rem] text-gray-600">
        {answer}
      </div>
    )}
  </div>
  );
};

const Faqitems = () => {
  const faqs = [
    {
      question: "Apa itu BomboraWeb?",
      answer: "BomboraWeb adalah perusahaan yang bergerak di bidang pengembangan perangkat lunak untuk kebutuhan bisnis dan pelanggan. Kami menyediakan layanan pembuatan website, aplikasi mobile, dan aplikasi desktop untuk berbagai kebutuhan, baik B2B maupun B2C."
    },
    {
      question: "Bagaimana cara membeli website di BomboraWeb?",
      answer: "Anda dapat membeli website di BomboraWeb dengan beberapa langkah mudah. Pertama, hubungi kami untuk konsultasi awal. Kedua, pilih template website yang telah kami sediakan atau ajukan desain custom sesuai kebutuhan bisnis Anda. Setelah itu, kami akan mulai proses pengembangan hingga website siap digunakan."
    },
    {
      question: "Apa itu template di BomboraWeb?",
      answer: "Template di BomboraWeb adalah desain website siap pakai yang telah kami buat sesuai dengan berbagai jenis bisnis. Misalnya, Template Website Web Ekspor sudah dirancang khusus untuk kebutuhan ekspor. Dengan menggunakan template, Anda hanya perlu mengganti logo, tulisan, dan gambar tanpa harus melalui proses desain yang rumit. Jika ingin mengganti desain di kemudian hari, cukup hubungi tim kami melalui WhatsApp atau Instagram."
    },
    {
      question: "Bagaimana proses pembuatan aplikasi bisnis di BomboraWeb?",
      answer: "Proses pembuatan aplikasi bisnis di BomboraWeb meliputi beberapa tahap: 1) Observasi kebutuhan bisnis, 2) Perancangan konsep dan desain, 3) Pengembangan atau coding, 4) Pengujian aplikasi, 5) Hosting dan deployment, serta 6) Pemeliharaan dan pembaruan berkala. Kami memastikan setiap tahap berjalan optimal agar aplikasi sesuai dengan kebutuhan Anda."
    },
    {
      question: "Apakah BomboraWeb hanya membuat website atau juga aplikasi lainnya?",
      answer: "Selain website, BomboraWeb juga mengembangkan aplikasi mobile dan desktop untuk berbagai kebutuhan bisnis. Kami dapat membangun aplikasi berbasis Android, iOS, serta perangkat lunak berbasis Windows dan macOS."
    },
    {
      question: "Apakah saya bisa mengelola website sendiri setelah jadi?",
      answer: "Tentu! Kami menyediakan panduan atau pelatihan untuk mengelola website Anda sendiri. Jika Anda menggunakan sistem manajemen konten (CMS), Anda bisa memperbarui konten dengan mudah tanpa memerlukan keahlian teknis."
    },
    {
      question: "Apakah BomboraWeb menyediakan layanan maintenance website?",
      answer: "Ya, kami menawarkan layanan maintenance website yang mencakup pembaruan sistem, perbaikan bug, serta dukungan teknis untuk memastikan website tetap berjalan optimal dan aman."
    },
    {
      question: "Bagaimana biaya pembuatan website di BomboraWeb?",
      answer: "Biaya pembuatan website tergantung pada kompleksitas desain, jumlah halaman, fitur yang dibutuhkan, serta waktu pengerjaan. Kami akan memberikan penawaran harga yang jelas dan transparan setelah konsultasi mengenai kebutuhan proyek Anda."
    },
    {
      question: "Apakah BomboraWeb menyediakan jasa desain grafis?",
      answer: "Ya, kami juga menyediakan layanan desain grafis seperti pembuatan logo, brosur, materi pemasaran, serta desain UI/UX untuk memastikan tampilan digital bisnis Anda profesional dan menarik."
    },
    {
      question: "Bagaimana cara memulai proyek pengembangan website atau aplikasi dengan BomboraWeb?",
      answer: "Untuk memulai proyek, cukup hubungi kami untuk konsultasi awal. Kami akan mendiskusikan kebutuhan dan tujuan Anda, memberikan estimasi harga, serta menyusun rencana kerja agar proyek berjalan lancar sesuai harapan."
    }
  ];  


  return (
    <div className="container md:max-w-4xl xl:max-w-5xl mx-auto">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer}/>
      ))}
    </div>
  );
};

export default Faqitems;
