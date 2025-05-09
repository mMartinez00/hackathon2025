"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { User, Settings, GraduationCap, ChevronLeft } from "lucide-react"

export function ProfileView() {
  const router = useRouter()

  const profileFeatures = [
    {
      title: "Personal Info",
      description: "View and update your name, email, and contact information.",
      icon: User,
      path: "/profile/personal",
    },
    {
      title: "Academic Info",
      description: "Major, current GPA, and expected graduation date.",
      icon: GraduationCap,
      path: "/profile/academic",
    },
    {
      title: "Settings",
      description: "Change password, notification preferences, and privacy settings.",
      icon: Settings,
      path: "/profile/settings",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100">
      {/* Header */}
      <header className="bg-white p-4 shadow-sm">
        <h1 className="text-2xl font-bold text-cyan-900 flex items-center">
          <User className="mr-2 h-6 w-6" />
          My Profile
        </h1>
      </header>

      <div className="container mx-auto p-4 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {profileFeatures.map((feature) => (
            <Link
              key={feature.title}
              href={feature.path}
              className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow active:bg-cyan-200"
            >
              <h3 className="text-lg font-semibold text-cyan-900 flex items-center mb-2">
                <feature.icon className="mr-2 h-5 w-5 text-cyan-700" />
                {feature.title}
              </h3>
              <p className="text-sm text-cyan-800">{feature.description}</p>
            </Link>
          ))}
        </div>

        {/* Back Button */}
        <button
          onClick={() => router.push("/")}
          className="mt-6 flex items-center justify-center bg-cyan-700 text-white px-6 py-2 rounded-full"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back
        </button>
      </div>
    </div>
  )
}
