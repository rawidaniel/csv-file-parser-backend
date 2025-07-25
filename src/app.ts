import express from "express";
import path from "path";
import authRoutes from "./routes/authRoute";
import fileRoutes from "./routes/fileRoute";
import globalErrorHandler from "./controllers/errorController";
import cors from "cors";

const app = express();

// Enable CORS for all routes
app.use(cors());

app.use(express.json());

// Serve output directory statically
app.use("/output", express.static(path.join(__dirname, "../output")));

// Register routes
app.use("/api/auth", authRoutes);
app.use("/api/file", fileRoutes);

// Global error handler
app.use(globalErrorHandler);

export default app;
