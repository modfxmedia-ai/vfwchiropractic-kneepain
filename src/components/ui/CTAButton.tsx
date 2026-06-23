import Link from "next/link";
import { cn } from "@/lib/utils";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

const variants = {
  primary: "bg-brand-cta text-white hover:bg-brand-tealDark",
  secondary: "bg-brand-navy text-white hover:bg-brand-navyDark",
  outline:
    "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white",
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className,
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-12 items-center justify-center rounded-full px-8 font-semibold transition-colors",
        variants[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
