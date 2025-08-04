// app/testimonial/page.tsx
"use client";

import { useRef, useEffect } from "react";
import { testimonialData } from "@/Data/testimonialData";
import TestimonialCard from "@/components/TestimonialCard";

export default function TestimonialPage() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollX = 0;
    const speed = 0.7;
    const maxScroll = container.scrollWidth - container.clientWidth;

    const autoScroll = () => {
      scrollX += speed;
      if (scrollX >= maxScroll) scrollX = 0;
      container.scrollLeft = scrollX;
      requestAnimationFrame(autoScroll);
    };

    const animationId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white">
      <h2 className="text-3xl font-bold text-center text-fuchsia-300 mb-16">
        What People Say About Me
      </h2>

      <div className="flex justify-center">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto max-w-7xl pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {testimonialData.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[280px] md:min-w-[300px] lg:min-w-[320px] bg-gray-900 rounded-2xl shadow-xl p-6 transition-transform duration-300 hover:scale-105 hover:bg-fuchsia-900/30"
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
