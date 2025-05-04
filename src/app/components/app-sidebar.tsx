"use client";

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
} from "@/components/ui/sidebar";
import {
  Calendar,
  Code,
  Home,
  NotebookPen,
  Search,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export function AppSidebar() {
  const { t } = useTranslation();

  const items = [
    {
      title: t("sidebar.home"),
      url: "/dashboard",
      icon: Home,
    },
    {
      title: t("sidebar.myBlogs"),
      url: "/dashboard/blogs",
      icon: NotebookPen,
    },
    {
      title: t("sidebar.calendar"),
      url: "#",
      icon: Calendar,
    },
    {
      title: t("sidebar.search"),
      url: "#",
      icon: Search,
    },
    {
      title: t("sidebar.settings"),
      url: "#",
      icon: Settings,
    },
  ];

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
  );
}
