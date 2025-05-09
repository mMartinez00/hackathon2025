"use client"

import { useState } from "react"
import { Calendar, Heart, MessageSquare, User } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CampusEvents } from "@/components/personal/campus-events"
import { MentalHealthResources } from "@/components/personal/mental-health-resources"
import { CommunicationCenter } from "@/components/personal/communication-center"

export function PersonalDashboard() {
  const [activeTab, setActiveTab] = useState("events")

  return (
    <div className="container max-w-6xl mx-auto py-8 px-4">
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-pink-400 to-rose-600 flex items-center justify-center mr-4 shadow-lg transform hover:rotate-12 transition-transform duration-300">
          <User className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
            Personal Center
          </h1>
          <p className="text-pink-700">Access campus resources and support services</p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="bg-white border border-pink-100 p-1 rounded-xl">
          <TabsTrigger
            value="events"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-rose-600 data-[state=active]:text-white text-pink-700 rounded-lg"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Campus Events
          </TabsTrigger>
          <TabsTrigger
            value="communication"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-rose-600 data-[state=active]:text-white text-pink-700 rounded-lg"
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Communication
          </TabsTrigger>
          <TabsTrigger
            value="health"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-rose-600 data-[state=active]:text-white text-pink-700 rounded-lg"
          >
            <Heart className="h-4 w-4 mr-2" />
            Mental Health
          </TabsTrigger>
        </TabsList>

        <TabsContent value="events" className="mt-6">
          <CampusEvents />
        </TabsContent>

        <TabsContent value="communication" className="mt-6">
          <CommunicationCenter />
        </TabsContent>

        <TabsContent value="health" className="mt-6">
          <MentalHealthResources />
        </TabsContent>
      </Tabs>
    </div>
  )
}
