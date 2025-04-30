
import { cn } from "@/lib/utils";

interface ImpactStatProps {
  number: string;
  label: string;
  className?: string;
}

export function ImpactStat({ number, label, className }: ImpactStatProps) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      <span className="text-4xl md:text-5xl font-bold text-prevented-blue mb-2">{number}</span>
      <span className="text-sm md:text-base text-muted-foreground">{label}</span>
    </div>
  );
}
