import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ================= ANIMATION VARIANTS ================= */

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Contact() {
  return (
    <>
      <Navbar />

      <section className="bg-black text-white">

        {/* ================= HEADER ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8
                     pt-24 pb-16 text-center"
        >
          <motion.h1
            variants={item}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
          >
            Get in Touch
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-gray-400 text-sm sm:text-lg"
          >
            Feel Free to Contact Us
          </motion.p>
        </motion.div>

        {/* ================= MAIN SECTION ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* ================= CONTACT INFO + FORM ================= */}
            <motion.div variants={item}>

              {/* CONTACT DETAILS */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-4xl font-semibold mb-4">
                  Contact Persons
                </h3>

                <p className="text-gray-300 text-sm sm:text-base">
                  <span className="text-white text-[17px] font-bold">Ashish Chunne</span><br />
                  📞 9822302098 <br />
                  ✉️ ashish@saasinfosolutions.com
                </p>

                <p className="mt-4 text-gray-300 text-sm sm:text-base">
                  <span className="text-white text-[17px] font-bold">Amit Pote</span><br />
                  📞 7757007291 <br />
                  ✉️ amit@saasinfosolutions.com
                </p>
              </div>

              {/* OFFICE */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                  The Office
                </h3>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Flat No F-10, S No-15/2, Akshay Park,
                  Santosh Nagar, Thergaon,<br />
                  Pune, Maharashtra - 411033
                </p>

                <p className="mt-4 text-gray-300 text-sm sm:text-base">
                  ✉️ sales@saasinfosolutions.com
                </p>
              </div>

              {/* BUSINESS HOURS */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                  Business Hours
                </h3>

                <p className="text-gray-300 text-sm sm:text-base">
                  24x7 <br />
                  Sunday - Closed
                </p>
              </div>

              {/* ================= CONTACT FORM ================= */}
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-6">
                  Send Us a Message
                </h3>

                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-black border border-white/20
                               px-4 py-3 rounded-md
                               text-sm text-white
                               focus:outline-none focus:border-white"
                  />

                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="w-full bg-black border border-white/20
                               px-4 py-3 rounded-md
                               text-sm text-white
                               focus:outline-none focus:border-white"
                  />

                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full bg-black border border-white/20
                               px-4 py-3 rounded-md
                               text-sm text-white
                               focus:outline-none focus:border-white"
                  />

                  <textarea
                    rows="4"
                    placeholder="Your Message"
                    className="w-full bg-black border border-white/20
                               px-4 py-3 rounded-md
                               text-sm text-white
                               focus:outline-none focus:border-white"
                  />

                  <button
                    type="submit"
                    className="mt-2 px-6 py-3 rounded-md
                               bg-white text-black font-medium
                               hover:bg-gray-200 transition cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* ================= LARGE MAP ================= */}
            <motion.div
              variants={item}
              className="w-full h-[520px] rounded-xl overflow-hidden
                         border border-white/10"
            >
              <iframe
                title="SAAS Infosolutions Location"
                src="https://www.google.com/maps?q=Akshay%20Park%20Thergaon%20Pune&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
