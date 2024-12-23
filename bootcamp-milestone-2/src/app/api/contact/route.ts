export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "All fields are required." }), {
      status: 400,
    });
  }

  console.log({ name, email, message });

  return new Response(JSON.stringify({ success: "Message received." }), {
    status: 200,
  });
}

export async function GET() {
  return new Response(JSON.stringify({ message: "GET not implemented." }), {
    status: 405,
  });
}
