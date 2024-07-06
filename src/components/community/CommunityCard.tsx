import { communityCardPropsType } from "@/utils/types";
import Image from "next/image";

const CommunityCard = ({
  image,
  name,
  type,
  comment,
  color,
}: communityCardPropsType) => {
  return (
    <div className="card-container font-poppins w-96 max-sm:mx-auto">
      <div
        className="header px-3 py-2 rounded-tl-xl rounded-tr-xl flex items-center"
        style={{ backgroundColor: color }}
      >
        <Image
          className="w-16 h-16 max-sm:w-12 max-sm:h-12 rounded-full mr-5"
          src={image}
          alt="user image"
        />
        <div className="info">
          <h2 className="type text-2xl max-sm:text-lg font-bold text-main-dark">
            {type}
          </h2>
          <p className="name text-lg max-sm:text-sm text-main-white font-semibold">
            {name}
          </p>
        </div>
      </div>
      <div className="comment h-16 max-sm:h-auto max-sm:p-5 max-sm:text-sm max-sm:text-center bg-main-white rounded-bl-xl rounded-br-xl flex justify-center items-center font-semibold">
        <p>{comment}"</p>
      </div>
    </div>
  );
};

export default CommunityCard;
