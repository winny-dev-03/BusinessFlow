
import type { FC } from "react";
import type { LucideIcon } from "lucide-react";

interface MetricCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  trend?: {
    value: string;
    positive: boolean;
  };
}

export const MetricCard: FC<MetricCardProps> = ({
  label,
  value,
  icon: Icon,
  trend,
}) => {
  return (
    <div className="flex-1 rounded-xl border border-[#26232E] bg-[#17151C] p-5">
      <div className="flex items-center justify-between">
        <span className="text-[13px] text-[#A39DAE]">{label}</span>
        <Icon size={16} strokeWidth={1.75} className="text-[#6F6A7A]" />
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-[22px] font-medium text-[#F3F1ED]">{value}</span>
        {trend && (
          <span
            className={`text-[12px] font-medium ${
              trend.positive ? "text-[#7FBF8F]" : "text-[#E2837F]"
            }`}
          >
            {trend.positive ? "+" : ""}
            {trend.value}
          </span>
        )}
      </div>
    </div>
  );
};