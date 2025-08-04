"use client";

import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "SaaS Development",
    description:
      "Building scalable and maintainable SaaS platforms tailored to your business needs.",
  },
  {
    title: "Web Development",
    description:
      "Creating fast, responsive, and secure websites with modern web technologies.",
  },
  {
    title: "WordPress Development",
    description:
      "Custom WordPress themes, plugins, and optimization for your business.",
  },
  {
    title: "Automation",
    description:
      "Automating repetitive workflows using scripts, bots, and cloud tools.",
  },
  {
    title: "AI/ML ChatBot / RAG Chain",
    description:
      "Deploying intelligent chatbots and Retrieval-Augmented Generation (RAG) solutions.",
  },
  {
    title: "SEO",
    description:
      "Improving website visibility and ranking through ethical SEO practices.",
  },
  {
    title: "Mobile App Development",
    description:
      "Designing and developing cross-platform mobile applications for iOS and Android.",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Setting up, managing, and optimizing cloud infrastructure for scalability and reliability.",
  },
];

export default function Services() {
  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white">
      <h2 className="text-3xl font-bold text-center text-teal-300 mb-12">
        Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto justify-center">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}
