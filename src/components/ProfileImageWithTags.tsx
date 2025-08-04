// components/ProfileImageWithTags.tsx
import Image from "next/image";

interface FloatingTag {
  text: string;
  className: string;
}

interface ProfileImageWithTagsProps {
  src: string;
  alt?: string;
  tags?: FloatingTag[];
}

export default function ProfileImageWithTags({
  src,
  alt = "Profile Image",
  tags = [],
}: ProfileImageWithTagsProps) {
  return (
    <div className="flex-1 mt-14 md:mt-0 flex justify-center z-10 relative">
      <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-4 border-amber-500 shadow-[0_0_30px_rgba(255,215,0,0.4)] hover:shadow-[0_0_50px_rgba(255,215,0,0.6)] transform hover:scale-105 transition-all duration-300 ease-in-out">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>

      {tags.map((tag, index) => (
        <div
          key={index}
          className={`absolute text-white text-xs px-3 py-1 rounded-lg shadow-md font-mono ${tag.className}`}
        >
          {tag.text}
        </div>
      ))}
    </div>
  );
}
