import { Calendar, Users } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface CandidateCardProps {
  title: string
  date: string
  candidateCount: number
  imageUrl: string
  candidates: Array<{
    name: string
    avatar?: string
  }>
}

export default function CandidateCard({
  title = "Senior Frontend Developer",
  date = "March 24, 2025",
  candidateCount = 12,
  imageUrl = "/placeholder.svg?height=200&width=400",
  candidates = [
    { name: "Alex Kim", avatar: "/placeholder.svg?height=40&width=40" },
    { name: "Sarah Johnson", avatar: "/placeholder.svg?height=40&width=40" },
    { name: "Miguel Diaz", avatar: "/placeholder.svg?height=40&width=40" },
    { name: "Priya Patel", avatar: "/placeholder.svg?height=40&width=40" },
  ],
}: CandidateCardProps) {
  return (
    <Card className="overflow-hidden max-w-sm">
      <div className="relative h-48 w-full">
        <img src={imageUrl || "/placeholder.svg"} alt={title} className="h-full w-full object-cover" />
      </div>
      <CardHeader>
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="mr-1 h-4 w-4" />
          <span>{date}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm font-medium">
          <Users className="mr-1 h-4 w-4" />
          <span>{candidateCount} candidates</span>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-muted-foreground mr-2">Top candidates:</span>
          <div className="flex -space-x-2">
            {candidates.slice(0, 4).map((candidate, index) => (
              <Avatar key={index} className="border-2 border-background h-8 w-8">
                <AvatarImage src={candidate.avatar} alt={candidate.name} />
                <AvatarFallback>
                  {candidate.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            ))}
            {candidateCount > 4 && (
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs font-medium">
                +{candidateCount - 4}
              </div>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

