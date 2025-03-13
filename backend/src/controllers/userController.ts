import { Request, Response } from "express";
import { getAllUsers } from "../services/userService";

export async function getUsers(_req: Request, res: Response) {
  const users = await getAllUsers();

  res.status(200).json(users);
}
