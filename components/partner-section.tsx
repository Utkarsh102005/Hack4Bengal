import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function PartnerSection() {
  const partners = [
    { name: "Tech Innovators", type: "Industry" },
    { name: "Future Skills NGO", type: "NGO" },
    { name: "Global Learning Initiative", type: "NGO" },
    { name: "NextGen Technologies", type: "Industry" },
    { name: "Digital Pathways", type: "Industry" },
    { name: "Community Uplift Foundation", type: "NGO" },
  ]

  return (
    <section className="py-16 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Partners</h2>
          <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Collaborating with industry leaders and NGOs to create meaningful opportunities
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {partners.map((partner, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-6 flex flex-col items-center justify-center space-y-2 h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <Image
                    src={`/placeholder.svg?height=40&width=40`}
                    alt={partner.name}
                    width={40}
                    height={40}
                    className="opacity-70"
                  />
                </div>
                <h3 className="font-medium text-center">{partner.name}</h3>
                <p className="text-xs text-gray-500">{partner.type}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
