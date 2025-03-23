import {Hero} from "@/components/Sections/Hero";
import {About} from "@/components/Sections/About";
import {Features} from "@/components/Sections/Features";
import {Services} from "@/components/Sections/Services";
import {Testimonials} from "@/components/Sections/Testimonials";
import {Contact} from "@/components/Sections/Contact";
import {MainLayout} from "@/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
        <Hero/>
        <About/>
        <Features/>
        <Services/>
        <Testimonials/>
        <Contact/>
    </MainLayout>
  );
}
