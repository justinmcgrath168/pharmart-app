/**
 * @file components/dashboard/DashboardPieChart.tsx
 * @description Pie chart component for dashboard
 */

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

interface DataPoint {
  name: string;
  value: number;
}

interface DashboardPieChartProps {
  data: DataPoint[];
}

export default function DashboardPieChart({ data }: DashboardPieChartProps) {
  // Colors for different segments
  const COLORS = ["#4f46e5", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          innerRadius={40}
          fill="#8884d8"
          dataKey="value"
          nameKey="name"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value: number) => [`${value}%`, ""]}
          contentStyle={{
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
