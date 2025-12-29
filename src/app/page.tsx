import { Navbar, Footer } from "@/layouts";
import {
  Hero,
  Features,
  Work,
  Process,
  Testimonials,
  Approach,
  MissionVision,
  Contact,
} from "@/features";
import { NoiseBackground } from "@/components";

export default function Home() {
  return (
    <main className="bg-[#030014] text-white min-h-screen w-full overflow-x-hidden">
      <NoiseBackground />
      <Navbar />
      <Hero />
      <MissionVision />
      <Features />
      <Work />
      <Process />
      <Testimonials />
      <Approach />
      <Contact />
      <Footer />
    </main>
  );
}
