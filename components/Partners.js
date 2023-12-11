import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Partners = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  
  const sectionVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
  
  }

  const logos = [
    'https://res.cloudinary.com/dtajzdkii/image/upload/v1701418644/STYLE_LUXURIOUS_SEX_____nabkq2.jpg',
    'https://res.cloudinary.com/dtajzdkii/image/upload/v1701418643/The__Batman_Mansion__By_M_H_Studio_PHOTOS_k2dgam.jpg',
    'https://res.cloudinary.com/dtajzdkii/image/upload/v1701418643/The__Batman_Mansion__By_M_H_Studio_PHOTOS_k2dgam.jpg',
    'https://res.cloudinary.com/dtajzdkii/image/upload/v1701418643/The__Batman_Mansion__By_M_H_Studio_PHOTOS_k2dgam.jpg',
    'https://res.cloudinary.com/dtajzdkii/image/upload/v1701418643/The__Batman_Mansion__By_M_H_Studio_PHOTOS_k2dgam.jpg',
    
  
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const logosPerPage = 1; // Number of logos to show per "nexting"

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 3000); // Adjust the duration (in milliseconds) for automatic sliding

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= logos.length ? 0 : newIndex;
    });
  };

  return (
    <motion.div
    ref={ref}
    initial="hidden"
    animate={inView ? 'visible' : 'hidden'}
    variants={sectionVariants}
    transition={{ duration: 0.5 }}
    >
    <section className='py-8'>
      <div className='container mx-auto'>
        <h2 className='text-2xl px-2 font-lato text-white font-semibold text-center mb-4 '>
          We are trusted by 4 hundred+ businesses & 3 thousand+ individuals
        </h2>
        <div className='flex items-center overflow-x-auto'>
          {logos.map((logo, index) => (
            <div
              key={index}
              className='w-full h-full mx-1'
              style={{
                transform: `translateX(-${currentIndex * 50}px)`, // Adjust the width of logos
                transition: 'transform 0.5s ease',
              }}
            >
              <img src={logo} alt={`Logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
    </motion.div>
  );
};

export default Partners;
