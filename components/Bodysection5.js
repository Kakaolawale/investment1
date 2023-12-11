// components/GallerySection.js
import { motion } from 'framer-motion';

const images = [
  'https://res.cloudinary.com/dtajzdkii/image/upload/v1701117962/3D_Art_Gallery_exeffq.jpg',
  'https://res.cloudinary.com/dtajzdkii/image/upload/v1701117961/download_15_mgpqkq.jpg',
  'https://res.cloudinary.com/dtajzdkii/image/upload/v1701117961/Futuristic_pdurlb.jpg',
  // Add more image URLs as needed
];

const Bodysection5 = () => {
  return (
    <section className="bg-black px-4 py-16">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl text-white font-bold mb-8"
        >
          Explore The Ovia
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white max-w-2xl mx-auto mb-12"
        >
          Take a visual tour of our resort's luxurious amenities and stunning surroundings.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="rounded-md overflow-hidden shadow-md"
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bodysection5;
