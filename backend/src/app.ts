import express from "express";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api", authRoutes);

app.use((_, res) => {
  res.status(404).json({ error: "Route not found" });
});

export default app;
