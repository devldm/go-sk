import prisma from "../../../../db";
import { Job } from "../../../../types";

export async function POST(request: Request) {
  if (request.method === "POST" && request.body) {
    const body: Job = await request.json();
    try {
      const postData: Job = await prisma.go_sk_jobs.create({
        data: { ...body },
      });

      return Response.json(postData);
    } catch (err) {
      return new Response("Server Error", {
        status: 500,
      });
    }
  } else {
    return new Response("Method not allowed", {
      status: 405,
    });
  }
}
