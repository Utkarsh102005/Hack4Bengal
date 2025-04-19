import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Developer",
      content:
        "ElevateX helped me bridge the gap between my college education and industry requirements. The training program was practical and directly applicable to my job.",
      avatar: "PS",
    },
    {
      name: "Rahul Patel",
      role: "Data Analyst",
      content:
        "I was struggling to find a job despite having a degree. The industry partnership program at ElevateX connected me with employers looking for my exact skill set.",
      avatar: "RP",
    },
    {
      name: "Ananya Singh",
      role: "UX Designer",
      content:
        "The mentorship I received through ElevateX was invaluable. I gained practical skills that weren't taught in my formal education, which made all the difference.",
      avatar: "AS",
    },
  ]

  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h2>
          <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hear from individuals who transformed their careers through ElevateX
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={`/placeholder.svg?height=64&width=64`} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
                <p className="text-gray-500">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
