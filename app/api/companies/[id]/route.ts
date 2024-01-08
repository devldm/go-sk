import prisma from "../../../../db";
import { company } from "../../../../types";

export async function GET(request: Request) {
  if (request.method !== "GET") {
    return new Response("Method not allowed", {
      status: 405,
    });
  }
  try {
    const { pathname } = new URL(request.url); // Get the URL pathname
    const id = pathname.split("/").pop(); // Extract the last segment as 'id'

    if (id) {
      const company: company | null = await prisma.go_sk_companies.findUnique({
        where: {
          company_id: id,
        },
      });

      return Response.json(company);
    }
  } catch (err) {
    return new Response("Server error", {
      status: 500,
    });
  }
}
