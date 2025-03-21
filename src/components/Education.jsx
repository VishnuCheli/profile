import React from 'react'

import GMULogo from '../assets/GMU.png'; // Replace with actual GMU logo
import VITLogo from '../assets/VIT.png'; // Add another university if needed

const Education = () => {
    return (
      <div name='education' className='w-full h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center py-8'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-6 w-full'>
  
          {/* Section Header - Left Aligned */}
          <div className='mb-8 w-full'>
            <p className='text-4xl font-bold inline border-b-4 border-[#82d0cb] text-left'>Education</p>
          </div>
  
          {/* Education Tiles - Stacked */}
          <div className='flex flex-col gap-8'>
  
            {/* George Mason University Tile */}
            <div className='bg-[#112240] p-6 rounded-lg shadow-md flex items-center gap-6'>
              {/* Logo */}
              <img className='w-24 h-24 bg-[#ffff] object-contain' src={GMULogo} alt="GMU Logo" />
              
              {/* Details */}
              <div>
                <h3 className='text-2xl font-semibold text-white'>George Mason University</h3>
                <p className='text-gray-400 text-lg'>Master's in Computer Science</p>
                <p className='text-gray-400 text-sm'>2022 - 2024 | GPA: 3.7/4.0</p>
  
                {/* Coursework Tiles */}
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-3 py-1 bg-[#C5C6C7] text-[#0a192f] text-sm font-semibold rounded-md">Analysis of Algorithms</span>
                  <span className="px-3 py-1 bg-[#C5C6C7] text-[#0a192f] text-sm font-semibold rounded-md">Software Testing</span>
                  <span className="px-3 py-1 bg-[#C5C6C7] text-[#0a192f] text-sm font-semibold rounded-md">Database Systems</span>
                  <span className="px-3 py-1 bg-[#C5C6C7] text-[#0a192f] text-sm font-semibold rounded-md">Fundamentals of Systems Programming</span>
                </div>
              </div>
            </div>
  
            {/* Another Institution Tile (If Applicable) */}
            <div className='bg-[#112240] p-6 rounded-lg shadow-md flex items-center gap-6'>
              {/* Logo */}
              <img className='w-24 h-24 bg-[#ffff] object-contain' src={VITLogo} alt="Other University Logo" />
              
              {/* Details */}
              <div>
                <h3 className='text-2xl font-semibold text-white'>Vellore Institute of Technology</h3>
                <p className='text-gray-400 text-lg'>Bachelor's in Computer Science and Engineering with spl. in Information Security</p>
                <p className='text-gray-400 text-sm'>2018 - 2022 | GPA: 8.13/10.0</p>
  
                {/* Coursework Tiles */}
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-3 py-1 bg-[#C5C6C7] text-[#0a192f] text-sm font-semibold rounded-md">
                    Data Structures and Algorithms
                  </span>
                  <span className="px-3 py-1 bg-[#C5C6C7] text-[#0a192f] text-sm font-semibold rounded-md">
                    Internet and Web Programming
                  </span>
                  <span className="px-3 py-1 bg-[#C5C6C7] text-[#0a192f] text-sm font-semibold rounded-md">
                    Database Management Systems
                  </span>
                  <span className="px-3 py-1 bg-[#C5C6C7] text-[#0a192f] text-sm font-semibold rounded-md">
                    Vulnerability Analysis - Pen Testing
                  </span>
                  <span className="px-3 py-1 bg-[#C5C6C7] text-[#0a192f] text-sm font-semibold rounded-md">
                    Artificial Intelligence
                  </span>
                  <span className="px-3 py-1 bg-[#C5C6C7] text-[#0a192f] text-sm font-semibold rounded-md">
                    Blockchain Technologies
                  </span>
                  <span className="px-3 py-1 bg-[#C5C6C7] text-[#0a192f] text-sm font-semibold rounded-md">
                    Web Security
                  </span>
                </div>

              </div>
            </div>
  
          </div>
        </div>
      </div>
    );
  };
  
  export default Education;