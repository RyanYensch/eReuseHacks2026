export type SentenceScore = {
    // Ai Likelihood 0-1
    score: number,
    sentence: string
}

export type TextRequest = {
    // API key
    key: string,

    // Text to check
    text: string,

    // Get sentence scores (will slow it down)
    sent_scores?: boolean,

    // Highlight tokens by score
    score_string?: boolean,
}

export type TextReponse = {
    // Overall score 0-1
    score: number;

    // The text sent
    text: string;

    // The sentences and their likelihood
    sentece_scores?: SentenceScore[]

    // if score string was set to true
    score_string?: string;

    // Tokens output
    tokens: string[];

    // Token ai likelihood
    token_probs: number[]
}