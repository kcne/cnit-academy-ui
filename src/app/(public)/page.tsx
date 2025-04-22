import Link from "next/link"
import Image from "next/image"
import {
  Code2,
  Database,
  Globe,
  Server,
  Layers,
  BarChart3,
  CheckCircle,
  ChevronRight,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="inline-flex" variant="secondary">
                    New Courses Added Weekly
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Master Modern Tech Skills
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Comprehensive learning paths for full stack, backend, frontend, DevOps, and data science. Learn from
                    industry experts and build real-world projects.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1.5">
                    Start Learning
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    View Courses
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>500+ Courses</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Expert Instructors</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Lifetime Access</span>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <Image
                  src="/bg-image.jpg"
                  width={550}
                  height={550}
                  alt="Learning platform hero image"
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Learning Paths Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Learning Paths</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose your specialized learning path and become job-ready with our comprehensive curriculum
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mt-8">
              <Card className="flex flex-col items-center text-center p-4 h-full">
                <div className="rounded-full bg-primary/10 p-3 mb-4">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">Full Stack</CardTitle>
                <CardDescription>Master both frontend and backend development</CardDescription>
                <Button variant="ghost" size="sm" className="mt-4">
                  Explore Path
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Card>

              <Card className="flex flex-col items-center text-center p-4 h-full">
                <div className="rounded-full bg-primary/10 p-3 mb-4">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">Backend</CardTitle>
                <CardDescription>Build robust server-side applications</CardDescription>
                <Button variant="ghost" size="sm" className="mt-4">
                  Explore Path
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Card>

              <Card className="flex flex-col items-center text-center p-4 h-full">
                <div className="rounded-full bg-primary/10 p-3 mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">Frontend</CardTitle>
                <CardDescription>Create beautiful, responsive user interfaces</CardDescription>
                <Button variant="ghost" size="sm" className="mt-4">
                  Explore Path
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Card>

              <Card className="flex flex-col items-center text-center p-4 h-full">
                <div className="rounded-full bg-primary/10 p-3 mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">DevOps</CardTitle>
                <CardDescription>Automate deployment and infrastructure</CardDescription>
                <Button variant="ghost" size="sm" className="mt-4">
                  Explore Path
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Card>

              <Card className="flex flex-col items-center text-center p-4 h-full">
                <div className="rounded-full bg-primary/10 p-3 mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">Data Science</CardTitle>
                <CardDescription>Analyze data and build ML models</CardDescription>
                <Button variant="ghost" size="sm" className="mt-4">
                  Explore Path
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Card>

              <Card className="flex flex-col items-center text-center p-4 h-full">
                <div className="rounded-full bg-primary/10 p-3 mb-4">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">Mobile Dev</CardTitle>
                <CardDescription>Build native and cross-platform mobile apps</CardDescription>
                <Button variant="ghost" size="sm" className="mt-4">
                  Explore Path
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Courses Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Courses</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our most popular courses across different technology domains
                </p>
              </div>
            </div>

            <Tabs defaultValue="all" className="mt-8">
              <div className="flex justify-center">
                <TabsList className="mb-8">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
                  <TabsTrigger value="backend">Backend</TabsTrigger>
                  <TabsTrigger value="frontend">Frontend</TabsTrigger>
                  <TabsTrigger value="devops">DevOps</TabsTrigger>
                  <TabsTrigger value="datascience">Data Science</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="space-y-4">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {/* Course Card 1 */}
                  <Card>
                    <CardHeader className="p-0">
                      <Image
                        src="/bg-image.jpg"
                        width={400}
                        height={200}
                        alt="Course thumbnail"
                        className="w-full object-cover rounded-t-lg h-48"
                      />
                    </CardHeader>
                    <CardContent className="p-4">
                      <Badge className="mb-2">Full Stack</Badge>
                      <CardTitle className="text-xl mb-2">Modern Web Development with React & Node</CardTitle>
                      <CardDescription className="line-clamp-2">
                        Build full-stack applications with React, Node.js, Express, and MongoDB
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>24 hours</span>
                        <span className="mx-2">•</span>
                        <span>Intermediate</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Course Card 2 */}
                  <Card>
                    <CardHeader className="p-0">
                      <Image
                        src="/bg-image.jpg"
                        width={400}
                        height={200}
                        alt="Course thumbnail"
                        className="w-full object-cover rounded-t-lg h-48"
                      />
                    </CardHeader>
                    <CardContent className="p-4">
                      <Badge className="mb-2">Backend</Badge>
                      <CardTitle className="text-xl mb-2">Microservices Architecture with Spring Boot</CardTitle>
                      <CardDescription className="line-clamp-2">
                        Design and implement scalable microservices using Spring Boot and Spring Cloud
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>18 hours</span>
                        <span className="mx-2">•</span>
                        <span>Advanced</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Course Card 3 */}
                  <Card>
                    <CardHeader className="p-0">
                      <Image
                        src="/bg-image.jpg"
                        width={400}
                        height={200}
                        alt="Course thumbnail"
                        className="w-full object-cover rounded-t-lg h-48"
                      />
                    </CardHeader>
                    <CardContent className="p-4">
                      <Badge className="mb-2">Frontend</Badge>
                      <CardTitle className="text-xl mb-2">Advanced React Patterns and Performance</CardTitle>
                      <CardDescription className="line-clamp-2">
                        Master advanced React patterns, hooks, and optimization techniques
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>15 hours</span>
                        <span className="mx-2">•</span>
                        <span>Intermediate</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Course Card 4 */}
                  <Card>
                    <CardHeader className="p-0">
                      <Image
                        src="/bg-image.jpg"
                        width={400}
                        height={200}
                        alt="Course thumbnail"
                        className="w-full object-cover rounded-t-lg h-48"
                      />
                    </CardHeader>
                    <CardContent className="p-4">
                      <Badge className="mb-2">DevOps</Badge>
                      <CardTitle className="text-xl mb-2">CI/CD with GitHub Actions and AWS</CardTitle>
                      <CardDescription className="line-clamp-2">
                        Implement continuous integration and deployment pipelines with GitHub Actions and AWS
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>12 hours</span>
                        <span className="mx-2">•</span>
                        <span>Intermediate</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
                <div className="flex justify-center mt-8">
                  <Button>View All Courses</Button>
                </div>
              </TabsContent>

              {/* Other tabs content would go here */}
              <TabsContent value="fullstack">
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Full Stack courses content would appear here</p>
                </div>
              </TabsContent>
              <TabsContent value="backend">
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Backend courses content would appear here</p>
                </div>
              </TabsContent>
              <TabsContent value="frontend">
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Frontend courses content would appear here</p>
                </div>
              </TabsContent>
              <TabsContent value="devops">
                <div className="text-center py-12">
                  <p className="text-muted-foreground">DevOps courses content would appear here</p>
                </div>
              </TabsContent>
              <TabsContent value="datascience">
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Data Science courses content would appear here</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose CentarNit Academy</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform is designed to provide the best learning experience for aspiring developers
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card className="bg-background/60">
                <CardHeader>
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Code2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Project-Based Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Learn by building real-world projects that you can add to your portfolio. Apply concepts immediately
                    to reinforce your learning.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-background/60">
                <CardHeader>
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Code2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Expert Instructors</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Learn from industry professionals with years of experience. Our instructors work at top tech
                    companies and bring real-world insights.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-background/60">
                <CardHeader>
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Code2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Interactive Coding</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Practice coding directly in your browser with our interactive coding environment. Get instant
                    feedback on your code.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-background/60">
                <CardHeader>
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Code2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Structured Curriculum</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Follow a carefully designed learning path that takes you from beginner to advanced. Each course
                    builds on the previous one.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-background/60">
                <CardHeader>
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Code2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Community Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Join our community of learners and instructors. Get help, share your progress, and collaborate on
                    projects.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-background/60">
                <CardHeader>
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Code2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Career Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Get help with your resume, portfolio, and interview preparation. Connect with our hiring partners
                    for job opportunities.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Students Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our students who have transformed their careers through our platform
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card className="bg-background">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/bg-image.jpg"
                      width={60}
                      height={60}
                      alt="Student avatar"
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                      <CardDescription>Full Stack Developer at Tech Co.</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    &quot;I had no coding experience when I started. Within 6 months, I landed my first developer job. The
                    project-based approach really helped me build a strong portfolio.&quot;
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/bg-image.jpg"
                      width={60}
                      height={60}
                      alt="Student avatar"
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-lg">Michael Chen</CardTitle>
                      <CardDescription>Backend Engineer at StartupX</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    &quot;The microservices course completely changed how I approach system design. The instructors explain
                    complex concepts in a way that&apos;s easy to understand.&quot;
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/bg-image.jpg"
                      width={60}
                      height={60}
                      alt="Student avatar"
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-lg">Emily Rodriguez</CardTitle>
                      <CardDescription>DevOps Engineer at Enterprise Inc.</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    &quot;I was able to transition from a traditional IT role to DevOps after completing the CI/CD pipeline
                    course. The hands-on labs were incredibly valuable.&quot;
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Start Your Coding Journey Today
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of students who have transformed their careers through our platform
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="gap-1.5">
                  Get Started for Free
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
                  View Pricing
                </Button>
              </div>
              <p className="text-sm">No credit card required for free courses</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-background">
        <div className="container mx-auto flex flex-col gap-8 px-4 py-10 md:px-6 lg:flex-row lg:gap-12 max-w-7xl">
          <div className="flex flex-col gap-4 lg:w-1/3">
            <div className="flex items-center gap-2">
              <Code2 className="h-6 w-6" />
              <span className="text-xl font-bold">CentarNit Academy</span>
            </div>
            <p className="text-muted-foreground">
              Empowering the next generation of developers with high-quality, project-based learning.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Twitter</span>
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
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">GitHub</span>
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
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">LinkedIn</span>
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
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Learning Paths
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    For Teams
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Cheat Sheets
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Career Guide
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t">
          <div className="container flex flex-col gap-2 px-4 py-6 text-center text-sm text-muted-foreground md:px-6 md:flex-row md:justify-between">
            <p>© {new Date().getFullYear()} CentarNit Academy. All rights reserved.</p>
            <p>Made with ❤️ for developers worldwide</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
