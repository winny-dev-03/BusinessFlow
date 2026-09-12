import type { FC } from "react";
import type { LucideIcon } from "lucide-react";
import { UserPlus, Contact, ReceiptText, FolderKanban } from "lucide-react";
import type { ActivityItem, ActivityType } from "../../types/dashboard";

interface RecentActivityProps {
  activities: ActivityItem[];
}

const ACTIVITY_ICON: Record<ActivityType, LucideIcon> = {
  "employee-joined": UserPlus,
  "customer-added": Contact,
  "invoice-paid": ReceiptText,
  "project-status": FolderKanban,
};

export const RecentActivity: FC<RecentActivityProps> = ({ activities }) => {
  return (
    <div className="rounded-xl border border-[#26232E] bg-[#17151C] p-5">
      <h3 className="mb-4 text-[14.5px] font-medium text-[#F3F1ED]">
        Recent activity
      </h3>
      <ul className="space-y-4">
        {activities.map((activity) => {
          const Icon = ACTIVITY_ICON[activity.type];
          return (
            <li key={activity.id} className="flex items-start gap-3">
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1F1D26] text-[#9B84F5]">
                <Icon size={14} strokeWidth={1.75} />
              </div>
              <div className="min-w-0">
                <p className="text-[13px] leading-snug text-[#F3F1ED]">
                  {activity.message}
                </p>
                <p className="mt-0.5 text-[12px] text-[#6F6A7A]">
                  {activity.timestamp}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};