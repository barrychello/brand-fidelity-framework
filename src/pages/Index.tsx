import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import ValuesSection from "@/components/ValuesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProjectGrid />
        <ValuesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
