import { generateText } from "ai"
import { google } from "@ai-sdk/google"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    const { messages } = await request.json();
    if (!messages) {
        return NextResponse.json({ error: "No messages provided" }, { status: 400 })
    }

    const versionTag = messages.version;
    const changes = messages.changes;
    try {
        const result = await generateText({
            model: google("gemini-2.5-flash"),
            prompt: `Create release notes for version ${versionTag} with the following changes: ${changes}`
        })

        return NextResponse.json({ result.text })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
    }
}