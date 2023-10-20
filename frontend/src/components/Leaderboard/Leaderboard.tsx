import React from "react";
import { Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Area", "Trash (kg/person/month)", "Recycled (%)", "Miss-allocation (%)"];
const TABLE_ROWS = [
  {
    area: "Prague 1",
    trash: 13.39,
    recycled: 16.3,
    missAllocation: 32,
  },
  {
    area: "Prague 2",
    trash: 7.39,
    recycled: 22.3,
    missAllocation: 16,
  },
  {
    area: "Prague 3",
    trash: 13.39,
    recycled: 16.3,
    missAllocation: 11.3,
  },
  {
    area: "Prague 4",
    trash: 13.39,
    recycled: 16.3,
    missAllocation: 32,
  },
  {
    area: "Prague 5",
    trash: 13.39,
    recycled: 16.3,
    missAllocation: 32,
  },
  {
    area: "Prague 6",
    trash: 13.39,
    recycled: 16.3,
    missAllocation: 32,
  },
];
TABLE_ROWS.sort((a, b) => a.recycled - b.recycled);

function Leaderboard({ toMap }) {
  return (
    <header className="text-center py-5 md:py-14">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ area, trash, recycled, missAllocation }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={area}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {area}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {trash}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {recycled}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {missAllocation}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
      type="submit"
      className="w-[90%] md:w-[30%] mt-10 py-3 px-6 bg-blue-300 hover:opacity-70 rounded-full mx-auto shadow-xl shadow-light-blue"
      style={{ float: "right" }}
      onClick={toMap}
      >
        Map View
      </button>
    </header>
  );
}

export default Leaderboard;
