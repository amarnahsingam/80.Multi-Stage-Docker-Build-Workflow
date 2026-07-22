import express from "express";
import homeRouter from "./routes/home";
import { logger } from "./utils/logger";

const app = express();

const PORT = 3000;

app.use("/", homeRouter);

app.listen(PORT, () => {
    logger(`Server running on port ${PORT}`);
});