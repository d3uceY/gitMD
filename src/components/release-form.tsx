"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, Wrench, Package } from "lucide-react"

export function ReleaseForm() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-6 text-foreground">Create Release Notes</h2>
      </div>

      <div className="space-y-2">
        <Label htmlFor="version" className="text-sm font-medium">
          Version Number
        </Label>
        <Input id="version" placeholder="e.g., 2.2.1" className="bg-background" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description" className="text-sm font-medium">
          Release Description
        </Label>
        <Textarea
          id="description"
          placeholder="Brief overview of this release..."
          className="min-h-[100px] bg-background resize-none"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="changes" className="text-sm font-medium flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-feature" />
          <Wrench className="h-4 w-4 text-fix" />
          <Package className="h-4 w-4 text-improvement" />
          Features, Bug Fixes & Improvements
        </Label>
        <Textarea
          id="changes"
          placeholder="Describe your changes here, or paste your commit history for AI-powered release note generation..."
          className="min-h-[200px] bg-background resize-none"
        />
      </div>
    </div>
  )
}
