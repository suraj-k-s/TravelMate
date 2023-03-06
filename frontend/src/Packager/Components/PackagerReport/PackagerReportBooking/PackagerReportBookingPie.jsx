import "./PackagerReportBookingPie.css";
import React, { PureComponent } from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", value: 19 },
  { name: "Feb", value: 21 },
  { name: "Mar", value: 25 },
  { name: "Apr", value: 18 },
  { name: "May", value: 15 },
  { name: "Jun", value: 13 },
  { name: "Jul", value: 10 },
  { name: "Aug", value: 9 },
  { name: "Sep", value: 7 },
  { name: "Oct", value: 12 },
  { name: "Nov", value: 18 },
  { name: "Dec", value: 20 },
];

const COLORS = [
  "#FF0000",
  "#00FFFF",
  "#0000FF",
  "#FF5F1F",
  "#FF00FF",
  "#FFFF00",
  "#00FF00",
  "#800080",
  "#808080",
  "#FFA500",
  "#008000",
  "#00008B",
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class Example extends PureComponent {
  render() {
    return (
      
      <div className="packagerReportBookingPie">
       <h3 className="packagerReportBookingPieTitle">Monthly Booking Analysis</h3>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={true}
              outerRadius={125}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
