import prisma from "../../../../db";
import { Job } from "../../../../types";

export async function GET(request: Request) {
  if (request.method !== "GET") {
    return new Response("Method not allowed", {
      status: 405,
    });
  }
  try {
    const jobs: Job[] = await prisma.go_sk_jobs.findMany();

    return Response.json(jobs);
  } catch {
    return new Response("Server error", {
      status: 500,
    });
  }
}
