import { TfiLayoutLineSolid } from "react-icons/tfi";
import Button from "../_components/Button";
export default function AboutTDC() {
    return (
      <>
<section className="w-[100%] px-[30px] md:px-[50px] xl:px-[55px] 2xl:px-[102.86px] flex justify-between align-middle items-center my-[30px]"> 
    <div className="w-[50%]">
        <img src="/about-us-l5.png" alt="about-us-image"
        className="w-[582px] h-[425.33px] rounded-[25px]" />
    </div>
    <div className="w-[50%]">
        <h3 className="text-[#2b59ff] font-medium leading-[19px] text-[16px]"> <TfiLayoutLineSolid className="inline-block" /> Who We Are</h3>
        <h2 className="text-[#25373f] font-semibold leading-[50px] text-[42px]">A little about us.</h2>
        <p>We are a resource augmentation company that specialises in finding and placing the best candidates for your open positions. Whether you need contract, contract-to-hire, or direct-hire staff, our team of experienced recruiters and hiring experts will work closely with you to ensure a perfect fit for your organisation.</p>
         <Button
                  label="Talk To Us"/>
         </div>
</section>
</>
    );
  }
  