import { generateText } from "ai"
import { google } from "@ai-sdk/google"
import { NextResponse } from "next/server"
import { PROMPTS } from "@/lib/prompts";

export async function POST(request: Request) {
    const { version, changes } = await request.json();

    if (!version || !changes) {
        return NextResponse.json({ error: "No data provided" }, { status: 400 })
    }

    const formatedPrompt = PROMPTS.releaseNote
        .replace("{VERSION}", version)
        .replace("{CHANGES}", changes.replaceAll("\r\n", "\n"));

    try {
        const result = await generateText({
            model: google("gemini-2.5-flash"),
            prompt: formatedPrompt,
            // maxOutputTokens: 800,
        })

        return NextResponse.json({ result })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
    }
}