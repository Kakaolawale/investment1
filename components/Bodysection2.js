// components/HomeSection.js
import { motion, useAnimation } from 'framer-motion';
import { FaBed, FaSwimmingPool, FaCocktail, FaWifi } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const services = [
    { id: 1, icon: <FaBed />, title: 'Luxurious Accommodation', description: 'Experience the epitome of luxury in our stylish and comfortable rooms.' },
    { id: 2, icon: <FaSwimmingPool />, title: 'Infinity Pool', description: 'Relax and unwind by our breathtaking infinity pool with panoramic views.' },
    { id: 3, icon: <FaCocktail />, title: 'Exquisite Dining', description: 'Indulge in a culinary journey with our world-class chefs and diverse menu.' },
    { id: 4, icon: <FaWifi />, title: 'High-speed Wi-Fi', description: 'Stay connected with high-speed Wi-Fi, available throughout the resort.' },
  ];
  

  const Bodysection2 = () => {
    const h2Controls = useAnimation();
    const pControls = useAnimation();
    const [h2Ref, h2InView] = useInView();
    const [pRef, pInView] = useInView();
  
    if (h2InView) {
      h2Controls.start({ opacity: 1, y: 0 });
    }
  
    if (pInView) {
      pControls.start({ opacity: 1, y: 0 });
    }
  
    return (
      <section className="bg-black px-4 pt-4 mt-4 py-16">
        <div className="container mx-auto pt-10 mt-20 text-center">
          <motion.h2
            ref={h2Ref}
            initial={{ opacity: 0, y: 50 }}
            animate={h2Controls}
            transition={{ duration: 2 }}
            className="text-4xl text-white font-bold mb-4"
          >
            Experience Unmatched Luxury
          </motion.h2>
          <motion.p
            ref={pRef}
            initial={{ opacity: 0, y: 50 }}
            animate={pControls}
            transition={{ duration: 2, delay: 0.5 }}
            className="text-white max-w-2xl mx-auto mb-12"
          >
            Immerse yourself in a world of sophistication and unparalleled hospitality. Our resort is designed to provide you with a truly luxurious experience.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-8 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8, delay: service.id * 0.2 }}
                className="bg-gray-800 backdrop-blur-3xl p-6 rounded-md shadow-md"
              >
                <div className="text-lg mb-4 text-gray-400 text-center flex justify-center items-center">{service.icon}</div>
                <h3 className="text-xl text-white font-semibold mb-2">{service.title}</h3>
                <p className="text-white">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Bodysection2;