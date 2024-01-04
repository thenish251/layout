import React from "react";
import Table from "./Table";
import { MdOutlineDateRange } from "react-icons/md";
import { MdFormatLineSpacing } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
import { MdLogout } from "react-icons/md";

const Logs = () => {
  const tableData = [
    {
      date: "Dec 03, Mon",
      effectiveHours: "9h 15m",
      grossHours: "20h 30m",
      extraHours: "0h 20m",
      arrival: "On Time",
      log: <CiCircleCheck />,
    },
    {
      date: "Dec 03, Mon",
      effectiveHours: "9h 15m",
      grossHours: "20h 30m",
      extraHours: "0h 20m",
      arrival: "On Time",
      log: <CiCircleCheck />,
    },
    {
      date: "Dec 03, Mon",
      effectiveHours: "9h 15m",
      grossHours: "20h 30m",
      extraHours: "0h 20m",
      arrival: "On Time",
      log: <MdLogout />,
    },
  ];
  return (
    <div className="">
      <div className="mb-5 flex gap-2">
        <h3>
          <strong>Logs & Requests</strong>
        </h3>
      </div>
      <div className="mb-5">
        <div className="w-fit rounded-lg border border-white overflow-hidden">
          <button className="px-10 py-2 bg-orange-600 border-r-2 border-white">
            Attendance Logs
          </button>
          <button className="px-10 py-2">Attendance Requests</button>
        </div>
      </div>
      <div className="border rounded-xl overflow-hidden">
        <div className="flex items-center justify-between bg-gray-800 py-1 px-5 border-b">
          <div className="">
            <h2 className="text-lg font-semibold"> December, 2023</h2>
          </div>
          <div className="flex items-center overflow-hidden border-2 rounded-lg">
            <button className="w-[90px] text-sm py-3 bg-orange-600 border-r-2">
              30 Days
            </button>
            <button className="w-[90px] text-sm py-3 border-r-2">
              30 Days
            </button>
            <button className="w-[90px] text-sm py-3 border-r-2">Nov</button>
            <button className="w-[90px] text-sm py-3 border-r-2">Oct</button>
            <button className="w-[90px] text-sm py-3 border-r-2">Sept</button>
            <button className="w-[90px] text-sm py-3 border-r-2">Aug</button>
            <button className="w-[90px] text-sm py-3 border-r-2">July</button>
            <button className="w-[90px] text-sm py-3">Jan</button>
          </div>
          <div className="flex border rounded-lg overflow-hidden">
            <button className="px-2.5 py-3 bg-orange-600 border-r">
              <MdOutlineDateRange className="text-lg" />
            </button>{" "}
            <button className="px-2.5 py-3">
              <MdFormatLineSpacing className="text-lg" />
            </button>
          </div>
        </div>
        <Table data={tableData} />
      </div>
    </div>
  );
};

export default Logs;
