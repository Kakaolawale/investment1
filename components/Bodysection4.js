import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Bodysection4 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  
  const sectionVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
  
  }

  return (
    <motion.div
    ref={ref}
    initial="hidden"
    animate={inView ? 'visible' : 'hidden'}
    variants={sectionVariants}
    transition={{ duration: 0.5 }}
    >
    <section className="py-8 px-2">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl tracking-tighter text-white px-2 text-center font-lato font-bold">Incredible Real Time Inspection System</h2>
          <p className="text-white mt-4 text-sm font-lato font-light dark:white text-center px-4 lg:text-left mb-8">
            Our online virtual inspection features smart real time live video inspection system wired on incredible speed, and beautiful simplicity. It's designed to enable your potential clients and fans have a taste of what they intend to get when they finally get up to buy or book your space.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className=" dark:bg-purple-800/50  text-white bg-gray-300/50  backdrop-blur-3xl  opacity-100 p-6 rounded-3xl shadow-md">
            <h3 className="text-xl text-center font-semibold">Virtual Inspections</h3>
            <p className="text-white text-sm mt-2 text-center">
            Our online virtual inspection features smart real time live video inspection system wired incredible speed, and beautiful simplicity. It's designed to enable your potential clients and fans have a taste of what they intend to get when they finally get up to buy or book your space.
            </p>
            <a href="#" className="text-white px-4 text-center items-center dark:bg-orange-600 bg-black p-3 rounded-2xl mt-4 inline-block">Get started</a>
          </div>
          <div className="relative px-2">
              <img
                src='https://res.cloudinary.com/dtajzdkii/image/upload/v1701418645/Product_Archives_-_Michael_Allen_Photography_-_Memphis_Film_Video_-_Commercial_-_Architectural_rtl9cm.jpg' 
                alt="Recommendation 1"
                className="rounded-lg w-full h-auto"
              />
             
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 4.5) 100%)',
                }}
              >
               <h2 className="absolute bottom-8 right-10 text-white text-2xl font-bold">
               The Ovia Luxury
              </h2>
              </div>
            </div>

          {/* Feature 2 */}
          <div className="dark:bg-purple-800/50  text-white bg-gray-300/50  backdrop-blur-3xl  opacity-100 p-6 rounded-3xl shadow-md">
            <h3 className="text-xl font-semibold">Accept Payments</h3>
            <p className="text-white text-sm mt-2">
              Easily receive money from anyone, anywhere in the world via our multitude of secure payment methods.
            </p>
            <a href="#" className="text-white dark:bg-orange-600 bg-black p-3 rounded-2xl mt-4 inline-block">Learn more</a>
          </div>

          {/* Feature 3 */}
          <div className="dark:bg-purple-800/50  text-white bg-gray-300/50  backdrop-blur-3xl  opacity-100 p-6 rounded-3xl shadow-md">
            <h3 className="text-xl font-semibold">Transfers (Payout)</h3>
            <p className="text-white text-sm mt-2">
              Make single or bulk transfers to bank accounts from your Flutterwave dashboard.
            </p>
            <a href="#" className="text-white dark:bg-orange-600 bg-black p-3 rounded-2xl mt-4 inline-block">Learn more</a>
          </div>
        </div>
      </div>
    </section>
    </motion.div>
  );
};

export default Bodysection4;
