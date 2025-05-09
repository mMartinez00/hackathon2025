"use client"

import { useState } from "react"
import { Calendar, Clock, Filter, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function CourseSchedule() {
  const [selectedDay, setSelectedDay] = useState("all")

  const courses = [
    {
      id: "CS101",
      name: "Introduction to Computer Science",
      instructor: "Dr. Sarah Johnson",
      schedule: "Monday, Wednesday • 10:00 AM - 11:30 AM",
      location: "Science Building, Room 305",
      type: "Lecture",
      days: ["monday", "wednesday"],
    },
    {
      id: "CS201",
      name: "Data Structures and Algorithms",
      instructor: "Prof. Michael Chen",
      schedule: "Tuesday, Thursday • 1:00 PM - 2:30 PM",
      location: "Engineering Building, Room 210",
      type: "Lecture",
      days: ["tuesday", "thursday"],
    },
    {
      id: "CS201L",
      name: "Data Structures Lab",
      instructor: "TA: Alex Wong",
      schedule: "Friday • 10:00 AM - 12:00 PM",
      location: "Computer Lab, Room 110",
      type: "Lab",
      days: ["friday"],
    },
    {
      id: "MATH301",
      name: "Discrete Mathematics",
      instructor: "Dr. Robert Miller",
      schedule: "Monday, Wednesday, Friday • 2:00 PM - 3:00 PM",
      location: "Math Building, Room 405",
      type: "Lecture",
      days: ["monday", "wednesday", "friday"],
    },
    {
      id: "ENG210",
      name: "Technical Writing",
      instructor: "Prof. Emily Davis",
      schedule: "Tuesday, Thursday • 9:00 AM - 10:30 AM",
      location: "Liberal Arts Building, Room 120",
      type: "Lecture",
      days: ["tuesday", "thursday"],
    },
  ]

  const filteredCourses =
    selectedDay === "all" ? courses : courses.filter((course) => course.days.includes(selectedDay))

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-slate-700 text-white">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-purple-400" />
              <h3 className="font-medium">Spring 2025 Schedule</h3>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Select value={selectedDay} onValueChange={setSelectedDay}>
                <SelectTrigger className="w-full md:w-[180px] bg-slate-700 border-slate-600 text-white">
                  <SelectValue placeholder="Filter by day" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 text-white">
                  <SelectItem value="all">All Days</SelectItem>
                  <SelectItem value="monday">Monday</SelectItem>
                  <SelectItem value="tuesday">Tuesday</SelectItem>
                  <SelectItem value="wednesday">Wednesday</SelectItem>
                  <SelectItem value="thursday">Thursday</SelectItem>
                  <SelectItem value="friday">Friday</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="border-slate-600 text-white">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-4">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <Card
              key={course.id}
              className="bg-slate-800/50 border-slate-700 text-white hover:bg-slate-800 transition-colors"
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{course.name}</CardTitle>
                    <CardDescription className="text-slate-400 mt-1">{course.instructor}</CardDescription>
                  </div>
                  <Badge className={course.type === "Lab" ? "bg-emerald-600" : "bg-purple-600"}>{course.type}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center text-sm text-slate-300">
                    <Clock className="h-4 w-4 mr-2 text-slate-400" />
                    {course.schedule}
                  </div>
                  <div className="flex items-center text-sm text-slate-300">
                    <MapPin className="h-4 w-4 mr-2 text-slate-400" />
                    {course.location}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="text-purple-400 border-purple-400">
                      {course.id}
                    </Badge>
                    {course.days.map((day) => (
                      <Badge key={day} variant="secondary" className="bg-slate-700 capitalize">
                        {day}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card className="bg-slate-800/50 border-slate-700 text-white p-8 text-center">
            <div className="flex flex-col items-center justify-center">
              <Calendar className="h-12 w-12 text-slate-500 mb-4" />
              <h3 className="text-xl font-medium mb-2">No classes on this day</h3>
              <p className="text-slate-400">Select a different day to view your scheduled classes.</p>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}
