const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

export const API_CONSTANTS = {
    generate_release_md: `${API_BASE_URL}/api/generate-release-md`
}
