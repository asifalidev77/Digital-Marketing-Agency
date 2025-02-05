import Button from "./Button";
export default function Hiring() {
    return (
      <>
      <section className="h-[554px] w-[100%] flex justify-center items-center"
      style={{backgroundImage: "url('/hiring.png')", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div>
          <h3 className="text-[42px] text-white text-center font-[600] leadig-[0.9em]">
          Don't let the hiring <br /> process slow you down.
          </h3>
          <p>
          Trust us to find the perfect fit for your organisation and watch your business soar to new heights. Say goodbye to the never-ending search and hello to top talent with TDC.
          </p>
          <Button
                   label="Hire  Now"/>
        </div>
      </section>
      </>
    );
  }
  