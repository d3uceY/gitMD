"use client"
import { useContext, useState } from "react";
import React from "react";


type MarkdownContextType = {
    markdown: string;
    setMarkdown: (markdown: string) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
};

const MarkdownContext = React.createContext<MarkdownContextType | null>(null)

export const useMarkdown = () => {
    const context = useContext(MarkdownContext);
    if (!context) {
        throw new Error("useMarkdown must be used within a MarkdownContextProvider");
    }
    return context;
};

export function MarkdownContextProvider({ children }: { children: React.ReactNode }) {
    const [markdown, setMarkdown] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    return (
        <MarkdownContext.Provider value={{ markdown, setMarkdown, loading, setLoading }}>
            {children}
        </MarkdownContext.Provider>
    )
}
