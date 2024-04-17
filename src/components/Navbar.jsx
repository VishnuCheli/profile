import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import LeetcodeLogo from '../assets/image.png';
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/vn-high-resolution-logo-transparent.png';
import { Link } from 'react-scroll'


export const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>
                <img src={Logo} alt="LogoImage" style={{ width: "70px" }}></img>
            </div>

            <ul className="hidden md:flex">
                <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                <li><Link to="work" smooth={true} duration={500}>Work</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>

            {/*Menu  Symbol*/}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/*Mobile Menu*/}
            <ul
                className={
                    !nav
                        ? "hidden"
                        : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
                }
            >
                <li className="py-6 text-4xl"><Link onClick={handleClick} to="home" smooth={true} duration={500} >Home</Link></li>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to="work" smooth={true} duration={500}>Work</Link></li>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>

            {/*social icons*/}
            <div className="flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[80px] md:w-[146px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077B5]">
                        <a
                            className="mr-[-10px] lg:mr-0 duration-300 flex justify-between items-center w-full text-gray-300 "
                            href="https://www.linkedin.com/in/vishnu-n/"
                            target=" "
                        >
                            Linkedin
                            <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className="w-[80px] md:w-[146px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                        <a
                            className="mr-[-10px] lg:mr-0 duration-300 flex justify-between items-center w-full text-gray-300"
                            href="https://github.com/VishnuCheli"
                            target=" "

                        >
                            Github
                            <FaGithub size={30} />
                        </a>
                    </li>
                    <li className="w-[40px] md:w-[146px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#211E22]">
                        <a
                            className="mr-[-10px] lg:mr-0 duration-300 flex justify-between items-center w-full text-gray-300"
                            href="https://leetcode.com/VishnuCheli/"
                            target=" "
                        >
                            Leetcode
                            <img
                                src={LeetcodeLogo}
                                alt="Logo"
                                style={{ width: "2em", height: "2em" }}
                            />
                        </a>
                    </li>
                    <li className="w-[80px] md:w-[146px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
                        <a
                            className="mr-[-10px] lg:mr-0 duration-300 flex justify-between items-center w-full text-gray-300"
                            href="mailto:vishnucheliyan@gmail.com"
                            target=""

                        >
                            Email
                            <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className="w-[80px] md:w-[146px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                        <a
                            className="mr-[-10px] lg:mr-0 duration-300 flex justify-between items-center w-full text-gray-300"
                            href="/"
                            // href="../assets/Vishnu_Neduncheliyan_resume.pdf"
                        >
                            Resume
                            <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar