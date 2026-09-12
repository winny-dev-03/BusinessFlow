import { useState } from "react";
import type { FC } from "react";
import { DashboardLayout } from "../components/layout/DashboardLayout";
import { OverviewHero } from "../components/dashboard/OverviewHero";
import { FinancialChart } from "../components/dashboard/FinancialChart";
import { TeamActivity } from "../components/dashboard/TeamActivity";
import { ProjectsTable } from "../components/dashboard/ProjectsTable";
import { RecentActivity } from "../components/dashboard/RecentActivity";
import type { NavKey } from "../types/dashboard";
import {
  overviewMetrics,
  financialData,
  projects,
  teamMembers,
  recentActivity,
} from "../data/mockData";

export const DashboardPage: FC = () => {
  const [activeKey, setActiveKey] = useState<NavKey>("dashboard");

  return (
    <DashboardLayout
      activeKey={activeKey}
      onNavigate={setActiveKey}
      title="Dashboard"
      description="An overview of your business operations."
    >
      <div className="space-y-5">
        <OverviewHero metrics={overviewMetrics} />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <FinancialChart data={financialData} />
          </div>
          <TeamActivity members={teamMembers} />
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ProjectsTable projects={projects} />
          </div>
          <RecentActivity activities={recentActivity} />
        </div>
      </div>
    </DashboardLayout>
  );
};  