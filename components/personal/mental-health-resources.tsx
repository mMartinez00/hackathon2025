"use client"

import { useState } from "react"
import { Calendar, Heart, Phone, Clock, ExternalLink, FileText, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export function MentalHealthResources() {
  const [activeTab, setActiveTab] = useState("resources")

  const resources = [
    {
      id: "1",
      title: "Counseling Services",
      description: "Free and confidential counseling services for all CUNY students.",
      category: "service",
      contact: "(212) 555-7890",
      hours: "Monday-Friday, 9:00 AM - 5:00 PM",
      link: "#",
    },
    {
      id: "2",
      title: "Stress Management Workshop",
      description: "Learn effective techniques to manage academic stress and anxiety.",
      category: "workshop",
      date: "May 18, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Health Center, Room 201",
      link: "#",
    },
    {
      id: "3",
      title: "Mindfulness Meditation",
      description: "Weekly guided meditation sessions to improve focus and reduce stress.",
      category: "program",
      schedule: "Every Wednesday, 12:00 PM - 1:00 PM",
      location: "Student Center, Room 305",
      link: "#",
    },
    {
      id: "4",
      title: "Mental Health First Aid",
      description: "Learn how to identify, understand, and respond to signs of mental health challenges.",
      category: "training",
      date: "May 25, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Health Center, Conference Room",
      link: "#",
    },
    {
      id: "5",
      title: "Crisis Hotline",
      description: "24/7 confidential support for students in crisis or emotional distress.",
      category: "service",
      contact: "(800) 555-1212",
      hours: "24/7",
      link: "#",
    },
  ]

  const articles = [
    {
      id: "1",
      title: "Managing Test Anxiety",
      description: "Practical strategies to overcome test anxiety and perform your best on exams.",
      readTime: "5 min read",
      category: "anxiety",
    },
    {
      id: "2",
      title: "Healthy Sleep Habits for Students",
      description: "How to improve your sleep quality for better academic performance and mental health.",
      readTime: "7 min read",
      category: "wellness",
    },
    {
      id: "3",
      title: "Balancing Work, School, and Life",
      description: "Tips for maintaining a healthy balance between your academic, professional, and personal life.",
      readTime: "8 min read",
      category: "stress",
    },
    {
      id: "4",
      title: "Building Resilience in College",
      description: "Develop the skills to bounce back from setbacks and challenges during your academic journey.",
      readTime: "6 min read",
      category: "resilience",
    },
    {
      id: "5",
      title: "Recognizing Depression in College Students",
      description: "Signs, symptoms, and resources for depression among college students.",
      readTime: "10 min read",
      category: "depression",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "service":
        return "bg-emerald-600"
      case "workshop":
        return "bg-blue-600"
      case "program":
        return "bg-purple-600"
      case "training":
        return "bg-amber-600"
      case "anxiety":
        return "bg-blue-600"
      case "wellness":
        return "bg-emerald-600"
      case "stress":
        return "bg-purple-600"
      case "resilience":
        return "bg-amber-600"
      case "depression":
        return "bg-rose-600"
      default:
        return "bg-slate-600"
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="bg-slate-800/50 border-slate-700 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Wellness Check-in</CardTitle>
            <CardDescription className="text-slate-400">Track your mental well-being</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Stress Level</span>
                  <span>Moderate</span>
                </div>
                <Progress value={65} className="h-2 bg-slate-700" indicatorClassName="bg-amber-600" />
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Sleep Quality</span>
                  <span>Good</span>
                </div>
                <Progress value={75} className="h-2 bg-slate-700" indicatorClassName="bg-emerald-600" />
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Mood</span>
                  <span>Positive</span>
                </div>
                <Progress value={80} className="h-2 bg-slate-700" indicatorClassName="bg-emerald-600" />
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Energy Level</span>
                  <span>Moderate</span>
                </div>
                <Progress value={60} className="h-2 bg-slate-700" indicatorClassName="bg-amber-600" />
              </div>
            </div>
            <Button className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700">Complete Daily Check-in</Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Quick Support</CardTitle>
            <CardDescription className="text-slate-400">Immediate resources for support</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="bg-slate-700 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Phone className="h-4 w-4 text-emerald-400" />
                  <div className="font-medium">CUNY Counseling Hotline</div>
                </div>
                <div className="text-sm text-slate-300">(212) 555-7890</div>
                <div className="text-xs text-slate-400 mt-1">Available 24/7</div>
              </div>
              <div className="bg-slate-700 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Phone className="h-4 w-4 text-emerald-400" />
                  <div className="font-medium">Crisis Text Line</div>
                </div>
                <div className="text-sm text-slate-300">Text HOME to 741741</div>
                <div className="text-xs text-slate-400 mt-1">Available 24/7</div>
              </div>
              <div className="bg-slate-700 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="h-4 w-4 text-emerald-400" />
                  <div className="font-medium">Schedule Counseling</div>
                </div>
                <Button className="w-full mt-2 bg-emerald-600 hover:bg-emerald-700 h-8 text-xs">
                  Book Appointment
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Upcoming Events</CardTitle>
            <CardDescription className="text-slate-400">Mental health workshops and sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="bg-slate-700 p-3 rounded-lg">
                <div className="text-sm font-medium">Stress Management Workshop</div>
                <div className="text-xs text-slate-400 flex items-center mt-1">
                  <Calendar className="h-3 w-3 mr-1" />
                  May 18, 2025
                </div>
                <div className="text-xs text-slate-400 flex items-center mt-1">
                  <Clock className="h-3 w-3 mr-1" />
                  2:00 PM - 4:00 PM
                </div>
              </div>
              <div className="bg-slate-700 p-3 rounded-lg">
                <div className="text-sm font-medium">Mindfulness Meditation</div>
                <div className="text-xs text-slate-400 flex items-center mt-1">
                  <Calendar className="h-3 w-3 mr-1" />
                  Every Wednesday
                </div>
                <div className="text-xs text-slate-400 flex items-center mt-1">
                  <Clock className="h-3 w-3 mr-1" />
                  12:00 PM - 1:00 PM
                </div>
              </div>
              <div className="bg-slate-700 p-3 rounded-lg">
                <div className="text-sm font-medium">Mental Health First Aid</div>
                <div className="text-xs text-slate-400 flex items-center mt-1">
                  <Calendar className="h-3 w-3 mr-1" />
                  May 25, 2025
                </div>
                <div className="text-xs text-slate-400 flex items-center mt-1">
                  <Clock className="h-3 w-3 mr-1" />
                  9:00 AM - 4:00 PM
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="bg-slate-800 border border-slate-700 p-1">
          <TabsTrigger
            value="resources"
            className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-slate-300"
          >
            <Heart className="h-4 w-4 mr-2" />
            Support Resources
          </TabsTrigger>
          <TabsTrigger
            value="articles"
            className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-slate-300"
          >
            <FileText className="h-4 w-4 mr-2" />
            Wellness Articles
          </TabsTrigger>
        </TabsList>

        <TabsContent value="resources" className="mt-6">
          <div className="grid grid-cols-1 gap-4">
            {resources.map((resource) => (
              <Card
                key={resource.id}
                className="bg-slate-800/50 border-slate-700 text-white hover:bg-slate-800 transition-colors"
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{resource.title}</CardTitle>
                      <CardDescription className="text-slate-400 mt-1">{resource.description}</CardDescription>
                    </div>
                    <Badge className={getCategoryColor(resource.category)}>{resource.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex flex-col gap-2">
                    {resource.contact && (
                      <div className="flex items-center text-sm text-slate-300">
                        <Phone className="h-4 w-4 mr-2 text-slate-400" />
                        {resource.contact}
                      </div>
                    )}
                    {resource.hours && (
                      <div className="flex items-center text-sm text-slate-300">
                        <Clock className="h-4 w-4 mr-2 text-slate-400" />
                        {resource.hours}
                      </div>
                    )}
                    {resource.date && (
                      <div className="flex items-center text-sm text-slate-300">
                        <Calendar className="h-4 w-4 mr-2 text-slate-400" />
                        {resource.date}
                      </div>
                    )}
                    {resource.time && (
                      <div className="flex items-center text-sm text-slate-300">
                        <Clock className="h-4 w-4 mr-2 text-slate-400" />
                        {resource.time}
                      </div>
                    )}
                    {resource.schedule && (
                      <div className="flex items-center text-sm text-slate-300">
                        <Calendar className="h-4 w-4 mr-2 text-slate-400" />
                        {resource.schedule}
                      </div>
                    )}
                    {resource.location && (
                      <div className="flex items-center text-sm text-slate-300">
                        <MapPin className="h-4 w-4 mr-2 text-slate-400" />
                        {resource.location}
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end border-t border-slate-700 pt-4">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="articles" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {articles.map((article) => (
              <Card
                key={article.id}
                className="bg-slate-800/50 border-slate-700 text-white hover:bg-slate-800 transition-colors"
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{article.title}</CardTitle>
                    <Badge className={getCategoryColor(article.category)}>{article.category}</Badge>
                  </div>
                  <CardDescription className="text-slate-400">{article.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between border-t border-slate-700 pt-4">
                  <div className="text-xs text-slate-400">{article.readTime}</div>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">Read Article</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
