export async function handler(event, context) {
  try {
    const res = await fetch("https://fi3blog.infinityfreeapp.com/wp-json/wp/v2/posts");

    if (!res.ok) {
      throw new Error(`Upstream error: ${res.status}`);
    }

    const data = await res.json(); // ✅ Parse JSON directly

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data) // ✅ Return stringified JSON
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Fetch failed",
        details: err.message
      })
    };
  }
}
