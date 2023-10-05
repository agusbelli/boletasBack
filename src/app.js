import express from "express";
import router from "./routes/index.js";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use(router);

export default app;