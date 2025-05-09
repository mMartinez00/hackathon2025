"use client"

import { GraduationCap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AcademicAdvisor } from "@/components/academic/academic-advisor"
import { CourseSchedule } from "@/components/academic/course-schedule"

export function AcademicDashboard() {
  return (
    <div className="container max-w-6xl mx-auto py-8 px-4">
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center mr-4 shadow-lg transform hover:rotate-12 transition-transform duration-300">
          <GraduationCap className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
            Academic Center
          </h1>
          <p className="text-purple-700">Track your progress and plan your academic journey</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-white border border-purple-100 text-purple-900 shadow-lg rounded-xl overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Degree Progress</CardTitle>
            <CardDescription className="text-purple-600">Bachelor of Science in Computer Science</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Overall Completion</span>
                  <span>68%</span>
                </div>
                <Progress
                  value={68}
                  className="h-2 bg-purple-100"
                  indicatorClassName="bg-gradient-to-r from-purple-400 to-purple-600"
                />
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Major Requirements</span>
                  <span>75%</span>
                </div>
                <Progress value={75} className="h-2 bg-slate-700" indicatorClassName="bg-purple-600" />
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>General Education</span>
                  <span>82%</span>
                </div>
                <Progress value={82} className="h-2 bg-slate-700" indicatorClassName="bg-purple-600" />
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Electives</span>
                  <span>45%</span>
                </div>
                <Progress value={45} className="h-2 bg-slate-700" indicatorClassName="bg-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Current Semester</CardTitle>
            <CardDescription className="text-slate-400">Spring 2025</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Credits</span>
                <span className="text-sm font-medium">15 / 18</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Courses</span>
                <span className="text-sm font-medium">5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Current GPA</span>
                <span className="text-sm font-medium">3.7</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Cumulative GPA</span>
                <span className="text-sm font-medium">3.5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Registration Status</span>
                <span className="text-sm font-medium text-green-400">Enrolled</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Important Dates</CardTitle>
            <CardDescription className="text-slate-400">Upcoming deadlines and events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="bg-slate-700 p-2 rounded-md">
                <div className="text-sm font-medium">Final Exams Begin</div>
                <div className="text-xs text-slate-400">May 15, 2025</div>
              </div>
              <div className="bg-slate-700 p-2 rounded-md">
                <div className="text-sm font-medium">Summer Registration</div>
                <div className="text-xs text-slate-400">May 20, 2025</div>
              </div>
              <div className="bg-slate-700 p-2 rounded-md">
                <div className="text-sm font-medium">Fall Registration</div>
                <div className="text-xs text-slate-400">June 5, 2025</div>
              </div>
              <div className="bg-slate-700 p-2 rounded-md">
                <div className="text-sm font-medium">Graduation Ceremony</div>
                <div className="text-xs text-slate-400">June 15, 2025</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="courses" className="space-y-4">
        <TabsList className="bg-slate-800 border border-slate-700 p-1">
          <TabsTrigger
            value="courses"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-slate-300"
          >
            Course Schedule
          </TabsTrigger>
          <TabsTrigger
            value="advisor"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-slate-300"
          >
            AI Academic Advisor
          </TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="mt-6">
          <CourseSchedule />
        </TabsContent>

        <TabsContent value="advisor" className="mt-6">
          <AcademicAdvisor />
        </TabsContent>
      </Tabs>
    </div>
  )
}
