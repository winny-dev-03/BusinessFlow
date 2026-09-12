import type { FC } from "react";
import { Search, Bell, Menu } from "lucide-react";

interface HeaderProps {
  title: string;
  description: string;
  onMenuClick: () => void;
}

export const Header: FC<HeaderProps> = ({ title, description, onMenuClick }) => {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-[#26232E] bg-[#121016] px-5 py-4 lg:px-8">
      <div className="flex items-center gap-3 min-w-0">
        <button
          onClick={onMenuClick}
          className="text-[#A39DAE] hover:text-[#F3F1ED] lg:hidden"
          aria-label="Open sidebar"
        >
          <Menu size={20} />
        </button>
        <div className="min-w-0">
          <h1 className="truncate text-[19px] font-medium text-[#F3F1ED]">
            {title}
          </h1>
          <p className="hidden truncate text-[13px] text-[#6F6A7A] sm:block">
            {description}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-md border border-[#2A2733] bg-[#17151C] px-3 py-1.5 md:flex">
          <Search size={15} className="text-[#6F6A7A]" />
          <input
            type="text"
            placeholder="Search"
            className="w-40 bg-transparent text-[13px] text-[#F3F1ED] placeholder:text-[#6F6A7A] focus:outline-none"
          />
        </div>

        <button
          className="relative text-[#A39DAE] hover:text-[#F3F1ED]"
          aria-label="Notifications"
        >
          <Bell size={18} strokeWidth={1.75} />
          <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-[#7C5CFF]" />
        </button>

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#232030] text-xs font-medium text-[#F3F1ED]">
          JR
        </div>
      </div>
    </header>
  );
};