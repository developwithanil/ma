'use client'

import { useState } from 'react'
import AISection from "@/components/AISection";
import CTASection from "@/components/CTASection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import WhySection from "@/components/WhySection";
import Footer from "@/components/Footer";
import Operate from "@/components/Operate";
import MaxtronDifference from "@/components/MaxtronDifference";
import OurEdge from "@/components/OurEdge";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  const openContactForm = () => setIsContactFormOpen(true)
  const closeContactForm = () => setIsContactFormOpen(false)

  const testimonialData = [
    {
      image: "/images/prashant.png",
      name: "Prashant Kumar",
      designation: "AI Product & Innovation Operator",
      button: "Products & Execution",
      description:
        "Turns AI ideas into real, scalable products, building intelligent systems that improve workflows, user experience, and business performance.",
    },
    {
      image: "/images/girish.png",
      name: "Girish Ahirwar",
      designation: "Founder | AI Transformation Leader",
      button: "AI Strategy & Enterprise",
      description:
        "Helping businesses transition from traditional models to AI-first operations. Focused on real impact, efficiency, and scalable growth.",
    },
    {
      image: "/images/ridha.png",
      name: "Ridha Agarwal",
      designation: "AI Growth & Adoption Strategist",
      button: "AI Growth Specialist",
      description:
        "Drives AI adoption across markets. Focused on turning AI into growth, traction, and measurable business outcomes.",
    },
    {
      image: "/images/michael.png",
      name: "Michael Terpin",
      designation: "Godfather of Crypto",
      button: "Blockchain Technology",
      description:
        "The Maxtron team is exceptionally skilled in dealing with advanced technology. They have delivered high-quality solutions and are completely equipped to tackle complex problems.",
    },
    {
      image: "/images/anthony.png",
      name: "Anthony Perkins",
      designation: "Founder And Editor Cryptonite",
      button: "AI Leader",
      description:
        "The founders and core team at Maxtron were exceptionally helpful throughout our collaboration. Their support and expertise enabled us to navigate multiple hurdles seamlessly.",
    },
    {
      image: "/images/grant.png",
      name: "Grant Gunderson",
      designation: "Founder – Quantum Agency X",
      button: "Private Equity & Venture Capital",
      description:
        "Maxtron has an outstanding work culture and process-based engagement model that helped us evolve from idea to execution. Their expertise is truly commendable.",
    },
    {
      image: "/images/joyce.png",
      name: "Joyce Chow",
      designation: "Producer | Writer – Hollywood",
      button: "Movies & Films",
      description:
        "Maxtron's capacity to interplay with design, content and technology and cater user in a unique way is all what you need.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col h-screen">
        <Navbar />
        <Hero onApplyNow={openContactForm} />
      </div>
      <Operate onApplyNow={openContactForm} />
      <MaxtronDifference onApplyNow={openContactForm} />
      <WhySection />
      <AISection onApplyNow={openContactForm} />
      <OurEdge onApplyNow={openContactForm} />
      <WhoThisIsFor onApplyNow={openContactForm} />
      <Testimonials data={testimonialData} />
      <CTASection onApplyNow={openContactForm} />
      <Footer />
      
      <ContactForm isOpen={isContactFormOpen} onClose={closeContactForm} />
    </div>
  );
}
