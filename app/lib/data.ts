"use server";

import { Job, company } from "../../types";
import prisma from "../../db";
import { revalidatePath } from "next/cache";

export async function getCompanies() {
  const companies: company[] = await prisma.go_sk_companies.findMany();
  if (!companies) {
    throw new Error("No companies found");
  }
  return companies;
}

export async function getCompany(id: string) {
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

export async function postCompany(prevState: any, formData: FormData) {
  const formDataObj: Partial<company> & {
    [key: string]: any;
  } = {};

  formData.forEach((value, key) => {
    // Exclude keys with special characters (e.g., '$ACTION_KEY')
    if (!key.startsWith("$")) {
      formDataObj[key] = value;
    }
  });

  formDataObj.company_description = prevState.company_description;
  formDataObj.company_id = crypto.randomUUID();

  try {
    const postData: company = await prisma.go_sk_companies.create({
      data: { ...formDataObj } as company,
    });

    revalidatePath("/");
    return {
      success: true,
    };
  } catch (e) {
    return { message: `Server Error: ${e}`, success: false };
  }
}

export async function postJob(prevState: any, formData: FormData) {
  const formDataObj: Partial<Job> & {
    [key: string]: any;
  } = {};

  formData.forEach((value, key) => {
    // Exclude keys with special characters (e.g., '$ACTION_KEY')
    if (!key.startsWith("$")) {
      formDataObj[key] = value;
    }
  });
  console.warn(prevState);

  // Added check for formDataObj.salary_max
  if (typeof formDataObj.salary_max === "string") {
    formDataObj.salary_max = parseInt(formDataObj.salary_max);
  }

  // Added check for formDataObj.salary_min
  if (typeof formDataObj.salary_min === "string") {
    formDataObj.salary_min = parseInt(formDataObj.salary_min);
  }

  formDataObj.job_id = crypto.randomUUID();
  formDataObj.posted_datetime = new Date().toISOString();
  formDataObj.job_description = prevState.job_description;

  try {
    const postData: Job = await prisma.go_sk_jobs.create({
      data: { ...formDataObj } as Job,
    });
    revalidatePath("/");
    return {
      success: true,
    };
  } catch (e) {
    return { message: `Server Error: ${e}`, success: false };
  }
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
