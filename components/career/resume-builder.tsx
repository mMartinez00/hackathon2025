"use client"

import type React from "react"

import { useState } from "react"
import { FileText, Download, Trash2, CheckCircle, ChevronDown, ChevronUp } from "lucide-react"
import { PageHeader } from "@/components/ui/page-header"

export function ResumeBuilder() {
  const [activeSection, setActiveSection] = useState<string | null>("contact")
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@email.cuny.edu",
    phone: "(212) 555-1234",
    address: "123 Main St, New York, NY 10001",
    objective:
      "Motivated Computer Science student seeking an internship opportunity to apply programming skills and contribute to innovative projects.",
    education: [
      {
        school: "LaGuardia Community College",
        degree: "Associate of Science in Computer Science",
        date: "Expected May 2025",
        gpa: "3.7/4.0",
      },
    ],
    experience: [
      {
        title: "Software Development Intern",
        company: "Tech Solutions Inc.",
        location: "New York, NY",
        dates: "June 2024 - August 2024",
        description:
          "• Developed and maintained web applications using React and Node.js\n• Collaborated with a team of 5 developers to implement new features\n• Optimized database queries, resulting in a 30% improvement in application performance",
      },
    ],
    skills: ["JavaScript", "React", "Node.js", "Python", "SQL", "Git", "Agile Development", "Problem Solving"],
  })

  const toggleSection = (section: string) => {
    if (activeSection === section) {
      setActiveSection(null)
    } else {
      setActiveSection(section)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-amber-50 pb-20">
      <PageHeader
        title="Resume Builder"
        icon={<FileText className="h-5 w-5" />}
        backUrl="/career"
        color="text-amber-900"
      />

      <div className="container mx-auto p-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-sm mb-6 overflow-hidden">
          <div className="p-4 border-b border-gray-100 bg-amber-100">
            <h2 className="text-lg font-semibold text-amber-900">Build Your Professional Resume</h2>
            <p className="text-sm text-amber-800">
              Create a standout resume by filling out the sections below. You can preview your resume at any time.
            </p>
          </div>

          <div className="p-4">
            {/* Contact Information Section */}
            <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full p-3 bg-amber-50 flex justify-between items-center"
                onClick={() => toggleSection("contact")}
              >
                <span className="font-medium text-amber-900">Contact Information</span>
                {activeSection === "contact" ? (
                  <ChevronUp className="h-5 w-5 text-amber-700" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-amber-700" />
                )}
              </button>
              {activeSection === "contact" && (
                <div className="p-4 border-t border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Objective Section */}
            <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full p-3 bg-amber-50 flex justify-between items-center"
                onClick={() => toggleSection("objective")}
              >
                <span className="font-medium text-amber-900">Professional Summary</span>
                {activeSection === "objective" ? (
                  <ChevronUp className="h-5 w-5 text-amber-700" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-amber-700" />
                )}
              </button>
              {activeSection === "objective" && (
                <div className="p-4 border-t border-gray-200">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Career Objective</label>
                  <textarea
                    name="objective"
                    value={formData.objective}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
              )}
            </div>

            {/* Education Section */}
            <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full p-3 bg-amber-50 flex justify-between items-center"
                onClick={() => toggleSection("education")}
              >
                <span className="font-medium text-amber-900">Education</span>
                {activeSection === "education" ? (
                  <ChevronUp className="h-5 w-5 text-amber-700" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-amber-700" />
                )}
              </button>
              {activeSection === "education" && (
                <div className="p-4 border-t border-gray-200">
                  {formData.education.map((edu, index) => (
                    <div key={index} className="mb-4 p-3 bg-gray-50 rounded-md">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">School</label>
                          <input
                            type="text"
                            value={edu.school}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            readOnly
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
                          <input
                            type="text"
                            value={edu.degree}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            readOnly
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Graduation Date</label>
                          <input
                            type="text"
                            value={edu.date}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            readOnly
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">GPA</label>
                          <input
                            type="text"
                            value={edu.gpa}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                  <button className="mt-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-md hover:bg-amber-200 transition-colors">
                    + Add Education
                  </button>
                </div>
              )}
            </div>

            {/* Experience Section */}
            <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full p-3 bg-amber-50 flex justify-between items-center"
                onClick={() => toggleSection("experience")}
              >
                <span className="font-medium text-amber-900">Work Experience</span>
                {activeSection === "experience" ? (
                  <ChevronUp className="h-5 w-5 text-amber-700" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-amber-700" />
                )}
              </button>
              {activeSection === "experience" && (
                <div className="p-4 border-t border-gray-200">
                  {formData.experience.map((exp, index) => (
                    <div key={index} className="mb-4 p-3 bg-gray-50 rounded-md">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                          <input
                            type="text"
                            value={exp.title}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            readOnly
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                          <input
                            type="text"
                            value={exp.company}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            readOnly
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                          <input
                            type="text"
                            value={exp.location}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            readOnly
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Dates</label>
                          <input
                            type="text"
                            value={exp.dates}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            readOnly
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                          <textarea
                            value={exp.description}
                            rows={3}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                  <button className="mt-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-md hover:bg-amber-200 transition-colors">
                    + Add Experience
                  </button>
                </div>
              )}
            </div>

            {/* Skills Section */}
            <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full p-3 bg-amber-50 flex justify-between items-center"
                onClick={() => toggleSection("skills")}
              >
                <span className="font-medium text-amber-900">Skills</span>
                {activeSection === "skills" ? (
                  <ChevronUp className="h-5 w-5 text-amber-700" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-amber-700" />
                )}
              </button>
              {activeSection === "skills" && (
                <div className="p-4 border-t border-gray-200">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Skills</label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {formData.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm flex items-center"
                      >
                        {skill}
                        <button className="ml-2 text-amber-700 hover:text-amber-900">×</button>
                      </div>
                    ))}
                  </div>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Add a skill..."
                      className="flex-1 p-2 border border-gray-300 rounded-l-md"
                    />
                    <button className="px-4 py-2 bg-amber-500 text-white rounded-r-md hover:bg-amber-600 transition-colors">
                      Add
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-between">
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors flex items-center">
              <Trash2 className="h-4 w-4 mr-2" />
              Clear Form
            </button>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-amber-100 text-amber-800 rounded-md hover:bg-amber-200 transition-colors flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Save Draft
              </button>
              <button className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors flex items-center">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </button>
            </div>
          </div>
        </div>

        {/* Resume Preview */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-100 bg-amber-100">
            <h2 className="text-lg font-semibold text-amber-900">Resume Preview</h2>
          </div>
          <div className="p-6">
            <div className="max-w-2xl mx-auto border border-gray-300 p-8 rounded-md">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">
                  {formData.firstName} {formData.lastName}
                </h1>
                <div className="text-gray-600 mt-1">
                  {formData.email} | {formData.phone}
                </div>
                <div className="text-gray-600">{formData.address}</div>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-2">
                  Professional Summary
                </h2>
                <p className="text-gray-700">{formData.objective}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-2">Education</h2>
                {formData.education.map((edu, index) => (
                  <div key={index} className="mb-2">
                    <div className="flex justify-between">
                      <div className="font-semibold">{edu.school}</div>
                      <div>{edu.date}</div>
                    </div>
                    <div>{edu.degree}</div>
                    <div className="text-gray-600">GPA: {edu.gpa}</div>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-2">Experience</h2>
                {formData.experience.map((exp, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between">
                      <div className="font-semibold">{exp.title}</div>
                      <div>{exp.dates}</div>
                    </div>
                    <div>
                      {exp.company}, {exp.location}
                    </div>
                    <div className="text-gray-700 whitespace-pre-line mt-1">{exp.description}</div>
                  </div>
                ))}
              </div>

              <div>
                <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-2">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {formData.skills.map((skill, index) => (
                    <span key={index} className="bg-gray-100 px-2 py-1 rounded text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
