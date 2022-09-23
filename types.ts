export type Job = {
  jobid: string;
  jobtitle: string | null;
  companyname: string | null;
  joblocation: string | null;
  jobdescription: string | null;
  linkedinurl?: string | null;
  applyurl?: string | null;
};

export type JobPostings = {
  jobs: Job[];
};
