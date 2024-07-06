import { StaticImageData } from "next/image";

export type sectionChildren = {
  children?: React.ReactNode;
};

export type communityCardPropsType = {
  image: StaticImageData;
  name: string;
  type: string;
  color: string;
  comment: string;
};
