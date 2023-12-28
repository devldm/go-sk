import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../db";
import { Job } from "../../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const job = await prisma.go_sk_jobs.findUnique({
      where: {
        job_id: req.query.id?.toString(),
      },
    });

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    return res.status(200).json(job);
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
}
