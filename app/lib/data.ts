import { Job, company } from "../../types";
import prisma from "../../db";

export async function getCompanies() {
  const companies: company[] = await prisma.go_sk_companies.findMany();
  if (!companies) {
    throw new Error("No companies found");
  }
  return companies;
}

export async function getCompany(id: string) {
  console.log(id);
  const company: company | null = await prisma.go_sk_companies.findUnique({
    where: {
      company_id: id,
    },
  });
  if (!company) {
    throw new Error("No company found");
  }
  return company;
}

export async function postCompany() {
  
}

export async function getJobs() {
  const jobs: Job[] = await prisma.go_sk_jobs.findMany();
  if (!jobs) {
    throw new Error("No jobs found");
  }
  return jobs;
}

export async function getJob(id: string) {
  console.log(id);
  const job: Job | null = await prisma.go_sk_jobs.findUnique({
    where: {
      job_id: id,
    },
  });
  if (!job) {
    throw new Error("No job found");
  }
  return job;
}
