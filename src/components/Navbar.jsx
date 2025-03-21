import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import LeetcodeLogo from "../assets/image.png";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import { Link } from "react-scroll";
const resumeLink =
  "https://drive.google.com/uc?export=download&id=1m9Gx6icXw_Vj033_HdltwMLhZqaKSaWI";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      {/* Navigation Menu */}
      <ul className="hidden md:inline-flex -mx-1">
        <li className="rounded-full">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="px-3 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:bg-[#1a2d50] flex justify-center items-center"
          >
            Home
          </Link>
        </li>

        <li className="rounded-full">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="px-3 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:bg-[#1a2d50] flex justify-center items-center"
          >
            About
          </Link>
        </li>

        <li className="rounded-full">
          <Link
            to="education"
            smooth={true}
            duration={500}
            className="px-3 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:bg-[#1a2d50] flex justify-center items-center"
          >
            Education
          </Link>
        </li>

        <li className="rounded-full">
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className="px-3 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:bg-[#1a2d50] flex justify-center items-center"
          >
            Experience
          </Link>
        </li>

        <li className="rounded-full">
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="px-3 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:bg-[#1a2d50] flex justify-center items-center"
          >
            Skills
          </Link>
        </li>

        <li className="rounded-full">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="px-3 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:bg-[#1a2d50] flex justify-center items-center"
          >
            Contact
          </Link>
        </li>
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
              <FaLinkedin size={30} />
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
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              download="Vishnu_Neduncheliyan_Resume.pdf"
            >
              Resume
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
