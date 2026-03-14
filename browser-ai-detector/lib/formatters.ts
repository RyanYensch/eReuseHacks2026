import type { AiDetectResult, AiDetectRequest } from "./types";
import type { TextApiResponse } from "../../shared/types/textApi";
import type { ImageApiResponse } from "../../shared/types/imageApi";
import { text } from "stream/consumers";

export function scoreToPercent(score: number): string {
    return `${(score * 100).toFixed(2)}%`;
}

export function scoreToLikelihood(score: number): string {
    if (score < 0.1) return "Verly Likely Human";
    if (score < 0.2) return "Likely Human";
    if (score < 0.4) return "Unlikely Human";
    if (score < 0.6) return "Likely Ai Generated";
    return "Very Unlikely Human";
}

export function truncateText(text: string, maxLength: number = 180): string {
    const trimmed = text.trim()

    if (text.length <= maxLength) {
        return text;
    }

    return `${trimmed.slice(0, maxLength).trimEnd()}...`;
}
