import type { AiDetectResult, AiDetectRequest } from "./types";
import type { TextApiResponse } from "../../shared/types/textApi";
import type { ImageApiResponse } from "../../shared/types/imageApi";

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

export function formatTextDetection(
    request: Extract<AiDetectRequest, { kind: "text" }>,
    response: TextApiResponse
): AiDetectResult {
    if (!response.ok || !response.data) {
        if ("error" in response) {
            throw new Error(response.error);
        }

        throw new Error("Text Detection Failed");
    }

    return {
        kind: "text",
        title: "AI Text Detection",
        score: response.data.score,
        percentage: scoreToPercent(response.data.score),
        likelihood: scoreToLikelihood(response.data.score),
        preview: truncateText(response.data.text),
        sentences: response.data.sentence_scores?.map((item) => ({
            sentence: item.sentence,
            score: item.score,
            percentage: scoreToPercent(item.score)
        }))
    }
}


export function formatImageDetection(
    request: Extract<AiDetectRequest, { kind: "image" }>,
    response: ImageApiResponse
): AiDetectResult {
    if (!response.ok || !response.data) {
        if ("error" in response) {
            throw new Error(response.error);
        }

        throw new Error("Image Detection Failed");
    }

    const score = response.data.type.ai_generated;

    return {
        kind: "image",
        title: "AI Image Detection",
        score: score,
        percentage: scoreToPercent(score),
        likelihood: scoreToLikelihood(score),
        imageUrl: response.data.media.uri
    }
}