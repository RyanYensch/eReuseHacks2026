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

export const fakeTextApiCallLong = async (): Promise<TextApiResponse> => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return {
    "ok": true,
    "data": {
      "score": 0.999822979797514,
      "sentence_scores": [
        {
          "score": 0.9779880698942078,
          "sentence": "Fortnite stands out because it combines fast, fun gameplay with constant updates that keep the experience fresh."
        },
        {
          "score": 0.000027512592572609407,
          "sentence": "Its mix of building, shooting, creative modes, and huge crossovers gives players a lot more variety than most games."
        },
        {
          "score": 1.6337997621462819e-10,
          "sentence": "It also stays popular by being easy to jump into with friends on almost any platform."
        }
      ],
      "text": "Fortnite stands out because it combines fast, fun gameplay with constant updates that keep the experience fresh. Its mix of building, shooting, creative modes, and huge crossovers gives players a lot more variety than most games. It also stays popular by being easy to jump into with friends on almost any platform.",
      "token_probs": [
        0.1,
        0.9998720217117807,
        0.9998450647690333,
        0.9999680173350498,
        0.9999658848901163,
        0.1,
        0.9999528691587329,
        0.9999638771914761,
        0.9999561093682132,
        0.9999693255740567,
        0.9999667142983526,
        0.9999647809781891,
        0.9999689222786401,
        0.999968762480421,
        0.9999687283816456,
        0.9999703529956605,
        0.9999697312086937,
        0.9999690752993047,
        0.9999697784551245,
        0.9999670837205485,
        0.9999688725656597,
        0.9999582841228403,
        0.9999619999871356,
        0.9999627818615409,
        0.9999639917878085,
        0.9999536025170528,
        0.1,
        0.999954217717459,
        0.9999609963524563,
        0.9999597778951284,
        0.9999638848385075,
        0.9999628642217431,
        0.9999620197304466,
        0.9999425289424835,
        0.9999367189302575,
        0.9999367924465332,
        0.9999599462389597,
        0.9999608103062201,
        0.9999642768379999,
        0.9999519802695431,
        0.9999635408712493,
        0.9999555060567218,
        0.9999637257824361,
        0.9999572690721834,
        0.9999349135105149,
        0.9999471740629815,
        0.9997250073356554,
        0.9998917099073878,
        0.999657678505173,
        0.9996800344088115,
        0.9998667924082838,
        0.9997935072606197,
        0.9996288752299733,
        0.9997649291617563,
        0.9996451210754458,
        0.9993910549674183,
        0.999353211664129,
        0.9995793740963563,
        0.9993159358855337,
        0.9995493097230792,
        0.9997441624291241,
        0.9993057792307809,
        0.999434144818224
      ],
      "tokens": [
        "Fort",
        "n",
        "ite",
        " stands",
        " out",
        " because",
        " it",
        " combines",
        " fast",
        ",",
        " fun",
        " gameplay",
        " with",
        " constant",
        " updates",
        " that",
        " keep",
        " the",
        " experience",
        " fresh",
        ".",
        " Its",
        " mix",
        " of",
        " building",
        ",",
        " shooting",
        ",",
        " creative",
        " modes",
        ",",
        " and",
        " huge",
        " c",
        "rosso",
        "vers",
        " gives",
        " players",
        " a",
        " lot",
        " more",
        " variety",
        " than",
        " most",
        " games",
        ".",
        " It",
        " also",
        " stays",
        " popular",
        " by",
        " being",
        " easy",
        " to",
        " jump",
        " into",
        " with",
        " friends",
        " on",
        " almost",
        " any",
        " platform",
        "."
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


export const fakeErrorApiCall = async (): Promise<ImageApiResponse> => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return {
    "ok": false,
    "error": "Saplin request failed: This is a test error"
  }
}