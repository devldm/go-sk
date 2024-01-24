import { test, expect } from "@playwright/test";

test("has expected title", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/GO-SK/);
});

test("See our companies link", async ({ page }) => {
  await page.goto("/");

  // Click the see our companies link.
  await page.getByRole("link", { name: "See our companies" }).click();

  // Expects page to have a heading with the name of Companies.
  await expect(page.getByRole("heading", { name: "Companies" })).toBeVisible();
});

test("See our jobs link", async ({ page }) => {
  await page.goto("/");

  // Click the see our jobs link.
  await page.getByRole("link", { name: "See our jobs" }).click();

  // Expects page to have a heading with the name of Jobs.
  await expect(page.getByRole("heading", { name: "Jobs" })).toBeVisible();
});

test("Jobs nav link", async ({ page }) => {
  await page.goto("/");

  // Click the see our jobs link.
  await page.getByRole("link", { name: /Jobs/ }).click();

  // Expects page to have a heading with the name of Jobs.
  await expect(page.getByRole("heading", { name: "Jobs" })).toBeVisible();
});

test("Companies nav link", async ({ page }) => {
  await page.goto("/");

  // Click the see our jobs link.
  await page.getByRole("link", { name: /Companies/ }).click();

  // Expects page to have a heading with the name of Jobs.
  await expect(page.getByRole("heading", { name: "Companies" })).toBeVisible();
});

test("Navigate to first job post, Check Job details and go back to jobs", async ({
  page,
}) => {
  await page.goto("/");

  // Click the see our jobs link.
  await page.getByRole("link", { name: /Jobs/ }).click();

  // Expects page to have a heading with the name of Jobs.
  await page.getByRole("link", { name: /Test Backend developer/ }).click();

  await expect(
    page.getByRole("heading", { name: "Job Details" })
  ).toBeVisible();

  await page.getByRole("link", { name: /Go back to Jobs/ }).click();

  await expect(page.getByRole("heading", { name: "Jobs" })).toBeVisible();
});
