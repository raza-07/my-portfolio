import Image from "next/image";

export default function ExperienceCard({
  companyLogo,
  companyName,
  duration,
  description,
  skills,
}: {
  companyLogo: string;
  companyName: string;
  duration: string;
  description: string[];
  skills: string[];
}) {
  return (
    <div className="relative bg-gray-900 border border-yellow-600 rounded-xl p-6 shadow-xl w-full hover:shadow-[0_0_25px_rgba(255,215,0,0.6)] transform hover:scale-105 transition-all duration-300">
      <div className="flex items-center gap-2 mb-2">
        <Image
          src={companyLogo}
          alt={companyName}
          width={50}
          height={50}
          className="rounded-full border border-amber-700 shadow-hg"
        />
        <div>
          <h3 className="text-xl font-bold text-orange-300">{companyName}</h3>
          <p className="text-sm text-gray-400">{duration}</p>
        </div>
      </div>
      <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm mb-4 align-baseline">
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mt-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="text-xs px-3 py-1 bg-gray-900 text-white rounded-full font-mono border border-orange-400"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
