/**
 * @file components/dashboard/DashboardChart.tsx
 * @description Line chart component for dashboard
 */

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  name: string;
  sales: number;
  online: number;
  offline: number;
}

interface DashboardChartProps {
  data: DataPoint[];
}

export default function DashboardChart({ data }: DashboardChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
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
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip
          formatter={(value: number) => [`$${value}`, ""]}
          labelFormatter={(label) => `Day: ${label}`}
          contentStyle={{
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="sales"
          stroke="#4f46e5"
          strokeWidth={2}
          activeDot={{ r: 8 }}
          name="Total Sales"
        />
        <Line
          type="monotone"
          dataKey="online"
          stroke="#10b981"
          strokeWidth={2}
          name="Online Sales"
        />
        <Line
          type="monotone"
          dataKey="offline"
          stroke="#f59e0b"
          strokeWidth={2}
          name="In-Store Sales"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
