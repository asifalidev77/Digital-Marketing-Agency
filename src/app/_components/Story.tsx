import { TfiLayoutLineSolid } from "react-icons/tfi";
import Button from "../_components/Button";
export default function Story() {
    return (
      <>
<section className="w-[100%] h-auto lg:h-[60vh]   px-[30px] md:px-[50px] xl:px-[55px] 2xl:px-[102.86px] flex flex-col-reverse lg:flex-row  justify-between align-middle items-center my-[40px] md:my-[60px] lg:my-[80px] relative gap-5"> 
    <div className="w-[100%] lg:w-[50%] ">
        <img src="/Our-Story.png" alt="about-us-image"
        className="w-[514px] h-[534px]  rounded-[25px] object-contain" />
    </div>
    <div className="w-[100%] lg:w-[50%]">
        <h3 className="text-[#2b59ff] font-medium leading-[19px] text-[16px] py-[10px]"> <TfiLayoutLineSolid className="inline-block" /> Our Story</h3>
        <h2 className="text-[#25373f] font-semibold leading-[50px] text-[42px] py-[10px]">Fahad and Ali's story is a <span>testament</span> to the power of friendship and determiation.</h2>
        <p className="text-[18px] font-[400] leading-[31.86px] py-[10px]">TDC was founded by Fahad Tufail and Ali Tahir, who have been friends for a decade. They quit their jobs to start a resource augmentation company to help companies overcome their resource challenges. With their technical expertise and network, they built a team of skilled professionals and the company became known for its high-quality services and customer support. 
        TDC has now grown to a team of 40 engineers, serving international clients with a wider range of technical services. </p>
         <Button
                  label="Work With Us"/>
         </div>
         <img src="/half-circle-.png" alt="half-circle" 
         className=" absolute right-0 top-0 hidden xl:block w-[173px] h-[173px]"/>
</section>
</>
    );
  }
  