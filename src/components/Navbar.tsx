import logo from "@/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="navbar w-full h-14 bg-main-red rounded-xl flex justify-between max-sm:justify-center items-center px-5">
      <div className="logo max-sm:hidden">
        <Image src={logo} alt="logo image" />
      </div>
      <div className="links font-poppins text-main-dark *:ml-4 max-sm:*:ml-2 max-sm:*:text-sm *:text-[16px] font-semibold">
        <Link href={"#home"}>HOME</Link>
        <Link href={"#community"}>COMMUNITY</Link>
        <Link href={"#download"}>DOWNLOAD</Link>
        <Link href={"#about"}>ABOUT</Link>
      </div>
    </div>
  );
};

export default Navbar;
