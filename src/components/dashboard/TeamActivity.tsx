import type { FC } from "react";
import type { TeamMember, TeamStatus } from "../../types/dashboard";

interface TeamActivityProps {
  members: TeamMember[];
}

const STATUS_COLOR: Record<TeamStatus, string> = {
  online: "#7FBF8F",
  away: "#D8B36A",
  offline: "#524C5E",
};

export const TeamActivity: FC<TeamActivityProps> = ({ members }) => {
  return (
    <div className="rounded-xl border border-[#26232E] bg-[#17151C] p-5">
      <h3 className="mb-4 text-[14.5px] font-medium text-[#F3F1ED]">
        Team activity
      </h3>
      <ul className="space-y-3.5">
        {members.map((member) => (
          <li key={member.id} className="flex items-center gap-3">
            <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#232030] text-[11px] font-medium text-[#F3F1ED]">
              {member.initials}
              <span
                className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#17151C]"
                style={{ backgroundColor: STATUS_COLOR[member.status] }}
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-medium text-[#F3F1ED]">
                {member.name}
              </p>
              
              <p className="truncate text-[12px] text-[#6F6A7A]">
                {member.currentTask}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};