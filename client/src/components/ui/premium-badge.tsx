
import { Sparkles } from "lucide-react";
import { Badge } from "./badge";

export function PremiumBadge() {
  return (
    <Badge variant="secondary" className="bg-gradient-to-r from-amber-500 to-amber-300 text-white">
      <Sparkles className="h-3 w-3 mr-1" />
      Premium
    </Badge>
  );
}
