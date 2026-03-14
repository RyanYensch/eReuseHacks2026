// Fake responses

import type { ImageApiResponse } from "../../shared/types/imageApi";
import type { TextApiResponse } from "../../shared/types/textApi";

export const fakeTextApiCall = async (): Promise<TextApiResponse> => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return {
    "ok": true,
    "data": {
      "score": 0.8016229165451867,
      "text": "This is sample text",
      "sentence_scores": [
        {
          "score": 0.12,
          "sentence": "This is sample text"
        }
      ],
      "tokens": [
        "This",
        " is",
        " sample",
        " text"
      ],
      "token_probs": [
        0.75,
        0.77,
        0.81,
        0.84
      ]
    }
  }
}

export const fakeImageApiCall = async (): Promise<ImageApiResponse> => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return {
    "ok": true,
    "data": {
      "status": "success",
      "request": {
        "id": "req_0zrbHDeitGYY7wEGncAne",
        "timestamp": 1491402308.4762,
        "operations": 5
      },
      "type": {
        "ai_generated": 0.01
      },
      "media": {
        "id": "med_0zrbk8nlp4vwI5WxIqQ4u",
        "uri": "https://sightengine.com/assets/img/examples/example-prop-c1.jpg"
      }
    }
  }
}


export const fakeImageErrorApiCall = async (): Promise<ImageApiResponse> => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return {
    "ok": false,
    "error": "Saplin request failed: This is a test error"
  }
}

export const fakeTextErrorApiCall = async (): Promise<TextApiResponse> => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return {
    "ok": false,
    "error": "Saplin request failed: This is a test error"
  }
}
