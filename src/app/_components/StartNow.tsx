export default function StartNow() {
    return (
      <>
      <section className="h-[502px] w-[100%] flex justify-center items-center content-center"
      style={{backgroundImage: "url('/startnowbg.png')", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="flex flex-col justify-center items-center gap-y-3">
          <h3 className="text-[54px] text-white text-center font-[600] leadig-[61.28px]">
          Hiring with TDC is <br className="hidden md:block"/> Risk-Free! <span className="text-[#ffb700]"> Start Now. </span>
          </h3>
          <div className="flex gap-x-3">
          <input type="email" name="" id=""  placeholder="Enter your email"
          className="backdrop-blur-sm bg-white/30 text-white rounded-[6.63px] py-[22px] px-[18px] w-auto md:w-[387px]"/>
          <input type="submit" value="Start For Free"  className="rounded-[6.63px] py-[22px] px-[22px] bg-white text-[#2B59FF] font-[500] test-[20px]"/>
          </div>
        </div>
      </section>
      </>
    );
  }
  