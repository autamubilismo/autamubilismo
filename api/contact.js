export async function POST(req) {
  return Response.json({
    brevoKeyExists: process.env.BREVO_API_KEY ? true : false,
    keyPreview: process.env.BREVO_API_KEY?.slice(0, 10)
  });
}
