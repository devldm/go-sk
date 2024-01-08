import prisma from "../../../../db";
import { company } from "../../../../types";

export async function GET(request: Request) {
  if (request.method !== "GET") {
    return new Response("Method not allowed", {
      status: 405,
    });
  }
  try {
    const companies: company[] = await prisma.go_sk_companies.findMany();

    return Response.json(companies);
  } catch {
    return new Response("Server error", {
      status: 500,
    });
  }
}
