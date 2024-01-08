import prisma from "../../../../db";
import { company } from "../../../../types";

export async function POST(request: Request) {
  if (request.method === "POST" && request.body) {
    const body: company = await request.json();
    try {
      const postData: company = await prisma.go_sk_companies.create({
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
