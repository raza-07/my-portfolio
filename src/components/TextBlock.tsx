export default function TextBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-2xl text-center text-lg text-gray-100 mb-8 bg-gray-800/80 rounded-xl shadow-lg px-6 py-4 backdrop-blur-md z-10">
      <p className="font-normal font-mono tracking-wide leading-relaxed">
        {children}
      </p>
    </div>
  );
}
