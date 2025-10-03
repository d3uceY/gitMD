function normalizeText(input: string): string {
    return input
        .replace(/\r\n/g, "\n")      // normalize newlines
        .replace(/\s+/g, " ")        // collapse multiple spaces/tabs
        .replace(/\n\s*\n+/g, "\n\n")// collapse multiple blank lines
        .trim();                     // remove leading/trailing whitespace
}

export { normalizeText }
