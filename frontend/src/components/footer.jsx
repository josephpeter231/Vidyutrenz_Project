import { FaYoutube, FaTwitter, FaInstagram ,FaLinkedinIn} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bottom-0 justify-center flex flex-col bg-transparent text-white text-center md:flex-row md:space-x-96 " style={{WebkitBackdropFilter: 'blur(3px)', // Apply the blur effect using -webkit-backdrop-filter
    backdropFilter: 'blur(3px)'}}>
     
            <div className=" md:flex  flex items-center justify-center space-x-10 text-base md:text-xl">
                <a  href="https://www.facebook.com/" >
                <FaYoutube />
                </a>
                <a href="https://twitter.com/" >
                <FaTwitter />
                </a>
                <a href="https://www.instagram.com/">
                <FaInstagram />
                </a>
                <a href="https://www.instagram.com/" >
                <FaLinkedinIn />
                </a>
            </div>
            <div className='flex md:justify-center mx-10 text-xs md:text-xs'>
                    <p className='mx-10'>&copy; Copyright 2023</p>
            </div>
            <div className="md: text-xs">
                    <p className='text-xs'>Chennai Institute of Technology</p>
            </div>
            
      
    </footer>
  );
};

export default Footer;