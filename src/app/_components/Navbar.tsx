import logo from "../assets/SVG/companylogo.svg"
import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";

export default function Navbar() {
    return (
      <>     <section className="max-w-[1300px] mx-auto w-full  flex justify-between items-center py-4 px-4">
    <div className="flex items-center space-x-20">
      <div >
          <Image
          src={logo}
          alt="Company Logo"
          width={150}
          height={150}
          />
      </div>
      <div>
        <ul className="  flex gap-x-5 text-[16px] font-semibold">
            <li className="inline-block text-[#BFF747]">Home</li>
            <li className="inline-block text-white hover:text-[#BFF747]">About Us</li>
            <li className="inline-block text-white hover:text-[#BFF747]">Services</li>
            <li className="inline-block text-white hover:text-[#BFF747]">Portfolio</li>
            <li className="inline-block text-white hover:text-[#BFF747]">Contact Us</li>
        </ul>
      </div>
      </div>
      <div className="flex items-center space-x-4">
      <BsTwitterX 
      className="text-[#BFF747] text-[20px]"/>
      <FaFacebookF 
      className="text-[#BFF747] text-[20px]"/>
      <FaInstagram
      className="text-[#BFF747] text-[20px]"/>
      <CgMenuGridO 
      className="text-white text-[45px] bg-[#1B1B1B] rounded-[50%] p-[10px]"/>
      </div>
    </section></>
    );
  }
  