"use client"

import { ClipboardList, Clock, MapPin, User } from "lucide-react"
import { PageHeader } from "@/components/ui/page-header"

export function ClassSchedule() {
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

  const classes = [
    {
      id: "CS101",
      name: "Introduction to Computer Science",
      instructor: "Dr. Sarah Johnson",
      time: "10:00 AM - 11:30 AM",
      location: "Science Building, Room 305",
      days: ["Monday", "Wednesday"],
      color: "bg-indigo-100 border-indigo-300",
    },
    {
      id: "CS201",
      name: "Data Structures and Algorithms",
      instructor: "Prof. Michael Chen",
      time: "1:00 PM - 2:30 PM",
      location: "Engineering Building, Room 210",
      days: ["Tuesday", "Thursday"],
      color: "bg-purple-100 border-purple-300",
    },
    {
      id: "CS201L",
      name: "Data Structures Lab",
      instructor: "TA: Alex Wong",
      time: "10:00 AM - 12:00 PM",
      location: "Computer Lab, Room 110",
      days: ["Friday"],
      color: "bg-green-100 border-green-300",
    },
    {
      id: "MATH301",
      name: "Discrete Mathematics",
      instructor: "Dr. Robert Miller",
      time: "2:00 PM - 3:00 PM",
      location: "Math Building, Room 405",
      days: ["Monday", "Wednesday", "Friday"],
      color: "bg-blue-100 border-blue-300",
    },
    {
      id: "ENG210",
      name: "Technical Writing",
      instructor: "Prof. Emily Davis",
      time: "9:00 AM - 10:30 AM",
      location: "Liberal Arts Building, Room 120",
      days: ["Tuesday", "Thursday"],
      color: "bg-pink-100 border-pink-300",
    },
  ]

  const timeSlots = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ]

  const getClassesForDay = (day: string) => {
    return classes.filter((cls) => cls.days.includes(day))
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <PageHeader
        title="My Schedule"
        icon={<ClipboardList className="h-5 w-5" />}
        backUrl="/academic"
        color="text-indigo-900"
      />

      <div className="container mx-auto p-4 max-w-6xl">
        <div className="bg-white rounded-xl shadow-sm mb-6 overflow-hidden">
          <div className="p-4 border-b border-gray-100 bg-indigo-100">
            <h2 className="text-lg font-semibold text-indigo-900">Spring 2025 Schedule</h2>
            <p className="text-sm text-indigo-800">Your weekly class schedule with room and instructor details.</p>
          </div>

          {/* Weekly Schedule View */}
          <div className="p-4 overflow-x-auto">
            <div className="min-w-[800px]">
              <div className="grid grid-cols-6 gap-2">
                <div className="sticky left-0 bg-white"></div>
                {weekdays.map((day) => (
                  <div key={day} className="text-center font-semibold py-2 bg-indigo-50 rounded-t-lg">
                    {day}
                  </div>
                ))}
              </div>

              {timeSlots.map((time, timeIndex) => (
                <div key={time} className="grid grid-cols-6 gap-2">
                  <div className="sticky left-0 bg-white text-right pr-2 py-2 text-sm font-medium text-gray-700">
                    {time}
                  </div>
                  {weekdays.map((day) => {
                    const dayClasses = getClassesForDay(day)
                    const classesAtTime = dayClasses.filter((cls) => {
                      const startTime = cls.time.split(" - ")[0]
                      return startTime === time
                    })

                    return (
                      <div key={`${day}-${time}`} className="border border-gray-100 min-h-[80px] relative">
                        {classesAtTime.map((cls) => (
                          <div
                            key={cls.id}
                            className={`absolute inset-0 m-1 p-2 rounded-md ${cls.color} border text-xs overflow-hidden`}
                          >
                            <div className="font-semibold">{cls.name}</div>
                            <div className="mt-1 flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {cls.time}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-3 w-3 mr-1" />
                              {cls.location}
                            </div>
                          </div>
                        ))}
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* List View */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-100 bg-indigo-100">
            <h2 className="text-lg font-semibold text-indigo-900">Course List</h2>
          </div>

          <div className="divide-y divide-gray-100">
            {classes.map((cls) => (
              <div key={cls.id} className="p-4 hover:bg-gray-50">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-indigo-900">{cls.name}</h3>
                    <div className="text-sm text-gray-500">{cls.id}</div>
                  </div>
                  <div className="text-sm bg-indigo-100 px-2 py-1 rounded-md text-indigo-800">
                    {cls.days.join(", ")}
                  </div>
                </div>
                <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                  <div className="flex items-center text-gray-700">
                    <User className="h-4 w-4 mr-1 text-indigo-700" />
                    {cls.instructor}
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="h-4 w-4 mr-1 text-indigo-700" />
                    {cls.time}
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="h-4 w-4 mr-1 text-indigo-700" />
                    {cls.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
