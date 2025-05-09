import { DashboardLayout } from "@/components/dashboard-layout"
import { DashboardOptions } from "@/components/dashboard-options"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="container max-w-6xl mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          Welcome to CUNY Central
        </h1>
        <p className="text-purple-700 mb-8 text-lg">
          Select a category to access your personalized resources and tools.
        </p>
        <DashboardOptions />
      </div>
    </DashboardLayout>
  )
}
