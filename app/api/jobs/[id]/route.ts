import prisma from "../../../../db";

export async function GET(request: Request) {
  if (request.method !== "GET") {
    return new Response("Method not allowed", {
      status: 405,
    });
  }
  try {
    const { pathname } = new URL(request.url); // Get the URL pathname
    const id = pathname.split("/").pop(); // Extract the last segment as 'id'

    console.log(id);

    if (id) {
      const job = await prisma.go_sk_jobs.findUnique({
        where: {
          job_id: id,
        },
      });

      return Response.json(job);
    }
  } catch (err) {
    return new Response("Server error", {
      status: 500,
    });
  }
}
