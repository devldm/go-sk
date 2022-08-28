import { go_sk_jobs } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from '../../db';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
        if(req.method !== 'POST') {
             return res.status(405).json({ message: "Method not allowed" });
        }

        try {
           const postData: go_sk_jobs = await prisma.go_sk_jobs.create({
            data: {
                job_id: req.body.job_id,
                job_description: req.body.job_description,
                job_title: req.body.job_title,
                company_name: req.body.company_name,
                location: req.body.location
            }
           })
        } catch (err){
            console.log(err)
        }
}