import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: string;
  className?: string;
};

export default function SectionLabel({
  children,
  className,
}: SectionLabelProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3EC2D1]",
        className
      )}
    >
      <span className="block h-px w-6 bg-[#3EC2D1]" />
      {children}
    </p>
  );
}
