import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Bodysection1 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  
  const sectionVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
  
  }

  const foodItems = [
    {
      id: 1,
      name: 'Private Jets',
      image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1701418065/aston_martin_unveils_tower_of_luxury_residences_along_the_coast_of_miami_tovodr.jpg',
      description: 'This also include creating and implimenting community projects that benefit the',
      price: 12.99,
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Luxury Mansions',
      image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1701418050/0c34b12e-f183-4686-ae9e-451858ffb244_vge8fu.jpg',
      description:'This also include creating and implimenting community projects that benefit the',
      price: 9.99,
      rating: 4.2,
    },
    {
      id: 3,
      name: 'Private Yatch',
      image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1701418049/Gentleman_Wishes_yf2gdd.jpg',
      description: 'This also include creating and implimenting community projects that benefit the',
      price: 18.99,
      rating: 4.7,
    },
    {
      id: 4,
      name: 'Luxury Cars',
      image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1701418046/infact_studio_challenges_new_delhi_s_residential_landscape_with_a_lightweight_curved_fa%C3%A7ade_lxgnyf.jpg',
      description: 'This also include creating and implimenting community projects that benefit the',
      price: 18.99,
      rating: 4.7,
    },
    {
      id: 5,
      name: 'Short Stays',
      image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1701418046/2023_BMW_CAR___Car_aesthetic___Cool_cars___car_wallpapers_1_uufrwi.jpg',
      description: 'This also include creating and implimenting community projects that benefit the',
      price: 18.99,
      price: 18.99,
      rating: 4.7,
    },
    {
      id: 6,
      name: 'Flights',
      image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1701418039/Private_jet___luxury_lifestyle_nc6gjv.jpg',
      description: 'This also include creating and implimenting community projects that benefit the',
      price: 18.99,
      price: 18.99,
      rating: 4.7,
    },
    {
      id: 7,
      name: 'Private Escorts',
      image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1701418039/%E6%96%B0%E7%AF%89%E4%BD%8F%E5%AE%85%E3%81%AE%E5%A4%96%E8%A6%B3%E3%82%A2%E3%82%A4%E3%83%87%E3%82%A3%E3%82%A2%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA_Vo2_%E3%83%A2%E3%83%80%E3%83%B3%E3%81%AA%E7%AE%B1%E5%9E%8B%E3%83%88%E3%83%AC%E3%83%B3%E3%83%89%E5%A4%96%E8%A6%B3%E3%81%AE%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E4%BE%8B_10%E9%81%B8_%E3%81%AE%E7%94%BB%E5%83%8F_m3jrxh.jpg',
      description: 'This also include creating and implimenting community projects that benefit the',
      price: 18.99,
      price: 18.99,
      rating: 4.7,
    },
    {
      id: 7,
      name: 'Luxury Hotels',
      image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1701117962/3D_Art_Gallery_exeffq.jpg',
      description: 'This also include creating and implimenting community projects that benefit the',
      price: 18.99,
      price: 18.99,
      rating: 4.7,
    },
    {
      id: 7,
      name: 'Luxury Apartments',
      image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1701418702/Young_Sophisticated_Luxury_helbau.jpg',
      description: 'This also include creating and implimenting community projects that benefit the',
      price: 18.99,
      price: 18.99,
      rating: 4.7,
    },
    {
      id: 7,
      name: 'Luxury Resorts',
      image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1701418652/0c34b12e-f183-4686-ae9e-451858ffb244_rwjore.jpg',
      description: 'This also include creating and implimenting community projects that benefit the',
      price: 18.99,
      price: 18.99,
      rating: 4.7,
    },
  ];

  return (
    <motion.div
    ref={ref}
    initial="hidden"
    animate={inView ? 'visible' : 'hidden'}
    variants={sectionVariants}
    transition={{ duration: 2.5 }}
    >
      <h1 className='text-white text-center pt-20 py-4 font-bold text-4xl'>Expression of Excellence</h1>
    <Carousel className='bg-black pt-8' autoPlay infiniteLoop interval={5000} showStatus={false} showThumbs={false}>
      {foodItems.map((item) => (
        <div key={item.id} className="mx-2 lg:mx-8 lg:px-10 rounded-lg shadow-md">
          
          <img
            src={item.image}
            alt={item.name}
            className="object-cover w-full h-96 rounded-t-lg"
          />
          <div
                className="absolute h-96 inset-0"
                style={{
                  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 4.5) 100%)',
                }}
              ></div>
          <div className="p-4 bg-black">
            <h2 className="text-xl font-bold text-white mb-2">{item.name}</h2>
            <p className="text-white px-6 mb-4">{item.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-white font-medium">N{item.price}</span>
              <div className="flex items-center">
                <span className="text-orange-600 mr-1">&#9733;</span>
                <span className="text-white">{item.rating}</span>
              </div>
              
            </div>
          </div>
        </div>
      ))}
    </Carousel>
    </motion.div>
  );
};

export default Bodysection1;
