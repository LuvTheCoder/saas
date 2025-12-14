import { motion } from "framer-motion";

import infraImg from "../assets/IT-infrastructure.png";
import securityImg from "../assets/security.png";
import cloudImg from "../assets/cloud.png";
import appImg from "../assets/application.png";

/* ================= ANIMATION ================= */

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const data = [
  { title: "IT Infrastructure", image: infraImg },
  { title: "IT Security", image: securityImg },
  { title: "Cloud Computing", image: cloudImg },
  {
    title: "Applications & Custom Software Development / Integration",
    image: appImg,
  },
];

function ITCapabilities() {
  return (
    <section className="bg-black text-white py-24">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6"
      >
        <div className="text-center text-3xl font-bold mb-[40px]">
            <h1>Anything & Everything in IT required for your Business</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
          {data.map((itemData, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group flex flex-col items-center text-center"
            >
              {/* CIRCLE CARD */}
              <div
                className="relative w-56 h-56 rounded-full overflow-hidden
                           shadow-lg shadow-black/40
                           transition-transform duration-500
                           group-hover:scale-105"
              >
                {/* IMAGE */}
                <img
                  src={itemData.image}
                  alt={itemData.title}
                  className="w-full h-full object-cover"
                />

                {/* OVERLAY */}
                <div
                  className="absolute inset-0
                             bg-black/25
                             group-hover:bg-black/40
                             transition-colors duration-500"
                />

                {/* HOVER TEXT */}
                <div
                  className="absolute inset-0 flex items-center justify-center
                             px-6"
                >
                  <h3
                    className="text-sm sm:text-base font-medium
                               opacity-0 group-hover:opacity-100
                               translate-y-4 group-hover:translate-y-0
                               transition-all duration-500"
                  >
                    {itemData.title}
                  </h3>
                </div>
              </div>

              {/* TITLE BELOW (always visible) */}
              <p className="mt-6 text-sm sm:text-base text-gray-300 max-w-[220px]">
                {itemData.title}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default ITCapabilities;
