import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <main className="overflow-x-clip bg-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Partners />
      <About />
      <CTA />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
