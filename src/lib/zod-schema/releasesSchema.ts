import { z } from "zod"

export const releaseSchema = z.object({
    version: z
        .string()
        .nonempty("Version number is required")
        .regex(/^\d+\.\d+\.\d+$/, "Version must follow semantic versioning (e.g., 1.0.0)"),
    changes: z
        .string()
        .min(10, "Please provide at least 10 characters describing changes"),
})

export type ReleaseFormData = z.infer<typeof releaseSchema>