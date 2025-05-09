"use client"

import { FileSpreadsheet, ChevronDown, ChevronUp } from "lucide-react"
import { PageHeader } from "@/components/ui/page-header"
import { useState } from "react"

export function GradesView() {
  const [expandedSemester, setExpandedSemester] = useState<string | null>("Spring 2025")

  const toggleSemester = (semester: string) => {
    if (expandedSemester === semester) {
      setExpandedSemester(null)
    } else {
      setExpandedSemester(semester)
    }
  }

  const semesters = [
    {
      name: "Spring 2025",
      gpa: 3.7,
      credits: 15,
      courses: [
        { code: "CS230", name: "Database Systems", credits: 3, grade: "A-", status: "In Progress" },
        { code: "MATH301", name: "Discrete Mathematics", credits: 3, grade: "B+", status: "In Progress" },
        { code: "CS240", name: "Web Development", credits: 3, grade: "A", status: "In Progress" },
        { code: "ENG210", name: "Technical Writing", credits: 3, grade: "A-", status: "In Progress" },
        { code: "PHYS201", name: "Physics for Computer Science", credits: 3, grade: "B", status: "In Progress" },
      ],
    },
    {
      name: "Fall 2024",
      gpa: 3.5,
      credits: 15,
      courses: [
        { code: "CS220", name: "Operating Systems", credits: 3, grade: "B+", status: "Completed" },
        { code: "CS210", name: "Computer Architecture", credits: 3, grade: "A-", status: "Completed" },
        { code: "MATH201", name: "Linear Algebra", credits: 3, grade: "A", status: "Completed" },
        { code: "ECON101", name: "Principles of Economics", credits: 3, grade: "B", status: "Completed" },
        { code: "ARTS101", name: "Introduction to Art", credits: 3, grade: "A-", status: "Completed" },
      ],
    },
    {
      name: "Spring 2024",
      gpa: 3.8,
      credits: 15,
      courses: [
        { code: "CS201", name: "Data Structures and Algorithms", credits: 3, grade: "A", status: "Completed" },
        { code: "MATH102", name: "Calculus II", credits: 3, grade: "A-", status: "Completed" },
        { code: "PHYS101", name: "Introduction to Physics", credits: 3, grade: "B+", status: "Completed" },
        { code: "ENG102", name: "Composition II", credits: 3, grade: "A", status: "Completed" },
        { code: "PSYC101", name: "Introduction to Psychology", credits: 3, grade: "A-", status: "Completed" },
      ],
    },
    {
      name: "Fall 2023",
      gpa: 3.4,
      credits: 15,
      courses: [
        { code: "CS101", name: "Introduction to Computer Science", credits: 3, grade: "A-", status: "Completed" },
        { code: "MATH101", name: "Calculus I", credits: 3, grade: "B+", status: "Completed" },
        { code: "ENG101", name: "Composition I", credits: 3, grade: "A", status: "Completed" },
        { code: "HIST101", name: "World History", credits: 3, grade: "B", status: "Completed" },
        { code: "COMM101", name: "Public Speaking", credits: 3, grade: "B+", status: "Completed" },
      ],
    },
  ]

  const getGradeColor = (grade: string) => {
    if (grade.startsWith("A")) return "text-green-600"
    if (grade.startsWith("B")) return "text-blue-600"
    if (grade.startsWith("C")) return "text-yellow-600"
    if (grade.startsWith("D")) return "text-orange-600"
    if (grade.startsWith("F")) return "text-red-600"
    return "text-gray-600"
  }

  const calculateCumulativeGPA = () => {
    let totalPoints = 0
    let totalCredits = 0

    semesters.forEach((semester) => {
      // Skip current semester for cumulative GPA
      if (semester.name !== "Spring 2025") {
        totalPoints += semester.gpa * semester.credits
        totalCredits += semester.credits
      }
    })

    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00"
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <PageHeader
        title="Grades"
        icon={<FileSpreadsheet className="h-5 w-5" />}
        backUrl="/academic"
        color="text-indigo-900"
      />

      <div className="container mx-auto p-4 max-w-4xl">
        {/* GPA Summary */}
        <div className="bg-white rounded-xl shadow-sm mb-6 overflow-hidden">
          <div className="p-4 border-b border-gray-100 bg-indigo-100">
            <h2 className="text-lg font-semibold text-indigo-900">GPA Summary</h2>
          </div>

          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-indigo-50 rounded-lg p-4">
                <h3 className="text-sm font-medium text-indigo-800 mb-1">Current Semester GPA</h3>
                <p className="text-3xl font-bold text-indigo-900">{semesters[0].gpa.toFixed(2)}</p>
                <p className="text-xs text-indigo-700 mt-1">Spring 2025</p>
              </div>
              <div className="bg-indigo-50 rounded-lg p-4">
                <h3 className="text-sm font-medium text-indigo-800 mb-1">Cumulative GPA</h3>
                <p className="text-3xl font-bold text-indigo-900">{calculateCumulativeGPA()}</p>
                <p className="text-xs text-indigo-700 mt-1">All completed semesters</p>
              </div>
              <div className="bg-indigo-50 rounded-lg p-4">
                <h3 className="text-sm font-medium text-indigo-800 mb-1">Total Credits Earned</h3>
                <p className="text-3xl font-bold text-indigo-900">
                  {semesters.reduce((total, semester) => {
                    // Skip current semester for earned credits
                    if (semester.name !== "Spring 2025") {
                      return total + semester.credits
                    }
                    return total
                  }, 0)}
                </p>
                <p className="text-xs text-indigo-700 mt-1">Out of 120 required</p>
              </div>
            </div>
          </div>
        </div>

        {/* Semester Grades */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-100 bg-indigo-100">
            <h2 className="text-lg font-semibold text-indigo-900">Semester Grades</h2>
          </div>

          <div className="divide-y divide-gray-100">
            {semesters.map((semester) => (
              <div key={semester.name}>
                <button
                  className="w-full p-4 flex justify-between items-center hover:bg-gray-50"
                  onClick={() => toggleSemester(semester.name)}
                >
                  <div>
                    <h3 className="font-medium text-gray-900">{semester.name}</h3>
                    <p className="text-sm text-gray-600">{semester.credits} Credits</p>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-4 text-right">
                      <span className="font-medium text-indigo-900">GPA: {semester.gpa.toFixed(2)}</span>
                    </div>
                    {expandedSemester === semester.name ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </button>

                {expandedSemester === semester.name && (
                  <div className="p-4 bg-gray-50">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Course
                          </th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Title
                          </th>
                          <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Credits
                          </th>
                          <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Grade
                          </th>
                          <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {semester.courses.map((course) => (
                          <tr key={course.code} className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm font-medium text-gray-900">{course.code}</td>
                            <td className="px-4 py-3 text-sm text-gray-700">{course.name}</td>
                            <td className="px-4 py-3 text-sm text-gray-700 text-center">{course.credits}</td>
                            <td className="px-4 py-3 text-sm font-medium text-center">
                              <span className={`${getGradeColor(course.grade)}`}>{course.grade}</span>
                            </td>
                            <td className="px-4 py-3 text-sm text-center">
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  course.status === "Completed"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-yellow-100 text-yellow-800"
                                }`}
                              >
                                {course.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
