"use client";
import { useState } from "react";

export default function Home() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const handleShortenUrl = async () => {
    if (!longUrl) return;

    console.log("API BASE URL:", process.env.NEXT_PUBLIC_API_BASE_URL); // Debugging

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/shorten`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ long_url: longUrl }), // API expects "long_url"
        }
      );

      const data = await response.json();
      console.log("API Response:", data);

      if (response.ok) {
        setShortUrl(data.short_url); // Adjusted to match API response
      } else {
        console.error("Error:", data);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="absolute top-4 left-6 flex items-center space-x-3">
        <h1 className="text-xl font-semibold relative cursor-pointer group">
          <span className="group-hover:after:w-full after:transition-all after:duration-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:rounded-full">
            'ra' URL Shortener
          </span>
        </h1>
      </div>

      <div className="flex flex-col items-center w-full">
        <input
          type="text"
          placeholder="Enter your long URL here..."
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="w-[350px] sm:w-[420px] md:w-[480px] lg:w-[540px] p-4 border border-gray-700 bg-black text-white rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <button
          onClick={handleShortenUrl}
          className="mt-4 w-[60%] max-w-[200px] p-3 bg-black text-white rounded-2xl shadow-md hover:bg-gray-800 transition duration-200 ease-in-out active:scale-95"
        >
          Shorten URL
        </button>

        {shortUrl && (
          <div className="relative bg-gray-900 text-white p-4 rounded-lg w-fit max-w-full mt-4">
            <button
              onClick={copyToClipboard}
              className="absolute top-2 right-2 bg-gray-900 hover:bg-gray-600 text-white px-2 py-1 text-sm rounded"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
            <p className="text-sm break-all">{shortUrl}</p>
          </div>
        )}
      </div>
    </div>
  );
}
