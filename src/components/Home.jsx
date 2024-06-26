import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll';


const Home = () => {
  return (
    <div name='home' className ='w-full h-screen bg-[#0a192f] '>
      {/*container*/}

      <div className = 'max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-300'> Hello, my name is</p>
        <h1 className='text-3xl sm:text-4xl font-bold text-[#ccd6f6]'>Vishnu Neduncheliyan</h1>
        <h2 className='text-3xl sm:text-4xl font-bold text-[#8892b0] '>Full Stack Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I am a graduate student majoring in Computer Science at George Mason University, and I am currently looking for full-time opportunities in the software industry.</p>
        <div>
        <Link to="work" smooth={true} duration={500}>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-300 hover:border-pink-300'>
            View Work
          <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3'/>
            </span>
          </button>
          </Link>
        </div>

      </div>

    </div>
  )
}

export default Home