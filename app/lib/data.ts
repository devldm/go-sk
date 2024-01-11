import { Job, company } from "../../types";
import prisma from "../../db";

export async function getCompanies() {
  const companies: company[] = await prisma.go_sk_companies.findMany();
  if (!companies) {
    throw new Error("No companies found");
  }
  return companies;
}

export async function getJobs() {
  const jobs: Job[] = await prisma.go_sk_jobs.findMany();
  if (!jobs) {
    throw new Error("No jobs found");
  }
  return jobs;
}
