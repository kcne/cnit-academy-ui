'use client'
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
import { Calendar, Code, Home, NotebookPen, Search, Settings } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react";
import { useUser } from "../providers/userContext";
  

  const items = [
    {
      title: "Home",
      url: "/dashboard",
      icon: Home,
      role:["USER", "INSTRUCTOR", "ADMIN"]
    },
    {
      title: "My Blogs",
      url: "/dashboard/blogs",
      icon: NotebookPen,
      role:["USER", "INSTRUCTOR", "ADMIN"]
    },
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
      role:["USER", "INSTRUCTOR", "ADMIN"]
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
      role:["USER", "INSTRUCTOR", "ADMIN"]
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      role:["USER", "INSTRUCTOR", "ADMIN"]
    },
  ]
  
  export function AppSidebar() {
      const {user, fetchUserInfo} = useUser();

  useEffect(() => {
    fetchUserInfo();
  }, [fetchUserInfo]);
  
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
                 {items.map((item) => item.role.includes(user?.role ?? "USER") ?
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
               : undefined)}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    )
  }
  