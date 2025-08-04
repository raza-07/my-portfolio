"use client";

import TypingText from "@/components/TypingText";
import GradientSectionWrapper from "@/components/GradientSectionWrapper";
import ProfileImageWithFrame from "@/components/ProfileImageWithFrame";
import GradientHeading from "@/components/GradientHeading";
import TextBlock from "@/components/TextBlock";
import QuoteBox from "@/components/QuoteBox";

export default function About() {
  return (
    <GradientSectionWrapper>
      <ProfileImageWithFrame src="/my2.webp" />

      <GradientHeading text="Journey" />

      <TextBlock>
        {`I’m from Okara, where I studied till Fsc Pre-Engineering at DPS College. A football and badminton enthusiast, my curiosity for tech sparked during evenings at a local park cafe. One night over samosas and chai, I stumbled upon NAMAL University — I applied impulsively and got selected in Computer Science. That was the turning point. Under mentors like Junaid Akhtar, I began to question, build, and think like a true engineer. Tech became more than skill — it became purpose.`}
      </TextBlock>

      <QuoteBox quote="The best way to predict the future is to invent it." />
    </GradientSectionWrapper>
  );
}
