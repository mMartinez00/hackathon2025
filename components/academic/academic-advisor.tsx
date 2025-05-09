"use client"

import type React from "react"

import { useState } from "react"
import { Bot, Send, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function AcademicAdvisor() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm your AI Academic Advisor. I can help you plan your courses, understand degree requirements, or answer questions about academic policies. What would you like assistance with today?",
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
        "Based on your current progress, I recommend taking CS301 (Database Systems) and CS310 (Computer Networks) next semester to stay on track with your degree requirements. These courses build on your current knowledge and are prerequisites for advanced courses.",
        "To graduate on time, you need to complete 30 more credits, including 4 core Computer Science courses, 2 math electives, and 4 general education requirements. At your current pace, you're on track to graduate by Spring 2026.",
        "For your interest in AI and machine learning, I recommend taking MATH302 (Linear Algebra) as your next math course. It provides essential mathematical foundations for machine learning algorithms and is a prerequisite for the advanced AI courses.",
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <Card className="bg-slate-800/50 border-slate-700 text-white h-[600px] flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-purple-400" />
              AI Academic Advisor
            </CardTitle>
            <CardDescription className="text-slate-400">
              Get personalized academic guidance and course planning
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`flex gap-3 max-w-[80%] ${
                      message.role === "user" ? "bg-purple-600 text-white" : "bg-slate-700 text-slate-100"
                    } p-3 rounded-lg`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.role === "user" ? "bg-purple-500" : "bg-slate-600"
                      }`}
                    >
                      {message.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                    </div>
                    <div className="text-sm">{message.content}</div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-700 text-slate-100 p-3 rounded-lg flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-600 flex items-center justify-center">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div className="flex space-x-1">
                      <div
                        className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="border-t border-slate-700 pt-4">
            <div className="flex w-full items-center space-x-2">
              <Input
                placeholder="Ask about course planning, degree requirements, or academic policies..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-slate-700 border-slate-600 text-white"
              />
              <Button
                size="icon"
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="bg-purple-600 hover:bg-purple-700"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>

      <div>
        <Card className="bg-slate-800/50 border-slate-700 text-white h-[600px] flex flex-col">
          <CardHeader>
            <CardTitle>Academic Resources</CardTitle>
            <CardDescription className="text-slate-400">Tools to help you succeed</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Degree Requirements</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Core Courses</span>
                    <Badge className="bg-purple-600">16/24 Credits</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Math Requirements</span>
                    <Badge className="bg-purple-600">9/12 Credits</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">General Education</span>
                    <Badge className="bg-purple-600">30/36 Credits</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Electives</span>
                    <Badge className="bg-purple-600">12/18 Credits</Badge>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Recommended Courses</h3>
                <div className="space-y-3">
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <div className="text-sm font-medium">CS301: Database Systems</div>
                    <div className="text-xs text-slate-400">Core Requirement • 3 Credits</div>
                  </div>
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <div className="text-sm font-medium">CS310: Computer Networks</div>
                    <div className="text-xs text-slate-400">Core Requirement • 3 Credits</div>
                  </div>
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <div className="text-sm font-medium">MATH302: Linear Algebra</div>
                    <div className="text-xs text-slate-400">Math Elective • 3 Credits</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Academic Calendar</h3>
                <div className="space-y-3">
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <div className="text-sm font-medium">Final Exams</div>
                    <div className="text-xs text-slate-400">May 15-20, 2025</div>
                  </div>
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <div className="text-sm font-medium">Summer Registration</div>
                    <div className="text-xs text-slate-400">May 20, 2025</div>
                  </div>
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <div className="text-sm font-medium">Fall Registration</div>
                    <div className="text-xs text-slate-400">June 5, 2025</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
