import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import ProfileImage from '../assets/picture.jpg'; 

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] flex justify-center items-center'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>

        {/* Left Side (Text) */}
        <div className='flex flex-col justify-center'>
          <p className='text-[#66FCF1]'>Hello, my name is</p>
          <h1 className='text-3xl sm:text-4xl font-bold text-white'>Vishnu Neduncheliyan</h1>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-400'>Software Developer</h2>
          <p className='text-gray-300 py-4 max-w-[600px]'>
            With a Master’s in Computer Science from George Mason University, I specialize in data engineering, AI model training, 
            and full-stack development. Currently working remotely in the USA, I leverage Python, JavaScript, and cloud technologies 
            to optimize data workflows and enhance application performance.
          </p>
          <Link to="experience" smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#48ccc3] hover:border-[#48ccc3]'>
              View Experience
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
          </Link>
        </div>

        {/* Right Side (Zoomed Profile Image) */}
        <div className='flex justify-center md:justify-end'>
          <div className='w-52 h-52 sm:w-72 sm:h-72 rounded-full border-2 overflow-hidden'>
            <img 
              src={ProfileImage} 
              alt="Vishnu Neduncheliyan" 
              className='w-full h-full object-cover scale-150' 
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
