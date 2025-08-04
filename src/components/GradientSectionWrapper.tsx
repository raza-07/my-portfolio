export default function GradientSectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-fuchsia-500 opacity-20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-400 opacity-20 rounded-full blur-2xl -z-10 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-fuchsia-200 opacity-10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 -z-10" />
      {children}
    </section>
  );
}
