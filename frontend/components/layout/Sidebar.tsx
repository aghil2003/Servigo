"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  Calendar,
  ChevronLeft,
  ChevronRight,
  HomeIcon,
  Menu,
  Settings,
  ShoppingCart,
  Users,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SidebarProps {
  className?: string;
}

interface SidebarItem {
  title: string;
  href: string;
  icon: React.ReactNode;
}

export function Sidebar({ className }: SidebarProps) {
  const [expanded, setExpanded] = useState(false);

  const sidebarItems: SidebarItem[] = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <HomeIcon className="h-5 w-5" />,
    },
    {
      title: "Orders",
      href: "/dashboard/orders",
      icon: <ShoppingCart className="h-5 w-5" />,
    },
    {
      title: "Services",
      href: "/dashboard/services",
      icon: <Wrench className="h-5 w-5" />,
    },
    {
      title: "Customers",
      href: "/dashboard/customers",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Schedule",
      href: "/dashboard/schedule",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      title: "Analytics",
      href: "/dashboard/analytics",
      icon: <BarChart3 className="h-5 w-5" />,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ];

  return (
    <aside
      className={cn(
        "flex h-[calc(100vh-4rem)] flex-col border-r bg-background transition-all duration-300",
        expanded ? "md:w-64" : "md:w-16",
        className
      )}
    >
      <div className="flex h-14 items-center border-b px-3 justify-between">
        {expanded && <p className="font-semibold">Menu</p>}
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <ChevronLeft className="h-5 w-5" />
          ) : (
            <ChevronRight className="h-5 w-5" />
          )}
        </Button>
      </div>
      <ScrollArea className="flex-1">
        <nav className="flex flex-col gap-1 p-2">
          {sidebarItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors",
                item.href === "/dashboard" && "bg-accent text-accent-foreground"
              )}
            >
              {item.icon}
              {expanded && <span>{item.title}</span>}
            </Link>
          ))}
        </nav>
      </ScrollArea>
    </aside>
  );
}