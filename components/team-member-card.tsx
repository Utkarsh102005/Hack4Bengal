import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface TeamMember {
  name: string
  role: string
  strength: string
  jobRole: string
  avatar: string
}

interface TeamMemberCardProps {
  member: TeamMember
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
        <Avatar className="h-24 w-24">
          <AvatarImage src={`/placeholder.svg?height=96&width=96`} alt={member.name} />
          <AvatarFallback className="text-xl">{member.avatar}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-bold text-lg">{member.name}</h3>
          <p className="text-sm text-gray-500">{member.role}</p>
        </div>
        <Separator />
        <div className="w-full space-y-2">
          <div className="flex justify-between">
            <span className="text-sm font-medium">Strength:</span>
            <span className="text-sm text-gray-500">{member.strength}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-medium">Job Role:</span>
            <span className="text-sm text-gray-500">{member.jobRole}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
