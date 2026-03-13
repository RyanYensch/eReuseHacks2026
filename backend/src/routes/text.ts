import { Router, type Request, type Response } from "express";
import axios from "axios";

import { detectAiText } from "../controllers/sapling";
import type { TextRequest, TextReponse } from "../types/sapling";
import type { TextApiErrorResponse, TextApiSuccessResponse, TextApiResponse } from "../../../shared/types/textApi";

const router = Router()

router.post("/", async (
    req: Request<{}, TextApiResponse, Omit<TextRequest, "key">>,
    res: Response<TextApiResponse>
) => {
    const { text, sent_scores, score_string } = req.body;

    try {
        if (typeof text !== "string" || text.trim() === "") {
            return res.status(400).json({
                ok: false,
                error: "Missing or invalid text"
            });
        }

        const data = await detectAiText({
            text,
            sent_scores,
            score_string,
        });

        return res.status(200).json({
            ok: true,
            data
        });
    } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
            const msg = typeof err.response?.data === "string" ? err.response.data : err.message;

            return res.status(502).json({
                ok: false,
                error: `Saplin request failed: ${msg}`
            });
        }

        if (err instanceof Error) {
            return res.status(500).json({
                ok: false,
                error: "Unkown server error"
            });
        }
    }
}
);

export default router;