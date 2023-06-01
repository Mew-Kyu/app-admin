import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  {
    name: "12:00",
    price: 48,
  },
  {
    name: "1:00",
    price: 65,
  },
  {
    name: "2:00",
    price: 5,
  },
  {
    name: "3:00",
    price: 62,
  },
  {
    name: "4:00",
    price: 45,
  },
  {
    name: "5:00",
    price: 62,
  },
  {
    name: "6:00",
    price: 75,
  },
  {
    name: "7:00",
    price: 90,
  },
  {
    name: "8:00",
    price: 30,
  },
  {
    name: "9:00",
    price: 65,
  },
  {
    name: "10:00",
    price: 45,
  },
  {
    name: "11:00",
    price: 38,
  },
];

export const TokenChart = () => {
  return (
    <>
      <p
        style={{
          color: "#4A4A65",
          fontWeight: 700,
          fontSize: "32px",
        }}
      >
        Token Price
      </p>
      <ResponsiveContainer width={"100%"} height={425}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            axisLine={false}
            tick={{ fill: "#A4A4B3" }}
            tickLine={false}
            dataKey="name"
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#A4A4B3" }}
            tickLine={false}
            tickCount={6}
            domain={[0, 80]}
          />
          <CartesianGrid vertical={false} />
          <Tooltip />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9747FF" />
              <stop offset="100%" stopColor="#14F4C9" />
            </linearGradient>
          </defs>
          <Line
            type="monotone"
            dataKey="price"
            stroke="url(#gradient)"
            strokeWidth={5}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};
