import type { TextApiResponse } from "../../shared/types/textApi";

export type AiDetectRequestText = {
    kind: "text",
    value: string;
}

export type AiDetectRequestImage = {
    kind: "image",
    value: string;
}

export type AiDetectRequest = AiDetectRequestText | AiDetectRequestImage;


export type sentenceScore = {
    sentence: string;
    score: number;
    percentage: string;
}

export type AiDetectResultText = {
    kind: "text",
    title: string;
    score: number;
    percentage: string;
    likelihood: string;
    preview: string;
    sentences?: sentenceScore[];
}

export type AiDetectResultImage = {
    kind: "image",
    title: string;
    score: number;
    percentage: string;
    likelihood: string;
    imageUrl?: string;
}


export type AiDetectResult = AiDetectResultText | AiDetectResultImage;


export type PanelState =
    | { status: "idle" }
    | { status: "loading" }
    | {
        status: "success";
        result: AiDetectResult;
    }
    | {
        status: "error";
        error: string;
    };