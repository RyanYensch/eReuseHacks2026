import axios from 'axios';
import "dotenv/config"

import type { SightengineImageResponse } from '../../../shared/types/imageApi';

const sightengineApiUser = process.env.SIGHTENGINE_API_USER;
const sightengineApiSecret = process.env.SIGHTENGINE_API_SECRET;

if (!sightengineApiUser || !sightengineApiSecret) {
    throw new Error("Missing SIGHTENGINE_API_USER or sightengineApiSecret in .env")
}

export async function detectAiImageFromUrl(imageUrl: string): Promise<SightengineImageResponse> {
    const response = await axios.get<SightengineImageResponse>(
        "https://api.sightengine.ai/1.0/check.json", {
        params: {
            url: imageUrl,
            models: "genai",
            api_user: sightengineApiUser,
            api_secret: sightengineApiSecret
        }
    }
    );

    return response.data
}
