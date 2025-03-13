import { Request, Response } from "express";
import { ZodSchema } from "zod";

const validate =
  (schema: ZodSchema) =>
  (req: Request, res: Response) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        errors: result.error,
      });
    }
  };

export default validate;
