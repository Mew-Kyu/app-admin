import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Bank",
    uv: 4567890.12,
    fill: "#F3BA2F",
  },
  {
    name: "Token",
    uv: 1567890.12,
    fill: "#54C2C1",
  },
  {
    name: "Cash",
    uv: 67890.12,
    fill: "#000",
  },
  {
    name: "Stock",
    uv: 567890.12,
    fill: "#9020E9",
  },
];

const style = {
  top: "100%",
  left: "50%",
  transform: "translate(-50%, -100%)",
  lineHeight: "24px",
};

const legendFormatter = (value, entry) => {
  return (
    <>
      <span style={{ color: "#5F5F76" }}>{entry.payload.name}</span>:{" "}
      <span style={{ color: "#0F0F3F", fontWeight: 700 }}>
        ${entry.payload.uv.toFixed(2)}
      </span>
    </>
  );
};

export const AllocationChart = () => {
  return (
    <>
      <p style={{ fontWeight: 700, fontSize: "32px", color: "#4A4A65" }}>
        Money Allocation
      </p>
      <ResponsiveContainer width={"100%"} height={541}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="10%"
          outerRadius="80%"
          startAngle={90}
          endAngle={450}
          barSize={10}
          data={data}
        >
          <RadialBar minAngle={15} background clockWise dataKey="uv" />
          <Legend
            iconType="circle"
            iconSize={18}
            layout="horizontal"
            verticalAlign="middle"
            wrapperStyle={style}
            // width={"50%"}
            formatter={legendFormatter}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </>
  );
};
