// components/HomeSectionWithImages.js
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const images = [
  'https://res.cloudinary.com/dtajzdkii/image/upload/v1701117962/3D_Art_Gallery_exeffq.jpg',
  'https://res.cloudinary.com/dtajzdkii/image/upload/v1701117961/download_15_mgpqkq.jpg',
  'https://res.cloudinary.com/dtajzdkii/image/upload/v1701117961/Futuristic_pdurlb.jpg',
  // Add more image URLs as needed
];

const captions = [
  'Indulge in Luxury',
  'Breathtaking Views',
  'Unmatched Hospitality',
  // Add more captions as needed
];

const Bodysection3 = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  if (inView) {
    controls.start({ opacity: 1, y: 0 });
  }

  return (
    <section ref={ref} className="bg-black px-4 py-16">
      <div className="container rounded-4xl px-4 lg:px-8 mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 2 }}
          className="text-4xl text-white font-bold mb-8"
        >
          Explore Our Paradise
        </motion.h2>
        <div className="relative rounded-xl overflow-hidden h-96">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: index * 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.img
                src={image}
                alt={`Resort Slide ${index + 1}`}
                className="w-full rounded-4xl h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 2, delay: 2 }}
          className="text-white max-w-2xl mx-auto my-12"
        >
          Explore the luxurious amenities and stunning views at The Ovia. Our resort is designed to provide an unforgettable experience for our guests.
        </motion.div>
        <div className="grid grid-cols-3 gap-6">
          {captions.map((caption, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ duration: 2, delay: index * 0.5 + 2.5 }}
              className="text-white text-center"
            >
              <h3 className="text-2xl font-semibold mb-2">{caption}</h3>
              <p className="text-gray-400"></p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bodysection3;
