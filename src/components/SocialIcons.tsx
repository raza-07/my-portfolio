// components/SocialIcons.tsx
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const iconMap = {
  github: {
    icon: <FaGithub className="text-2xl" />,
    hoverColor: "hover:text-black",
  },
  linkedin: {
    icon: <FaLinkedin className="text-2xl" />,
    hoverColor: "hover:text-blue-500",
  },
  instagram: {
    icon: <FaInstagram className="text-2xl" />,
    hoverColor: "hover:text-pink-500",
  },
};

interface SocialIconsProps {
  profiles: {
    platform: keyof typeof iconMap;
    url: string;
  }[];
}

export default function SocialIcons({ profiles }: SocialIconsProps) {
  return (
    <div className="flex space-x-6 pt-4">
      {profiles.map(({ platform, url }) => {
        const data = iconMap[platform];
        return (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition ${data.hoverColor}`}
          >
            {data.icon}
          </a>
        );
      })}
    </div>
  );
}
