import { DashboardLayout } from "@/components/dashboard-layout"
import { PersonalDashboard } from "@/components/personal/personal-dashboard"

export default function PersonalPage() {
  return (
    <DashboardLayout>
      <PersonalDashboard />
    </DashboardLayout>
  )
}
