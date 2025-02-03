export default function HeroSection() {
    return (
      <>
      <section className="h-[90vh] w-[100%] flex justify-center items-center leading-[71.4px]"
      style={{backgroundImage: "url('/bgimage.png')", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div>
          <h1 className="text-[50px] md:text-[60px] lg:text-[70px] text-white text-center font-medium">
          We Are A Digital <br /> Transformation Company
          </h1>
        </div>
      </section>
      </>
    );
  }
  