import React from "react";

const Start = ({ setDisplay }) => {
  return (
    <div className="flex flex-col gap-5 font-alfa items-center h-full justify-center ">
      <div className="font-aclonica text-english-lavender text-[120px] ">
        QUIZ APP
      </div>
      <div
        onClick={() => setDisplay("question")}
        className="bg-copper border-pastelPink border-[6px] text-[48px] px-5 text-pastelPink rounded-xl hover:scale-110 hover:text-white hover:border-white"
      >
        START
      </div>
      <div className="text-english-lavender text-[24px] text-center">
        Skill Issue as fuck <br /> Let me cook
      </div>
    </div>
  );
};

export default Start;
