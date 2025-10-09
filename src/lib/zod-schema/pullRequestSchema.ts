import { z } from "zod"

export const pullRequestSchema = z.object({
    title: z
        .string()
        .nonempty("Title is required"),
    changes: z
        .string()
        .min(10, "Please provide at least 10 characters describing changes")
        .max(1000, "Please provide at most 1000 characters describing changes"),
})

export type PullRequestFormData = z.infer<typeof pullRequestSchema>