import type { FC } from "react";
import { WelcomePage } from "./pages/WelcomePage";
import type { BusinessFlowRole } from "./types/role";

const App: FC = () => {
  const handleSelectRole = (role: BusinessFlowRole): void => {
    // Routing to the Business Owner / Customer flows will be wired up
    // once those screens are built. For now, this just records the choice.
    console.log(`Selected role: ${role}`);
  };

  return <WelcomePage onSelectRole={handleSelectRole} />;
};

export default App;