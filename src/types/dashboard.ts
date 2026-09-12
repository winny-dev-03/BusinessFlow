export type NavKey =
  | "dashboard"
  | "employees"
  | "customers"
  | "projects"
  | "finances"
  | "reports"
  | "settings";

export type ProjectStatus = "on-track" | "at-risk" | "delayed" | "completed";

export interface Project {
  id: string;
  name: string;
  client: string;
  progress: number;
  status: ProjectStatus;
  deadline: string;
}

export type ActivityType =
  | "employee-joined"
  | "customer-added"
  | "invoice-paid"
  | "project-status";

export interface ActivityItem {
  id: string;
  type: ActivityType;
  message: string;
  timestamp: string;
}

export type TeamStatus = "online" | "away" | "offline";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  initials: string;
  status: TeamStatus;
  currentTask: string;
}

export interface FinancialPoint {
  month: string;
  revenue: number;
  expenses: number;
}

export interface OverviewMetrics {
  activeProjects: number;
  pendingTasks: number;
  revenueThisMonth: number;
  revenueChangePercent: number;
  teamMembersActive: number;
  teamMembersTotal: number;
}