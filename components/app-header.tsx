"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Bell, Search, User, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

export function AppHeader() {
  const router = useRouter()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-100 bg-white/80 backdrop-blur-md ios-top-safe">
      <div className="container flex h-16 items-center px-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
            <span className="text-sm font-bold text-white flex items-center">
              CC
              <Sparkles className="h-3 w-3 ml-0.5" />
            </span>
          </div>
          <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            CUNY Central
          </span>
        </Link>

        <div className="flex items-center ml-auto gap-2">
          {isSearchOpen ? (
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-purple-400" />
              <Input
                placeholder="Search..."
                className="pl-10 bg-white border-purple-200 text-purple-900 w-full ios-input"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
              className="text-purple-700 h-10 w-10"
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          <Button variant="ghost" size="icon" className="relative text-purple-700 h-10 w-10">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full"></span>
            <span className="sr-only">Notifications</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full border border-purple-200 bg-white h-10 w-10">
                <User className="h-5 w-5 text-purple-700" />
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-white text-purple-900 border-purple-100 rounded-xl">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-purple-100" />
              <DropdownMenuItem className="py-2.5 text-base">Profile</DropdownMenuItem>
              <DropdownMenuItem className="py-2.5 text-base">Settings</DropdownMenuItem>
              <DropdownMenuSeparator className="bg-purple-100" />
              <DropdownMenuItem onClick={() => router.push("/")} className="py-2.5 text-base">
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
