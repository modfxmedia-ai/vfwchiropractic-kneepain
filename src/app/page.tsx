"use client";

import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import PainPointsSection from "@/components/sections/PainPointsSection";
import AboutDoctorSection from "@/components/sections/AboutDoctorSection";
import PRPSection from "@/components/sections/PRPSection";
import StemCellSection from "@/components/sections/StemCellSection";
import AdditionalServicesSection from "@/components/sections/AdditionalServicesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import OfferSection from "@/components/sections/OfferSection";
import LocationMapSection from "@/components/sections/LocationMapSection";
import Footer from "@/components/layout/Footer";
import BookingPopupProvider from "@/components/ui/BookingPopupProvider";

export default function LandingPage() {
  return (
    <BookingPopupProvider>
      <main className="font-[Poppins]">
      <Header />
      <HeroSection />
      <StatsBar />
      <OfferSection />
      <PainPointsSection />
      <AboutDoctorSection />
      <PRPSection />
      <StemCellSection />
      <AdditionalServicesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <LocationMapSection />
      <Footer />
    </main>
    </BookingPopupProvider>
  );
}
