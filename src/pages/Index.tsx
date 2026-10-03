import PortfolioNav from "@/components/PortfolioNav";
import PortfolioHero from "@/components/PortfolioHero";
import PortfolioAbout from "@/components/PortfolioAbout";
import PortfolioEducation from "@/components/PortfolioEducation";
import PortfolioExperience from "@/components/PortfolioExperience";
import PortfolioProjects from "@/components/PortfolioProjects";
import PortfolioSkills from "@/components/PortfolioSkills";
import PortfolioCertifications from "@/components/PortfolioCertifications";
import PortfolioAchievements from "@/components/PortfolioAchievements";
import PortfolioContact from "@/components/PortfolioContact";
import PortfolioFooter from "@/components/PortfolioFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PortfolioNav />
      <main>
        <PortfolioHero />
        <PortfolioAbout />
        <PortfolioEducation />
        <PortfolioExperience />
        <PortfolioProjects />
        <PortfolioSkills />
        <PortfolioCertifications />
        <PortfolioAchievements />
        <PortfolioContact />
      </main>
      <PortfolioFooter />
    </div>
  );
};

export default Index;
