-- CreateTable
CREATE TABLE "go-sk-jobs" (
    "job_id" UUID NOT NULL,
    "job_title" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "job_description" TEXT NOT NULL,
    "linkedin_url" TEXT,
    "apply_url" TEXT,
    "posted_datetime" TEXT,
    "role_type" TEXT,
    "experience_level" TEXT,
    "remote_level" TEXT,
    "salary_min" INTEGER,
    "salary_max" INTEGER,
    "currency" TEXT DEFAULT '',

    CONSTRAINT "go-sk-jobs_pkey" PRIMARY KEY ("job_id")
);

-- CreateTable
CREATE TABLE "go_sk_companies" (
    "company_id" UUID NOT NULL,
    "company_name" TEXT NOT NULL,
    "business_language" TEXT NOT NULL,
    "korean_level_required" TEXT NOT NULL,
    "company_url" TEXT NOT NULL,
    "company_industry" TEXT,
    "company_logo" TEXT,
    "company_careers_url" TEXT,
    "company_sns_url" TEXT,
    "company_description" TEXT,
    "company_address" TEXT,

    CONSTRAINT "go_sk_companies_pkey" PRIMARY KEY ("company_id")
);
