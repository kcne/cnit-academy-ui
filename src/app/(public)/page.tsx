"use client"
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
import { Card,  CardDescription, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

export default function HomePage() {
  const { t } = useTranslation();
  
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
                    {t('home.newCourses')}
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {t('home.title')}
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    {t('home.subtitle')}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1.5">
                    {t('home.startLearning')}
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    {t('home.viewCourses')}
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>{t('home.stats.courses')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>{t('home.stats.instructors')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>{t('home.stats.access')}</span>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <Image
                  src="/bg-image.jpg"
                  width={550}
                  height={550}
                  alt={t('description')}
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {t('home.learningPaths.title')}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t('home.learningPaths.subtitle')}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mt-8">
              <Card className="flex flex-col items-center text-center p-4 h-full">
                <div className="rounded-full bg-primary/10 p-3 mb-4">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{t('home.learningPaths.paths.fullStack.title')}</CardTitle>
                <CardDescription>{t('home.learningPaths.paths.fullStack.description')}</CardDescription>
                <Button variant="ghost" size="sm" className="mt-4">
                  {t('home.learningPaths.explorePath')}
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Card>

              <Card className="flex flex-col items-center text-center p-4 h-full">
                <div className="rounded-full bg-primary/10 p-3 mb-4">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{t('home.learningPaths.paths.backend.title')}</CardTitle>
                <CardDescription>{t('home.learningPaths.paths.backend.description')}</CardDescription>
                <Button variant="ghost" size="sm" className="mt-4">
                  {t('home.learningPaths.explorePath')}
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Card>

              <Card className="flex flex-col items-center text-center p-4 h-full">
                <div className="rounded-full bg-primary/10 p-3 mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{t('home.learningPaths.paths.frontend.title')}</CardTitle>
                <CardDescription>{t('home.learningPaths.paths.frontend.description')}</CardDescription>
                <Button variant="ghost" size="sm" className="mt-4">
                  {t('home.learningPaths.explorePath')}
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Card>

              <Card className="flex flex-col items-center text-center p-4 h-full">
                <div className="rounded-full bg-primary/10 p-3 mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{t('home.learningPaths.paths.devops.title')}</CardTitle>
                <CardDescription>{t('home.learningPaths.paths.devops.description')}</CardDescription>
                <Button variant="ghost" size="sm" className="mt-4">
                  {t('home.learningPaths.explorePath')}
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Card>

              <Card className="flex flex-col items-center text-center p-4 h-full">
                <div className="rounded-full bg-primary/10 p-3 mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{t('home.learningPaths.paths.dataScience.title')}</CardTitle>
                <CardDescription>{t('home.learningPaths.paths.dataScience.description')}</CardDescription>
                <Button variant="ghost" size="sm" className="mt-4">
                  {t('home.learningPaths.explorePath')}
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Card>

              <Card className="flex flex-col items-center text-center p-4 h-full">
                <div className="rounded-full bg-primary/10 p-3 mb-4">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{t('home.learningPaths.paths.mobileDev.title')}</CardTitle>
                <CardDescription>{t('home.learningPaths.paths.mobileDev.description')}</CardDescription>
                <Button variant="ghost" size="sm" className="mt-4">
                  {t('home.learningPaths.explorePath')}
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {t('home.featuredCourses.title')}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t('home.featuredCourses.subtitle')}
                </p>
              </div>
            </div>

            <Tabs defaultValue="all" className="mt-8">
              <div className="flex justify-center">
                <TabsList className="mb-8">
                  <TabsTrigger value="all">{t('home.featuredCourses.tabs.all')}</TabsTrigger>
                  <TabsTrigger value="fullstack">{t('home.featuredCourses.tabs.fullstack')}</TabsTrigger>
                  <TabsTrigger value="backend">{t('home.featuredCourses.tabs.backend')}</TabsTrigger>
                  <TabsTrigger value="frontend">{t('home.featuredCourses.tabs.frontend')}</TabsTrigger>
                  <TabsTrigger value="devops">{t('home.featuredCourses.tabs.devops')}</TabsTrigger>
                  <TabsTrigger value="datascience">{t('home.featuredCourses.tabs.datascience')}</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="space-y-4">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {/* Course cards will be added here */}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  );
}
