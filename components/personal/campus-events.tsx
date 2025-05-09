"use client"

import { useState } from "react"
import { Calendar, Filter, MapPin, Clock, Users, BookmarkIcon, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

export function CampusEvents() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [savedEvents, setSavedEvents] = useState<string[]>([])

  const events = [
    {
      id: "1",
      title: "Tech Career Fair",
      description: "Connect with top tech companies and explore internship and job opportunities.",
      date: "May 15, 2025",
      time: "11:00 AM - 3:00 PM",
      location: "Student Center, Grand Ballroom",
      category: "career",
      attendees: 120,
    },
    {
      id: "2",
      title: "Spring Concert",
      description: "Annual spring concert featuring student performers and special guests.",
      date: "May 20, 2025",
      time: "7:00 PM - 10:00 PM",
      location: "Campus Amphitheater",
      category: "entertainment",
      attendees: 350,
    },
    {
      id: "3",
      title: "Wellness Workshop",
      description: "Learn stress management techniques and mindfulness practices for academic success.",
      date: "May 18, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Health Center, Room 201",
      category: "wellness",
      attendees: 45,
    },
    {
      id: "4",
      title: "Hackathon 2025",
      description: "48-hour coding competition with prizes and networking opportunities.",
      date: "May 22-24, 2025",
      time: "Starts at 6:00 PM",
      location: "Engineering Building",
      category: "academic",
      attendees: 200,
    },
    {
      id: "5",
      title: "Cultural Festival",
      description: "Celebrate diversity with food, performances, and activities from around the world.",
      date: "May 25, 2025",
      time: "12:00 PM - 6:00 PM",
      location: "Campus Quad",
      category: "cultural",
      attendees: 500,
    },
  ]

  const filteredEvents = events.filter(
    (event) =>
      (categoryFilter === "all" || event.category === categoryFilter) &&
      (event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const toggleSaveEvent = (id: string) => {
    if (savedEvents.includes(id)) {
      setSavedEvents(savedEvents.filter((eventId) => eventId !== id))
    } else {
      setSavedEvents([...savedEvents, id])
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "career":
        return "bg-blue-600"
      case "entertainment":
        return "bg-purple-600"
      case "wellness":
        return "bg-emerald-600"
      case "academic":
        return "bg-amber-600"
      case "cultural":
        return "bg-rose-600"
      default:
        return "bg-slate-600"
    }
  }

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-slate-700 text-white">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-[180px] bg-slate-700 border-slate-600 text-white">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700 text-white">
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="career">Career</SelectItem>
                <SelectItem value="entertainment">Entertainment</SelectItem>
                <SelectItem value="wellness">Wellness</SelectItem>
                <SelectItem value="academic">Academic</SelectItem>
                <SelectItem value="cultural">Cultural</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="border-slate-600 text-white">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-4">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <Card
              key={event.id}
              className="bg-slate-800/50 border-slate-700 text-white hover:bg-slate-800 transition-colors"
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription className="text-slate-400 mt-1">{event.description}</CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleSaveEvent(event.id)}
                    className={savedEvents.includes(event.id) ? "text-emerald-400" : "text-slate-400"}
                  >
                    <BookmarkIcon className="h-5 w-5" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center text-sm text-slate-300">
                    <Calendar className="h-4 w-4 mr-2 text-slate-400" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-slate-300">
                    <Clock className="h-4 w-4 mr-2 text-slate-400" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-slate-300">
                    <MapPin className="h-4 w-4 mr-2 text-slate-400" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-slate-300">
                    <Users className="h-4 w-4 mr-2 text-slate-400" />
                    {event.attendees} attending
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t border-slate-700 pt-4">
                <Badge className={`${getCategoryColor(event.category)} capitalize`}>{event.category}</Badge>
                <Button className="bg-emerald-600 hover:bg-emerald-700">RSVP</Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <Card className="bg-slate-800/50 border-slate-700 text-white p-8 text-center">
            <div className="flex flex-col items-center justify-center">
              <Calendar className="h-12 w-12 text-slate-500 mb-4" />
              <h3 className="text-xl font-medium mb-2">No events found</h3>
              <p className="text-slate-400">Try adjusting your search terms or filters to find more events.</p>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}
