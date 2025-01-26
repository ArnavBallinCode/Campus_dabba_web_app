"use client"

import { useState } from "react"
import { CooksList } from "@/components/student/dashboard/cooks-list"
import { StatesFilter } from "@/components/student/dashboard/states-filter"
import { states } from "@/lib/data/states"

export default function DashboardPage() {
  const [selectedState, setSelectedState] = useState<string>(states[0])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Browse delicious home-cooked meals from verified cooks in your area</p>
      </div>
      <StatesFilter selectedState={selectedState} onStateChange={setSelectedState} />
      <CooksList selectedState={selectedState} />
    </div>
  )
}

