import Link from "next/link"
import { ArrowRight, CheckCircle, Handshake, School, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SolutionPage() {
  const benefits = [
    {
      title: "Industry-Aligned Training",
      description: "Programs designed in collaboration with employers to meet their specific skill requirements",
      icon: School,
    },
    {
      title: "Practical Experience",
      description: "Hands-on training that prepares individuals for real-world job scenarios",
      icon: Users,
    },
    {
      title: "Direct Employment Pathways",
      description: "Direct connections to job opportunities with partner companies after training completion",
      icon: Handshake,
    },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-primary/10 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Solution</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Creating partnerships with industries and job-seekers to co-fund training programs aligned with
                  workforce needs.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/courses">
                    Explore Courses
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/register">Join ElevateX</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-90 rounded-xl flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <h2 className="text-2xl font-bold mb-4">The Problem</h2>
                    <p className="mb-6">
                      "Industries face a shortage of skilled workers despite high unemployment rates due to a disconnect
                      between education and skill requirements."
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How Our Solution Works</h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              ElevateX bridges the gap between education and industry requirements through a comprehensive approach
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 md:gap-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="border-0 shadow-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{benefit.title}</h3>
                    <p className="text-gray-500">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Why This Approach Works</h2>
              <p className="text-gray-500">
                Our solution addresses the immediate needs of both job seekers and employers while creating a
                sustainable model for skill development.
              </p>
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
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Creates a direct pipeline from training to employment</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Technology Platform</h2>
              <p className="text-gray-500">
                ElevateX is a web platform that connects willing workers with industry professionals who provide
                training courses before employment in their companies.
              </p>
              <div className="space-y-4">
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h3 className="font-medium mb-2">For Job Seekers</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Access to industry-relevant training programs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Direct connections to potential employers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Practical skills development aligned with job requirements</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h3 className="font-medium mb-2">For Employers</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Access to pre-trained candidates with relevant skills</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Reduced recruitment and training costs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Ability to shape training programs to meet specific needs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Bridge the Skills Gap?
            </h2>
            <p className="max-w-[800px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join ElevateX today and be part of the solution to the skills gap challenge.
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
