import React from "react";

const Table = ({ data }) => {
  return (
    <div>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Date
              </th>
              <th scope="col" class="px-6 py-3">
                Attendance Visual
              </th>
              <th scope="col" class="px-6 py-3">
                Effective hours
              </th>
              <th scope="col" class="px-6 py-3">
                Gross Hours
              </th>
              <th scope="col" class="px-6 py-3">
                Extra Hours
              </th>
              <th scope="col" class="px-6 py-3">
                Arrival
              </th>
              <th scope="col" class="px-6 py-3">
                Log
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((value, index) => (
              <tr
                key={index}
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {value.date}
                </th>
                <td class="px-6 py-4">{value.date}</td>
                <td class="px-6 py-4">{value.effectiveHours}</td>
                <td class="px-6 py-4">{value.grossHours}</td>
                <td class="px-6 py-4">{value.extraHours}</td>
                <td class="px-6 py-4">{value.arrival}</td>
                <td class="px-6 py-4">{value.log}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
