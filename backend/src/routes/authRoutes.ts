import { Request, Response, Router } from "express";
import { register, login } from "../controllers/authController";
import authMiddleware from "../middlewares/authMiddleware";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/protected", authMiddleware, (req: Request, res: Response) => {
  res.json("great");
});

export default router;
