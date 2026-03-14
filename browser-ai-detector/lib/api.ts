import type { TextApiResponse } from "../../shared/types/textApi"
import type { ImageApiResponse } from "../../shared/types/imageApi"

const API_BASE_URL = "http://localhost:6767"

export async function detectText(text: string): Promise<TextApiResponse> {
    try {
        const res = await fetch(`${API_BASE_URL}/text`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text,
                sent_scores: true,
                score_string: false
            })
        });

        if (res.ok !== true) {
            return {
                ok: false,
                error: `HTTP ${res.status}`
            };
        }

        return res.json();
    } catch (e) {
        return {
            ok: false,
            error: e.message
        };
    }
}

export async function detectImage(imageUrl: string): Promise<ImageApiResponse> {
    try {
        const res = await fetch(`${API_BASE_URL}/text`, {
        method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                imageUrl
            })
        });

        if (res.ok !== true) {
            return {
                ok: false,
                error: `HTTP ${res.status}`
            };
        }

        return res.json();
    } catch (e) {
        return {
            ok: false,
            error: e.message
        };
    }
}