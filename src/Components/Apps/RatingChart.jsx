import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const RatingChart = ({ singleApps }) => {
  const ratings = Array.isArray(singleApps.ratings) ? singleApps.ratings : [];

  const chartData = ratings.map((r) => ({
    name: r.name,
    value: r.count,
  }));

  if (!chartData.length) {
    return (
      <div className="w-full h-[300px] bg-white p-4 rounded-2xl shadow flex items-center justify-center">
        <span className="text-gray-400">No ratings data available.</span>
      </div>
    );
  }

  return (
    <div className="w-full h-[300px] bg-white p-4 rounded-2xl shadow">
      <h2 className="text-lg font-semibold mb-4">Ratings Overview</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{ top: 5, right: 20, bottom: 5, left: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Bar
            dataKey="value"
            fill="#FF8C00"
            barSize={20}
            radius={[4, 4, 4, 4]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingChart;
