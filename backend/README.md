# Backend API

## How to Run

Create a `.env` with the following:

```BASH
PORT=6767
SAPLING_API_KEY=PRIVATE_KEY
SIGHTENGINE_API_USER=USER_ID
SIGHTENGINE_API_SECRET=SECRET
```

```BASH
npm i
npm run dev
```

## Endpoints

### `GET /`

Root endpoint to confimr backend is running

#### Request

- Method: `Get`
- Body: none

#### Example Request

```BASH
curl http://localhost:6767/
```

#### Success Response

**Status:** `200 OK`

```JSON
{
    "ok": true,
    "message": "Backend is running"
}
```

### `GET /health`

Verify the health of the server

#### Request

- Method: `Get`
- Body: none

#### Example Request

```BASH
curl http://localhost:6767/health
```

#### Success Response

**Status:** `200 OK`

```JSON
{
    "ok": true,
    "service": "local-backend",
    "time": "2026-03-13T12:34:45.789Z"
}
```

### Response Fields

- `ok`: If the backend is healthy
- `sevice`: backend service name
- `time`: current server ISO timestamp

### `POST /text`

Runs Sapling AI detection on a string

#### Request

- Method: `POST`
- Content-Type: `application/json`

### Request Body

```TYPESCRIPT
{
    text: string;
    sent_scores?: boolean;
    score_string?: boolean;
}
```

#### Request Body Fields

- `text`: Text to analyse
- `sent_scores` (optional): Get scores for each sentence
- `score_string` (optional): Include HTML token highlighting

#### Example Request

```BASH
curl -X POST http://localhost:6767/text \
    -H "Content-Type: application/json" \
    -d '{
        "text": "This is a sample test",
        "sent_scores": true,
        "score_string": false
    }'
```

#### Success Response

**Status:** `200 OK`

```JSON
{
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
```

### Success Response Fields

- `ok`: If the request succeeded
- `data.score`: Overall AI Likelihood score 0-1
- `data.text`: Original text
- `data.sentence_scores` (optional): Scores per sentence
- `data.tokens` (optional): tokenised text
- `data.token_probs` (optional): Score per token

### Error Reponse

**Status:** `400 Bad Request`

```JSON
{
    "ok": false,
    "error": "Missing or invalid text"
}
```

**Status:** `500 Internal Server Error` or `502 Bad Gateway`

```JSON
{
    "ok": false,
    "error": "Sapling request failed: ..."
}
```

### `POST /image`

Runs Sightengine AI image detection on an imageUrl

#### Request

- Method: `POST`
- Content-Type: `application/json`

### Request Body

```TYPESCRIPT
{
    imageUrl: string;
}
```

#### Request Body Fields

- `imageUrl`: A public URL to the image

#### Example Request

```BASH
curl -X POST http://localhost:6767/image \
  -H "Content-Type: application/json" \
  -d '{
    "imageUrl": "https://sightengine.com/assets/img/examples/example-prop-c1.jpg"
  }'
```

#### Success Response

**Status:** `200 OK`

```JSON
{
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
```

### Success Response Fields

- `ok`: If the request succeeded
- `data.status`: API status from Sightengine
- `data.request.id`: Sightengine request id
- `data.request.timestamp`: Request timestamp
- `data.request.operations`: The number of operations that were used
- `data.type.ai_generated`: AI Likelihood score 0-1
- `data.media.id`: Sightengine media ID
- `data.media.uri`: image URL

### Error Reponse

**Status:** `400 Bad Request`

```JSON
{
    "ok": false,
    "error": "Missing or invalid imageUrl"
}
```

**Status:** `500 Internal Server Error` or `502 Bad Gateway`

```JSON
{
    "ok": false,
    "error": "Sightengine request failed: ..."
}
```
