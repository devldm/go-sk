//import { jobs } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../db";
import { Job } from "../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const postData: Job = await prisma.go_sk_jobs.create({ // TODO: turn this back to jobs from  any
      data: {
        job_id: req.body.job_id,
        job_description: req.body.job_description,
        job_title: req.body.job_title,
        company_name: req.body.company_name,
        location: req.body.location,
        //apply_url: req.body.apply_url,
        linkedin_url: req.body.linkedin_url,
      },
    });
  } catch (err) {

  }
}
