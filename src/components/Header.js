import React from "react";
import { ROUTES } from "../constants/routes";

const Header = ({ display }) => {
  return (
    <div className="bg-[#435B66] w-full flex items-center px-[73px] py-[9px] text-english-lavender font-aclonica h-[88px]">
      {display !== ROUTES.START && <div className="text-[55px]">QUIZ APP</div>}
    </div>
  );
};

export default Header;
