import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Brands from "@/app/components/Brands";
import Features from "@/app/components/Features";
import ApiSection from "@/app/components/Apisection";
import Tools from "@/app/components/Tols";
import AdditionalFeatures from "@/app/components/Additionalfeatures";
import Pricing from "@/app/components/Pricing";
import Testimonials from "@/app/components/Testimonials";
import Faq from "@/app/components/Faq";
import Cta from "@/app/components/Cta";
import Footer from "@/app/components/Footer";
import ScrollInit from "@/app/components/Scrollinit";

export default function Home() {
  return (
    <>
      <ScrollInit />
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <Features />
        <ApiSection />
        <Tools />
        <AdditionalFeatures />
        <Testimonials />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
