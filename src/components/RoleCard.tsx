import type { FC } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import type { BusinessFlowRole } from "../types/role";

interface RoleCardProps {
  role: BusinessFlowRole;
  title: string;
  description: string;
  icon: LucideIcon;
  onSelect: (role: BusinessFlowRole) => void;
}

export const RoleCard: FC<RoleCardProps> = ({
  role,
  title,
  description,
  icon: Icon,
  onSelect,
}) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(role)}
      aria-label={`Continue as ${title}`}
      className="group relative flex w-full flex-col items-start gap-5 rounded-2xl border cursor-pointer border-[#2A2530] bg-black px-7 py-8 text-left transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#8B6FE8]/60 hover:shadow-[0_0_40px_-8px_rgba(139,111,232,0.35)] focus-visible:-translate-y-1 focus-visible:border-[#8B6FE8]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6FE8]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:px-8 sm:py-9"
    >
      <div className="flex h-12 w-12 items-center justify-center  rounded-xl border border-[#3A3342] bg-[#130F1A] transition-colors duration-200 group-hover:border-[#8B6FE8]/70 group-hover:bg-[#1B1522] group-focus-visible:border-[#8B6FE8]/70">
        <Icon
          size={22}
          strokeWidth={1.6}
          className="text-[#B9A6F2] transition-colors duration-200 group-hover:text-[#C9B8FF]"
        />
      </div>

      <div>
        <h3 className="text-[19px] font-medium text-[#F5F1EB]">{title}</h3>
        <p className="mt-1.5 text-[14px] leading-relaxed text-[#948DA0]">
          {description}
        </p>
      </div>

      <span className="mt-2 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[#B9A6F2] transition-colors duration-200 group-hover:text-[#C9B8FF]">
        Continue
        <ArrowRight
          size={15}
          strokeWidth={1.9}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </span>
    </button>
  );
};