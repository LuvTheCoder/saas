import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

function AmitPote() {
  return (
    <>
      <Navbar />

      <section className="bg-black text-white min-h-screen">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-6xl mx-auto px-6 py-24"
        >
          {/* SIDE BY SIDE WRAPPER */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

            {/* IMAGE */}
            <motion.div
              variants={item}
              className="flex justify-center items-center"
            >
              <img
                src="https://saasinfosolutions.com/wp-content/uploads/2016/06/amit-pote.png"
                alt="Amit Pote"
                className="w-90 rounded-2xl object-cover
                           border 
                           opacity-90"
              />
            </motion.div>

            {/* CONTENT */}
            <motion.div variants={item}>
              <h1 className="text-3xl sm:text-4xl font-bold">
                Amit Pote
              </h1>

              <p className="mt-2 text-gray-400 tracking-wide">
                Director – Business & Strategy
              </p>

              {/* Socials */}
              <div className="mt-4 flex gap-5 text-gray-400 text-lg">
                <FaLinkedinIn className="hover:text-white transition cursor-pointer" />
                <FaTwitter className="hover:text-white transition cursor-pointer" />
                <FaInstagram className="hover:text-white transition cursor-pointer" />
              </div>

              {/* Divider */}
              <div className="mt-6 h-px w-20 bg-white/10" />

              {/* Bio */}
              <div className="mt-6 space-y-5 text-gray-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Amit is the Director – Sales & Strategy and is responsible
                  for bringing strategic changes required in business.
                  He holds a Bachelor’s degree in Technology and a Master’s
                  degree in Administration.
                </p>

                <p>
                  With over 16+ years of experience across multiple roles,
                  Amit has developed a strong understanding of market dynamics
                  and evolving business needs.
                </p>

                <p>
                  His vision is to bridge the gap between what businesses
                  truly need and the most suitable technology-driven solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}

export default AmitPote;
