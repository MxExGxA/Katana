import Image from "next/image";
import samurai from "@/assets/images/image1.png";
import Navbar from "../Navbar";

const homeFirst = () => {
  return (
    <div
      id="home"
      className="w-full flex h-lvh justify-between py-12 max-sm:py-2"
    >
      <div className="left w-2/3 max-lg:w-full flex flex-col justify-between max-lg:mr-0 mr-12">
        <Navbar />
        <div className="banner flex h-full justify-center items-center max-xl:flex-col">
          <div className="japanese-circle relative self-center flex justify-center items-center font-mashan text-main-white text-9xl max-xl:text-7xl">
            <div className="red-circle w-64 h-64 rounded-full bg-main-red blur-md max-xl:w-44 max-xl:h-44 max-xl:my-10"></div>
            <div className="chineese-words absolute *:my-2">
              <h1 className="">枸</h1>
              <h1 className="">枢</h1>
              <h1 className="">红</h1>
            </div>
          </div>
          <div className="text ml-20 max-lg:mx-auto">
            <div className="title relative -ml-4 max-lg:mx-auto max-lg:text-center text-9xl max-md:text-7xl max-sm:text-6xl font-reggae leading-none text-main-red z-40">
              KATANA
            </div>
            <div className="description text-main-white font-podkova text-[22px] max-md:text-[20px] max-lg:text-center">
              Katana is an online game featuring intense samurai duels,<br></br>
              Master martial arts, strategize in combat,<br></br> and rise
              through the ranks to prove your warrior prowess.
            </div>
          </div>
        </div>
      </div>
      <div className="right w-1/3 max-lg:hidden">
        <Image
          src={samurai}
          alt="samurai image"
          className="w-full h-full rounded-xl object-cover object-top grayscale hover:grayscale-0 transition-all duration-300 "
        />
      </div>
    </div>
  );
};

export default homeFirst;
