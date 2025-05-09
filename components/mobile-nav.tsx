"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { Home, Briefcase, GraduationCap, User, Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { AppSidebar } from "@/components/app-sidebar"

export function MobileNav() {
  const pathname = usePathname()
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const navItems = [
    { name: "Home", href: "/dashboard", icon: Home },
    { name: "Career", href: "/career", icon: Briefcase },
    { name: "Academic", href: "/academic", icon: GraduationCap },
    { name: "Personal", href: "/personal", icon: User },
  ]

  const NavItem = ({ item }: { item: { name: string; href: string; icon: any } }) => {
    const isActive = pathname === item.href
    const Icon = item.icon

    return (
      <Link
        href={item.href}
        className={cn(
          "flex flex-col items-center justify-center gap-1 w-full py-2",
          isActive ? "text-purple-600" : "text-gray-500",
        )}
      >
        <Icon className={cn("h-6 w-6", isActive ? "text-purple-600" : "text-gray-500")} />
        <span className="text-xs font-medium">{item.name}</span>
      </Link>
    )
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 ios-bottom-safe transition-transform duration-300",
        isVisible ? "translate-y-0" : "translate-y-full",
      )}
    >
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => (
          <NavItem key={item.name} item={item} />
        ))}
        <Sheet>
          <SheetTrigger className="flex flex-col items-center justify-center gap-1 w-full py-2 text-gray-500">
            <Menu className="h-6 w-6" />
            <span className="text-xs font-medium">More</span>
          </SheetTrigger>
          <SheetContent side="bottom" className="ios-sheet pt-6 h-[80vh] ios-scroll overflow-auto">
            <AppSidebar isMobile />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
