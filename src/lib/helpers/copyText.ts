import { toast } from "sonner";
export async function copyText(text: string) {
    const promise = async () => {
        await navigator.clipboard.writeText(text);
    }
    
    toast.promise(promise(), {
        loading: "Copying text...",
        success: "Text copied to clipboard",
        error: "Failed to copy text",
    });
}