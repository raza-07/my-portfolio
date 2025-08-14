import type { ReactNode } from "react";

type GradientSectionWrapperProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export default function GradientSectionWrapper({
  id,
  className = "",
  children,
}: GradientSectionWrapperProps) {
  return (
    <section
      id={id}
      className={`min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-transparent relative overflow-hidden ${className}`}
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-fuchsia-500/15 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-400/15 rounded-full blur-2xl -z-10" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-fuchsia-200/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 -z-10" />
      {children}
    </section>
  );
}
