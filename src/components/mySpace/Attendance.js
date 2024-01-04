import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";
 import { FaChartPie } from "react-icons/fa6";

const Attendance = () => {
  return (
    <div>
      <div className="mb-5 flex gap-2">
        <h3>
          <strong>My Space</strong>
        </h3>
        <span> / </span>{" "}
        <h3 className="text-orange-500 font-normal">Attendance</h3>
      </div>
      <div className="bg-gray-800">
        <div className="border border-white rounded-lg p-3">
          <div className="flex justify-between">
            {/* // */}
            <div className="w-2/5 flex flex-col gap-2">
              <h5 className="font-semibold">Attendance Status</h5>
              <div className="flex items-center gap-1">
                <p className="text-sm">Last Week</p>
                <IoIosArrowDown />
              </div>
              <div className="flex items-center gap-10 p-2 shadow-white shadow-sm h-[80px]">
                <div className="flex items-center gap-4">
                  <FaRegClock className="text-4xl" />
                  <div className="">
                    <h3 className="text-lg font-semibold">Avg hrs / Day</h3>
                    <p>(6hrs 48mins)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaChartPie className="text-4xl" />
                  <div className="">
                    <h3 className="text-lg font-semibold">On Time Arrival</h3>
                    <p className="text-center">95%</p>
                  </div>
                </div>
               
              </div>
            </div>
            {/* // */}
            <div className="w-1/5 flex flex-col items-center gap-2">
              <h5 className="font-semibold">Timing</h5>
              <div className="flex items-center gap-1.5">
                <button className="w-5 h-5 flex items-center justify-center border border-white rounded-full text-xs">
                  {" "}
                  M{" "}
                </button>
                <button className="w-5 h-5 flex items-center justify-center border border-white rounded-full text-xs">
                  {" "}
                  T{" "}
                </button>
                <button className="w-5 h-5 flex items-center justify-center border border-white rounded-full text-xs">
                  {" "}
                  W{" "}
                </button>
                <button className="w-5 h-5 flex items-center justify-center border border-white rounded-full text-xs">
                  {" "}
                  T{" "}
                </button>
                <button className="w-5 h-5 flex items-center justify-center border border-white rounded-full text-xs">
                  {" "}
                  F{" "}
                </button>
                <button className="w-5 h-5 flex items-center justify-center border border-white rounded-full text-xs">
                  {" "}
                  S{" "}
                </button>
                <button className="w-5 h-5 flex items-center justify-center border border-white rounded-full text-xs">
                  {" "}
                  S{" "}
                </button>
              </div>
              <div className="flex flex-col items-center justify-start gap-2">
                <div className="p-2 shadow-white shadow-sm space-y-4 h-[80px]">
                  <p className="text-sm text-center">
                    Today (9:30 AM - 6:30PM)
                  </p>
                  <div className="flex items-center gap-3 mx-3 ">
                    <p className="text-xs text-center">Duration : 9h 0m</p>
                    <p className="text-xs text-center">Break : Om</p>
                  </div>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="w-2/5 flex flex-col items-center justify-start gap-2">
              <h5 className="font-semibold">Action</h5>
              <div className="">
                <p className="text-sm"> eal </p>
              </div>
              <div className="flex gap-3">
                <div className="p-2 shadow-white shadow-sm space-y-2 h-[80px]">
                  <h2 className="text-3xl">04:04:39 PM</h2>
                  <p className="text-sm text-center">Wed 06, Dec 2023</p>
                </div>
                <div className="w-[200px] flex flex-col gap-2 text-black font-bold">
                  <button className="text-sm rounded-md bg-orange-300 p-2">
                    Leave Request
                  </button>
                  <button className="text-sm rounded-md bg-orange-300 p-2">
                    Work From House{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
