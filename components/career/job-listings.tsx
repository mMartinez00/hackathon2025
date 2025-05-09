"use client"

import { useState } from "react"
import { Sparkles, Search, MapPin, Calendar, Briefcase, BookmarkIcon, Filter } from "lucide-react"
import { PageHeader } from "@/components/ui/page-header"

export function JobListings() {
  const [searchTerm, setSearchTerm] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [locationFilter, setLocationFilter] = useState("all")
  const [savedJobs, setSavedJobs] = useState<string[]>([])

  const jobs = [
    {
      id: "1",
      title: "Software Engineering Intern",
      company: "Google",
      location: "New York, NY",
      type: "Internship",
      deadline: "May 30, 2025",
      posted: "2 days ago",
      description:
        "Join our team to work on cutting-edge technology projects. You'll collaborate with experienced engineers to develop and maintain Google products used by millions of people.",
      requirements: [
        "Currently pursuing a BS/MS in Computer Science or related field",
        "Experience with one or more programming languages (Java, Python, C++)",
        "Strong problem-solving skills",
        "Excellent communication skills",
      ],
      tags: ["Software Development", "Java", "Python", "Algorithms"],
    },
    {
      id: "2",
      title: "Data Science Intern",
      company: "IBM",
      location: "New York, NY",
      type: "Internship",
      deadline: "June 15, 2025",
      posted: "1 week ago",
      description:
        "Work with our data science team to analyze large datasets and develop machine learning models. You'll gain hands-on experience with real-world data problems.",
      requirements: [
        "Currently pursuing a degree in Computer Science, Statistics, or related field",
        "Experience with Python, R, or similar languages",
        "Knowledge of machine learning concepts",
        "Strong analytical skills",
      ],
      tags: ["Data Science", "Machine Learning", "Python", "Statistics"],
    },
    {
      id: "3",
      title: "UX Design Intern",
      company: "Adobe",
      location: "Remote",
      type: "Internship",
      deadline: "May 25, 2025",
      posted: "3 days ago",
      description:
        "Join our design team to create intuitive and engaging user experiences. You'll work on real projects and contribute to the design of Adobe products.",
      requirements: [
        "Currently pursuing a degree in Design, HCI, or related field",
        "Portfolio demonstrating UX/UI design skills",
        "Experience with design tools (Figma, Adobe XD)",
        "Understanding of user-centered design principles",
      ],
      tags: ["UX/UI Design", "Figma", "User Research", "Prototyping"],
    },
    {
      id: "4",
      title: "Junior Web Developer",
      company: "Spotify",
      location: "New York, NY",
      type: "Full-time",
      deadline: "June 5, 2025",
      posted: "5 days ago",
      description:
        "Join our web development team to build and maintain Spotify's web applications. You'll work with modern web technologies to deliver exceptional user experiences.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "Experience with JavaScript, HTML, CSS",
        "Knowledge of modern web frameworks (React, Angular, Vue)",
        "Understanding of responsive design principles",
      ],
      tags: ["Web Development", "JavaScript", "React", "HTML/CSS"],
    },
    {
      id: "5",
      title: "Finance Analyst",
      company: "JPMorgan Chase",
      location: "New York, NY",
      type: "Full-time",
      deadline: "June 20, 2025",
      posted: "1 day ago",
      description:
        "Join our finance team to analyze financial data and provide insights to support business decisions. You'll work with cross-functional teams to drive financial performance.",
      requirements: [
        "Bachelor's degree in Finance, Accounting, or related field",
        "Strong analytical and problem-solving skills",
        "Proficiency in Excel and financial modeling",
        "Excellent communication skills",
      ],
      tags: ["Finance", "Analysis", "Excel", "Banking"],
    },
  ]

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesType = typeFilter === "all" || job.type === typeFilter
    const matchesLocation = locationFilter === "all" || job.location.includes(locationFilter)

    return matchesSearch && matchesType && matchesLocation
  })

  const toggleSaveJob = (id: string) => {
    if (savedJobs.includes(id)) {
      setSavedJobs(savedJobs.filter((jobId) => jobId !== id))
    } else {
      setSavedJobs([...savedJobs, id])
    }
  }

  return (
    <div className="min-h-screen bg-amber-50 pb-20">
      <PageHeader
        title="Job & Internship Listings"
        icon={<Sparkles className="h-5 w-5" />}
        backUrl="/career"
        color="text-amber-900"
      />

      <div className="container mx-auto p-4 max-w-4xl">
        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm mb-6 overflow-hidden">
          <div className="p-4 border-b border-gray-100 bg-amber-100">
            <h2 className="text-lg font-semibold text-amber-900">Find Your Perfect Opportunity</h2>
          </div>

          <div className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by title, company, or skills..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <select
                className="p-2 border border-gray-300 rounded-lg"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="Internship">Internship</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
              </select>

              <select
                className="p-2 border border-gray-300 rounded-lg"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              >
                <option value="all">All Locations</option>
                <option value="New York, NY">New York, NY</option>
                <option value="Remote">Remote</option>
              </select>

              <button className="flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-lg">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </button>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                      <p className="text-gray-600">{job.company}</p>
                    </div>
                    <button
                      onClick={() => toggleSaveJob(job.id)}
                      className={`p-2 rounded-full ${savedJobs.includes(job.id) ? "text-amber-500" : "text-gray-400"}`}
                    >
                      <BookmarkIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center text-gray-700">
                      <MapPin className="h-4 w-4 mr-2 text-amber-700" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Briefcase className="h-4 w-4 mr-2 text-amber-700" />
                      {job.type}
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Calendar className="h-4 w-4 mr-2 text-amber-700" />
                      Deadline: {job.deadline}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{job.description}</p>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-sm text-gray-600">Posted {job.posted}</span>
                  <div className="space-x-2">
                    <button className="px-4 py-2 bg-white border border-amber-500 text-amber-500 rounded-lg hover:bg-amber-50">
                      Learn More
                    </button>
                    <button className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-600">Try adjusting your search filters to find more opportunities.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
