import HeroSection from "@/components/HeroSection";
import CompanySection from "@/components/CompanySection";
import AboutComponent from "@/components/AboutComponent";
import CatalogueSection from "@/components/CatalogueSection";
import CatalogueSwiperSection from "@/components/CatalogueSwiperSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
   <main>
    <HeroSection/>
    <CompanySection />
    <AboutComponent />
    <CatalogueSection />
    <CatalogueSwiperSection />
    <ContactSection />
   </main>
  );
}
