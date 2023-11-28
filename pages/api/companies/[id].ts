import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../db";
import { company } from "../../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  try {
    const company: company | null = await prisma.go_sk_companies.findUnique({
      where: {
        company_id: req.query.id?.toString(),
      },
    });

    return res.status(200).send(company);
  } catch (err) {
    return res.status(500).send("Server error");
  }
}
