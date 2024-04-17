import React from 'react'

import HTML from '../assets/html.png';
import css from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import Reactimg from '../assets/react.png';
import node from '../assets/node.png';
import aws from '../assets/aws.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
import mongo from '../assets/mongo.png';
// import  from '../assets/.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300 '>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-400 '>
                    Skills
                </p>
                <p className='py-4'> Technolgoies I've used: </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'src={HTML} alt="htmlicon"/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={css} alt="CSS icon"/>
                    <p className='my-4'>CSS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon"/>
                    <p className='my-4'>JavaScript</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Reactimg} alt="React icon"/>
                    <p className='my-4'>React</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={node} alt="Node.js icon"/>
                    <p className='my-4'>Node.js</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={aws} alt="AWS icon"/>
                    <p className='my-4'>AWS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={github} alt="GitHub icon"/>
                    <p className='my-4'>GitHub</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={tailwind} alt="Tailwind CSS icon"/>
                    <p className='my-4'>Tailwind CSS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={mongo} alt="MongoDB icon"/>
                    <p className='my-4'>MongoDB</p>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default Skills