// components/ContactSection.js
import { motion } from 'framer-motion';
import Bodysection1 from './Bodysection1';

const Bodysection6 = () => {
  return (
    <section className="bg-black text-white px-4 py-16">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-8"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white max-w-2xl mx-auto mb-12"
        >
          Have questions or ready to book your stay? Contact us and we'll be happy to assist you.
        </motion.p>
        <div className="max-w-lg mx-auto">
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-800 rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gray-800 rounded"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 bg-gray-800 rounded"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-white text-gray-800 font-bold py-2 px-4 rounded-full hover:bg-gray-300 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Bodysection6;
