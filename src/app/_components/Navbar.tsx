import logo from "../assets/SVG/companylogo.svg"
import Image from "next/image";
export default function Navbar() {
    return (
      <>     <section className="W-[1200px] mx-auto flex justify-between items-center py-4 px-4 bg-orange-500">
      <div>
          <Image
          src={logo}
          alt="Company Logo"
          width={100}
          height={100}
          />
      </div>
      <div>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact Us</li>
        </ul>
      </div>
      <div>
      </div>
    </section></>
    );
  }
  