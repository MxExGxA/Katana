import React from "react";
import CommunityCard from "./CommunityCard";
import { f1, f2, m1, m2, m3, m4 } from "@/assets/images/users";

const Community = () => {
  return (
    <div
      id="community"
      className="w-full py-12 flex flex-col items-center justify-center"
    >
      <div className="header max-xl:scale-75 max-md:scale-50 max-sm:scale-[0.35] max-md:-my-10 font-poppins text-nowrap mb-20">
        <div className="row flex relative items-center">
          <h1 className="inline-block text-main-white text-9xl font-extralight top-24">
            JOIN OUR
          </h1>
          <button className="text-main-white border-2 rounded-xl text-6xl h-full py-4 px-12 ml-12">
            JOIN NOW
          </button>
        </div>
        <div className="row">
          <h1 className="text-[153px] font-extrabold text-main-red leading-none">
            COMMUNITY
          </h1>
        </div>
      </div>
      <div className="body flex justify-center items-center flex-wrap w-[80%] *:mx-3 *:mb-6">
        <CommunityCard
          image={m1}
          name={"John"}
          type={"Recommendation"}
          color={"#C02929"}
          comment={"Intense and thrilling samurai battles!😀"}
        />
        <CommunityCard
          image={f1}
          name={"Lara"}
          type={"Recommendation"}
          color={"#C02929"}
          comment={"Love the unique katana quest! ❤️❤️"}
        />
        <CommunityCard
          image={m2}
          name={"Alex"}
          type={"Recommendation"}
          color={"#C02929"}
          comment={"Best online combat game I've played.!✨"}
        />
        <CommunityCard
          image={m3}
          name={"Harry"}
          type={"Recommendation"}
          color={"#C02929"}
          comment={"Beautiful graphics and design.🌹"}
        />
        <CommunityCard
          image={m4}
          name={"George"}
          type={"Recommendation"}
          color={"#C02929"}
          comment={"Highly immersive gameplay. 👍🏽👍🏽"}
        />
        <CommunityCard
          image={f2}
          name={"Olivia"}
          type={"Dissuasion"}
          color={"#DA8A12"}
          comment={"Steep learning curve.☹️☹️"}
        />
      </div>
    </div>
  );
};

export default Community;
