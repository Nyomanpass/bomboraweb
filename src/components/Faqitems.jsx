
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const FAQItem = () => {

  return (
    <>
      <section className="py-8 mt-10 text-arifin-500">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-lora text-arifin-500 font-semibold">
          Frequently Asked Questions
        </h2>
        <div className="w-full mt-4 lg:w-[80%] mx-auto">
          <button className="group w-full justify-center border-b-2 border-warna-300 py-5 px-2 mt-4 transition-all text-left">
            <div className="flex items-center justify-between hover:text-warna-300">
              <p className="font-medium md:text-lg w-[88%] group-focus:font-semibold group-focus:text-arifin-400">What types of batik do you sell?</p>
              <FontAwesomeIcon icon={faChevronRight} className="group-focus:rotate-90 transition-all" />
            </div>
            <div className="max-h-0 overflow-hidden transition-[max-height] duration-500 ease-in-out group-focus:max-h-40">
              <p className="mt-2 py-3">
                We specialize in stamped batik (batik cap) and offer a wide range of patterns and colors. You can also request custom designs based on your preferences or specific categories to suit your needs.
              </p>
            </div>
          </button>
          <button className="group w-full justify-center border-b-2 border-warna-300 py-5 px-2 mt-4 transition-all text-left">
            <div className="flex items-center justify-between hover:text-warna-300">
              <p className="font-medium md:text-lg w-[88%] group-focus:font-semibold group-focus:text-arifin-400">Do you offer wholesale prices?</p>
              <FontAwesomeIcon icon={faChevronRight} className="group-focus:rotate-90 transition-all" />
            </div>
            <div className="max-h-0 overflow-hidden transition-[max-height] duration-500 ease-in-out group-focus:max-h-40">
              <p className="mt-2 py-3">
                Yes, we provide competitive wholesale prices for bulk orders. Please contact us for special pricing and customization options.
              </p>
            </div>
          </button>
          <button className="group w-full justify-center border-b-2 border-warna-300 py-5 px-2 mt-4 transition-all text-left">
            <div className="flex items-center justify-between hover:text-warna-300">
              <p className="font-medium md:text-lg w-[88%] group-focus:font-semibold group-focus:text-arifin-400">Can I request custom batik designs?</p>
              <FontAwesomeIcon icon={faChevronRight} className="group-focus:rotate-90 transition-all" />
            </div>
            <div className="max-h-0 overflow-hidden transition-[max-height] duration-500 ease-in-out group-focus:max-h-40">
              <p className="mt-2 py-3">
                Absolutely! We accept custom batik orders based on your desired patterns, colors, and fabric types. Reach out to us to discuss your requirements.
              </p>
            </div>
          </button>
          <button className="group w-full justify-center border-b-2 border-warna-300 py-5 px-2 mt-4 transition-all text-left">
            <div className="flex items-center justify-between hover:text-warna-300">
              <p className="font-medium md:text-lg w-[88%] group-focus:font-semibold group-focus:text-arifin-400">How can I place an order?</p>
              <FontAwesomeIcon icon={faChevronRight} className="group-focus:rotate-90 transition-all" />
            </div>
            <div className="max-h-0 overflow-hidden transition-[max-height] duration-500 ease-in-out group-focus:max-h-40">
              <p className="mt-2 py-3">
                You can place an order through our website, WhatsApp, or email. Simply browse our catalog, choose your desired products, and contact us for payment and shipping details.
              </p>
            </div>
          </button>
        </div>
      </section>
    </>
  );
};


export default Faqitems;
