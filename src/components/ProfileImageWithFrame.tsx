import Image from "next/image";

export default function ProfileImageWithFrame({ src }: { src: string }) {
  return (
    <div className="mb-8 drop-shadow-xl z-10">
      <Image
        src={src}
        alt="Profile Picture"
        width={160}
        height={160}
        className="relative w-40 h-40 sm:w-42 sm:h-42 rounded-2xl overflow-hidden border-4 border-fuchsia-700 shadow-[0_0_30px_rgba(192,38,211,0.4)] hover:shadow-[0_0_50px_rgba(192,38,211,0.6)] transform hover:scale-105 transition-all duration-300 ease-in-out"
      />
    </div>
  );
}
