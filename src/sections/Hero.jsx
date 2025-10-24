import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-6"
    >
      <div className="max-w-3xl text-center">
        {/* Animated Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span className="text-blue-400">Sanjeev</span>{" "}
          <span className="wave-hand">👋</span>
        </motion.h1>

        {/* Animated Subtext */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          B.E. Computer Engineer | University of Mumbai <br />
          Passionate about solving problems and developing efficient, high-performance software solutions.
        </motion.p>

        {/* Animated Buttons */}
        <motion.div
          className="flex justify-center gap-4 flex-wrap"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.a
            href="https://drive.google.com/file/d/16oYW0jHYGQ7DUyqB17pam7gi_iIwJfCd/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg transition"
          >
            <FaDownload className="text-lg" />
            View Resume
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/sanjeevk1964"
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="inline-flex items-center gap-2 border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-medium transition"
          >
            <FaLinkedin className="text-blue-500" />
            LinkedIn
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
