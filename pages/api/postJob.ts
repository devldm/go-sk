import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      await prisma.go_sk_jobs.create({
        data: {
          job_id: req.body.job_id,
          job_description: req.body.job_description,
          job_title: req.body.job_title,
          company_name: req.body.company_name,
          location: req.body.location,
          apply_url: req.body.apply_url,
          linkedin_url: req.body.linkedin_url,
          posted_datetime: req.body.posted_datetime,
          role_type: req.body.role_type,
          experience_level: req.body.experience_level,
          remote_level: req.body.remote_level,
          salary_min: req.body.salary_min,
          salary_max: req.body.salary_max,
          currency: req.body.currency,
        },
      });

      return res.status(200).send("Success");
    } catch (err) {
      return res.status(500).send("Server error");
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
