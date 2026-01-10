"use client";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-6 rounded-xl space-y-4 bg-white">
        <p className="text-gray-700">Brew-Bite Cafe</p>

        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md">
          Order Now
        </button>
      </div>
    </div>
  );
}
