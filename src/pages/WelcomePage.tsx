import type { FC } from "react";
import { Sparkles, HelpCircle, Briefcase, UserRound } from "lucide-react";
import { RoleCard } from "../components/RoleCard";
import type { BusinessFlowRole } from "../types/role";

interface WelcomePageProps {
  onSelectRole: (role: BusinessFlowRole) => void;
}

export const WelcomePage: FC<WelcomePageProps> = ({ onSelectRole }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,111,232,0.16)_0%,rgba(139,111,232,0)_70%)]"
      />

      <div className="relative flex items-center justify-between px-6 py-6 sm:px-10 sm:py-8">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md border border-[#3A3342] bg-[#130F1A]">
            <Sparkles size={14} strokeWidth={1.8} className="text-[#B9A6F2]" />
          </div>
          <span className="text-[15px] font-medium cursor-pointer text-[#F5F1EB]">
            BusinessFlow
          </span>
        </div>

        
        < a href="#help"
          className="flex items-center gap-1.5 text-[13.5px] text-[#948DA0] transition-colors duration-200 hover:text-[#F5F1EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6FE8]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          <HelpCircle size={16} strokeWidth={1.8} />
          Help
        </a>
      </div>

      <main className="relative mx-auto flex max-w-3xl flex-col items-center px-6 pb-20 pt-10 text-center sm:pt-16">
        <h1 className="max-w-xl text-[34px] font-medium leading-tight text-[#F5F1EB] sm:text-[44px]">
          Your business, beautifully organised.
        </h1>
        <p className="mt-4 max-w-md text-[15.5px] leading-relaxed text-[#948DA0] sm:text-[16.5px]">
          Everything you need to work smarter, without the complicated stuff.
        </p>

        <div className="mt-14 w-full sm:mt-16">
          <p className="mb-6 text-[13.5px] font-medium tracking-wide text-[#948DA0]">
            How are you joining us?
          </p>

          <div className="grid grid-cols-1 cursor-pointer gap-5 sm:grid-cols-2">
            <RoleCard
              role="business-owner"
              title="Business Owner"
              description="Run your business your way."
              icon={Briefcase}
              onSelect={onSelectRole}
            />
            <RoleCard
              role="customer"
              title="Customer"
              description="Work with your favourite businesses."
              icon={UserRound}
              onSelect={onSelectRole}
            />
          </div>
        </div>
      </main>
    </div>
  );
};