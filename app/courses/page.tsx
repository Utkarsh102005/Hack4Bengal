import Link from "next/link"
import { Clock, Filter, Search, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Learn modern web development with React, Node.js, and MongoDB",
      duration: "12 weeks",
      students: 1250,
      industry: "Tech",
      level: "Intermediate",
      tags: ["Web Development", "JavaScript", "React"],
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      description: "Master the basics of data analysis, visualization, and machine learning",
      duration: "10 weeks",
      students: 980,
      industry: "Analytics",
      level: "Beginner",
      tags: ["Python", "Data Analysis", "Machine Learning"],
    },
    {
      id: 3,
      title: "UX/UI Design Principles",
      description: "Create user-centered designs with industry-standard tools and methodologies",
      duration: "8 weeks",
      students: 750,
      industry: "Design",
      level: "Beginner",
      tags: ["Design", "Figma", "User Research"],
    },
    {
      id: 4,
      title: "Cloud Computing Essentials",
      description: "Learn to deploy and manage applications on major cloud platforms",
      duration: "9 weeks",
      students: 620,
      industry: "IT Infrastructure",
      level: "Intermediate",
      tags: ["AWS", "Azure", "DevOps"],
    },
    {
      id: 5,
      title: "Digital Marketing Strategy",
      description: "Develop comprehensive digital marketing campaigns for business growth",
      duration: "6 weeks",
      students: 890,
      industry: "Marketing",
      level: "Beginner",
      tags: ["SEO", "Social Media", "Content Marketing"],
    },
    {
      id: 6,
      title: "Cybersecurity Fundamentals",
      description: "Understand security principles and protect systems from common threats",
      duration: "10 weeks",
      students: 540,
      industry: "Security",
      level: "Intermediate",
      tags: ["Network Security", "Ethical Hacking", "Risk Management"],
    },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-primary/10 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Explore Courses</h1>
            <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover industry-relevant training programs designed to prepare you for real-world job requirements
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
            {/* Filters */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Filters</h2>
                <Button variant="ghost" size="sm">
                  Reset
                </Button>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Search</h3>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input placeholder="Search courses..." className="pl-8" />
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="font-medium mb-2">Industry</h3>
                  <div className="space-y-2">
                    {["Tech", "Analytics", "Design", "Marketing", "Security", "IT Infrastructure"].map((industry) => (
                      <div key={industry} className="flex items-center space-x-2">
                        <input type="checkbox" id={industry} className="rounded text-primary" />
                        <label htmlFor={industry} className="text-sm">
                          {industry}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="font-medium mb-2">Level</h3>
                  <div className="space-y-2">
                    {["Beginner", "Intermediate", "Advanced"].map((level) => (
                      <div key={level} className="flex items-center space-x-2">
                        <input type="checkbox" id={level} className="rounded text-primary" />
                        <label htmlFor={level} className="text-sm">
                          {level}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="font-medium mb-2">Duration</h3>
                  <div className="space-y-2">
                    {["Less than 6 weeks", "6-10 weeks", "More than 10 weeks"].map((duration) => (
                      <div key={duration} className="flex items-center space-x-2">
                        <input type="checkbox" id={duration} className="rounded text-primary" />
                        <label htmlFor={duration} className="text-sm">
                          {duration}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <Separator />
                <Button className="w-full">
                  <Filter className="mr-2 h-4 w-4" />
                  Apply Filters
                </Button>
              </div>
            </div>

            {/* Course Listings */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-gray-500">Showing {courses.length} courses</p>
                <select className="border rounded-md px-3 py-1 text-sm">
                  <option>Sort by: Popularity</option>
                  <option>Sort by: Newest</option>
                  <option>Sort by: Duration</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.map((course) => (
                  <Card key={course.id} className="overflow-hidden">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{course.title}</CardTitle>
                        <Badge>{course.level}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-3">
                      <p className="text-gray-500 mb-4">{course.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {course.tags.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="mr-1 h-4 w-4" />
                          {course.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="mr-1 h-4 w-4" />
                          {course.students} students
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-3 border-t">
                      <Button asChild className="w-full">
                        <Link href={`/courses/${course.id}`}>View Course</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
