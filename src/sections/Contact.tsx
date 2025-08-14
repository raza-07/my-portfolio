"use client";

import ContactForm from "@/components/ContactForm";
import ProjectCard from "@/components/ProjectCard";
import { projectData } from "@/Data/projectData";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import GradientSectionWrapper from "@/components/GradientSectionWrapper";

export default function ContactPage() {
  return (
    <GradientSectionWrapper id="contact" className="py-20 px-6 text-gray-100">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-3xl font-bold text-center text-blue-400 mb-10">
        Let’s Work Together
      </h2>

      <div className="flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto items-start">
        <div className="flex-1 space-y-10">
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-3">
              Featured Work
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {projectData.slice(0, 2).map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <a
              href="/your-cv.pdf"
              download
              className="inline-block px-5 py-2 rounded bg-gray-800 text-gray-100 font-semibold hover:bg-blue-900 transition"
            >
              Download CV
            </a>
            <p className="text-sm text-gray-400">
              Email:{" "}
              <a
                href="mailto:arrazarao@gmail.com"
                className="text-blue-300 hover:text-blue-400 hover:underline"
              >
                arrazarao@gmail.com
              </a>
            </p>
            <p className="text-sm text-gray-400">
              Phone:{" "}
              <a
                href="tel:+923044573944"
                className="text-blue-300 hover:text-blue-400 hover:underline"
              >
                +92 304 457 3944
              </a>
            </p>
            <div className="flex gap-4 mt-3">
              <Link href="https://github.com/raza-07" target="_blank">
                <FaGithub
                  size={22}
                  className="hover:opacity-80 transition"
                  color="gray-500"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/muhammadalirazarao/"
                target="_blank"
              >
                <FaLinkedin
                  size={22}
                  className="hover:opacity-80 transition"
                  color="#60A5FA"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center bg-gray-900 rounded-lg shadow-lg p-8">
          <div className="w-full max-w-md">
            <ContactForm />
          </div>
        </div>
      </div>
    </GradientSectionWrapper>
  );
}
