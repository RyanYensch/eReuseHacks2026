import "dotenv/config"
import express from "express"
import cors from "cors"

import healthRouter from "./routes/health"
import textRouter from "./routes/text"

const app = express();
const port = Number(process.env.PORT || 6767);

app.use(
    cors({
        origin: true
    })
);

app.use(express.json({ limit: "1mb" }))

app.get("/", (_req, res) => {
    res.json({
        ok: true,
        message: "Backend is running"
    });
});

app.use("/health", healthRouter);

app.use("/text", textRouter);

app.use((req, res) => {
    res.status(404).json({
        ok: false,
        error: `Route not found: ${req.method} ${req.originalUrl}`
    });
});

app.listen(port, () => {
    console.log(`Backend listening on http://localhost:${port}`);
});