export async function onRequest(context) {
  // هذا السطر يروح يجيب الرابط "السري" اللي خزيناه بالـ Cloudflare
  const G_SCRIPT_URL = context.env.G_SCRIPT_URL; 

  try {
    const response = await fetch(G_SCRIPT_URL);
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" 
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "فشل الاتصال بجوجل شيت" }), { status: 500 });
  }
}
