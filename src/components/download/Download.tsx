import win from "@/assets/images/os/win.png";
import mac from "@/assets/images/os/mac.png";
import Image from "next/image";

const Download = () => {
  return (
    <div
      id="download"
      className="relative w-full py-12 flex justify-center items-center text-6xl max-lg:text-4xl max-sm:text-3xl font-poppins font-light text-main-white "
    >
      <div className="blured absolute *:h-[1500px] *:w-24 *:mx-10 flex rotate-45 blur-[150px] opacity-50 z-30">
        <div className="white bg-main-white"></div>
        <div className="red bg-main-red"></div>
      </div>
      <div className="z-40 flex flex-col justify-center items-center font-extralight">
        <h1>
          Get <span className="text-main-red">Katana</span> Now !
        </h1>
        <div className="os flex items-center justify-between w-64 *:w-16  max-lg:*:w-12 *:mx-5 max-lg:justify-center mt-10 *:cursor-pointer">
          <Image src={win} alt="win image" />
          <Image src={mac} alt="mac image" className="-translate-y-[8px]" />
        </div>
      </div>
    </div>
  );
};

export default Download;
