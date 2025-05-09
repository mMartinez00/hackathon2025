"use client"

import { useRouter } from "next/navigation"
import { Briefcase, GraduationCap, User, Sparkles, Zap, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function DashboardOptions() {
  const router = useRouter()

  const options = [
    {
      title: "Career",
      description: "Explore career opportunities, internships, and build your resume",
      icon: Briefcase,
      color: "from-blue-400 to-indigo-600",
      textColor: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      href: "/career",
      features: ["AI-powered career matching", "Internship finder", "Resume builder"],
      decoration: Zap,
    },
    {
      title: "Academic",
      description: "Track your academic progress, courses, and get AI advisement",
      icon: GraduationCap,
      color: "from-purple-400 to-purple-600",
      textColor: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      href: "/academic",
      features: ["Academic dashboard", "Course registration", "AI advisement"],
      decoration: Sparkles,
    },
    {
      title: "Personal",
      description: "Access personal resources, events, and mental health support",
      icon: User,
      color: "from-pink-400 to-rose-600",
      textColor: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      href: "/personal",
      features: ["Campus events", "Communication center", "Mental health resources"],
      decoration: Star,
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
  }

  return (
    <motion.div className="grid grid-cols-1 gap-6" variants={container} initial="hidden" animate="show">
      {options.map((option, index) => (
        <motion.div key={option.title} variants={item}>
          <Card
            className={`${option.bgColor} border ${option.borderColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group ios-card`}
          >
            <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
            <CardHeader>
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${option.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <option.icon className="h-7 w-7 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold">{option.title}</CardTitle>
              <CardDescription className={`${option.textColor} text-base`}>{option.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-base">
                {option.features.map((feature, i) => (
                  <li key={feature} className="flex items-center">
                    <option.decoration className={`h-5 w-5 mr-3 ${option.textColor}`} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className={`w-full bg-gradient-to-r ${option.color} hover:shadow-lg text-white font-medium py-6 rounded-full transition-all duration-300 text-lg ios-btn`}
                onClick={() => router.push(option.href)}
              >
                Access {option.title}
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
