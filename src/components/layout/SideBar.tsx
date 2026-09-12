import type { FC } from "react";
import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  Users,
  Contact,
  FolderKanban,
  Wallet,
  BarChart3,
  Settings,
  X,
} from "lucide-react";
import type { NavKey } from "../../types/dashboard";

interface NavEntry {
  key: NavKey;
  label: string;
  icon: LucideIcon;
}

const NAV_ENTRIES: NavEntry[] = [
  { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { key: "employees", label: "Employees", icon: Users },
  { key: "customers", label: "Customers", icon: Contact },
  { key: "projects", label: "Projects", icon: FolderKanban },
  { key: "finances", label: "Finances", icon: Wallet },
  { key: "reports", label: "Reports", icon: BarChart3 },
  { key: "settings", label: "Settings", icon: Settings },
];

interface SidebarProps {
  activeKey: NavKey;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (key: NavKey) => void;
}

export const Sidebar: FC<SidebarProps> = ({
  activeKey,
  isOpen,
  onClose,
  onNavigate,
}) => {
  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-30 bg-black/60 lg:hidden"
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed z-40 flex h-full w-64 flex-col border-r border-[#26232E] bg-[#151319] transition-transform duration-200 lg:static lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#7C5CFF] text-sm font-semibold text-white">
              O
            </div>
            <span className="text-[15px] font-medium text-[#F3F1ED]">
              Operant
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[#6F6A7A] hover:text-[#F3F1ED] lg:hidden"
            aria-label="Close sidebar"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex-1 space-y-0.5 px-3 py-2">
          {NAV_ENTRIES.map(({ key, label, icon: Icon }) => {
            const isActive = key === activeKey;
            return (
              <button
                key={key}
                onClick={() => onNavigate(key)}
                className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-[13.5px] transition-colors ${
                  isActive
                    ? "bg-[#232030] text-[#F3F1ED]"
                    : "text-[#A39DAE] hover:bg-[#1C1A22] hover:text-[#F3F1ED]"
                }`}
              >
                <Icon
                  size={17}
                  strokeWidth={1.75}
                  className={isActive ? "text-[#9B84F5]" : "text-[#6F6A7A]"}
                />
                {label}
              </button>
            );
          })}
        </nav>

        <div className="border-t border-[#26232E] px-4 py-4">
          <div className="flex items-center gap-3 rounded-md px-2 py-2 hover:bg-[#1C1A22]">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#232030] text-xs font-medium text-[#F3F1ED]">
              JR
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-medium text-[#F3F1ED]">
                Jordan Reyes
              </p>
              <p className="truncate text-[12px] text-[#6F6A7A]">
                Operations Lead
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};