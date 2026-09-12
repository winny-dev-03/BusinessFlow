import type { FC } from "react";
import type { Project, ProjectStatus } from "../../types/dashboard";

interface ProjectsTableProps {
  projects: Project[];
}

const STATUS_STYLE: Record<ProjectStatus, string> = {
  "on-track": "bg-[#1E2B22] text-[#7FBF8F]",
  "at-risk": "bg-[#2E2818] text-[#D8B36A]",
  delayed: "bg-[#2E1D1C] text-[#E2837F]",
  completed: "bg-[#221F2E] text-[#9B84F5]",
};

const STATUS_LABEL: Record<ProjectStatus, string> = {
  "on-track": "On track",
  "at-risk": "At risk",
  delayed: "Delayed",
  completed: "Completed",
};

export const ProjectsTable: FC<ProjectsTableProps> = ({ projects }) => {
  return (
    <div className="rounded-xl border border-[#26232E] bg-[#17151C] p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-[14.5px] font-medium text-[#F3F1ED]">
          Active projects
        </h3>
        <span className="text-[12px] text-[#6F6A7A]">{projects.length} total</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-[13px]">
          <thead>
            <tr className="text-[12px] text-[#6F6A7A]">
              <th className="pb-2 font-normal">Project</th>
              <th className="pb-2 font-normal">Client</th>
              <th className="pb-2 font-normal">Progress</th>
              <th className="pb-2 font-normal">Status</th>
              <th className="pb-2 font-normal text-right">Deadline</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-t border-[#26232E]">
                <td className="py-3 pr-3 font-medium text-[#F3F1ED]">
                  {project.name}
                </td>
                <td className="py-3 pr-3 text-[#A39DAE]">{project.client}</td>
                <td className="py-3 pr-3">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-20 overflow-hidden rounded-full bg-[#26232E]">
                      <div
                        className="h-full rounded-full bg-[#7C5CFF]"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <span className="text-[12px] text-[#6F6A7A]">
                      {project.progress}%
                    </span>
                  </div>
                </td>
                <td className="py-3 pr-3">
                  <span
                    className={`rounded-md px-2 py-1 text-[11.5px] font-medium ${
                      STATUS_STYLE[project.status]
                    }`}
                  >
                    {STATUS_LABEL[project.status]}
                  </span>
                </td>
                <td className="py-3 text-right text-[#A39DAE]">
                  {project.deadline}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};