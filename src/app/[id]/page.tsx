import { redirect } from "next/navigation";

export default async function RedirectPage({
  params,
}: {
  params: { id: string };
}) {
  const shortCode = params.id;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/${shortCode}`
    );

    if (res.ok) {
      const data = await res.json();
      redirect(data.long_url); // Redirect to the original URL
    } else {
      return <h1>Short URL not found</h1>;
    }
  } catch (error) {
    console.error("Redirect error:", error);
    return <h1>Error occurred</h1>;
  }
}
