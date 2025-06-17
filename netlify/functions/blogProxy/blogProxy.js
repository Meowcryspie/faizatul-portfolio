import fetch from "node-fetch";

export async function handler(event, context) {
  try {
    const response = await fetch("https://fi3blog.infinityfreeapp.com/wp-json/wp/v2/posts");
    const data = await response.text();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: data
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