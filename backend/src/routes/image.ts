import { Router, type Request, type Response } from "express";
import axios from "axios";

import { detectAiImageFromUrl } from "../controllers/sightengine";
import type { ImageApiResponse, ImageRequest } from "../../../shared/types/imageApi";

const router = Router()

router.post("/", async (
    req: Request<{}, ImageApiResponse, ImageRequest>,
    res: Response<ImageApiResponse>
) => {
    const { imageUrl } = req.body;

    try {
        if (typeof imageUrl !== "string" || imageUrl.trim() === "") {
            return res.status(400).json({
                ok: false,
                error: "Missing or invalid imageUrl"
            });
        }

        const data = await detectAiImageFromUrl(imageUrl);

        return res.status(200).json({
            ok: true,
            data
        });
    } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
            const msg = typeof err.response?.data === "string" ? err.response.data : err.message;

            return res.status(502).json({
                ok: false,
                error: `Sightengine request failed: ${msg}`
            });
        }

        if (err instanceof Error) {
            return res.status(500).json({
                ok: false,
                error: err.message
            });
        }

        return res.status(500).json({
            ok: false,
            error: "Unkown server error"
        });
    }
}
);

export default router;