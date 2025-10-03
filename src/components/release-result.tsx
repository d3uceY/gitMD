import { Card } from "@/components/ui/card"
// import { Rocket } from "lucide-react"
import { MarkdownRenderer } from "./markdown-renderer"
import { useMarkdown } from "@/context/ReleaseNoteContext"
import { Copy } from "lucide-react";
import { copyText } from "@/lib/helpers/copyText";


export function ReleasePreview() {
  const { markdown } = useMarkdown();
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Preview</h2>
        {
          markdown && (
            <button onClick={() => copyText(markdown)}>
              <Copy />
            </button>
          )
        }
      </div>

      <Card className="p-6 bg-card shadow-elevation min-h-[500px]">
        <MarkdownRenderer content={markdown} />
        {/* <div className="prose prose-slate max-w-none">
          <div className="flex items-center gap-2 mb-4">
            <Rocket className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold m-0 text-foreground">Release 1.0.0</h1>
          </div>

          <p className="text-muted-foreground text-base leading-relaxed mb-6">
            This release includes new features, bug fixes, and improvements to enhance your experience.
          </p>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3 text-foreground flex items-center gap-2">
              <span>✨</span> Features
            </h2>
            <ul className="space-y-2 ml-0 list-none">
              <li className="flex items-start gap-2 text-foreground">
                <span className="text-muted-foreground mt-1">•</span>
                <span>Added new dashboard with real-time analytics</span>
              </li>
              <li className="flex items-start gap-2 text-foreground">
                <span className="text-muted-foreground mt-1">•</span>
                <span>Implemented dark mode support</span>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3 text-foreground flex items-center gap-2">
              <span>🛠</span> Bug Fixes
            </h2>
            <ul className="space-y-2 ml-0 list-none">
              <li className="flex items-start gap-2 text-foreground">
                <span className="text-muted-foreground mt-1">•</span>
                <span>Fixed login redirect issue</span>
              </li>
              <li className="flex items-start gap-2 text-foreground">
                <span className="text-muted-foreground mt-1">•</span>
                <span>Resolved memory leak in data fetching</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-foreground flex items-center gap-2">
              <span>📦</span> Improvements
            </h2>
            <ul className="space-y-2 ml-0 list-none">
              <li className="flex items-start gap-2 text-foreground">
                <span className="text-muted-foreground mt-1">•</span>
                <span>Optimized page load times by 40%</span>
              </li>
              <li className="flex items-start gap-2 text-foreground">
                <span className="text-muted-foreground mt-1">•</span>
                <span>Enhanced mobile responsiveness</span>
              </li>
            </ul>
          </div>
        </div> */}
      </Card>
    </div>
  )
}
