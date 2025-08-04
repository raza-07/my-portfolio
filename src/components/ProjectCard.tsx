"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  title,
  description,
  image,
  url,
  github,
}: {
  title: string;
  description: string;
  image: string;
  url: string;
  github: string;
}) {
  return (
    <div className="bg-gray-900 border border-blue-400 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300 flex flex-col">
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="w-full object-cover"
      />
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-lg font-bold text-blue-400">{title}</h3>
          <p className="text-sm text-gray-300 mb-2 text-justify">
            {description}
          </p>
        </div>
        <div className="flex gap-4 text-sm mt-4">
          <Link
            href={url}
            className="text-blue-300 hover:text-blue-400 hover:underline"
            target="_blank"
          >
            Live Demo
          </Link>
          <Link
            href={github}
            className="text-blue-300 hover:text-blue-400 hover:underline"
            target="_blank"
          >
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
