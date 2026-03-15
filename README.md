# AI Detector Extension

This UNIHACK 2026 project is a Chrome extension that allows users to detect if different content on the web page they are on is likely to be AI.
This includes:

- Text
- Images

## The Team

- Ryan Yensch
- Lyn Duong
- Christopher Khim
- Jagadeesh Thirunavukkarasu
- Khaleed Mohammed
- Lakshmi Narasimhan Srinivasan

## How To Install

- Head to [chrome://extensions/](chrome://extensions/).
- Enable **Developer mode** in the top-right corner.
- Select **Load unpacked** in the top-left corner.
- Locate the folder `eReuseHacks2026/browser-ai-detector/build/chrome-mv3-dev` and select it.
- The extension is now installed.
- Click on the extension in the top-right of your browser for a usage guide, or [check out it out here](browser-ai-detector/README.md)

## How To Run

### Extension

```BASH
cd browser-ai-detector
npm i
npm run dev
```

### Backend

```BASH
cd backend
npm i
npm run dev
```

#### Using the Backend API

Read all of the endpoint usages [in the backend README](backend/README.md)

#### Backend ENV

Create an env at `/backend/.env` with the following:

```BASH
PORT=6767
SAPLING_API_KEY=PRIVATE_KEY
SIGHTENGINE_API_USER=USER_ID
SIGHTENGINE_API_SECRET=SECRET
```

#### Where to get API Keys

- `SAPLING_API_KEY`: [API Access](https://sapling.ai/docs/api/api-access/)
- `SIGHTENGINE_API_USER` and `SIGHTENGINE_API_SECRET`: [Sightengine Sign Up](https://dashboard.sightengine.com/signup)
