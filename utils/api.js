export const shortenURL = async (longURL) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/shorten`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ longURL }),
  });

  if (!res.ok) throw new Error("Failed to shorten URL");

  return res.json(); // Returns { shortCode: "abc123" }
};
