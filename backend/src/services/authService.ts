import prisma from "../prisma";
import jwt from "jsonwebtoken";
import argon2 from "argon2";

async function createUser(data: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) {
  const password = await argon2.hash(data.password);
  console.log(password);
  const user = await prisma.user.create({
    data: { ...data, password },
  });
  return user;
}

async function getUser(data: { email: string; password: string }): Promise<{
  user: {
    id: number;
    email: string;
  } | null;
  token: string;
}> {
  const user = await prisma.user.findFirstOrThrow({
    where: { email: data.email },
  });
  if (!(await argon2.verify(user.password, data.password))) {
    return { user: null, token: "" };
  }

  let token = jwt.sign(
    { id: user?.id, email: user?.email },
    process.env.JWT_SECRET || "fallback secret",
    {
      expiresIn: "1d",
    },
  );

  return { user: { id: user.id, email: user.email }, token };
}

export { createUser, getUser };
