import ReactMarkdown from 'react-markdown'

export function MarkdownRenderer({ content }: { content: string }) {
    return <ReactMarkdown>{content}</ReactMarkdown>
}