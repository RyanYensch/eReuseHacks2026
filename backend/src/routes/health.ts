import { Router } from "express";

const router = Router()

router.get("/", (_req, res) => {
    res.json({
        ok: true,
        service: "local-backend",
        time: new Date().toISOString()
    });
});

export default router;