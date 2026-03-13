import axios from 'axios';
import "dotenv/config"

import type { TextRequest, TextReponse } from '../types/sapling';

const saplingAPIKey = process.env.SAPLING_API_KEY;

if (!saplingAPIKey) {
    throw new Error("Missing SAPLING_API_KEY in .env")
}

export async function detectAiText(request: Omit<TextRequest, "key">): Promise<TextReponse> {
    const response = await axios.post<TextReponse>(
        "https://api.sapling.ai/api/v1/aidetect", {
        key: saplingAPIKey,
        ...request
    }
    );

    return response.data
}
