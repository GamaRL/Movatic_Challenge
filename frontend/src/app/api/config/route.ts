export async function GET() {
  return new Response(
    JSON.stringify({
      apiUrl: process.env.API_URL || "http://localhost:5000/api",
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}