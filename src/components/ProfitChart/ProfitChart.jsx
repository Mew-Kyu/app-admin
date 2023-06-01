import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  {
    name: "06 March",
    uv: 110000,
  },
  {
    name: "07 March",
    uv: -120000,
  },
  {
    name: "08 March",
    uv: 230000,
  },
  {
    name: "09 March",
    uv: -20000,
  },
  {
    name: "10 March",
    uv: -10000,
  },
  {
    name: "11 March",
    uv: 15000,
  },
  {
    name: "12 March",
    uv: 150000,
  },
];

export const ProfitChart = () => {
  return (
    <>
      <p style={{ color: "#4A4A65", fontWeight: 700, fontSize: "32px" }}>
        Profit
      </p>
      <ResponsiveContainer width="100%" height={541}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid />
          <XAxis
            dataKey="name"
            tick={{ fill: "#5F5F76" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis tick={{ fill: "#5F5F76" }} axisLine={false} tickLine={false} />
          <Tooltip />
          <Bar dataKey="uv">
            {data.map((datum, entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={datum.uv > 0 ? "#4FB5C9" : "#F05D5E"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};
