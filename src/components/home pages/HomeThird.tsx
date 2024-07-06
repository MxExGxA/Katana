import hero1 from "@/assets/images/image3.png";
import hero2 from "@/assets/images/image4.png";
import hero3 from "@/assets/images/image5.png";
import smallCorner from "@/assets/images/small corner.png";
import Image from "next/image";

const HomeThird = () => {
  return (
    <div className="relative w-full py-12 max-lg:py-0 flex items-center max-md:items-stretch justify-center">
      <div className="bg-words line-height-zero absolute top-0 left-0 h-full w-full text-main-white opacity-10 text-[360px] font-black font-poppinss flex flex-col justify-center items-center overflow-hidden">
        <h1>HERO'S</h1>
        <h1>HERO'S</h1>
        <h1>HERO'S</h1>
      </div>
      <div className="images relative flex flex-shrink-0  max-md:flex-col justify-center *:w-80 max-lg:*:w-48 max-lg:*:h-72 max-md:*:h-56 max-md:*:my-2 max-md:py-0  max-lg:py-20 *:object-cover z-40 *:mx-5 *:rounded-lg">
        <Image
          src={smallCorner}
          alt="corner image"
          className="absolute -top-5 -left-5 z-50 !w-44 pointer-events-none max-lg:hidden"
        />
        <Image
          src={smallCorner}
          alt="corner image"
          className="absolute -bottom-5 -right-5 z-50 !w-44 rotate-180 pointer-events-none max-lg:hidden"
        />
        <Image
          className="grayscale hover:grayscale-0 transition-all duration-300"
          src={hero1}
          alt="hero image"
        />
        <Image
          className="grayscale hover:grayscale-0 transition-all duration-300"
          src={hero2}
          alt="hero image"
        />
        <Image
          className="grayscale hover:grayscale-0 transition-all duration-300"
          src={hero3}
          alt="hero image"
        />
      </div>
    </div>
  );
};

export default HomeThird;
