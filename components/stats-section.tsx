import { Card, CardContent } from "@/components/ui/card"

export default function StatsSection() {
  const stats = [
    { value: "80%", label: "Job Placement Rate" },
    { value: "5000+", label: "Students Trained" },
    { value: "200+", label: "Industry Partners" },
    { value: "50+", label: "Training Programs" },
  ]

  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-primary-foreground/10 border-0">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-2">
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
