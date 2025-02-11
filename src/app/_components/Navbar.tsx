'use client';
import { useState } from "react";
import { FiMenu, FiX } from 'react-icons/fi';
import logo from "../assets/PNG/tdc_circle_logo.png.png";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import Button from "../_components/Button";
const Navbar : React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
    return (
      <>
      <section className=" w-full h-[10vh] px-[30px] md:px-[50px] xl:px-[55px] 2xl:px-[102.86px] flex justify-between align-middle items-center">
        <div className="flex items-center gap-x-20">
          <div>
            <Image
            src={logo}
            alt="Company Logo"
            width={47.62}
            height={47.62}
            />
          </div>

          <div className="hidden lg:flex ">
            <ul className="flex gap-x-5">
              <li className="inline-block text-[15.24px] leading-[18.1px] font-normal hover:text-[#2B59FF]">Home</li>
              <li className="inline-block text-[15.24px] leading-[18.1px] font-normal hover:text-[#2B59FF]">AboutTDC <IoIosArrowDown className="inline-block" /></li>
              <li className="inline-block text-[15.24px] leading-[18.1px] font-normal hover:text-[#2B59FF]">Developers</li>
              <li className="inline-block text-[15.24px] leading-[18.1px] font-normal hover:text-[#2B59FF]">Services <IoIosArrowDown className="inline-block" /></li>
              <li className="inline-block text-[15.24px] leading-[18.1px] font-normal hover:text-[#2B59FF]">Technologies</li>
              <li className="inline-block text-[15.24px] leading-[18.1px] font-normal hover:text-[#2B59FF]">Portfolio <IoIosArrowDown  className="inline-block"/></li>
              <li className="inline-block text-[15.24px] leading-[18.1px] font-normal hover:text-[#2B59FF]">Blog</li>
              <li className="inline-block text-[15.24px] leading-[18.1px] font-normal hover:text-[#2B59FF]">Contact Us</li>
            </ul>
            
          </div>
          <div
          className={`fixed top-0 left-0 h-full w-[50%] bg-white shadow-lg backdrop-blur-lg bg-opacity-60 transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6 flex items-center justify-between">
          <div>
          <Image
          src={logo}
          alt="Company Logo"
          width={47.62}
          height={47.62}
          />
          <button className="text-gray-700 absolute right-10 top-20" onClick={() => setIsOpen(false)}>
            <FiX size={28} />
          </button>
        </div>
      
          </div>
          <nav className="flex flex-col space-y-4 px-6">
          <ul className="flex flex-col gap-y-5">
          <li className="inline-block text-[15.24px] leading-[18.1px] font-semibold l hover:text-[#2B59FF]">Home</li>
          <li className="inline-block text-[15.24px] leading-[18.1px] font-semibold l hover:text-[#2B59FF]">AboutTDC <IoIosArrowDown className="inline-block" /></li>
          <li className="inline-block text-[15.24px] leading-[18.1px] font-semibold l hover:text-[#2B59FF]">Developers</li>
          <li className="inline-block text-[15.24px] leading-[18.1px] font-semibold l hover:text-[#2B59FF]">Services <IoIosArrowDown className="inline-block" /></li>
          <li className="inline-block text-[15.24px] leading-[18.1px] font-semibold l hover:text-[#2B59FF]">Technologies</li>
          <li className="inline-block text-[15.24px] leading-[18.1px] font-semibold l hover:text-[#2B59FF]">Portfolio <IoIosArrowDown  className="inline-block"/></li>
          <li className="inline-block text-[15.24px] leading-[18.1px] font-semibold l hover:text-[#2B59FF]">Blog</li>
          <li className="inline-block text-[15.24px] leading-[18.1px] font-semibold l hover:text-[#2B59FF]">Contact Us</li>
        </ul>
          </nav>
        </div>
        </div>
        <div className="flex gap-x-5 w-[50%] md:w-auto justify-end">
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
          <Button
          label="Hire Now"/>
        </div>
      </section>

      </>
    );
  }
  export default Navbar;