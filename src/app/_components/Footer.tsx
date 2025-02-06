export default function Footer() {
    return (
      <>
      <section className="bg-[#f3f4f6] flex justify-between items-center px-[30px] md:px-[50px] xl:px-[55px] 2xl:px-[102.86px] w-[100%]">
        <div>
          <img src="/tdc_circle_logo.png.png" alt="logo_image" className="w-[119px] h-[119px]" />
          <p className="text-[18px] text-[#25373FB2] font-[400] leading-[31.86px] py-[10px]">We will bring your idea into its digital creation the way you want it to be.</p>
        </div>
        <div>
          <h4 className="font-semibold text-[16px] text-[#262729]">Contact Details</h4>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Portfolios</li>
            <li>Contact</li>
            <li>Services</li>
          </ul>
        </div>
        <div>
        <h4>Newsletter</h4>
        <p className="text-[18px] text-[#25373FB2] font-[400] leading-[31.86px] py-[10px]">We will bring your idea into its digital creation the way you want it to be.</p>
        <input type="email" name="" id=""  placeholder="Enter your email"
          className="backdrop-blur-sm bg-white/30 text-white rounded-[46.29px] py-[22px] px-[18px] w-auto md:w-[283px]"/>
          <input type="submit" value="Start For Free"  className="rounded-[6.63px] py-[22px] px-[22px] bg-white text-[#2B59FF] font-[500] test-[20px] block"/>
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
  