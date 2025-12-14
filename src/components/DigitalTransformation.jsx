import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function DigitalTransformation() {
  return (
    <section className="bg-black text-white py-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* BLOCK 1 */}
          <motion.div variants={fadeUp} className="group">
            <div className="relative overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                alt="Digital Transformation"
                className="w-full h-64 object-cover
                           transition-transform duration-700
                           group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div
                className="absolute inset-0 bg-black/60
                           flex items-center justify-center
                           opacity-0 group-hover:opacity-100
                           transition-opacity duration-500"
              >
                <h3
                  className="text-2xl font-semibold
                             translate-y-6 group-hover:translate-y-0
                             opacity-0 group-hover:opacity-100
                             transition-all duration-500"
                >
                  Digital Transformation
                </h3>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Digital initiatives help organizations operate faster,
                smarter, and more efficiently while enabling consistent,
                data-driven decision making.
              </p>
            </div>
          </motion.div>

          {/* BLOCK 2 */}
          <motion.div variants={fadeUp} className="group">
            <div className="relative overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Innovation and Niche Solutions"
                className="w-full h-64 object-cover
                           transition-transform duration-700
                           group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div
                className="absolute inset-0 bg-black/60
                           flex items-center justify-center
                           opacity-0 group-hover:opacity-100
                           transition-opacity duration-500"
              >
                <h3
                  className="text-2xl font-semibold
                             translate-y-6 group-hover:translate-y-0
                             opacity-0 group-hover:opacity-100
                             transition-all duration-500"
                >
                  Innovation & Niche Solutions
                </h3>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Innovation and niche solutions uncover hidden business
                opportunities and address critical organizational pain
                points.
              </p>
            </div>
          </motion.div>

        </div>

        {/* SUPPORTING TEXT */}
        <motion.div variants={fadeUp} className="mt-24 max-w-5xl mx-auto">
          <p className="text-gray-300 text-sm sm:text-lg leading-relaxed">
            Enterprise IT environments grow complex as new technologies are
            adopted. We help organizations integrate traditional systems with
            innovative solutions for better visibility and smarter decisions.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}

export default DigitalTransformation;
