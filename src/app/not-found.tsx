import Link from "next/link"
import { FileQuestion, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function NotFound() {
  return (
    <div className="container flex items-center justify-center min-h-[80vh] px-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center pb-2">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-blue-100 p-3">
              <FileQuestion className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">404 Page not found</CardTitle>
        </CardHeader>
        <CardContent className="text-center text-muted-foreground">
          <p>The page you are looking for doesnt exist or has been moved.</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Return home
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
