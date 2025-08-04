import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Home from "@/sections/Home";
import Testimonial from "@/sections/Testimonial";
import Services from "@/sections/Services";
import Contact from "@/sections/Contact";

export default function Page() {
  return (
    <main>
      <Home />
      <About />
      <Experience />
      <Services />
      <Testimonial />
      <Contact />
    </main>
  );
}
