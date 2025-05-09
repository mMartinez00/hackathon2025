"use client"

import { GraduationCap, CheckCircle, AlertCircle } from "lucide-react"
import { PageHeader } from "@/components/ui/page-header"

export function DegreeProgress() {
  const degreeInfo = {
    major: "Computer Science",
    concentration: "Software Engineering",
    totalCredits: 120,
    completedCredits: 68,
    gpa: 3.7,
    expectedGraduation: "May 2026",
  }

  const requirementCategories = [
    {
      name: "Core Requirements",
      completed: 24,
      total: 36,
      percentage: 67,
      courses: [
        { code: "CS101", name: "Introduction to Computer Science", credits: 3, status: "completed" },
        { code: "CS201", name: "Data Structures and Algorithms", credits: 3, status: "completed" },
        { code: "CS210", name: "Computer Architecture", credits: 3, status: "completed" },
        { code: "CS220", name: "Operating Systems", credits: 3, status: "completed" },
        { code: "CS230", name: "Database Systems", credits: 3, status: "in-progress" },
        { code: "CS310", name: "Computer Networks", credits: 3, status: "planned" },
        { code: "CS320", name: "Software Engineering", credits: 3, status: "planned" },
        { code: "CS330", name: "Artificial Intelligence", credits: 3, status: "planned" },
        { code: "CS340", name: "Computer Graphics", credits: 3, status: "planned" },
        { code: "CS350", name: "Theory of Computation", credits: 3, status: "planned" },
        { code: "CS360", name: "Programming Languages", credits: 3, status: "planned" },
        { code: "CS400", name: "Senior Project", credits: 3, status: "planned" },
      ],
    },
    {
      name: "Math Requirements",
      completed: 9,
      total: 12,
      percentage: 75,
      courses: [
        { code: "MATH101", name: "Calculus I", credits: 3, status: "completed" },
        { code: "MATH102", name: "Calculus II", credits: 3, status: "completed" },
        { code: "MATH201", name: "Linear Algebra", credits: 3, status: "completed" },
        { code: "MATH301", name: "Discrete Mathematics", credits: 3, status: "in-progress" },
      ],
    },
    {
      name: "General Education",
      completed: 30,
      total: 36,
      percentage: 83,
      courses: [
        { code: "ENG101", name: "Composition I", credits: 3, status: "completed" },
        { code: "ENG102", name: "Composition II", credits: 3, status: "completed" },
        { code: "HIST101", name: "World History", credits: 3, status: "completed" },
        { code: "PHIL101", name: "Introduction to Philosophy", credits: 3, status: "completed" },
        { code: "PSYC101", name: "Introduction to Psychology", credits: 3, status: "completed" },
        { code: "ECON101", name: "Principles of Economics", credits: 3, status: "completed" },
        { code: "ARTS101", name: "Introduction to Art", credits: 3, status: "completed" },
        { code: "COMM101", name: "Public Speaking", credits: 3, status: "completed" },
        { code: "BIOL101", name: "Introduction to Biology", credits: 3, status: "completed" },
        { code: "PHYS101", name: "Introduction to Physics", credits: 3, status: "completed" },
        { code: "ENG210", name: "Technical Writing", credits: 3, status: "in-progress" },
        { code: "SOC101", name: "Introduction to Sociology", credits: 3, status: "planned" },
      ],
    },
    {
      name: "Electives",
      completed: 5,
      total: 12,
      percentage: 42,
      courses: [
        { code: "CS401", name: "Machine Learning", credits: 3, status: "completed" },
        { code: "CS402", name: "Web Development", credits: 2, status: "completed" },
        { code: "CS403", name: "Mobile App Development", credits: 3, status: "planned" },
        { code: "CS404", name: "Cloud Computing", credits: 2, status: "planned" },
        { code: "CS405", name: "Cybersecurity", credits: 2, status: "planned" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <PageHeader
        title="Degree Progress"
        icon={<GraduationCap className="h-5 w-5" />}
        backUrl="/academic"
        color="text-indigo-900"
      />

      <div className="container mx-auto p-4 max-w-4xl">
        {/* Degree Summary */}
        <div className="bg-white rounded-xl shadow-sm mb-6 overflow-hidden">
          <div className="p-4 border-b border-gray-100 bg-indigo-100">
            <h2 className="text-lg font-semibold text-indigo-900">Degree Summary</h2>
          </div>

          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Major</h3>
                <p className="text-lg font-semibold text-indigo-900">{degreeInfo.major}</p>
                <p className="text-sm text-gray-700">Concentration: {degreeInfo.concentration}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Credits</h3>
                <p className="text-lg font-semibold text-indigo-900">
                  {degreeInfo.completedCredits} / {degreeInfo.totalCredits}
                </p>
                <p className="text-sm text-gray-700">
                  {Math.round((degreeInfo.completedCredits / degreeInfo.totalCredits) * 100)}% Complete
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Expected Graduation</h3>
                <p className="text-lg font-semibold text-indigo-900">{degreeInfo.expectedGraduation}</p>
                <p className="text-sm text-gray-700">Current GPA: {degreeInfo.gpa}</p>
              </div>
            </div>

            {/* Overall Progress Bar */}
            <div className="mt-6">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Overall Completion</span>
                <span className="text-sm font-medium text-gray-700">
                  {Math.round((degreeInfo.completedCredits / degreeInfo.totalCredits) * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-indigo-600 h-2.5 rounded-full"
                  style={{ width: `${(degreeInfo.completedCredits / degreeInfo.totalCredits) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Requirement Categories */}
        {requirementCategories.map((category) => (
          <div key={category.name} className="bg-white rounded-xl shadow-sm mb-6 overflow-hidden">
            <div className="p-4 border-b border-gray-100 bg-indigo-100">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-indigo-900">{category.name}</h2>
                <div className="text-sm font-medium text-indigo-800">
                  {category.completed} / {category.total} Credits
                </div>
              </div>
              <div className="w-full bg-indigo-200 rounded-full h-2.5 mt-2">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${category.percentage}%` }}></div>
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {category.courses.map((course) => (
                <div key={course.code} className="p-4 hover:bg-gray-50 flex justify-between items-center">
                  <div>
                    <div className="flex items-center">
                      {course.status === "completed" ? (
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      ) : course.status === "in-progress" ? (
                        <div className="h-4 w-4 bg-yellow-400 rounded-full mr-2"></div>
                      ) : (
                        <div className="h-4 w-4 border-2 border-gray-300 rounded-full mr-2"></div>
                      )}
                      <span className="font-medium text-gray-900">{course.code}</span>
                    </div>
                    <p className="text-sm text-gray-700 ml-6">{course.name}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-700 mr-4">{course.credits} Credits</span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        course.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : course.status === "in-progress"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {course.status === "completed"
                        ? "Completed"
                        : course.status === "in-progress"
                          ? "In Progress"
                          : "Planned"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Graduation Requirements */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-100 bg-indigo-100">
            <h2 className="text-lg font-semibold text-indigo-900">Graduation Requirements</h2>
          </div>

          <div className="p-4">
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900">Minimum GPA Requirement</h3>
                  <p className="text-sm text-gray-700">
                    Your current GPA is {degreeInfo.gpa}, which meets the minimum requirement of 2.0.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900">Residency Requirement</h3>
                  <p className="text-sm text-gray-700">
                    You must complete at least 30 credits at CUNY to be eligible for graduation.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900">Upper Division Credits</h3>
                  <p className="text-sm text-gray-700">
                    You need at least 45 credits in courses numbered 300 or above. You currently have 24.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900">Writing Intensive Courses</h3>
                  <p className="text-sm text-gray-700">
                    You have completed 2 of the required 2 writing intensive courses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
