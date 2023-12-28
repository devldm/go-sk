export type Job = {
  job_id: string;
  job_title: string | null;
  company_name: string | null;
  location: string | null;
  job_description: string | null;
  linkedin_url?: string | null;
  apply_url?: string | null;
  posted_datetime?: string | null;
  role_type?: role_type;
  experience_level?: experience_level;
  remote_level?: remote_level;
  salary_min?: number | null;
  salary_max?: number | null;
  currency?: currency;
};

type role_type = "Full time" | "Part time" | "Internship" | "Contract" | null;
type experience_level = "Entry level" | "Mid level" | "Senior level" | null;
type remote_level = "Remote" | "Hybrid" | "On-Site" | null;
type currency = "USD" | "EUR" | "KRW" | "GBP" | null;

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
