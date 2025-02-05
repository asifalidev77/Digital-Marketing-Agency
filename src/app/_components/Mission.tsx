import { TfiLayoutLineSolid } from "react-icons/tfi";
export default function Mission() {
    return (
      <>
<section className="w-[100%] h-auto lg:h-[749px]  px-[30px] md:px-[50px] xl:px-[55px] 2xl:px-[102.86px] flex flex-col-reverse lg:flex-row  justify-between align-middle items-center relative gap-5"
   style={{backgroundImage: "url('/missionbg.png')", backgroundSize: "cover", backgroundPosition: "center"}}> 
    <div className="w-[100%] lg:w-[50%] flex items-start ">
        <img src="/ceo.png" alt="ceo-image"
        className="w-[100%] h-[100%]lg:w-[514px] lg:h-[489px]  rounded-[25px] object-contain" />
    </div>
    <div className="w-[100%] lg:w-[50%]">
        <h3 className="text-white font-medium leading-[19px] text-[16px] py-[10px]"> <TfiLayoutLineSolid className="inline-block" /> Our Mission</h3>
        <h2 className="text-white font-semibold leading-[50px] text-[42px] py-[10px]">We are on a mission to <br /> empower companies!</h2>
        <p className="text-[18px] text-white font-[400] leading-[31.86px] py-[10px]">Our mission is to be the leading provider of innovative and sustainable resource augmentation solutions, empowering organizations to achieve their full potential. We strive to create a win-win situation for both our clients and our team members, by fostering a culture of collaboration, continuous learning, and respect. 
        Our vision and ultimate goal is to support organizations in achieving their goals and creating a better future for all and to be the leading provider of innovative and sustainable resource augmentation solutions, empowering organizations to achieve their full potential.</p>
         </div>
</section>
</>
    );
  }
  