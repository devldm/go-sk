import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../db";
import { Job } from "../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  try {
    const jobs: Job[] = await prisma.go_sk_jobs.findMany();

    return res.status(200).send(jobs);
  } catch (err) {
    return res.status(500).send("Server error");
  }
}
