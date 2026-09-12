import type { FC } from "react";
import { FolderKanban, ListChecks, DollarSign, Users2 } from "lucide-react";
import type { OverviewMetrics } from "../../types/dashboard";
import { MetricCard } from "./MetricCard";

interface OverviewHeroProps {
  metrics: OverviewMetrics;
}

export const OverviewHero: FC<OverviewHeroProps> = ({ metrics }) => {
  const revenueDisplay = `$${(metrics.revenueThisMonth / 1000).toFixed(1)}k`;

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
      <div className="rounded-xl border border-[#26232E] bg-[#17151C] p-6 lg:col-span-2">
        <p className="text-[13px] text-[#A39DAE]">Good morning, Jordan</p>
        <h2 className="mt-1.5 max-w-md text-[21px] font-medium leading-snug text-[#F3F1ED]">
          Here's what's happening across your business today.
        </h2>

        <div className="mt-6 flex divide-x divide-[#26232E] border-t border-[#26232E] pt-5">
          <div className="flex flex-1 items-center gap-3 pr-5">
            <FolderKanban size={18} strokeWidth={1.75} className="text-[#9B84F5]" />
            <div>
              <p className="text-[18px] font-medium text-[#F3F1ED]">
                {metrics.activeProjects}
              </p>
              <p className="text-[12.5px] text-[#6F6A7A]">Active projects</p>
            </div>
          </div>
          <div className="flex flex-1 items-center gap-3 pl-5">
            <ListChecks size={18} strokeWidth={1.75} className="text-[#9B84F5]" />
            <div>
              <p className="text-[18px] font-medium text-[#F3F1ED]">
                {metrics.pendingTasks}
              </p>
              <p className="text-[12.5px] text-[#6F6A7A]">Pending tasks</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <MetricCard
          label="Revenue this month"
          value={revenueDisplay}
          icon={DollarSign}
          trend={{ value: `${metrics.revenueChangePercent}%`, positive: true }}
        />
        <MetricCard
          label="Team active"
          value={`${metrics.teamMembersActive} of ${metrics.teamMembersTotal}`}
          icon={Users2}
        />
      </div>
    </div>
  );
};