"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { LockKeyhole, User, Sparkles } from "lucide-react"

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-md text-purple-900 overflow-hidden relative ios-card">
      <div className="absolute -top-24 -right-24 w-40 h-40 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-full"></div>

      <CardHeader className="space-y-4 flex flex-col items-center relative z-10 pt-8">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mb-2 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <span className="text-2xl font-bold text-white flex items-center">
            CC
            <Sparkles className="h-5 w-5 ml-1 animate-pulse" />
          </span>
        </div>
        <CardTitle className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          CUNY Central
        </CardTitle>
        <CardDescription className="text-purple-700 text-center font-medium text-base">
          Your all-in-one portal for academic success
        </CardDescription>
      </CardHeader>
      <CardContent className="relative z-10 px-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-purple-800 font-medium text-base">
              CUNY Username
            </Label>
            <div className="relative">
              <User className="absolute left-4 top-4 h-5 w-5 text-purple-500" />
              <Input
                id="username"
                placeholder="username@login.cuny.edu"
                className="pl-12 bg-white/50 border-purple-200 text-purple-900 placeholder:text-purple-400 focus:border-purple-500 focus:ring-purple-500 ios-input"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-purple-800 font-medium text-base">
              Password
            </Label>
            <div className="relative">
              <LockKeyhole className="absolute left-4 top-4 h-5 w-5 text-purple-500" />
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="pl-12 bg-white/50 border-purple-200 text-purple-900 placeholder:text-purple-400 focus:border-purple-500 focus:ring-purple-500 ios-input"
                required
              />
            </div>
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-lg mt-4 ios-btn"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Signing in...
              </div>
            ) : (
              <span className="flex items-center justify-center">
                Sign In
                <Sparkles className="ml-2 h-5 w-5" />
              </span>
            )}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-3 text-center text-base text-purple-700 relative z-10 pb-8">
        <a href="#" className="hover:text-pink-600 transition-colors font-medium py-2">
          Forgot password?
        </a>
        <a href="#" className="hover:text-pink-600 transition-colors font-medium py-2">
          Need help signing in?
        </a>
      </CardFooter>
    </Card>
  )
}
