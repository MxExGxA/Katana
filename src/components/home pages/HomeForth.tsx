import samuriBG from "@/assets/images/samurai bg.png";
import samuriTransparent from "@/assets/images/samuri transparent.png";
import largeCorner from "@/assets/images/large corner.png";
import smallCornter from "@/assets/images/small corner.png";
import fire from "@/assets/images/fire.png";
import ice from "@/assets/images/ice.png";
import thunder from "@/assets/images/thunder.png";
import Image from "next/image";

const HomeForth = () => {
  return (
    <div className="relative w-full flex">
      <Image
        src={largeCorner}
        alt="corner image"
        className="absolute -right-12 bottom-0 z-30"
      />

      <div className="left w-1/2 max-md:w-full flex items-center z-40">
        <div className="choose-container relative *:my-5 *:ml-20 max-sm:*:mx-auto ml-20 max-md:mx-auto max-sm:text-center">
          <Image
            src={smallCornter}
            alt="small corner image"
            className="absolute -top-16 !m-0 max-sm:hidden"
          />
          <div className="title text-main-red font-reggae text-7xl max-sm:text-6xl">
            CHOOSE
          </div>
          <div className="description  text-main-white font-podkova text-[22px]">
            players choose their character before starting, each with unique
            abilities and fighting styles. Your choice shapes your combat
            strategy and game progression.
          </div>
          <button className="bg-main-red hover:bg-main-white hover:text-main-red transition-colors duration-300 text-main-dark text-lg rounded-xl py-3 px-4 font-poppins font-[600]">
            Choose Your Hero
          </button>
          <div className="powers flex max-sm:justify-center *:mr-6 max-sm:*:mx-3 *:bg-main-red *:w-12 *:h-12 *:p-3 *:rounded-xl !my-0">
            <Image src={fire} alt="fire image" />
            <Image src={ice} alt="ice image" />
            <Image src={thunder} alt="thunder image" />
          </div>
        </div>
      </div>
      <div className="right max-md:opacity-50">
        <Image
          src={samuriBG}
          alt="samuri bg"
          className="absolute right-20 max-md:right-0 bottom-20"
        />
        <Image
          src={samuriTransparent}
          alt="samuri transparent"
          className="absolute right-24 max-md:right-0 bottom-0 z-30"
        />
      </div>
    </div>
  );
};

export default HomeForth;
