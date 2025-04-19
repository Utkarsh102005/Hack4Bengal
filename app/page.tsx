import Link from "next/link"
import { ArrowRight, BookOpen, BriefcaseBusiness, GraduationCap } from "lucide-react"

import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import FeatureCard from "@/components/feature-card"
import TestimonialSection from "@/components/testimonial-section"
import PartnerSection from "@/components/partner-section"
import StatsSection from "@/components/stats-section"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Mission Section */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission</h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              "To foster continuous learning through practical application of cutting-edge technical knowledge, enabling
              individuals to excel in their fields and adapt to evolving industry demands."
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How ElevateX Works</h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Bridging the gap between education and industry requirements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<GraduationCap className="h-10 w-10 text-primary" />}
              title="Skill Development"
              description="Access industry-relevant training programs designed to prepare you for real-world job requirements."
            />
            <FeatureCard
              icon={<BriefcaseBusiness className="h-10 w-10 text-primary" />}
              title="Industry Partnerships"
              description="Connect with leading companies that co-fund training programs aligned with their workforce needs."
            />
            <FeatureCard
              icon={<BookOpen className="h-10 w-10 text-primary" />}
              title="Practical Learning"
              description="Gain hands-on experience through practical training that complements theoretical knowledge."
            />
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Who We Serve</h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform is designed for young individuals aged 18-25 from diverse socio-economic backgrounds
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-4 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold">Characteristics</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Educational Background: Varies from high school diplomas to college degrees</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Eager for skill development and actively seeking career opportunities</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Limited work experience and facing financial constraints</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold">Challenges Addressed</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Lack of Resources: Financial insecurity limiting access to education</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Overcoming Barriers: Limited skills and job market competition</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Holistic Support: Financial aid, skills training, and job placement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />
      <TestimonialSection />
      <PartnerSection />

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Elevate Your Career?
            </h2>
            <p className="max-w-[800px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join ElevateX today and connect with industry professionals who will help you develop the skills needed
              for tomorrow's jobs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" variant="secondary">
                <Link href="/courses">Explore Courses</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              >
                <Link href="/register">Sign Up Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
