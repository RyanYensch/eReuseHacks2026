import type { TextApiResponse } from "../../shared/types/textApi";

export type DetectionRequestText = {
    kindL: "text",
    value: string;
}

export type DetectionRequestImage = {
    kindL: "image",
    value: string;
}

export type DetectionRequest = DetectionRequestText | DetectionRequestImage;



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
    sentences?: sentenceScore[];
}

export type AiDetectResultImage = {
    kind: "image",
    title: string;
    score: number;
    percentage: string;
    likelihood: string;
}


export type AiDetectResult = AiDetectResultText | AiDetectResultImage;