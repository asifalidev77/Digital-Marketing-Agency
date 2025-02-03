import logo from "../assets/PNG/tdc_circle_logo.png.png";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import Button from "../_components/Button";
export default function Navbar() {
    return (
      <>
      <section className="w-full h-[10vh] px-[30px] md:px-[50px] xl:px-[55px] 2xl:px-[102.86px] flex justify-between align-middle items-center">
        <div className="flex items-center gap-x-20">
          <div>
            <Image
            src={logo}
            alt="Company Logo"
            width={47.62}
            height={47.62}
            />
          </div>
          <div>
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
        </div>
        <div>
          <Button
          label="Hire Now"/>
        </div>
      </section>

      </>
    );
  }
  