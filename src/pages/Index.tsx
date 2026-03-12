import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import StatsSection from "@/components/StatsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";
import ScrollToTop from "@/components/ScrollToTop";
import ChatbotButton from "@/components/ChatbotButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TreatmentsSection />
        <StatsSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <BlogSection />
        <CTASection />
      </main>
      <FooterSection />
      <ScrollToTop />
      <ChatbotButton />
    </div>
  );
};

export default Index;
