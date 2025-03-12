import AnimatedSection from "../animations/AnimatedSection";
import ExperienceChart from "../charts/ExperienceChart";
import SkillsDistributionChart from "../charts/SkillsDistributionChart";
import CareerGrowthChart from "../charts/CareerGrowthChart";

export default function Charts() {
  return (
    <section id="charts" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-4">
              Career Analytics
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            <p className="max-w-2xl mx-auto mt-4 text-slate-600 dark:text-slate-400">
              Visualizing my professional journey, skills distribution, and growth over time.
            </p>
          </div>
        </AnimatedSection>

        <ExperienceChart />
        <SkillsDistributionChart />
        <CareerGrowthChart />
      </div>
    </section>
  );
}