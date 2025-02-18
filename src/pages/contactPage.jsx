import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import emailjs from 'emailjs-com';
import { useRef } from "react";

const ContactPage = () => {
   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_orto5aq', 'template_xokj9bf', form.current, 'EyCwDiqTTPBUtgyK8')
         .then((result) => {
            console.log(result.text);
            alert('Message sent successfully!');
         }, (error) => {
            console.log(error.text);
            alert('Failed to send message, please try again.');
         });
   }

   return (
      <>
         <Navbar2 />
         <div className='text-bombora-500 pt-40 pb-20  font-worksans px-6 md:px-12 lg:px-14 xl:px-28 flex flex-col lg:flex-row justify-center items-center gap-12'>
            <div className="order-2 lg:order-1 lg:w-1/2 xl:w-[40%]">
               <div className="mb-10">
                  <h1 className="text-4xl xl:text-5xl font-semibold mb-2 text-bombora-300">Get In Touch</h1>
                  <p className="text-lg">Your ideas, our expertise, Let&apos;s Talk</p>
               </div>
               <form ref={form} onSubmit={sendEmail}>
                  <div>
                     <label htmlFor="from_ame">Name</label>
                     <input type="text" name="from_name" required className="bg-bombora-100 border-bombora-500/20 mt-2 w-full px-4 py-2 border  rounded-md focus:outline-bombora-300" />
                  </div>
                  <div className="flex gap-4 mt-4">
                     <div className="w-1/2">
                        <label htmlFor="from_email">Email</label>
                        <input type="email" name="from_email" required className="mt-2 w-full px-4 py-2 border bg-bombora-100 border-bombora-500/20  rounded-md focus:outline-bombora-300" />
                     </div>
                     <div className="w-1/2">
                        <label htmlFor="from_phone">Phone</label>
                        <input type="number" name="from_phone" required className="mt-2 w-full px-4 py-2 border bg-bombora-100 border-bombora-500/20  rounded-md focus:outline-bombora-300" />
                     </div>
                  </div>
                  <div className=" mt-4">
                     <label htmlFor="message">Message</label>
                     <textarea name="message" required className="mt-2 w-full px-4 py-7 border bg-bombora-100 border-bombora-500/20  rounded-md focus:outline-bombora-300" rows="5" />
                  </div>
                  <button type="submit" className="mt-10 bg-bombora-600 text-bombora-300 w-full py-3 rounded-lg font-semibold">Send</button>
               </form>
            </div>
            <div className="order-1 lg:order-2 lg:w-1/2">
               <img src="get_in_touch.webp" alt="contact icon" className="w-[90&] md:w-[60%] lg:w-[85%] mx-auto" />
            </div>
         </div>
         <Footer />
      </>
   );
};

export default ContactPage;
