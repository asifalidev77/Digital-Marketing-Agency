import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Footer() {
    return (
      <>
      <section className="bg-[#f3f4f6] flex flex-col lg:flex-row justify-between items-star px-[30px] md:px-[50px] xl:px-[55px] 2xl:px-[102.86px] w-[100%] py-[50px]">
        <div className="w-[100%] md:w-[25%]">
          <img src="/tdc_circle_logo.png.png" alt="logo_image" className="w-[119px] h-[119px]" />
          <p className="text-[18px] text-[#25373FB2] font-[400] leading-[31.86px] py-[10px]">We will bring your idea into its digital creation the way you want it to be.</p>
          <div className="flex gap-x-3">
          <IoLogoFacebook 
          className="inline-block"/>
          <FaTwitter 
          className="inline-block"/>
          <FaInstagram 
          className="inline-block"/>
          <FaLinkedinIn 
          className="inline-block"/>
</div>
        </div>
        <div className="w-[100%] md:w-[25%]">
          <h4 className="font-semibold text-[16px] text-[#262729] mb-[15px]">Contact Details</h4>
          <div>
            <div> <h4 className="text-[14px] text-[#262729]"><FaLocationDot className="text-[#2B59FF] inline-block font-extrabold w-[14px] h-[19px] mr-[5px]" /> Address:</h4></div>
            <div className="ml-[20px] mb-[10px]">392 F Block Phase 1, <br /> Johar Town Lahore</div>
          </div>
          <div>
            <div> <h4 className="text-[14px] text-[#262729]"><FaPhoneAlt  className="text-[#2B59FF] inline-block font-extrabold w-[14px] h-[19px] mr-[5px]" /> Phone:</h4></div>
            <div className="ml-[20px]"> +92 305 7374904</div>
          </div>
          <div>
            <div> <h4 className="text-[14px] text-[#262729]"><IoIosMail
            className="text-[#2B59FF] inline-block font-extrabold w-[14px] h-[19px] mr-[5px]"/> Email:</h4></div>
            <div className="ml-[20px] mb-[10px]">asifali010122@gmail.com</div>
          </div>
        </div>
        <div className="w-[100%] md:w-[25%]">
          <h4 className="font-semibold text-[16px] text-[#262729] mb-[15px]">Company</h4>
          <ul className="flex flex-col gap-y-[14px]">
            <li className="text-[14px]">About Us</li>
            <li className="text-[14px]">Portfolios</li>
            <li className="text-[14px]">Contact</li>
            <li className="text-[14px]">Services</li>
          </ul>
        </div>
        <div className="w-[100%] md:w-[25%]">
        <h4 className="font-semibold text-[16px] text-[#262729]" >Newsletter</h4>
        <p className="text-[18px] text-[#25373FB2] font-[400] leading-[31.86px] py-[10px]">We will bring your idea into its digital creation the way you want it to be.</p>
       <div>
        <input type="email" name="" id=""  placeholder="Enter your email"
          className="bg-white text-black rounded-[46.29px] py-[22px] px-[18px] w-[100%] block"/>
          <input type="submit" value="Start For Free"  className="rounded-[46.29px] py-[22px] px-[22px] bg-[#5034FC] text-white font-[500] test-[20px]  text-end mt-[20px] flex justify-end " />
          </div>
        </div>
      </section>
      <section className="bg-[#f3f4f6] h-[100px] w-[100%] flex justify-center items-center content-center">   
             <div className="flex flex-col justify-center items-center gap-y-3">
          <h3 className="text-[18px] text-[#25373f] text-center font-[600] leadig-[1.5em]">
          © 2025 Digi Era Pro LLC. All rights reserved.
          </h3>
        </div>
      </section>
      </>
    );
  }
  