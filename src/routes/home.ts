import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.json({
        message: "Hello from Docker Multi Stage Build!"
    });
});

router.get("/health", (req, res) => {
    res.json({
        status: "UP"
    });
});

export default router;