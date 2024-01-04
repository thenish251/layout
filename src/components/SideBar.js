import React from "react";
import logo from '../logo.svg';
import { IoMdArrowBack } from "react-icons/io";
import { HiOutlineHome } from "react-icons/hi2";
import { FaChartSimple } from "react-icons/fa6";

const SideBar = () => {
  return (
    <div className="h-screen w-[300px] border-r border-white shadow-r-blue-500">
      <div className="relative h-[190px] flex justify-center items-center p-5 border-b-2">
        <img src={logo} alt={"ract-logo"} />
        <div className="absolute -right-5 -bottom-4">
          <button className="bg-white rounded-full p-1.5">
            <IoMdArrowBack className="text-2xl text-black" />
          </button>
        </div>
      </div>
      <div className="py-5 space-y-7">
        <button className="w-4/5 flex items-center gap-2 bg-white text-black px-auto py-2 px-4 font-semibold rounded-r-full">
          <HiOutlineHome className="text-xl" /> Home
        </button>
        <div className="">
          <button className="w-4/5 flex items-center gap-2 bg-orange-500 text-white px-auto py-2 px-4 font-semibold rounded-r-full">
            <FaChartSimple className="text-xl" /> My Space
          </button>
          <div className="px-10 mt-2 space-y-2">
            <button>Leave</button>
            <br />
            <button>
              <span className="text-orange-500">Attendance</span>
            </button>
            <button>Performance</button>
            <button>Expenses & Travel</button>
            <button>Help Desk</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
