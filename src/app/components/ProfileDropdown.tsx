"use client";

import { useState } from "react";
import {
  ChevronDown,
  LogOut,
  Settings,
  UserCircle,
  User as UserIcon,
} from "lucide-react";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { User } from "../providers/userContext";
import { useTranslation } from "react-i18next";

interface ProfileDropdownProps {
  user: User;
  onSignOut?: () => void;
}

export function ProfileDropdown({
  user,
  onSignOut = () => {},
}: ProfileDropdownProps) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const getUserInitials = (user: User) => {
    if (!user?.firstName || !user?.lastName) return "";
    return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
  };

  if (!user) return null;

  const getProfileImageUrl = (userId: number) => {
    return `${process.env.NEXT_PUBLIC_BUCKET_ENDPOINT}/pfp/${userId}.jpg`;
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-auto p-1 px-2 flex items-center gap-2"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={getProfileImageUrl(user.id)}
              alt={`${user.firstName} ${user.lastName}`}
            />
            <AvatarFallback>{getUserInitials(user)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start text-sm">
            <span className="font-medium">
              {user.firstName} {user.lastName}
            </span>
            <span className="text-xs text-muted-foreground">{user.email}</span>
          </div>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
            <span className="text-sm font-medium">{getUserInitials(user)}</span>
          </div>
          <div className="flex flex-col space-y-0.5">
            <p className="text-sm font-medium">
              {user.firstName} {user.lastName}
            </p>
            <p className="text-xs text-muted-foreground">{user.email}</p>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/dashboard" className="cursor-pointer">
            <UserIcon className="mr-2 h-4 w-4" />
            <span>{t("profileDropdown.dashboard")}</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/profile" className="cursor-pointer">
            <UserCircle className="mr-2 h-4 w-4" />
            <span>{t("profileDropdown.profile")}</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/settings" className="cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            <span>{t("profileDropdown.settings")}</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-red-500 focus:text-red-500 cursor-pointer"
          onClick={onSignOut}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>{t("profileDropdown.signOut")}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
