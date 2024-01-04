import React from "react";
import { IoIosNotifications } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { MdForwardToInbox } from "react-icons/md";
import { CiUser } from "react-icons/ci";

const Header = () => {
  return (
    <div className="flex justify-center gap-10">
      <div className="flex gap-10 items-center">
        <div className="min-w-[300px] text-blacK">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-5 py-2 rounded-lg text-black outline-none focus-none"
          />
        </div>
        <div className="w-full flex items-center gap-10">
          <div className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-xl">
            <IoIosNotifications className="text-2xl" />
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-xl">
            <MdForwardToInbox className="text-xl" />
          </div>
          {/* <div className="bg-gray-500 rounded-full w-12 h-12 flex items-center justify-center">
            <IoIosNotifications />
          </div> */}
          <div className="bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center border-2 border-white">
            <CiUser className="text-3xl " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
