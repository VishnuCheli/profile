import React from 'react'
import workImg from '../assets/workImg.jpeg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
           <div>
                <p className='text-3xl font-bold inline border-b-4 border-pink-400'>Work</p>
                <p className='py-6'>Recent work:</p>
           </div>
           {/* grid item */}
           <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* cards */}
                {/* card1 */}
                <div style={{backgroundImage:`url(${workImg})`}} className='group container rounded-md flex justify-center items center mx-auto content-div shadow-lg shadow-[#040c16]'>
                    
                    {/* hover effect */}
                    <div className='opactiy-0 group-hover:opacity-100'>
                        <div className='mt-8 text-center'>
                            <span className='text-3xl font-bold text-white tracking-wider text-center'>
                            React JS Sample Application
                            </span>
                        </div>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                
           

                {/* card2 */}
                <div style={{backgroundImage:`url(${workImg})`}} className='group container rounded-md flex justify-center items center mx-auto content-div shadow-lg shadow-[#040c16]'>
                    
                    {/* hover effect */}
                    <div className='opactiy-0 group-hover:opacity-100'>
                        <div className='mt-8 text-center'>
                            <span className='text-3xl font-bold text-white tracking-wider text-center'>
                            React JS Sample Application
                            </span>
                        </div>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>        
        </div>
    </div>
  )
}

export default Work