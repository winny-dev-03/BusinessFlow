import { useState } from "react";
import type { FC, ReactNode } from "react";
import { Sidebar } from "./SideBar";
import { Header } from "./Header";
import type { NavKey } from "../../types/dashboard";

interface DashboardLayoutProps {
  activeKey: NavKey;
  onNavigate: (key: NavKey) => void;
  title: string;
  description: string;
  children: ReactNode;
}

export const DashboardLayout: FC<DashboardLayoutProps> = ({
  activeKey,
  onNavigate,
  title,
  description,
  children,
}) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-[#121016]">
      <Sidebar
        activeKey={activeKey}
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onNavigate={(key) => {
          onNavigate(key);
          setSidebarOpen(false);
        }}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <Header
          title={title}
          description={description}
          onMenuClick={() => setSidebarOpen(true)}
        />
        <main className="flex-1 overflow-y-auto px-5 py-6 lg:px-8 lg:py-8">
          {children}
        </main>
      </div>
    </div>
  );
};