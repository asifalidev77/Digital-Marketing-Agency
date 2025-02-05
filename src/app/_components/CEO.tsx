import { TfiLayoutLineSolid } from "react-icons/tfi";
export default function CEO() {
    return (
      <>
<section className="w-[100%] h-auto lg:h-[45vh] px-[30px] md:px-[50px] xl:px-[55px] 2xl:px-[102.86px] flex flex-col-reverse lg:flex-row  justify-between align-middle items-center my-[40px] md:my-[60px] lg:my-[80px] relative gap-5"> 

    <div className="w-[100%] lg:w-[50%]">
        <h3 className="text-[#2b59ff] font-medium leading-[19px] text-[16px] py-[10px]"> <TfiLayoutLineSolid className="inline-block" /> Meet Our CEO</h3>
        <h2 className="text-[#25373f] font-[500] leading-[44px] text-[30px] py-[10px]">Our belief has always been that talent has no boundaries, and if opportunity were shared equally among everyone in the world and a fast-track channel was established to match opportunities with the best resources, the results of the fusion of skills and ideas would be a technology revolution that would set new standards for the industry.</h2>
        <p className="text-[18px] font-[400] leading-[31.86px] py-[10px]">Fahad Tufail, CEO of TDC | The Dev Corporate </p>
         </div>
         <div className="w-[100%] lg:w-[50%]">
        <img src="/CEOimage2.png" alt="about-us-image"
        className="w-[100%] h-[100%]lg:w-[514px] lg:h-[534px]  rounded-[25px] object-contain" />
    </div>
</section>
</>
    );
  }
  