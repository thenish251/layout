import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa6";

const Attendance = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="mb-5 flex flex-col sm:flex-row gap-2">
        <h3>
          <strong>My Space</strong>
        </h3>
        <span> / </span>{" "}
        <h3 className="text-orange-500 font-normal">Attendance</h3>
      </div>
      <div className="bg-gray-800">
        <div className="border border-white rounded-lg p-3">
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="w-full sm:w-2/5 flex flex-col gap-2">
              <h5 className="font-semibold">Attendance Status</h5>
              <div className="flex items-center gap-1">
                <p className="text-sm">Last Week</p>
                <IoIosArrowDown />
              </div>
              <div className="flex items-center gap-10 p-2 shadow-white shadow-sm sm:h-[80px]">
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
            <div className="w-full sm:w-1/5 flex flex-col items-center gap-2">
              <h5 className="font-semibold">Timing</h5>
              <div className="flex items-center gap-1.5">
                <button className="w-5 h-5 flex items-center justify-center border border-white rounded-full text-xs">
                  {" "}
                  M{" "}
                </button>
                {/* ... (Repeat for other days) */}
              </div>
              <div className="flex flex-col items-center justify-start gap-2">
                <div className="p-2 shadow-white shadow-sm space-y-4 sm:h-[80px]">
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
            <div className="w-full sm:w-2/5 flex flex-col items-center justify-start gap-2">
              <h5 className="font-semibold">Action</h5>
              <div className="">
                <p className="text-sm">Real</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
  <div className="p-2 shadow-white shadow-sm space-y-2 sm:w-1/2">
    <h2 className="text-2xl sm:text-3xl">04:04:39 PM</h2>
    <p className="text-xs sm:text-sm text-center">Wed 06, Dec 2023</p>
  </div>
  <div className="w-full sm:w-[200px] flex flex-col gap-2 text-black font-bold">
    <button className="text-xs sm:text-sm rounded-md bg-orange-300 p-1 sm:p-2">
      Leave Request
    </button>
    <button className="text-xs sm:text-sm rounded-md bg-orange-300 p-1 sm:p-2">
      Work From House
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
