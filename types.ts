export type Job = {
  job_id: string;
  job_title: string | null;
  company_name: string | null;
  location: string | null;
  job_description: string | null;
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

export type JobPostings = Job[];

export type company = {
  company_id: string;
  company_name: string;
  business_language: string;
  korean_level_required: string;
  company_url: string;
  company_industry: string | null;
  company_logo: string | null;
  company_careers_url: string | null;
  company_sns_url: string | null;
  company_description: string | null;
};
