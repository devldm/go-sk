//import { jobs } from "@prisma/client";
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
    // const postData: any = await prisma.jobs.create({ // TODO: turn this back to jobs from  any
    //   data: {
    //     jobid: req.body.jobid,
    //     jobdescription: req.body.jobdescription,
    //     jobtitle: req.body.jobtitle,
    //     companyname: req.body.companyname,
    //     joblocation: req.body.joblocation,
    //     applyurl: req.body.applyurl,
    //     linkedinurl: req.body.linkedinurl,
    //   },
    // });
    console.log("temp")
  } catch (err) {
    console.log(err);
  }
}
