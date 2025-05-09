import type React from "react"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

interface PageHeaderProps {
  title: string
  icon: React.ReactNode
  backUrl: string
  color: string
}

export function PageHeader({ title, icon, backUrl, color }: PageHeaderProps) {
  return (
    <div className="bg-white p-4 shadow-sm flex items-center justify-between">
      <h1 className={`text-xl font-bold ${color} flex items-center`}>
        {icon}
        <span className="ml-2">{title}</span>
      </h1>
      <Link href={backUrl} className={`flex items-center justify-center ${color} px-3 py-1 rounded-full text-sm`}>
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back
      </Link>
    </div>
  )
}
