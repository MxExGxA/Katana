import doodles from "@/assets/images/doodles.png";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div
      id="about"
      className="relative w-full pt-12  flex flex-col items-center justify-between z-40 overflow-hidden"
    >
      <div className="about h-1/2 max-2xl:h-auto flex flex-col items-center justify-center">
        <div className="title flex items-end font-poppins mb-8">
          <h1 className="text-9xl max-md:text-6xl max-lg:text-8xl font-bold gradient-nexus mr-3">
            NEXUS
          </h1>
          <h2 className="text-main-white text-6xl max-md:text-3xl max-lg:text-4xl font-extralight -translate-y-[15px] max-md:-translate-y-[4px]">
            Studio
          </h2>
        </div>
        <p className="about-info text-2xl max-md:text-xl max-xl:mb-10 w-[60%] max-lg:w-full text-main-white text-center font-poppins font-light">
          Nexus Studio is dedicated to creating immersive and thrilling games.
          We blend captivating storytelling with cutting-edge technology to
          deliver unique adventures for players worldwide.
        </p>
      </div>
      <div className="footer relative pb-5  bottom-0 w-full h-1/2 max-2xl:h-auto bg-main-red rounded-tl-xl rounded-tr-xl flex justify-center overflow-hidden">
        <Image
          src={doodles}
          alt="doodles image"
          className="absolute h-full opacity-80 object-cover w-full pointer-events-none"
        />
        <div className="w-full h-full mt-6 mx-6  rounded-tl-xl rounded-tr-lg border border-main-dark z-50 flex max-2xl:flex-col justify-center items-center p-10">
          <div className="left font-reggae text-5xl max-xl:text-4xl text-main-dark border-r border-main-dark px-5 max-2xl:mb-10 max-2xl:text-center max-2xl:border-none">
            <h1>Master the Blade, Conquer the Fight</h1>
          </div>
          <div className="right w-full font-poppins text-2xl text-main-dark px-10 max-sm:px-0 flex max-xl:flex-wrap max-md:flex-col justify-center max-2xl:justify-between max-md:items-center *:mx-20 max-lg:*:mx-5 max-lg:*:my-5  max-xl:*:mx-10 max-md:*:w-36 *:text-nowrap">
            <ul className="*:ml-5 *:mb-3">
              <h2 className="font-bold !ml-0">Quick Links</h2>
              <li>
                <Link href={"#home"}>Home</Link>
              </li>
              <li>
                <Link href={"#community"}>Community</Link>
              </li>
              <li>
                <Link href={"#download"}>Download</Link>
              </li>
              <li>
                <Link href={"#about"}>About</Link>
              </li>
            </ul>

            <ul className="*:ml-5 *:mb-3">
              <h2 className="font-bold !ml-0">Support</h2>
              <li>
                <Link href={""}>Support</Link>
              </li>
              <li>
                <Link href={""}>FAQs</Link>
              </li>
              <li>
                <Link href={""}>Contact Us</Link>
              </li>
            </ul>

            <ul className="*:ml-5 *:mb-3">
              <h2 className="font-bold !ml-0">Legal</h2>
              <li>
                <Link href={""}>Privacy Policy</Link>
              </li>
              <li>
                <Link href={""}>Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="absolute bottom-5 font-poppins text-main-dark z-50 max-sm:text-sm max-sm:text-center max-sm:w-60">
          Copyright © 2024 Nexus | Crafted by{" "}
          <Link
            className="font-semibold text-[16px]"
            href={"https://www.linkedin.com/in/elsayed-elghazy-1851011b1/"}
          >
            Elsayed Elghazy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
