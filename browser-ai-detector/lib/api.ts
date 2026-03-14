const API_BASE_URL = "http://localhost:6767"
import type { TextApiResponse } from "../../shared/types/textApi"
import type { ImageApiResponse } from "../../shared/types/imageApi"

export async function detectText(text: string): Promise<TextApiResponse> {
    const res = await fetch(`${API_BASE_URL}/text`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text,
            sent_scores: true,
            sccore_string: false
        })
    });

    return res.json();
}

export async function detectImage(imageUrl: string): Promise<ImageApiResponse> {
    const res = await fetch(`${API_BASE_URL}/text`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            imageUrl
        })
    });

    return res.json();
}