import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
export default function Footer() {
    return (
      <>
      <section className="bg-[#f3f4f6] flex justify-between items-star px-[30px] md:px-[50px] xl:px-[55px] 2xl:px-[102.86px] w-[100%]">
        <div className="w-[100%] md:w-[25%]">
          <img src="/tdc_circle_logo.png.png" alt="logo_image" className="w-[119px] h-[119px]" />
          <p className="text-[18px] text-[#25373FB2] font-[400] leading-[31.86px] py-[10px]">We will bring your idea into its digital creation the way you want it to be.</p>
          <div className="flex gap-x-3">
          <IoLogoFacebook 
          className="inline-block text-white bg-[#2B59FF] p-[15px] rounded-[50%] w-[25px] h-[25px] hover:text-[#2B59FF] hover:bg-black "/>
          <FaTwitter 
          className="inline-block"/>
          <FaInstagram 
          className="inline-block"/>
          <FaLinkedinIn 
          className="inline-block"/>
</div>
        </div>
        <div className="w-[100%] md:w-[25%]">
          <h4 className="font-semibold text-[16px] text-[#262729]">Contact Details</h4>
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
       <div className="flex flex-col gap-x-3">
        <input type="email" name="" id=""  placeholder="Enter your email"
          className="bg-white text-black rounded-[46.29px] py-[22px] px-[18px] w-auto md:w-[283px] block"/>
          <input type="submit" value="Start For Free"  className="rounded-[46.29px] py-[22px] px-[22px] bg-[#5034FC] text-white font-[500] test-[20px] block text-end" />
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
  