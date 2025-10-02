"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, Wrench, Package } from "lucide-react"
import { Button } from "@/components/ui/button"

// ✅ Define Zod schema
const releaseSchema = z.object({
  version: z
    .string()
    .nonempty("Version number is required")
    .regex(/^\d+\.\d+\.\d+$/, "Version must follow semantic versioning (e.g., 1.0.0)"),
  changes: z
    .string()
    .min(10, "Please provide at least 10 characters describing changes"),
})

// Infer type from schema
type ReleaseFormData = z.infer<typeof releaseSchema>

export function ReleaseForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ReleaseFormData>({
    resolver: zodResolver(releaseSchema),
    defaultValues: {
      version: "",
      changes: "",
    },
  })

  const onSubmit = (data: ReleaseFormData) => {
    console.log("✅ Release Notes:", data)
    // here you can trigger API call, mutation etc
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-6 text-foreground">Create Release Notes</h2>
      </div>

      {/* Version field */}
      <div className="space-y-2">
        <Label htmlFor="version" className="text-sm font-medium">
          Version Number
        </Label>
        <Input
          id="version"
          placeholder="e.g., 2.2.1"
          className="bg-background"
          {...register("version")}
        />
        {errors.version && (
          <p className="text-sm text-red-500">{errors.version.message}</p>
        )}
      </div>

      {/* Changes field */}
      <div className="space-y-2">
        <Label
          htmlFor="changes"
          className="text-sm font-medium flex items-center gap-2"
        >
          <Sparkles className="h-4 w-4 text-feature" />
          <Wrench className="h-4 w-4 text-fix" />
          <Package className="h-4 w-4 text-improvement" />
          Features, Bug Fixes & Improvements
        </Label>
        <Textarea
          id="changes"
          placeholder="Describe your changes here, or paste your commit history for AI-powered release note generation..."
          className="min-h-[200px] bg-background resize-none"
          {...register("changes")}
        />
        {errors.changes && (
          <p className="text-sm text-red-500">{errors.changes.message}</p>
        )}
      </div>

      {/* Submit button */}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Generate Release Notes"}
      </Button>
    </form>
  )
}
