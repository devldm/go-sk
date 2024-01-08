export type Job = {
  job_id: string;
  job_title: string;
  company_name: string;
  location: string;
  job_description: string;
  linkedin_url?: string | null;
  apply_url?: string | null;
  posted_datetime?: string | null;
  role_type?: string | null;
  experience_level?: string | null;
  remote_level?: string | null;
  salary_min?: number | null;
  salary_max?: number | null;
  currency?: string | null;
};

type role_type = "Full time" | "Part time" | "Internship" | "Contract" | null;
type experience_level = "Entry level" | "Mid level" | "Senior level" | null;
export type remote_level = "Remote" | "Hybrid" | "On-Site" | null;
export type currency = "USD" | "EUR" | "KRW" | "GBP" | null;

export type JobPostings = Job[];

export type company = {
  company_id: string;
  company_name: string;
  company_address: string | null;
  business_language: string;
  korean_level_required: string;
  company_url: string;
  company_industry: string | null;
  company_logo: string | null;
  company_careers_url: string | null;
  company_sns_url: string | null;
  company_description: string | null;
};
