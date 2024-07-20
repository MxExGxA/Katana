import katanas from "@/assets/images/image2.png";
import smallCorner from "@/assets/images/small corner.png";
import Image from "next/image";

const HomeSecond = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center py-12">
      <div className="left w-1/2 max-lg:hidden flex justify-center">
        <Image
          src={katanas}
          alt="katans image"
          className=" max-2xl:w-[400px] rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-300 max-xl:w-96  max-lg:hidden"
        />
      </div>
      <div className="right w-1/2 max-lg:w-full ml-10 max-md:mx-auto flex justify-center mr-20 max-md:text-center">
        <div className="unique-container relative *:my-5">
          <Image
            src={smallCorner}
            alt="smallCorner image"
            className="absolute -left-16 -top-16 !m-0 max-xl:hidden"
          />

          <h1 className="title font-reggae text-main-red text-7xl max-sm:text-6xl">
            UNIQUE
          </h1>
          <p className="description text-main-white font-podkova text-[22px]">
            every player must find their own unique katana. This personal quest
            involves exploring ancient lands, overcoming trials, and unlocking
            secrets.
          </p>
          <button className="bg-main-red text-main-dark hover:bg-main-white hover:text-main-red transition-colors duration-300 text-lg rounded-xl py-3 px-4 font-poppins font-[600]">
            Find Your Katana
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSecond;
