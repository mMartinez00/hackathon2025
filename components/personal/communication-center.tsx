"use client"

import { useState } from "react"
import { AtSign, Bell, MessageSquare, Phone, Send, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function CommunicationCenter() {
  const [activeTab, setActiveTab] = useState("messages")
  const [messageInput, setMessageInput] = useState("")

  const contacts = [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      role: "Academic Advisor",
      department: "Computer Science",
      email: "s.johnson@cuny.edu",
      phone: "(212) 555-1234",
      avatar: "SJ",
    },
    {
      id: "2",
      name: "Prof. Michael Chen",
      role: "Professor",
      department: "Computer Science",
      email: "m.chen@cuny.edu",
      phone: "(212) 555-2345",
      avatar: "MC",
    },
    {
      id: "3",
      name: "Financial Aid Office",
      role: "Department",
      department: "Student Services",
      email: "finaid@cuny.edu",
      phone: "(212) 555-3456",
      avatar: "FA",
    },
    {
      id: "4",
      name: "Career Services",
      role: "Department",
      department: "Student Services",
      email: "careers@cuny.edu",
      phone: "(212) 555-4567",
      avatar: "CS",
    },
    {
      id: "5",
      name: "Alex Wong",
      role: "Teaching Assistant",
      department: "Computer Science",
      email: "a.wong@cuny.edu",
      phone: "(212) 555-5678",
      avatar: "AW",
    },
  ]

  const messages = [
    {
      id: "1",
      sender: "Dr. Sarah Johnson",
      content:
        "Hi John, I wanted to follow up on our meeting about your course selection for next semester. Let me know if you have any questions!",
      time: "2:30 PM",
      date: "Today",
      unread: true,
      avatar: "SJ",
    },
    {
      id: "2",
      sender: "Financial Aid Office",
      content: "Your scholarship application has been received. We'll notify you of the decision within 2 weeks.",
      time: "11:45 AM",
      date: "Today",
      unread: true,
      avatar: "FA",
    },
    {
      id: "3",
      sender: "Prof. Michael Chen",
      content:
        "The deadline for the final project has been extended to May 20th. Please submit your work through the course portal.",
      time: "9:15 AM",
      date: "Today",
      unread: false,
      avatar: "MC",
    },
    {
      id: "4",
      sender: "Career Services",
      content: "Don't forget about the Tech Career Fair on May 15th! Make sure to bring copies of your resume.",
      time: "4:50 PM",
      date: "Yesterday",
      unread: false,
      avatar: "CS",
    },
    {
      id: "5",
      sender: "Alex Wong",
      content:
        "I've reviewed your lab assignment. Great work! I left some comments for you to consider for your final submission.",
      time: "2:20 PM",
      date: "Yesterday",
      unread: false,
      avatar: "AW",
    },
  ]

  const notifications = [
    {
      id: "1",
      title: "Course Registration Open",
      content: "Fall 2025 course registration is now open for seniors.",
      time: "1 hour ago",
      category: "academic",
    },
    {
      id: "2",
      title: "Scholarship Deadline",
      content: "The application deadline for the Merit Scholarship is May 15th.",
      time: "3 hours ago",
      category: "financial",
    },
    {
      id: "3",
      title: "New Message",
      content: "You have a new message from Dr. Sarah Johnson.",
      time: "5 hours ago",
      category: "message",
    },
    {
      id: "4",
      title: "Event Reminder",
      content: "Tech Career Fair is happening tomorrow at the Student Center.",
      time: "Yesterday",
      category: "event",
    },
    {
      id: "5",
      title: "Grade Posted",
      content: "A new grade has been posted for CS201: Data Structures.",
      time: "2 days ago",
      category: "academic",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "academic":
        return "bg-purple-600"
      case "financial":
        return "bg-emerald-600"
      case "message":
        return "bg-blue-600"
      case "event":
        return "bg-amber-600"
      default:
        return "bg-slate-600"
    }
  }

  const handleSendMessage = () => {
    if (!messageInput.trim()) return
    // In a real app, this would send the message
    setMessageInput("")
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="h-[600px] flex flex-col">
          <TabsList className="bg-slate-800 border border-slate-700 p-1">
            <TabsTrigger
              value="messages"
              className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-slate-300"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Messages
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-slate-300"
            >
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger
              value="contacts"
              className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-slate-300"
            >
              <User className="h-4 w-4 mr-2" />
              Contacts
            </TabsTrigger>
          </TabsList>

          <TabsContent value="messages" className="flex-1 mt-6 overflow-hidden flex flex-col">
            <Card className="bg-slate-800/50 border-slate-700 text-white flex-1 flex flex-col">
              <CardHeader>
                <CardTitle>Messages</CardTitle>
                <CardDescription className="text-slate-400">
                  Stay connected with professors, advisors, and departments
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 overflow-auto">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 p-3 rounded-lg ${
                        message.unread ? "bg-slate-700/70" : "bg-slate-800/30"
                      } hover:bg-slate-700 transition-colors cursor-pointer`}
                    >
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-emerald-600">{message.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center mb-1">
                          <div className="font-medium truncate">{message.sender}</div>
                          <div className="text-xs text-slate-400">{message.time}</div>
                        </div>
                        <div className="text-sm text-slate-300 truncate">{message.content}</div>
                        <div className="text-xs text-slate-400 mt-1">{message.date}</div>
                      </div>
                      {message.unread && <div className="w-2 h-2 rounded-full bg-emerald-500 self-center"></div>}
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t border-slate-700 pt-4">
                <div className="flex w-full items-center space-x-2">
                  <Input
                    placeholder="Type a message..."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                  <Button
                    size="icon"
                    onClick={handleSendMessage}
                    disabled={!messageInput.trim()}
                    className="bg-emerald-600 hover:bg-emerald-700"
                  >
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Send</span>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="flex-1 mt-6 overflow-hidden">
            <Card className="bg-slate-800/50 border-slate-700 text-white h-full flex flex-col">
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription className="text-slate-400">
                  Stay updated with important announcements and alerts
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 overflow-auto">
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="flex gap-3 p-3 rounded-lg bg-slate-800/30 hover:bg-slate-700 transition-colors cursor-pointer"
                    >
                      <div className={`w-2 self-stretch rounded-full ${getCategoryColor(notification.category)}`}></div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <div className="font-medium">{notification.title}</div>
                          <div className="text-xs text-slate-400">{notification.time}</div>
                        </div>
                        <div className="text-sm text-slate-300">{notification.content}</div>
                        <div className="mt-2">
                          <Badge className={`${getCategoryColor(notification.category)} capitalize`}>
                            {notification.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contacts" className="flex-1 mt-6 overflow-hidden">
            <Card className="bg-slate-800/50 border-slate-700 text-white h-full flex flex-col">
              <CardHeader>
                <CardTitle>Contacts</CardTitle>
                <CardDescription className="text-slate-400">
                  Connect with faculty, staff, and university departments
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 overflow-auto">
                <div className="space-y-4">
                  {contacts.map((contact) => (
                    <div
                      key={contact.id}
                      className="flex gap-3 p-3 rounded-lg bg-slate-800/30 hover:bg-slate-700 transition-colors cursor-pointer"
                    >
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-emerald-600">{contact.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-medium">{contact.name}</div>
                        <div className="text-sm text-slate-300">
                          {contact.role} • {contact.department}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:gap-4 mt-2 text-sm">
                          <div className="flex items-center text-slate-400">
                            <AtSign className="h-3 w-3 mr-1" />
                            {contact.email}
                          </div>
                          <div className="flex items-center text-slate-400">
                            <Phone className="h-3 w-3 mr-1" />
                            {contact.phone}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div>
        <Card className="bg-slate-800/50 border-slate-700 text-white h-[600px] flex flex-col">
          <CardHeader>
            <CardTitle>Communication Stats</CardTitle>
            <CardDescription className="text-slate-400">Your messaging activity</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Message Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Unread Messages</span>
                    <Badge className="bg-emerald-600">2</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Total Messages</span>
                    <span className="text-sm font-medium">24</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Response Rate</span>
                    <span className="text-sm font-medium">92%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Avg. Response Time</span>
                    <span className="text-sm font-medium">4.2 hours</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Recent Contacts</h3>
                <div className="space-y-3">
                  {contacts.slice(0, 3).map((contact) => (
                    <div key={contact.id} className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-emerald-600 text-xs">{contact.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="text-sm">{contact.name}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Communication Tips</h3>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• Professors typically respond within 48 hours</li>
                  <li>• Include your student ID in emails to Financial Aid</li>
                  <li>• Set up office hour appointments with professors</li>
                  <li>• Check your messages daily for important updates</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
