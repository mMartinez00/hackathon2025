"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  BookOpen,
  Briefcase,
  Calendar,
  FileText,
  GraduationCap,
  Heart,
  Home,
  MessageSquare,
  Search,
  Settings,
  User,
  Sparkles,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface AppSidebarProps {
  isMobile?: boolean
}

export function AppSidebar({ isMobile = false }: AppSidebarProps) {
  const pathname = usePathname()

  const mainNavItems = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Career", href: "/career", icon: Briefcase },
    { name: "Academic", href: "/academic", icon: GraduationCap },
    { name: "Personal", href: "/personal", icon: User },
  ]

  const secondaryNavItems = [
    { name: "Internships", href: "/internships", icon: Search },
    { name: "Resume Builder", href: "/resume", icon: FileText },
    { name: "Events", href: "/events", icon: Calendar },
    { name: "Courses", href: "/courses", icon: BookOpen },
    { name: "Messages", href: "/messages", icon: MessageSquare },
    { name: "Health Resources", href: "/health", icon: Heart },
    { name: "Settings", href: "/settings", icon: Settings },
  ]

  const NavItem = ({ item }: { item: { name: string; href: string; icon: any } }) => {
    const isActive = pathname === item.href
    const Icon = item.icon

    return (
      <Link
        href={item.href}
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all",
          isActive
            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium shadow-md"
            : "text-purple-700 hover:bg-purple-100 hover:text-purple-900",
          "group relative overflow-hidden",
        )}
      >
        {isActive && (
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        )}
        <Icon className={cn("h-5 w-5", isActive ? "text-white" : "text-purple-500")} />
        <span>{item.name}</span>
        {isActive && <Sparkles className="h-3 w-3 absolute right-2 opacity-70" />}
      </Link>
    )
  }

  return (
    <div
      className={cn(
        "flex flex-col gap-2 p-4 bg-white border-r border-purple-100",
        isMobile ? "w-full" : "w-64 min-h-[calc(100vh-4rem)] hidden md:flex",
      )}
    >
      <div className="mb-2">
        <h2 className="px-4 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
          Main Menu
        </h2>
        <nav className="space-y-1">
          {mainNavItems.map((item) => (
            <NavItem key={item.name} item={item} />
          ))}
        </nav>
      </div>

      <div className="mt-4">
        <h2 className="px-4 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
          Resources
        </h2>
        <nav className="space-y-1">
          {secondaryNavItems.map((item) => (
            <NavItem key={item.name} item={item} />
          ))}
        </nav>
      </div>
    </div>
  )
}
