// components/TestimonialCard.tsx
import Image from "next/image";

export default function TestimonialCard({
  image,
  name,
  message,
}: {
  image: string;
  name: string;
  message: string;
}) {
  return (
    <div className="w-[340px] flex-shrink-0 bg-gray-900 border border-fuchsia-400 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={image}
          alt={name}
          width={60}
          height={60}
          className="rounded-full border border-fuchsia-300"
        />
        <h3 className="text-xl font-bold text-fuchsia-300">{name}</h3>
      </div>
      <p className="text-base text-gray-300">{message}</p>
    </div>
  );
}
