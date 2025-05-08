import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
import { BookCopy, Calendar, Code, FilePlus, Home, NotebookPen, Search, Settings } from "lucide-react"
import Link from "next/link"
  

  const items = [
    {
      title: "Home",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "My Blogs",
      url: "/dashboard/blogs",
      icon: NotebookPen,
    },
    {
      title: "My Courses",
      url: "/dashboard/my-courses",
      icon: BookCopy,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ]
  
  export function AppSidebar() {
    return (
      <Sidebar>
        <SidebarHeader>
        <div className="flex items-center gap-2">
              <Code className="h-6 w-6" />
              <span className="text-xl font-bold">CentarNit Academy</span>
        </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    )
  }
  