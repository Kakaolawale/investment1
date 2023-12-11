// components/HeroBanner.js
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
  'https://res.cloudinary.com/dtajzdkii/image/upload/v1702293573/Forex_Triple_Hit_rnloeb.jpg',
  'https://res.cloudinary.com/dtajzdkii/image/upload/v1702293572/What_is_Data_Analytics__Could_This_Be_My_Career__crv5oq.jpg',
  'https://res.cloudinary.com/dtajzdkii/image/upload/v1702293572/cryptocurrencyinvestment_nvxnaw.jpg',
  'https://res.cloudinary.com/dtajzdkii/image/upload/v1702293572/General_Equilibrium_hht8ew.jpg',
  'https://res.cloudinary.com/dtajzdkii/image/upload/v1702293572/How_to_Use_Business_Credit_For_Business_Growth___Business_Credit_na2xhz.jpg'
];

const HeroBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageSize, setImageSize] = useState({ width: 150, height: 150 });
  const controls = useAnimation();

  useEffect(() => {
    const transition = async () => {
      await controls.start({ opacity: 0, x: '-100%' });
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      await controls.start({ opacity: 1, x: '0%' });
    };
    const handleResize = () => {
      // Adjust image size based on window width
      const width = window.innerWidth > 768 ? 300 : 150;
      const height = window.innerWidth > 768 ? 300 : 150;
      setImageSize({ width, height });
    };

    // Initial resize on component mount
    handleResize();

    const interval = setInterval(() => {
      transition();
    }, 3000);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <div className="relative bg-black h-screen">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="absolute w-full h-full object-cover"
          style={{
            backgroundImage: `url(${image})`,
            opacity: index === activeIndex ? 1 : 0,
            x: index === activeIndex ? '0%' : '-100%',
            zIndex: index === activeIndex ? 1 : 0,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          animate={controls}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          {/* Dark gradient layer */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4))',
            }}
          ></div>
        </motion.div>
      ))}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
          className="text-white m-8 p-10 text-center tracking-tighter text-3xl font-bold"
        >
          <Image
          src="/images/newwhitepng.png"
          width={imageSize.width}
          height={imageSize.height}
          alt="Kakanda Space"
          className="mr-4"
        />
       
        </motion.div>
      </div>
    </div>
  );
};

export default HeroBanner;

