import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.avif";
import img3 from "../assets/img3.avif";
import img4 from "../assets/img4.avif";

const images = [img1, img2, img3, img4];

// Text animation variants
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

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* Background Image */}
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[index]})` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full max-w-md sm:max-w-2xl lg:max-w-4xl text-center text-white"
          >

            <motion.h1
              variants={item}
              className="text-2xl sm:text-4xl lg:text-6xl font-bold leading-snug sm:leading-tight"
            >
            
              <span className="block mt-2 text-gray-200">
                SAAS Infosolutions
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-4 sm:mt-6 text-sm sm:text-lg lg:text-xl text-gray-300"
            >
              We design and develop reliable software solutions that help
              businesses grow, innovate, and lead in the digital era.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-6 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
            >
              

              <div className="flex mx-auto">
                <button className="w-full sm:w-auto border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
                  <Link to="/about">Know More</Link>
                </button>
              </div>
            </motion.div>

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Hero;
