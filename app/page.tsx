import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WhySection from "@/components/WhySection";


export default function Home() {
  return (
 <div className="">
  <div className="h-screen flex flex-col">
  <Navbar />
  <Hero />
</div>
<WhySection/>
 </div>
  );
}
