import Navbar from "@/components/Navbar";
import SecondaryNav from "@/components/SecondaryNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CourseContent from "@/components/CourseContent";
import Testimonials from "@/components/Testimonials";
import Philosophy from "@/components/Philosophy";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <SecondaryNav />
      <Hero />
      <About />
      <CourseContent />
      <Testimonials />
      <Philosophy />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
