import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "06 March",
    uv: 110000,
  },
  {
    name: "07 March",
    pv: -120000,
    // pv: 1398,
  },
  {
    name: "08 March",
    uv: 230000,
    // pv: -9800,
  },
  {
    name: "09 March",
    pv: -20000,
    // pv: 3908,
  },
  {
    name: "10 March",
    pv: -10000,
    // pv: 4800,
  },
  {
    name: "11 March",
    uv: 15000,
    // pv: -3800,
  },
  {
    name: "12 March",
    uv: 150000,
    // pv: 4300,
  },
];

const updatedData = data.map((item) => ({
  ...item,
  color: item.uv > 0 ? "#4FB5C9" : "#F05D5E",
}));

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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="uv" fill={"#4FB5C9"} />
          <Bar dataKey="pv" fill={"#F05D5E"} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};
