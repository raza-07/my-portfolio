"use client";

import { useEffect, useState } from "react";
import CustomButton from "@/components/CustomButton";
import SocialIcons from "@/components/SocialIcons";
import ProfileImageWithTags from "@/components/ProfileImageWithTags";
import BackgroundBlobs from "@/components/BackgroundBlobs";

function TypingText({ text, speed = 60 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="font-mono text-2xl sm:text-3xl text-amber-400">
      {displayed}
      <span
        className={`border-r-2 border-amber-400 ${
          showCursor ? "opacity-100" : "opacity-0"
        }`}
      >
        &nbsp;
      </span>
    </span>
  );
}

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen px-6 py-20 flex flex-col md:flex-row items-center justify-between bg-transparent text-gray-100 relative overflow-hidden"
    >
      {/* LEFT */}
      <div className="flex-1 z-10 space-y-6 max-w-xl">
        <TypingText text="Hi, I'm Muhammad Ali Raza" />

        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-fuchsia-400 via-orange-400 to-amber-400 bg-clip-text text-transparent font-mono">
          Associate Software Engineer at{" "}
          <span className="text-blue-400">Septem</span>{" "}
          <span className="text-teal-300">Systems</span>
        </h2>

        <p className="text-lg text-gray-300 leading-relaxed font-mono bg-gray-900/30 px-4 py-2 rounded-lg shadow-sm backdrop-blur-sm">
          Focused on doing good work, learning every day, and contributing where
          it matters. Passionate about building meaningful, user-centered
          solutions, always open to new challenges and honest, respectful
          collaboration. When I'm not immersed in the tech world, you'll find me
          at the gym or actively enjoying outdoor games.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <CustomButton
            text="My Work"
            href="https://github.com/raza-07?tab=repositories"
            color="amber"
          />

          <CustomButton
            text="EduAid"
            href="https://original-alpaca-hjzqv6.mystrikingly.com"
            color="teal"
          />
        </div>

        <SocialIcons
          profiles={[
            { platform: "github", url: "https://github.com/raza-07" },
            {
              platform: "linkedin",
              url: "https://linkedin.com/in/muhammadalirazarao/",
            },
            { platform: "instagram", url: "https://instagram.com/arrao07" },
          ]}
        />
      </div>

      {/* RIGHT - Profile + Tags */}
      <ProfileImageWithTags
        src="/profile-pic.webp"
        tags={[
          {
            text: "<Developer />",
            className: "-top-8 -right-6 bg-fuchsia-700/70 rotate-3",
          },
          {
            text: "<Black Coffee />",
            className: "top-10 -left-10 bg-gray-600/70 -rotate-6",
          },
          {
            text: "<Football & Gym />",
            className: "bottom-24 right-0 bg-orange-500/80 rotate-2",
          },
          {
            text: "<Diastolic />",
            className: "bottom-0 left-12 bg-blue-700/70 -rotate-2",
          },
          {
            text: '["Nest.js", "Next.js", "React.js"]',
            className: "-bottom-12 -left-6 bg-yellow-600/70 -rotate-6 px-2",
          },
        ]}
      />

      {/* Background Blobs */}
      <BackgroundBlobs
        blobs={[
          { className: "top-0 left-0 w-80 h-80", color: "bg-fuchsia-500" },
          { className: "bottom-0 right-0 w-96 h-96", color: "bg-amber-400" },
        ]}
      />
    </section>
  );
}
