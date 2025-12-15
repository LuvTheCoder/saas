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

function AshishChunne() {
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
                src="https://saasinfosolutions.com/wp-content/uploads/2016/06/ashish.png"
                alt="Ashish Chunne"
                className="w-90  rounded-2xl object-cover
                           border border-white/15
                           opacity-90"
              />
            </motion.div>

            {/* CONTENT */}
            <motion.div variants={item}>
              <h1 className="text-3xl sm:text-4xl font-bold">
                Ashish Chunne
              </h1>

              <p className="mt-2 text-gray-400 tracking-wide">
                Founder & CEO
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
                  Ashish Chunne is the Founder & CEO of SAAS Infosolutions and
                  leads the organization’s overall vision, leadership, and
                  strategic direction.
                </p>

                <p>
                  Since founding SAAS Infosolutions in 2015, Ashish has guided
                  the company through continuous innovation, enabling over
                  100+ enterprises to modernize their digital infrastructure.
                </p>

                <p>
                  His leadership philosophy focuses on long-term partnerships,
                  technical excellence, and building future-ready digital
                  ecosystems for enterprises.
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

export default AshishChunne;
