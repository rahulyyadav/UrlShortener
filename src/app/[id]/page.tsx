import { redirect } from "next/navigation";

interface Params {
  params: { id: string };
}

export default async function RedirectPage({ params }: Params) {
  const { id } = params;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${id}`);

    if (res.ok) {
      const data = await res.json();
      redirect(data.long_url); // Server-side redirect to the original URL
    } else {
      return <h1>Short URL not found</h1>;
    }
  } catch (error) {
    console.error("Redirect error:", error);
    return <h1>Error occurred</h1>;
  }
}
