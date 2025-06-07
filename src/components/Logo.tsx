
import { Bot } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
        <Bot className="h-6 w-6 text-white" />
      </div>
      <span className="text-lg font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
        DR
      </span>
    </div>
  );
};

export default Logo;
