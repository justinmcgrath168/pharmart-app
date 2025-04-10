/**
 * @file components/dashboard/DashboardBarChart.tsx
 * @description Bar chart component for dashboard
 */

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  name: string;
  value: number;
}

interface DashboardBarChartProps {
  data: DataPoint[];
}

export default function DashboardBarChart({ data }: DashboardBarChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip
          formatter={(value: number) => [`${value}`, ""]}
          contentStyle={{
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        />
        <Bar
          dataKey="value"
          fill="#4f46e5"
          radius={[4, 4, 0, 0]}
          name="Value"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
