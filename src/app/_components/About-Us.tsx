import { TfiLayoutLineSolid } from "react-icons/tfi";
import Button from "../_components/Button";
export default function AboutTDC() {
    return (
      <>
<section className="w-[100%]  h-auto  px-[30px] md:px-[50px] xl:px-[55px] 2xl:px-[102.86px] flex flex-col-reverse lg:flex-row  justify-between align-middle items-center my-[40px] md:my-[60px] lg:my-[80px] relative gap-5"> 
    <div className="w-[100%] lg:w-[50%] ">
        <img src="/about-us-l5.png" alt="about-us-image"
        className="w-[100%] h-[100%]  rounded-[25px] object-contain" />
    </div>
    <div className="w-[100%] lg:w-[50%]">
        <h3 className="text-[#2b59ff] font-medium leading-[19px] text-[16px] py-[10px]"> <TfiLayoutLineSolid className="inline-block" /> Who We Are</h3>
        <h2 className="text-[#25373f] font-semibold leading-[50px] text-[42px] py-[10px]">A little about us.</h2>
        <p className="text-[18px] font-[400] leading-[31.86px] py-[10px]">We are a resource augmentation company that specialises in finding and placing the best candidates for your open positions. Whether you need contract, contract-to-hire, or direct-hire staff, our team of experienced recruiters and hiring experts will work closely with you to ensure a perfect fit for your organisation.</p>
         <Button
                  label="Talk To Us"/>
         </div>
         <img src="/div (2).png" alt="half-circle" 
         className=" absolute right-0 bottom-[-50px] hidden xl:block w-[210px] h-[210px]"/>
</section>
</>
    );
  }
  