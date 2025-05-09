"use client"

import type React from "react"

import { useState } from "react"
import { Bot, Send, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function CareerAdvisor() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm your AI Career Advisor. I can help you explore career paths, prepare for interviews, or answer questions about job opportunities. What would you like assistance with today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage = { role: "user", content: input }
    setMessages([...messages, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Based on your interests in technology and problem-solving, you might consider exploring careers in software development, data analysis, or UX design. These fields offer strong growth potential within the CUNY network and beyond.",
        "For internships in your field, I recommend checking the CUNY Internship Program which partners with companies like Google, IBM, and local NYC tech startups. The application deadline for summer internships is typically in March.",
        "To prepare for your upcoming interview, focus on highlighting your coursework in data structures and your team project experience. Practice explaining how you've applied these skills to solve real problems.",
      ]

      const aiMessage = {
        role: "assistant",
        content: responses[Math.floor(Math.random() * responses.length)],
      }

      setMessages((prev) => [...prev, aiMessage])
      setIsLoading(false)
    }, 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      <Card className="bg-white border border-blue-100 text-blue-900 h-[calc(100vh-220px)] flex flex-col shadow-lg rounded-3xl overflow-hidden ios-card">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-xl">
            <Bot className="h-5 w-5 text-blue-500" />
            AI Career Advisor
          </CardTitle>
          <CardDescription className="text-blue-600">Get personalized career guidance and advice</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 overflow-auto ios-scroll">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`flex gap-3 max-w-[85%] ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                      : "bg-blue-50 border border-blue-100 text-blue-900"
                  } p-3.5 rounded-2xl ${message.role === "user" ? "rounded-tr-sm" : "rounded-tl-sm"}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.role === "user" ? "bg-blue-400" : "bg-blue-100"
                    }`}
                  >
                    {message.role === "user" ? (
                      <User className="h-4 w-4 text-white" />
                    ) : (
                      <Bot className="h-4 w-4 text-blue-500" />
                    )}
                  </div>
                  <div className="text-base">{message.content}</div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-blue-50 border border-blue-100 text-blue-900 p-3.5 rounded-2xl rounded-tl-sm flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-blue-500" />
                  </div>
                  <div className="flex space-x-2">
                    <div
                      className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="border-t border-blue-100 pt-4">
          <div className="flex w-full items-center space-x-2">
            <Input
              placeholder="Ask about career paths, internships, or interview tips..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-white border-blue-200 text-blue-900 ios-input"
            />
            <Button
              size="icon"
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-full h-12 w-12 flex items-center justify-center"
            >
              <Send className="h-5 w-5" />
              <span className="sr-only">Send</span>
            </Button>
          </div>
        </CardFooter>
      </Card>

      <Card className="bg-white border border-blue-100 text-blue-900 shadow-lg rounded-3xl ios-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Suggested Career Paths</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 px-3 py-1.5 text-sm rounded-full">
              Software Development
            </Badge>
            <Badge className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 px-3 py-1.5 text-sm rounded-full">
              Data Science
            </Badge>
            <Badge className="bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 px-3 py-1.5 text-sm rounded-full">
              UX Design
            </Badge>
            <Badge className="bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 px-3 py-1.5 text-sm rounded-full">
              Digital Marketing
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
