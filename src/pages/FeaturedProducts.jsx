import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ================= ANIMATION VARIANTS ================= */

const sectionContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ================= CTA CARD ================= */

function CTA() {
  return (
    <motion.div
      variants={fadeUp}
      className="mt-8 border border-white/10 rounded-xl p-6
                 bg-white/[0.03] flex flex-col sm:flex-row
                 items-center justify-between gap-4"
    >
      <p className="text-gray-300 text-sm sm:text-base">
        Want to learn how this solution can help your organization?
      </p>
      <button
        className="px-6 py-2 rounded-md bg-white text-black
                   font-medium hover:bg-gray-200 transition"
      >
        Request Demo
      </button>
    </motion.div>
  );
}

/* ================= FEATURED PRODUCTS PAGE ================= */

function FeaturedProducts() {
  return (
    <>
      <Navbar />

      <section className="bg-black text-white">

        {/* ================= PAGE HEADER ================= */}
        <motion.div
          variants={sectionContainer}
          initial="hidden"
          animate="show"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8
                     pt-24 pb-16 text-center"
        >
          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
          >
            Featured Products
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-gray-400 max-w-3xl mx-auto
                       text-sm sm:text-lg"
          >
            Enterprise-ready digital solutions designed to improve
            productivity, asset control, and workspace efficiency.
          </motion.p>
        </motion.div>

        {/* ================= PRODUCT 1 ================= */}
        <motion.div
          variants={sectionContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* TEXT */}
            <motion.div variants={fadeUp}>
              <h2 className="text-2xl sm:text-3xl font-semibold">
                Employee Productivity Monitoring
              </h2>

              <p className="mt-6 text-gray-300 text-sm sm:text-lg leading-relaxed">
                Even before Covid-19 accelerated remote work, organizations
                were increasingly adopting tools to measure productivity and
                collaboration. With distributed teams becoming the norm,
                leadership needs clear insights into work patterns and
                performance.
              </p>

              <p className="mt-4 text-gray-300 text-sm sm:text-lg leading-relaxed">
                Our productivity monitoring solution enables organizations to
                make informed, data-driven decisions while maintaining
                transparency, accountability, and operational efficiency.
              </p>

              <CTA />
            </motion.div>

            {/* IMAGE */}
            <motion.div variants={fadeUp} className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                alt="Employee productivity analytics dashboard"
                className="rounded-xl w-full max-w-xl object-cover opacity-90"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* ================= PRODUCT 2 (ZIG-ZAG) ================= */}
        <motion.div
          variants={sectionContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* IMAGE */}
            <motion.div
              variants={fadeUp}
              className="flex justify-center order-last lg:order-first"
            >
              <img
                src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg"
                alt="Asset management system dashboard"
                className="rounded-xl w-full max-w-xl object-cover opacity-90"
              />
            </motion.div>

            {/* TEXT */}
            <motion.div variants={fadeUp}>
              <h2 className="text-2xl sm:text-3xl font-semibold">
                Asset Management
              </h2>

              <p className="mt-6 text-gray-300 text-sm sm:text-lg leading-relaxed">
                Accurate asset tracking is essential for regulatory compliance,
                financial planning, and operational efficiency. Modern
                organizations require a centralized view of both physical and
                digital assets.
              </p>

              <p className="mt-4 text-gray-300 text-sm sm:text-lg leading-relaxed">
                Our next-generation Asset Management Solution manages the
                complete asset lifecycle — from acquisition and depreciation
                to revaluation and disposal — with seamless accounting
                integration.
              </p>

              <CTA />
            </motion.div>
          </div>
        </motion.div>

        {/* ================= PRODUCT 3 ================= */}
        <motion.div
          variants={sectionContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* TEXT */}
            <motion.div variants={fadeUp}>
              <h2 className="text-2xl sm:text-3xl font-semibold">
                Desk Booking Solution
              </h2>

              <p className="mt-6 text-gray-300 text-sm sm:text-lg leading-relaxed">
                Hybrid work has made office space optimization more critical
                than ever. Organizations need clarity on how their physical
                spaces are utilized to avoid inefficiencies and bottlenecks.
              </p>

              <p className="mt-4 text-gray-300 text-sm sm:text-lg leading-relaxed">
                Our Desk Booking Solution enables smart space management by
                providing real-time visibility, structured booking, and
                improved utilization planning across facilities.
              </p>

              <CTA />
            </motion.div>

            {/* IMAGE */}
            <motion.div variants={fadeUp} className="flex justify-center">
              <img
                src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg"
                alt="Desk booking and office space management"
                className="rounded-xl w-full max-w-xl object-cover opacity-90"
              />
            </motion.div>
          </div>
        </motion.div>

      </section>

      <Footer />
    </>
  );
}

export default FeaturedProducts;
