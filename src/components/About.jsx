import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full  h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-400'>About</p>
                </div>
                <div>
                </div>
            </div>
            <div className='max-w-[1200px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right '>
                    <p className='text-3xl font-bold'> Hello, nice to meet you!<br/> Please take a look around here.</p>
                    <div className='mt-14 space-y-3' >
                        <p>Apart from my technical pursuits, I actively engage in extracurricular activities and workshops to expand my knowledge and skills. At George Mason University, I participated in a 4-month workshop on building and prototyping drones for real-world problems. During my time at Vellore Institute of Technology, I attended computer hardware workshops, contributed to game development workshops, and led the Board Gamers Club as part of the operations team.</p>

                    <p>My passion for technology and robotics started early, as I attended Botball workshops at Carnegie Mellon University in Qatar, where I designed and programmed robots. I also led my school's technical team for the Botball event and participated in the Qatar National Robotics Olympiad.</p>

                    <p>I am a dedicated and motivated individual with strong problem-solving, analytical, and communication skills. I thrive in collaborative environments and am always eager to learn and grow. With my diverse skill set and passion for technology, I am committed to making meaningful contributions to the field of computer science and beyond.</p>
                                        
                    </div>
                </div>
                <div className='space-y-3 '>
                    <p>I am Vishnu Neduncheliyan, a passionate computer science graduate student at George Mason University, pursuing a Master of Science in Computer Science. With a strong foundation in computer science and engineering, I obtained my Bachelor of Technology degree from Vellore Institute of Technology, specializing in Information Security.</p>

                    <p>My expertise lies in various programming languages, frameworks, and technologies, including Python, Java, C++, HTML, SQL, Angular, Laravel, NodeJS, ReactJS, MongoDB, and AWS. I have hands-on experience in web application development, deploying secure login authentication systems, and utilizing tools such as Git, Slack, Mailtrap, CoreFTP, VS Code, Blade, TypeScript, HTML, PHP, phpMyAdmin, and MySQL.</p>

                    <p>Throughout my academic journey, I have worked on several projects that showcase my problem-solving abilities and technical skills. One notable project is "Encrypted Path to Encrypted Text," where I implemented a two-level encryption system using cryptographic encryption in linked lists to ensure data confidentiality. Another project, "Cryptic Hub," involved developing a website that offers security-related products and services, including pentesting, network administration, and open-source services like online malware detection for web apps and a fuzzer.</p>

                    <p>I have also gained professional experience as an intern at Gustovalley Technovations LLP, where I created a web application's front-end and back-end using Angular and Laravel frameworks and integrated a JSON Web Token-based login authentication system for secure deployment.</p>

                </div>
            </div>
        </div>
        
    </div>
  )
}

export default About