"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function HeroSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission
    console.log("Email submitted:", email)
    setEmail("")
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/20 to-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">ElevateX</h1>
              <p className="text-xl text-primary font-semibold">Elevating skills, careers, and opportunities.</p>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Connecting willing workers with industry professionals who provide training courses before employment in
                their companies.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <form onSubmit={handleSubmit} className="flex-1 sm:max-w-md flex gap-2">
                <Input
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="max-w-lg flex-1"
                />
                <Button type="submit">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
              <Button asChild variant="outline">
                <Link href="/about">Learn More</Link>
              </Button>
              <Button asChild>
                <Link href="/courses">Browse Courses</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full aspect-video overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-90 rounded-xl flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <h2 className="text-2xl font-bold mb-4">Solving the Skills Gap</h2>
                  <p className="mb-6">
                    "Industries face a shortage of skilled workers despite high unemployment rates due to a disconnect
                    between education and skill requirements."
                  </p>
                  <Button asChild variant="secondary">
                    <Link href="/solution">Our Solution</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
