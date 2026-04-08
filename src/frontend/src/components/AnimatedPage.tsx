import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface AnimatedPageProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedPage({ children, className }: AnimatedPageProps) {
  return (
    <div
      className={cn("animate-fade-in motion-safe:animate-slide-up", className)}
    >
      {children}
    </div>
  );
}
