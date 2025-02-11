export default function Brands() {
    return (
      <> <section className="w-[100%] h-auto md:h-[500px] lg:h-[611px]  px-[30px] md:px-[50px] xl:px-[55px] 2xl:px-[102.86px] flex flex-col  justify-center align-middle items-center relative gap-5"
      style={{backgroundImage: "url('/brandsbg.png')", backgroundSize: "cover", backgroundPosition: "center"}}> 
      <div><h2 className="text-[#ffffff] font-semibold leading-[50px] text-[42px] py-[10px] text-center">Value Added to These Brands</h2></div>
      <div className="flex gap-x-5 flex-col  md:flex-row">
        <img src="1.png" alt="brands-logo" />
        <img src="2.png" alt="brands-logo" />
        <img src="3.png" alt="brands-logo" />
        <img src="4.png" alt="brands-logo" />
      </div>
      <div className="flex gap-5 flex-col  md:flex-row">
        <img src="5.png" alt="brands-logo" />
        <img src="2.png" alt="brands-logo" />
        <img src="4.png" alt="brands-logo" />
      </div>
        </section> </>
    );
};
