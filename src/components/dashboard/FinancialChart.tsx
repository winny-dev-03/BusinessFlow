import type { FC } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { TooltipProps } from "recharts";
import type { FinancialPoint } from "../../types/dashboard";

type ChartTooltipProps = { active?: boolean; payload?: Array<{ dataKey?: string | number; name?: string | number; value?: string | number; }>; label?: string | number; };
interface FinancialChartProps {
  data: FinancialPoint[];
}

const ChartTooltip: FC<ChartTooltipProps> = ({ active, payload, label, }) => { if (!active || !payload || payload.length === 0) return null;
  return (
    <div className="rounded-md border border-[#2A2733] bg-[#1C1A22] px-3 py-2 text-[12px]">
      <p className="mb-1 text-[#A39DAE]">{label}</p>
      {payload.map((entry) => (
        <p key={entry.dataKey as string} className="text-[#F3F1ED]">
          {entry.name}: ${Number(entry.value).toLocaleString()}
        </p>
      ))}
    </div>
  );
};

export const FinancialChart: FC<FinancialChartProps> = ({ data }) => {
  return (
    <div className="rounded-xl border border-[#26232E] bg-[#17151C] p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-[14.5px] font-medium text-[#F3F1ED]">
          Financial overview
        </h3>
        <span className="text-[12px] text-[#6F6A7A]">Last 6 months</span>
      </div>

      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 4, right: 4, left: -16, bottom: 0 }}>
            <defs>
              <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7C5CFF" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#7C5CFF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#26232E" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fill: "#6F6A7A", fontSize: 12 }}
              axisLine={{ stroke: "#26232E" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#6F6A7A", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value: number) => `$${value / 1000}k`}
            />
            <Tooltip content={<ChartTooltip />} />
            <Area
              type="monotone"
              dataKey="revenue"
              name="Revenue"
              stroke="#9B84F5"
              strokeWidth={2}
              fill="url(#revenueFill)"
            />
            <Area
              type="monotone"
              dataKey="expenses"
              name="Expenses"
              stroke="#524C5E"
              strokeWidth={1.5}
              fill="none"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};