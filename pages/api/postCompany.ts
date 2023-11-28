import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../db";
import { company } from "../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const postData: company = await prisma.go_sk_companies.create({
        data: {
          company_id: req.body.company_id,
          company_name: req.body.company_name,
          business_language: req.body.business_language,
          korean_level_required: req.body.korean_level_required,
          company_industry: req.body.company_industry,
          company_logo: req.body.company_logo,
          company_url: req.body.company_url,
          company_careers_url: req.body.company_careers_url,
          company_sns_url: req.body.company_sns_url,
          company_description: req.body.company_description,
        },
      });

      return res.status(200).send("Success");
    } catch (err) {
      console.error(err);
      return res.status(500).send("Server error");
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
