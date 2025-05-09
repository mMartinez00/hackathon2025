"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Briefcase, FileText, Users, Calendar, Send, Bot, ChevronLeft, Sparkles } from "lucide-react"

export function CareerView() {
  const router = useRouter()
  const [message, setMessage] = useState("")

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle sending message
    setMessage("")
  }

  const careerFeatures = [
    {
      title: "Resume Builder",
      description: "Create and edit a professional resume in minutes.",
      icon: FileText,
      path: "/career/resume",
    },
    {
      title: "Mock Interview Training",
      description: "Practice industry-specific questions and techniques.",
      icon: Sparkles,
      path: "/career/interview",
    },
    {
      title: "Career Alignment",
      description: "Match your goals with academic and internship opportunities.",
      icon: Sparkles,
      path: "/career/alignment",
    },
    {
      title: "Job & Internship Listings",
      description: "Curated listings with matching events and contacts.",
      icon: Sparkles,
      path: "/career/jobs",
    },
    {
      title: "Networking Events",
      description: "Find the right events to connect with professionals.",
      icon: Calendar,
      path: "/career/events",
    },
    {
      title: "Career Live Chat",
      description: "Talk directly to CCPD for guidance and mentorship.",
      icon: Users,
      path: "/career/chat",
    },
  ]

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <header className="bg-white p-4 shadow-sm">
        <h1 className="text-2xl font-bold text-amber-900 flex items-center">
          <Briefcase className="mr-2 h-6 w-6" />
          Career View
        </h1>
      </header>

      <div className="container mx-auto p-4 max-w-4xl">
        {/* AI Advisor Section */}
        <div className="bg-white rounded-xl shadow-sm mb-6 overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-amber-800 flex items-center">
              <Bot className="mr-2 h-5 w-5 text-purple-600" />
              Career AI Advisor
            </h2>
          </div>

          <div className="bg-purple-50 p-4">
            <div className="flex items-start gap-3">
              <div className="bg-purple-100 rounded-full p-1.5">
                <Bot className="h-4 w-4 text-purple-700" />
              </div>
              <div>
                <p className="font-medium text-sm text-purple-900">Career AI Advisor:</p>
                <p className="text-purple-800">Hi! Ask me anything about resumes, jobs, or internships!</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSend} className="p-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Type your question here..."
                className="w-full p-3 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-full px-4 bg-purple-500 text-white rounded-r-lg flex items-center justify-center"
              >
                <span className="mr-1">Send</span>
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Career Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {careerFeatures.map((feature) => (
            <Link
              key={feature.title}
              href={feature.path}
              className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow active:bg-amber-200"
            >
              <h3 className="text-lg font-semibold text-amber-900 flex items-center mb-2">
                <feature.icon className="mr-2 h-5 w-5 text-amber-700" />
                {feature.title}
              </h3>
              <p className="text-sm text-amber-800">{feature.description}</p>
            </Link>
          ))}
        </div>

        {/* Back Button */}
        <button
          onClick={() => router.push("/")}
          className="mt-6 flex items-center justify-center bg-amber-700 text-white px-6 py-2 rounded-full"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back
        </button>
      </div>
    </div>
  )
}
