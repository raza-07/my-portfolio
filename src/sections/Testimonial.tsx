// app/testimonial/page.tsx
"use client";

import { useRef, useEffect } from "react";
import { testimonialData } from "@/Data/testimonialData";
import TestimonialCard from "@/components/TestimonialCard";
import GradientSectionWrapper from "@/components/GradientSectionWrapper";

export default function TestimonialPage() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef<boolean>(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const speed = 0.7;
    let frameId = 0;

    const step = () => {
      if (!scrollRef.current) return;
      const el = scrollRef.current;

      if (!pausedRef.current && el.scrollWidth > el.clientWidth) {
        el.scrollLeft += speed;
        const halfWidth = el.scrollWidth / 2;
        if (el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth; // wrap seamlessly at midpoint
        }
      }

      frameId = requestAnimationFrame(step);
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // If user prefers reduced motion, do not animate
      return;
    }
    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const items = [...testimonialData, ...testimonialData];

  return (
    <GradientSectionWrapper id="testimonial" className="px-6 py-20 text-white">
      <h2 className="text-3xl font-bold text-center text-fuchsia-300 mb-16">
        What People Say About Me
      </h2>

      <div className="flex justify-center">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto overflow-y-visible max-w-7xl pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
          onTouchStart={() => (pausedRef.current = true)}
          onTouchEnd={() => (pausedRef.current = false)}
        >
          {items.map((testimonial, index) => (
            <div
              key={index}
              className="w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px] flex-shrink-0"
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
    </GradientSectionWrapper>
  );
}
