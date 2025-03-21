import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>

        {/* Section Title */}
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#82d0cb]'>About</p>
          </div>
          <div></div>
        </div>

        {/* About Content */}
        <div className='max-w-[1200px] w-full grid sm:grid-cols-2 gap-8 px-4'>

          {/* Left Column */}
          <div className='sm:text-right flex flex-col justify-center'>
          <p className='text-3xl font-bold leading-snug'>
  Thanks for stopping by! <br></br>Here’s a little about me and my journey.
</p>
            <div className='mt-10 space-y-4'>
              <p>
                I actively engage in workshops and projects to expand my technical skills. 
                At George Mason University, I participated in a drone prototyping workshop, 
                and at VIT, I led the Board Gamers Club and attended computer hardware and game development workshops.
              </p>

              <p>
                My passion for technology started early, participating in robotics and AI workshops at Carnegie Mellon University. 
                I also led my school’s team for the Botball event and competed in the Qatar National Robotics Olympiad.
              </p>

              <p>
                I thrive in collaborative environments and enjoy solving complex problems with automation, AI, and data-driven solutions.
              </p>
            </div>
          </div>

          {/* Right Column (Cleaned Up) */}
          <div className='space-y-4'>
            <p>
              I am a software developer at Highbrow Technology Inc., focusing on AI-driven automation, ETL pipelines, and API workflows. 
              I work on data processing and real-time analytics, optimizing workflows for large-scale datasets.
            </p>

            <p>
              I develop Python-based ETL pipelines with Pandas and NumPy, improving data accuracy and processing efficiency. 
              I also automate workflows using browser dev tools, reducing manual effort and improving productivity.
            </p>

            <p>
              Some of my recent projects include:
              <ul className="list-disc list-inside text-gray-300 pl-5">
                <li>PlanMyStudy - AI-powered course recommendation system.</li>
                <li>Automated Data Labeling - Scalable pipeline for dataset annotation.</li>
                <li>Web Security RASP - Protecting web apps from XSS and SSRF attacks.</li>
              </ul>
            </p>

            <p>
              I am passionate about automation, AI integration, and cybersecurity, 
              always eager to explore scalable and efficient solutions.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
