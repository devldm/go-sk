export type Job = {
  job_id: string;
  job_title: string | null;
  company_name: string | null;
  location: string | null;
  job_description: string | null;
  linkedin_url?: string | null;
  apply_url?: string | null;
  posted_datetime?: string | null;
  role_type?:        string | null;
  experience_level?: string | null;
  remote_level?:     string | null;
  salary_min?:       number | null;
  salary_max?:       number | null;
};

export type JobPostings = {
  jobs: Job[];
};
