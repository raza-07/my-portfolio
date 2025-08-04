"use client";

import ExperienceCard from "@/components/ExperienceCard";
import GradientHeading from "@/components/GradientHeading";
import GradientSectionWrapper from "@/components/GradientSectionWrapper";
import { experienceData } from "@/Data/experienceData";

export default function Experience() {
  return (
    <GradientSectionWrapper>
      <h2 className="text-3xl font-bold text-center text-orange-300 mb-12">
        Experience
      </h2>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-white via-gray-400 to-orange-400 opacity-40 rounded-full z-0" />

        {/* Experience Cards */}
        <div className="relative flex flex-col gap-14 z-6">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className={`relative w-full flex ${
                index % 2 === 0 ? "justify-start pr-10" : "justify-end pl-10"
              }`}
            >
              {/* Dot Marker */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-3 w-5 h-5 bg-gradient-to-br from-blue-400 via-gray-400 to-orange-300 border-[3px] border-white rounded-full z-20 shadow-lg" />

              {/* Card */}
              <div className="w-full sm:w-[47%]">
                <ExperienceCard {...exp} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </GradientSectionWrapper>
  );
}
