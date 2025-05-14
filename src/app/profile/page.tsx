import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Pencil, Github, Linkedin, Twitter, Instagram, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  return (
    
    <div className="container mx-auto py-8 px-4">
      {/* Home Button */}
      <div className="mb-6">
        <Link href="/">
          <Button variant="outline" className="px-4 py-2 text-sm">
            Home
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Profile Section */}
        <div className="md:col-span-3">
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="relative">
                  <Avatar className="w-32 h-32 border-4 border-white shadow-md">
                    <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Profile picture" />
                    <AvatarFallback>UN</AvatarFallback>
                  </Avatar>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2">
                        <h1 className="text-2xl font-bold">User Name</h1>
                      </div>
                      <div className="text-muted-foreground">28 · Location</div>
                      <div className="mt-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>Organization:</span>
                          <span className="font-medium text-foreground">Acme Corporation</span>
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <Pencil className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <Textarea
                      placeholder="Write a short bio about yourself..."
                      className="min-h-[80px] resize-none"
                      defaultValue="I'm a software developer passionate about creating beautiful user interfaces and solving complex problems."
                    />
                    <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-6 w-6">
                      <Pencil className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Left Column */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded-full bg-amber-100">
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-amber-400 text-white">
                      <span className="text-xs">🏆</span>
                    </div>
                  </div>
                  <div className="text-xl font-semibold">0028</div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="p-1 rounded-full bg-red-100">
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-400 text-white">
                      <span className="text-xs">❤️</span>
                    </div>
                  </div>
                  <div className="text-xl font-semibold">0008</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Skills</CardTitle>
              <Button variant="ghost" size="icon">
                <Pencil className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">I have not added a skill yet</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Projects</CardTitle>
              <Button variant="ghost" size="icon">
                <Pencil className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border rounded-md p-3">
                <h3 className="font-medium">Axios Odevi</h3>
                <p className="text-sm text-muted-foreground">Sample demo project for using axios API.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Blog Posts</CardTitle>
              <Button variant="ghost" size="icon">
                <Pencil className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">I have not shared a blog post yet</p>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Education</CardTitle>
              <Button variant="ghost" size="icon">
                <Pencil className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">No education information added yet</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Job Experience</CardTitle>
              <Button variant="ghost" size="icon">
                <Pencil className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">No job experience added yet</p>
            </CardContent>
          </Card>

          {/* Social Links Section */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Social Links</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 border rounded-md">
                  <Github className="h-5 w-5 text-gray-700" />
                  <div className="flex-1">
                    <Input placeholder="Your GitHub username" defaultValue="" />
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 border rounded-md">
                  <Linkedin className="h-5 w-5 text-blue-600" />
                  <div className="flex-1">
                    <Input placeholder="Your LinkedIn profile" defaultValue="" />
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 border rounded-md">
                  <Twitter className="h-5 w-5 text-sky-500" />
                  <div className="flex-1">
                    <Input placeholder="Your Twitter handle" defaultValue="" />
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 border rounded-md">
                  <Instagram className="h-5 w-5 text-pink-600" />
                  <div className="flex-1">
                    <Input placeholder="Your Instagram username" defaultValue="" />
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 border rounded-md md:col-span-2">
                  <ExternalLink className="h-5 w-5 text-gray-700" />
                  <div className="flex-1">
                    <Input placeholder="Your personal website" defaultValue="" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
