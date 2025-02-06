import Button from "./Button";
export default function Hiring() {
    return (
      <>
      <section className="h-[535px] w-[100%] flex justify-center items-center content-center"
      style={{backgroundImage: "url('/hiring.png')", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="flex flex-col justify-center items-center gap-y-3">
          <h3 className="text-[42px] text-white text-center font-[600] leadig-[0.9em]">
          Don't let the hiring <br className="hidden md:block"/> process slow you down.
          </h3>
          <p className="text-[18px] text-white text-center leading-[1.5em]">
          Trust us to find the perfect fit for your organisation and watch your business soar to new <br className="hidden md:block" /> heights. Say goodbye to the never-ending search and hello to top talent with TDC.
          </p>
          <Button
                   label="Hire Now"/>
        </div>
      </section>
      </>
    );
  }
  