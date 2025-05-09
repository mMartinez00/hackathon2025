"use client"

import { useState } from "react"
import { Briefcase, FileText, Search, Sparkles } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InternshipFinder } from "@/components/career/internship-finder"
import { ResumeBuilder } from "@/components/career/resume-builder"
import { CareerAdvisor } from "@/components/career/career-advisor"

export function CareerDashboard() {
  const [activeTab, setActiveTab] = useState("advisor")

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-400 to-indigo-600 flex items-center justify-center mr-4 shadow-lg transform hover:rotate-12 transition-transform duration-300">
          <Briefcase className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Career Center
          </h1>
          <p className="text-blue-700 text-sm">Explore opportunities and build your professional profile</p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <div className="overflow-x-auto pb-2 -mx-4 px-4">
          <TabsList className="bg-white border border-blue-100 p-1 rounded-xl w-full inline-flex">
            <TabsTrigger
              value="advisor"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white text-blue-700 rounded-lg flex-1 py-3"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              AI Advisor
            </TabsTrigger>
            <TabsTrigger
              value="internships"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white text-blue-700 rounded-lg flex-1 py-3"
            >
              <Search className="h-4 w-4 mr-2" />
              Internships
            </TabsTrigger>
            <TabsTrigger
              value="resume"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white text-blue-700 rounded-lg flex-1 py-3"
            >
              <FileText className="h-4 w-4 mr-2" />
              Resume
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="advisor" className="mt-4">
          <CareerAdvisor />
        </TabsContent>

        <TabsContent value="internships" className="mt-4">
          <InternshipFinder />
        </TabsContent>

        <TabsContent value="resume" className="mt-4">
          <ResumeBuilder />
        </TabsContent>
      </Tabs>
    </div>
  )
}
