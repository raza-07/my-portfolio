"use client";

export default function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-900 text-gray-200 border border-teal-600 rounded-xl p-6 shadow-md hover:scale-105 hover:bg-teal-900 transition-transform duration-300 cursor-pointer">
      <h3 className="text-lg font-semibold text-teal-400 mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}
