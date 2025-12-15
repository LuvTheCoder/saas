import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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

// Professional stagger for "What We Do Not Do"
const listContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const listItem = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

function About() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <section className="bg-black text-white">

        {/* ================= ABOUT INTRO ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-28"
        >
          <motion.h2
            variants={item}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-14"
          >
            SAAS Infosolutions
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* TEXT */}
            <motion.div variants={item}>
              <p className="text-gray-300 text-sm sm:text-lg leading-relaxed">
                As the world has embarked on the innovative journey of digital
                transformation, disruptive technologies are becoming extremely
                prevalent across almost every sector. Organizations are
                increasingly seeking ways to integrate their vital services and
                processes into a unified stack. System integration enables
                businesses to align software and hardware into a consolidated,
                efficient environment.
              </p>

              <p className="mt-6 text-gray-300 text-sm sm:text-lg leading-relaxed">
                Started in 2015, SAAS Infosolutions helps organizations utilize
                modernized integration to address the changing outlook of the
                digital space. We are one of the most promising and innovative
                system integration partners to 100+ clients during their
                transformation journey — enabling them to become digital
                predators rather than digital prey.
              </p>

              <p className="mt-6 text-gray-300 text-sm sm:text-lg leading-relaxed">
                We deal in a wide range of tools, software, hardware,
                applications, platforms, and services to provide end-to-end
                reliable solutions to our clients.
              </p>
            </motion.div>

            {/* IMAGE */}
            <motion.div variants={item} className="flex justify-center">
              <img
                src="https://images.pexels.com/photos/1054397/pexels-photo-1054397.jpeg"
                alt="Enterprise system integration infrastructure"
                className="rounded-xl w-[350px] max-w-xl object-cover opacity-90"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* ================= WHAT WE DO NOT DO ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <motion.h3
            variants={item}
            className="text-2xl sm:text-3xl font-semibold text-center"
          >
            <span className="text-gray-400">What Not</span> We Do?
          </motion.h3>

          <motion.p
            variants={item}
            className="mt-4 text-gray-400 text-center max-w-3xl mx-auto"
          >
            To maintain focus and deliver excellence, we intentionally do not
            operate in the following areas.
          </motion.p>

          <motion.div
            variants={listContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {[
              "Cloud",
              "Security",
              "Infrastructure",
              "Computing",
              "Server",
              "Storage",
              "Passive Networking",
              "Active Networking",
              "Wireless Networking",
              "Facility Management",
              "Hardware",
              "Datacenter",
              "Business Continuity Planning",
              "Audit",
            ].map((text, i) => (
              <motion.div
                key={i}
                variants={listItem}
                className="border border-white/10 rounded-lg p-4 text-center
                           bg-white/[0.02]
                           hover:border-white/30 hover:bg-white/[0.06]
                           transition-all duration-300"
              >
                <p className="text-sm sm:text-base text-gray-300">
                  {text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ================= MANAGEMENT TEAM ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
        >
          <motion.h3
            variants={item}
            className="text-2xl sm:text-3xl font-semibold text-center"
          >
            Management Team
          </motion.h3>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Founder */}
            <motion.div
              variants={item}
              onClick={() => navigate("/member/ashish-chunne")}
              className="cursor-pointer text-center border border-white/10 rounded-xl
                         p-8 hover:border-white/30 hover:bg-white/5 transition"
            >
              <img
                src="https://saasinfosolutions.com/wp-content/uploads/2016/06/ashish.png"
                alt="Ashish Chunne"
                className="mx-auto rounded-full w-40 h-40 object-cover"
              />

              <h4 className="mt-6 text-xl font-semibold">Ashish Chunne</h4>
              <p className="mt-1 text-sm text-gray-400">Founder</p>

              <p className="mt-3 text-gray-400 text-sm">
                Ashish is the Founder & CEO of SAAS Infosolutions. He is responsible for overall Leadership & Management of the company...
              </p>

              <div className="mt-4 flex justify-center gap-4 text-gray-400">
                <FaLinkedinIn className="hover:text-white" />
                <FaTwitter className="hover:text-white" />
                <FaInstagram className="hover:text-white" />
              </div>
            </motion.div>

            {/* Director */}
            <motion.div
              variants={item}
              onClick={() => navigate("/member/amit-pote")}
              className="cursor-pointer text-center border border-white/10 rounded-xl
                         p-8 hover:border-white/30 hover:bg-white/5 transition"
            >
              <img
                src="https://saasinfosolutions.com/wp-content/uploads/2016/06/amit-pote.png"
                alt="Amit Pote"
                className="mx-auto rounded-full w-40 h-40 object-cover"
              />

              <h4 className="mt-6 text-xl font-semibold">Amit Pote</h4>
              <p className="mt-1 text-sm text-gray-400">Director</p>

              <p className="mt-3 text-gray-400 text-sm">
                Amit is the Director-Sales & Strategy & is responsible for bringing strategies changes required in business...
              </p>

              <div className="mt-4 flex justify-center gap-4 text-gray-400">
                <FaLinkedinIn className="hover:text-white" />
                <FaTwitter className="hover:text-white" />
                <FaInstagram className="hover:text-white" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}

export default About;
