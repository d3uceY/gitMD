"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import { API_CONSTANTS } from "@/lib/constants/api-constants"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, Wrench, Package, Terminal, FileWarning } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { releaseSchema } from "@/lib/zod-schema/releasesSchema"
import type { ReleaseFormData } from "@/lib/zod-schema/releasesSchema"
import { useState } from "react"
import { useMarkdown } from "@/context/ReleaseNoteContext"
import { useEffect } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"



export function ReleaseForm() {
  const { markdown, setMarkdown, loading, setLoading } = useMarkdown();
  const [textLength, setTextLength] = useState(0)
  const maxLength = 1000;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    reset,
  } = useForm<ReleaseFormData>({
    resolver: zodResolver(releaseSchema),
    defaultValues: {
      version: "",
      changes: "",
    },
  })


  useEffect(() => {
    const getTextLength = (text: string) => {
      return text.length
    }

    setTextLength(getTextLength(watch("changes")))
  }, [watch("changes")])

  const onSubmit = async (data: ReleaseFormData) => {

    const promise = async () => {
      try {
        setLoading(true)
        const response = await fetch(API_CONSTANTS.generate_release_md, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
        const resp = await response.json()
        setMarkdown(resp.text)
        reset()
        return resp
      } catch (error) {
        throw error
      } finally {
        setLoading(false)
      }
    }

    toast.promise(promise(), {
      loading: "Generating release notes...",
      success: () => "Release notes generated successfully",
      error: () => "Failed to generate release notes",
    })
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
          <Alert variant="destructive">
            <AlertTitle>Version</AlertTitle>
            <AlertDescription>
              {errors.version.message}
            </AlertDescription>
          </Alert>
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
        <div className=" w-fit ml-auto text-xs">
          <span className={`${textLength > maxLength && 'text-red-500'} ${textLength == maxLength && 'text-orange-400'} font-semibold`}>{textLength}</span>/{maxLength}
        </div>
        {errors.changes && (
          <Alert variant="destructive">
            <FileWarning/>
            <AlertTitle>Changes</AlertTitle>
            <AlertDescription>
              {errors.changes.message}
            </AlertDescription>
          </Alert>
        )}
      </div>

      {/* Submit button */}
      <Button type="submit" disabled={loading || !isValid}>
        {loading ? "Submitting..." : "Generate Release Notes"}
      </Button>
    </form>
  )
}
