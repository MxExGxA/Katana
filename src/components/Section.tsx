import noise from "@/assets/images/noise texture.png";
import Image from "next/image";
import { sectionChildren } from "@/utils/types";

const Section = ({ children }: sectionChildren) => {
  return (
    <section className="relative w-full min-h-screen flex justify-center bg-main-dark px-12 max-sm:px-2">
      <Image
        src={noise}
        alt="noise texture"
        className="absolute w-full h-full z-50 opacity-80 pointer-events-none mix-blend-soft-light"
        priority
        fill
      />
      {children}
    </section>
  );
};

export default Section;
