export type Job = {
  job_id: string;
  job_title: string | null;
  company_name: string | null;
  location: string | null;
  job_description: string | null;
  linkedin_url?: string | null;
  apply_url?: string | null;
};

export type JobPostings = {
  jobs: Job[];
};
