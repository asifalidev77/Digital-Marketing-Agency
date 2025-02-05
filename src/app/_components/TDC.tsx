import { TfiLayoutLineSolid } from "react-icons/tfi";
import Button from "../_components/Button";
export default function TDC() {
    return (
      <>
<section className="w-[100%]  h-auto  px-[30px] md:px-[50px] xl:px-[55px] 2xl:px-[102.86px] flex flex-col lg:flex-row  justify-between align-middle items-center my-[40px] md:my-[60px] lg:my-[80px] relative gap-5"> 
 <div className="w-[100%] lg:w-[50%]">
        <h3 className="text-[#2b59ff] font-medium leading-[19px] text-[16px] py-[10px]"> <TfiLayoutLineSolid className="inline-block" /> What is TDC?</h3>
        <h2 className="text-[#25373f] font-semibold leading-[50px] text-[42px] py-[10px]">Are you tired of the never-ending search for top talent?
       <span className="text-[#2b59ff]"> Look No Further! </span></h2>
        <p className="text-[18px] font-[400] leading-[31.86px] py-[10px]">TDC is here to SUPERCHARGE your resource hiring process and take the burden off your shoulders.</p>
         <Button
                  label="Get Started Now"/>
         </div>
         <div className="w-[100%] lg:w-[50%] ">
        <img src="/tdcteam.png" alt="TDCteam"
        className="w-[100%] h-[100%]  rounded-[25px] object-contain" />
    </div>
</section>
</>
    );
  }
  