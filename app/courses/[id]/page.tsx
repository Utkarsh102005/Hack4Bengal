import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, BookOpen, Calendar, CheckCircle, Clock, Download, Globe, Laptop, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  // This would normally come from a database
  const course = {
    id: params.id,
    title: "Full Stack Web Development",
    description:
      "Learn modern web development with React, Node.js, and MongoDB. This comprehensive program will take you from the basics to building complex, production-ready applications.",
    longDescription:
      "This course is designed for individuals who want to become proficient in both frontend and backend development. You'll learn how to create responsive user interfaces with React, build robust server-side applications with Node.js, and work with MongoDB for data storage. By the end of this course, you'll have the skills to develop full-stack web applications from scratch.",
    duration: "12 weeks",
    schedule: "10 hours/week",
    startDate: "August 15, 2023",
    students: 1250,
    industry: "Tech",
    level: "Intermediate",
    tags: ["Web Development", "JavaScript", "React", "Node.js", "MongoDB"],
    prerequisites: [
      "Basic HTML, CSS, and JavaScript knowledge",
      "Understanding of programming concepts",
      "Familiarity with command line",
    ],
    outcomes: [
      "Build complete web applications using React for the frontend",
      "Develop RESTful APIs with Node.js and Express",
      "Design and implement MongoDB database schemas",
      "Deploy applications to cloud platforms",
      "Implement authentication and authorization",
      "Work with modern development tools and workflows",
    ],
    syllabus: [
      {
        week: 1,
        title: "Introduction to Web Development",
        topics: ["Course Overview", "Modern Web Development Landscape", "Setting Up Development Environment"],
      },
      {
        week: 2,
        title: "JavaScript Fundamentals",
        topics: ["ES6+ Features", "Asynchronous JavaScript", "Promises and Async/Await"],
      },
      {
        week: 3,
        title: "React Basics",
        topics: ["Components and Props", "State and Lifecycle", "Handling Events"],
      },
      {
        week: 4,
        title: "Advanced React",
        topics: ["Hooks", "Context API", "React Router"],
      },
      {
        week: 5,
        title: "Node.js Fundamentals",
        topics: ["Node.js Architecture", "NPM", "Creating a Basic Server"],
      },
      {
        week: 6,
        title: "Express.js Framework",
        topics: ["Routing", "Middleware", "Error Handling"],
      },
      {
        week: 7,
        title: "MongoDB and Mongoose",
        topics: ["NoSQL Databases", "CRUD Operations", "Data Modeling"],
      },
      {
        week: 8,
        title: "API Development",
        topics: ["RESTful API Design", "Authentication with JWT", "API Testing"],
      },
      {
        week: 9,
        title: "Frontend-Backend Integration",
        topics: ["Connecting React with APIs", "State Management", "Form Handling"],
      },
      {
        week: 10,
        title: "Advanced Topics",
        topics: ["File Uploads", "Real-time Communication", "Performance Optimization"],
      },
      {
        week: 11,
        title: "Deployment and DevOps",
        topics: ["CI/CD Pipelines", "Cloud Deployment", "Monitoring"],
      },
      {
        week: 12,
        title: "Final Project",
        topics: ["Project Planning", "Implementation", "Presentation"],
      },
    ],
    instructor: {
      name: "Rahul Mehta",
      role: "Senior Software Engineer",
      company: "Tech Innovators",
      bio: "Rahul has over 10 years of experience in web development and has worked with companies like Google and Microsoft. He specializes in full-stack development and is passionate about teaching the next generation of developers.",
      avatar: "RM",
    },
    partners: ["Tech Innovators", "WebDev Solutions", "Digital Pathways"],
  }

  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-primary/10 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col space-y-4">
            <Link href="/courses" className="flex items-center text-primary hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Courses
            </Link>
            <div className="grid gap-4 md:grid-cols-2 lg:gap-8">
              <div className="space-y-4">
                <Badge>{course.level}</Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">{course.title}</h1>
                <p className="text-gray-500">{course.description}</p>
                <div className="flex flex-wrap gap-2">
                  {course.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Duration</p>
                      <p className="text-sm text-gray-500">{course.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Start Date</p>
                      <p className="text-sm text-gray-500">{course.startDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Laptop className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Schedule</p>
                      <p className="text-sm text-gray-500">{course.schedule}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Enrolled</p>
                      <p className="text-sm text-gray-500">{course.students} students</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-white" />
                  </div>
                </div>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="font-medium">Industry Partner</span>
                        <span>{course.industry}</span>
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <Button className="w-full">Enroll Now</Button>
                        <Button variant="outline" className="w-full">
                          <Download className="mr-2 h-4 w-4" />
                          Download Syllabus
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
              <TabsTrigger value="partners">Partners</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="pt-6">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">About This Course</h3>
                    <p className="text-gray-500">{course.longDescription}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Prerequisites</h3>
                    <ul className="space-y-2">
                      {course.prerequisites.map((prerequisite, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{prerequisite}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">What You'll Learn</h3>
                  <ul className="space-y-2">
                    {course.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="syllabus" className="pt-6">
              <h3 className="text-xl font-bold mb-6">Course Syllabus</h3>
              <div className="space-y-6">
                {course.syllabus.map((week) => (
                  <Card key={week.week}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Week {week.week}</p>
                          <h4 className="text-lg font-semibold">{week.title}</h4>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                      <Separator className="my-4" />
                      <div>
                        <p className="font-medium mb-2">Topics Covered:</p>
                        <ul className="space-y-1">
                          {week.topics.map((topic, index) => (
                            <li key={index} className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                              <span className="text-sm">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="instructor" className="pt-6">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <Avatar className="h-32 w-32">
                      <AvatarImage src={`/placeholder.svg?height=128&width=128`} alt={course.instructor.name} />
                      <AvatarFallback className="text-2xl">{course.instructor.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold">{course.instructor.name}</h3>
                      <p className="text-gray-500">{course.instructor.role}</p>
                      <p className="text-gray-500">{course.instructor.company}</p>
                    </div>
                    <div className="flex space-x-4">
                      <Button variant="ghost" size="icon">
                        <Globe className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
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
                          className="h-5 w-5"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-4">About the Instructor</h3>
                  <p className="text-gray-500 mb-6">{course.instructor.bio}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="p-6 text-center">
                        <p className="text-3xl font-bold text-primary">10+</p>
                        <p className="text-sm text-gray-500">Years of Experience</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6 text-center">
                        <p className="text-3xl font-bold text-primary">5000+</p>
                        <p className="text-sm text-gray-500">Students Taught</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="partners" className="pt-6">
              <h3 className="text-xl font-bold mb-6">Industry Partners</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {course.partners.map((partner, index) => (
                  <Card key={index}>
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                        <Image
                          src={`/placeholder.svg?height=64&width=64`}
                          alt={partner}
                          width={64}
                          height={64}
                          className="opacity-70"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{partner}</h4>
                        <p className="text-sm text-gray-500">Industry Partner</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}
