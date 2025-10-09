import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { NextResponse } from "next/server";
import { PROMPTS } from "@/lib/prompts";
import { normalizeText } from "@/lib/helpers/normalizeText";

export async function POST(request: Request) {
    const { version, changes } = await request.json();

    if (!version || !changes) {
        return NextResponse.json({ error: "No data provided" }, { status: 400 });
    }

    const formatedPrompt = PROMPTS.releaseNotesMandarin
        .replaceAll("{VERSION}", version)
        .replaceAll("{CHANGES}", normalizeText(changes));

    try {
        const result = await generateText({
            model: google("gemini-2.5-flash"),
            prompt: formatedPrompt,
        });

        return NextResponse.json({ text: result.text });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
