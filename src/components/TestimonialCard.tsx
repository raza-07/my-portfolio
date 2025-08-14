// components/TestimonialCard.tsx
import Image from "next/image";
import { useState } from "react";

export default function TestimonialCard({
  image,
  name,
  position,
  message,
  linkedin,
}: {
  image: string;
  name: string;
  position?: string;
  message: string;
  linkedin?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const handleCardClick = () => {
    if (linkedin) {
      window.open(linkedin, "_blank", "noopener,noreferrer");
    }
  };
  return (
    <div
      className={`w-full bg-gray-900 border border-fuchsia-400/40 rounded-xl p-4 shadow-md transition-transform duration-300 will-change-transform hover:translate-y-0.5 hover:shadow-lg hover:border-fuchsia-300 overflow-hidden ${
        linkedin ? "cursor-pointer" : ""
      }`}
      onClick={handleCardClick}
      role={linkedin ? "link" : undefined}
      aria-label={linkedin ? `${name}'s LinkedIn` : undefined}
    >
      <div className="flex items-center gap-3 mb-3">
        <Image
          src={image}
          alt={name}
          width={48}
          height={48}
          className="rounded-full border border-fuchsia-300"
        />
        <div>
          <h3 className="text-lg font-semibold text-fuchsia-300 leading-tight">{name}</h3>
          {position && <p className="text-xs text-gray-400 line-clamp-1">{position}</p>}
        </div>
      </div>
      <p className={`text-sm text-gray-300 ${expanded ? "line-clamp-none" : "line-clamp-6"}`}>{message}</p>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setExpanded((v) => !v);
        }}
        className="mt-2 text-xs text-fuchsia-300 hover:text-fuchsia-200 underline"
      >
        {expanded ? "Show less" : "Read more"}
      </button>
    </div>
  );
}
