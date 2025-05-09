"use client"

import { useState } from "react"
import { BookmarkIcon, Building, Calendar, Filter, MapPin, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function InternshipFinder() {
  const [searchTerm, setSearchTerm] = useState("")
  const [savedJobs, setSavedJobs] = useState<string[]>([])

  const internships = [
    {
      id: "1",
      title: "Software Engineering Intern",
      company: "Google",
      location: "New York, NY",
      type: "Summer Internship",
      posted: "2 days ago",
      deadline: "May 30, 2025",
      tags: ["Software Development", "Computer Science"],
    },
    {
      id: "2",
      title: "Data Science Intern",
      company: "IBM",
      location: "New York, NY",
      type: "Fall Internship",
      posted: "1 week ago",
      deadline: "June 15, 2025",
      tags: ["Data Science", "Machine Learning"],
    },
    {
      id: "3",
      title: "UX Design Intern",
      company: "Adobe",
      location: "Remote",
      type: "Summer Internship",
      posted: "3 days ago",
      deadline: "May 25, 2025",
      tags: ["UX/UI Design", "Creative"],
    },
    {
      id: "4",
      title: "Marketing Intern",
      company: "Spotify",
      location: "New York, NY",
      type: "Summer Internship",
      posted: "5 days ago",
      deadline: "June 5, 2025",
      tags: ["Marketing", "Social Media"],
    },
    {
      id: "5",
      title: "Finance Intern",
      company: "JPMorgan Chase",
      location: "New York, NY",
      type: "Fall Internship",
      posted: "1 day ago",
      deadline: "June 20, 2025",
      tags: ["Finance", "Banking"],
    },
  ]

  const filteredInternships = internships.filter(
    (internship) =>
      internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const toggleSaveJob = (id: string) => {
    if (savedJobs.includes(id)) {
      setSavedJobs(savedJobs.filter((jobId) => jobId !== id))
    } else {
      setSavedJobs([...savedJobs, id])
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
                placeholder="Search by title, company, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-[180px] bg-slate-700 border-slate-600 text-white">
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700 text-white">
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="nyc">New York City</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
                <SelectItem value="brooklyn">Brooklyn</SelectItem>
                <SelectItem value="queens">Queens</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-[180px] bg-slate-700 border-slate-600 text-white">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700 text-white">
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="summer">Summer Internship</SelectItem>
                <SelectItem value="fall">Fall Internship</SelectItem>
                <SelectItem value="spring">Spring Internship</SelectItem>
                <SelectItem value="parttime">Part-time</SelectItem>
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
        {filteredInternships.length > 0 ? (
          filteredInternships.map((internship) => (
            <Card
              key={internship.id}
              className="bg-slate-800/50 border-slate-700 text-white hover:bg-slate-800 transition-colors"
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{internship.title}</CardTitle>
                    <CardDescription className="text-slate-400 flex items-center mt-1">
                      <Building className="h-4 w-4 mr-1" />
                      {internship.company}
                    </CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleSaveJob(internship.id)}
                    className={savedJobs.includes(internship.id) ? "text-blue-400" : "text-slate-400"}
                  >
                    <BookmarkIcon className="h-5 w-5" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center text-sm text-slate-300">
                    <MapPin className="h-4 w-4 mr-2 text-slate-400" />
                    {internship.location}
                  </div>
                  <div className="flex items-center text-sm text-slate-300">
                    <Calendar className="h-4 w-4 mr-2 text-slate-400" />
                    Application Deadline: {internship.deadline}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="text-blue-400 border-blue-400">
                      {internship.type}
                    </Badge>
                    {internship.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-slate-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t border-slate-700 pt-4">
                <div className="text-xs text-slate-400">Posted {internship.posted}</div>
                <Button className="bg-blue-600 hover:bg-blue-700">Apply Now</Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <Card className="bg-slate-800/50 border-slate-700 text-white p-8 text-center">
            <div className="flex flex-col items-center justify-center">
              <Search className="h-12 w-12 text-slate-500 mb-4" />
              <h3 className="text-xl font-medium mb-2">No internships found</h3>
              <p className="text-slate-400">Try adjusting your search terms or filters to find more opportunities.</p>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}
