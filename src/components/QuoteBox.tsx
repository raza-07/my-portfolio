export default function QuoteBox({ quote }: { quote: string }) {
  return (
    <blockquote className="italic text-2xl text-fuchsia-300 border-l-4 border-amber-400 pl-4 max-w-xl text-center bg-gray-900/80 rounded-lg shadow-md py-2 font-mono z-10">
      &quot;{quote}&quot;
    </blockquote>
  );
}
