import Image from "next/image";

import logo from "@/assets/images/logo.svg";

const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-2">
          <div>
            <Image src={logo} alt="logo" />
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
