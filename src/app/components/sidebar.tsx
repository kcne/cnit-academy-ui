"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  LayoutDashboardIcon,
  SettingsIcon,
  UsersIcon,
  LayoutDashboard,
  BookOpen,
  GraduationCap,
} from "lucide-react";
import { ReactNode } from "react";

interface SidebarProps {
  items: SidebarItem[];
}

interface SidebarItem {
  title: string;
  href: string;
  icon: ReactNode;
}

export function AppSidebar({ items }: SidebarProps) {
  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/" className="flex justify-center">
                <span className="font-semibold">Centar NIT - Academy</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {items
            ? items.map((item) => (
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href={item.href}>
                      {item.icon}
                      <span className="ml-2">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))
            : null}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <p className="text-sm text-gray-500 flex justify-center">
          © 2025 CentarNit - Academy
        </p>
      </SidebarFooter>
    </Sidebar>
  );
}
