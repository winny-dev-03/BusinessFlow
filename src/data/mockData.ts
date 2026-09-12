import type {
  Project,
  ActivityItem,
  TeamMember,
  FinancialPoint,
  OverviewMetrics,
} from "../types/dashboard";

export const overviewMetrics: OverviewMetrics = {
  activeProjects: 14,
  pendingTasks: 27,
  revenueThisMonth: 84200,
  revenueChangePercent: 8.4,
  teamMembersActive: 9,
  teamMembersTotal: 12,
};

export const financialData: FinancialPoint[] = [
  { month: "Apr", revenue: 52000, expenses: 34000 },
  { month: "May", revenue: 58500, expenses: 35200 },
  { month: "Jun", revenue: 61200, expenses: 37800 },
  { month: "Jul", revenue: 67400, expenses: 38100 },
  { month: "Aug", revenue: 71900, expenses: 40300 },
  { month: "Sep", revenue: 84200, expenses: 41750 },
];

export const projects: Project[] = [
  {
    id: "p1",
    name: "Ledger Redesign",
    client: "Fenwick & Co.",
    progress: 72,
    status: "on-track",
    deadline: "Oct 3",
  },
  {
    id: "p2",
    name: "Onboarding Automation",
    client: "Harlow Retail",
    progress: 41,
    status: "at-risk",
    deadline: "Oct 9",
  },
  {
    id: "p3",
    name: "Payroll Migration",
    client: "Internal",
    progress: 95,
    status: "on-track",
    deadline: "Sep 18",
  },
  {
    id: "p4",
    name: "Vendor Portal",
    client: "Kessler Group",
    progress: 18,
    status: "delayed",
    deadline: "Sep 30",
  },
  {
    id: "p5",
    name: "Q3 Audit Prep",
    client: "Internal",
    progress: 100,
    status: "completed",
    deadline: "Sep 12",
  },
];

export const recentActivity: ActivityItem[] = [
  {
    id: "a1",
    type: "invoice-paid",
    message: "Invoice #4471 paid by Harlow Retail",
    timestamp: "12 minutes ago",
  },
  {
    id: "a2",
    type: "employee-joined",
    message: "Maya Chen joined the Ledger Redesign project",
    timestamp: "1 hour ago",
  },
  {
    id: "a3",
    type: "project-status",
    message: "Vendor Portal moved to Delayed",
    timestamp: "3 hours ago",
  },
  {
    id: "a4",
    type: "customer-added",
    message: "New customer added: Kessler Group",
    timestamp: "Yesterday",
  },
  {
    id: "a5",
    type: "invoice-paid",
    message: "Invoice #4468 paid by Fenwick & Co.",
    timestamp: "Yesterday",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "t1",
    name: "Maya Chen",
    role: "Product Designer",
    initials: "MC",
    status: "online",
    currentTask: "Ledger Redesign",
  },
  {
    id: "t2",
    name: "Daniel Osei",
    role: "Engineer",
    initials: "DO",
    status: "online",
    currentTask: "Payroll Migration",
  },
  {
    id: "t3",
    name: "Priya Nair",
    role: "Account Manager",
    initials: "PN",
    status: "away",
    currentTask: "Vendor Portal",
  },
  {
    id: "t4",
    name: "Tomás Rivera",
    role: "Engineer",
    initials: "TR",
    status: "offline",
    currentTask: "Onboarding Automation",
  },
];