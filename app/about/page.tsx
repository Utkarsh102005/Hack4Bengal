import Link from "next/link"
import { ArrowRight, CheckCircle, Target, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import TeamMemberCard from "@/components/team-member-card"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Utkarsh Raj",
      Bio: Sophomore Tech Enthu },
    
    {
      name: "Anurup Saha",
      role: "2nd Year B.Tech CSE",
      strength: "Good at Analyzing",
      jobRole: "Research and Ideas",
      avatar: "AS",
    },
    {
      name: "Reshav Pradhan",
      role: "2nd Year B.Tech CSE-AI",
      strength: "Creativity, Research",
      jobRole: "Project Management",
      avatar: "RP",
    },
    {
      name: "Kuntal Hati",
      role: "2nd Year B.Tech CSE",
      strength: "Writing Skills",
      jobRole: "Writing",
      avatar: "KH",
    },
    {
      name: "Zaidan Asad",
      role: "2nd Year B.Tech CSE-AI",
      strength: "Presentation",
      jobRole: "Open Communication",
      avatar: "ZA",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-primary/10 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About ElevateX</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Elevating skills, careers, and opportunities through industry partnerships and practical training.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/courses">
                    Explore Our Courses
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-90 rounded-xl flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                    <p className="mb-6">
                      "To foster continuous learning through practical application of cutting-edge technical knowledge,
                      enabling individuals to excel in their fields and adapt to evolving industry demands."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Problem We're Solving</h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Industries face a shortage of skilled workers despite high unemployment rates due to a disconnect between
              education and skill requirements.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 md:gap-12">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Target className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Skill Development</h3>
                <p className="text-gray-500">
                  Directly prepares individuals for job readiness, reducing unemployment faster through practical
                  training programs.
                </p>
                <ul className="space-y-2 text-left w-full">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Short-term implementation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Strong alignment with industries</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>High impact on unemployment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Job Creation</h3>
                <p className="text-gray-500">
                  Creating new jobs requires infrastructure, policies, and capital investment, but may not address
                  existing skills gaps.
                </p>
                <ul className="space-y-2 text-left w-full">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Medium-term implementation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Medium impact on unemployment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Weak alignment with skills gaps</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-primary"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Quality Education</h3>
                <p className="text-gray-500">
                  Traditional education reforms take years to show results and often focus on theoretical knowledge
                  rather than practical skills.
                </p>
                <ul className="space-y-2 text-left w-full">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Long-term implementation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Low immediate impact</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Weak alignment with industry needs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Solution</h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Creating partnerships with industries and job-seekers which already co-fund training programs aligned with
              their workforce needs.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Benefits of Our Approach</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Relieves government stress for funding the programs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Avoids the high cost of creating new training programs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Eliminates the need for additional infrastructure</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Addresses immediate youth employment needs</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Technology Implementation</h3>
              <p className="text-gray-500">
                We've created a web platform (ElevateX) for connecting willing workers with industry professionals who
                will provide training courses before employment in their companies.
              </p>
              <p className="text-gray-500">
                Our platform is free for users, with revenue generated through advertisements from various brands.
              </p>
              <Button asChild className="mt-4">
                <Link href="/courses">
                  Explore Our Platform
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Team</h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The passionate individuals behind ElevateX
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
