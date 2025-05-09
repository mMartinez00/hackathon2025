"use client"

import { useRouter } from "next/navigation"
import { GraduationCap, Briefcase, User } from "lucide-react"

export function WelcomeScreen() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-6 ios-top-safe ios-bottom-safe">
      <div className="w-full max-w-md">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-900 text-center mb-12 flex items-center justify-center">
          <div className="w-10 h-10 relative mr-2">
            <GraduationCap className="w-8 h-8 text-indigo-900 absolute -top-1 -left-1" />
          </div>
          <span className="text-yellow-400 mr-2">✦</span>
          WELCOME TO CUNY CENTRAL
          <span className="text-yellow-400 ml-2">✦</span>
          <div className="w-10 h-10 relative ml-2">
            <GraduationCap className="w-8 h-8 text-indigo-900 absolute -top-1 -left-1" />
          </div>
        </h1>

        <div className="space-y-6">
          <button
            onClick={() => router.push("/academic")}
            className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
          >
            <GraduationCap className="mr-3 h-6 w-6" />
            Academic
          </button>

          <button
            onClick={() => router.push("/career")}
            className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold text-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
          >
            <Briefcase className="mr-3 h-6 w-6" />
            Career
          </button>

          <button
            onClick={() => router.push("/profile")}
            className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 text-white font-bold text-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
          >
            <User className="mr-3 h-6 w-6" />
            Profile
          </button>
        </div>
      </div>
    </div>
  )
}
