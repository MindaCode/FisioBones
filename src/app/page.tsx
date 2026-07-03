import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Treatments from "@/components/Treatments";
import HowItWorks from "@/components/HowItWorks";
import Promo from "@/components/Promo";
import Facilities from "@/components/Facilities";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import VideoBackdrop from "@/components/VideoBackdrop";

export default function Home() {
  return (
    <>
      <VideoBackdrop />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <TrustBar />
        <Services />
        <Treatments />
        <HowItWorks />
        <Promo />
        <Facilities />
        <Location />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
      <WhatsAppButton />
      <ScrollReveal />
    </>
  );
}
