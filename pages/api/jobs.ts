import { jobs } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const postData: jobs = await prisma.jobs.create({
      data: {
        jobid: req.body.jobid,
        jobdescription: req.body.jobdescription,
        jobtitle: req.body.jobtitle,
        companyname: req.body.companyname,
        joblocation: req.body.joblocation,
        applyurl: req.body.applyurl,
        linkedinurl: req.body.linkedinurl,
      },
    });
  } catch (err) {
    console.log(err);
  }
}
