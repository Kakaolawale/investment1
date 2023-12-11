import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';




const Video = () => {
  const router = useRouter();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  
  const sectionVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
  
  };

  const handleExploreClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      { /*const user = result.user;
      await setDoc(doc(db, 'users', user.uid),{
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      }); */ }
      router.push('/explorepages/explorespace');
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };
  return (
    <motion.div
    ref={ref}
    initial="hidden"
    animate={inView ? 'visible' : 'hidden'}
    variants={sectionVariants}
    transition={{ duration: 2.5 }}
    >
    <section className="relative px-2 rounded-3xl mb-8 pb-4 pt-4">
      
      <div className="relative lg:h-1/2 m-2 px-2 rounded-3xl">
        <video
          autoPlay
          muted
          loop
          className="w-full mb-10 mt-8 h-full rounded-xl object-cover object-center"
        >
          <source src="https://res.cloudinary.com/dtajzdkii/video/upload/v1701422907/THE_OVIA_LOGO_INTRO_compressed_ietfwa.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute inset-0 mt-20 pt-60 flex flex-col items-center justify-center text-white text-center">
      <p className="text-xm font-cinzel font-thin sm:text-xl md:text-2xl mt-4 pt-20 lg:text-3xl mb-10 ">
          Enjoy Luxury at its  <span className='font-bold text-'>Vital</span> best
        </p>
        <p className="text-xm font-cinzel font-thin sm:text-xl md:text-2xl mt-4 pt-6 lg:text-3xl mb-4 pb-12 px-4">
        Our location across the view of Tucson city, Arizona is a premium property 
        that has afforded us a vantage point over our competitors as we are located 
        close to the city views and rural community, another advantage which attracts 
         locals and visitors alike. We intend to fully utilize our location to full advantage.
        </p>
        
      </div>
    </section>
    </motion.div>
  );
};

export default Video;
