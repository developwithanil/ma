import AISection from "@/components/AISection";
import CTASection from "@/components/CTASection";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import WhySection from "@/components/WhySection";
import Footer from "@/components/Footer";
import Operate from "@/components/Operate";


export default function Home() {
  const testimonialData = [
  {
    image: "/images/grant.png",
    name: "Grant Gunderson",
    designation: "Founder - Quantum Agency X",
    button: "Private Equity & Venture Capital",
    description:
      "Maxtron has an outstanding work culture and process-based engagement model that helped us evolve from idea to execution. Their expertise is truly commendable.",
  },
  {
    image: "/images/michael.png",
    name: "Michael Terpin",
    designation: "Godfather of Crypto",
    button: "Technology",
    description:
      "The Maxtron team is exceptionally skilled in dealing with advanced technology. They have delivered high-quality solutions and are completely equipped to tackle complex problems.",
  },
  {
    image: "/images/anthony.png", // ⚠️ fix path (you had wrong earlier)
    name: "Anthony Perkins",
    designation: "Founder And Editor Cryptonite",
    button: "Media Publications",
    description:
      "The founders and the core team at Maxtron were exceptionally helpful throughout our collaboration. Their support and expertise enabled us to navigate multiple hurdles seamlessly.",
  },
]
  return (
<div className="min-h-screen flex flex-col">
  <div className="flex flex-col h-screen">
  <Navbar />
  <Hero />
</div>
<Operate />
<WhySection/>
<AISection/>
<WhoThisIsFor />
<Testimonials data={testimonialData} />
<CTASection />
<Footer />
 </div>
  );
}
