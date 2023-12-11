import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';



const Footer = () => {
  return (
    
    <footer className="dark:bg-black bg-white text-black dark:text-white py-10 flex-shrink-0">
      
      <div className="container mx-auto px-10 flex flex-col md:flex-row md:justify-between md:items-center items-center">
       
        <div className="mx-8 px-10 flex flex-col space-y-4 mb-6 md:mb-0 text-center"> 
          <p className='text-estatelinkyellow mx-8 font-bold'>Get in Touch</p>
          <div className="text-orange-600 flex justify-between space-x-4">
    <FaFacebook className="text-2xl" />
    <FaTwitter className="text-2xl" />
    <FaInstagram className="text-2xl" />
    <FaLinkedin className="text-2xl" />
  </div>
          
          <p className='mx-8'>hi@theovia.com</p>
        </div>
        
        
        <div className="mx-8 px-10 flex my-4 flex-col  md:w-1/2 text-center"> {/* This is the second div to wrapp the Learn More */}
          <p className='text-orange-600 mx-8 font-bold'>Learn More</p>
          <a className='mx-8' href="#">About</a>
          <a className='mx-8' href="#">The Ovia Tuscon</a>
          <a className='mx-8' href="#">The Ovia Abuja</a>
          <a className='mx-8' href="#">The Abuja</a>
          <a className='mx-8' href="#">Team</a>
          <a className='mx-8' href="#">Partners</a>
        </div>
        
    
        <div className="mx-8 px-10 flex my-4 flex-col  md:w-1/2 text-center">
        <p className='text-estatelinkyellow mx-8 font-bold'>Newsletter</p>
          <p className="mx-8 mb-4">Subscribe to our newsletter to get updates on Kakanda stories and services weekly.</p>
          <form className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-1">
            <input
              type="email"
              placeholder="Enter your email address"
              className="mx-8 border border-adainyellow px-2 py-1 rounded w-full md:w-auto"
            />
            <button
              type="submit"
              className="mx-8 bg-orange-600 font-bold text-estatelinkblack px-2 py-2 rounded"
            >
              Subscribe
            </button>
          </form>
          <h2 className='text-center mt-4'>Website Developed by <span className='font-bold'>© Space1 Tech</span></h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
