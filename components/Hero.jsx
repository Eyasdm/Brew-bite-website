import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-24">
      <div
        className="relative w-full h-[300px] lg:h-[420px] rounded-[24px] overflow-hidden bg-cover bg-center bg-no-repeat shadow-sm"
        style={{
          backgroundImage:
            "url('https://ilctucufscggrvgbjwue.supabase.co/storage/v1/object/public/website-assets/hero/hero-desktop.jpeg')",
        }}
      >
        {/* Dark overlay — ensures text is always readable over any photo */}
        <div className="absolute inset-0 bg-black/50 rounded-[24px]" />

        {/* Content — centered over the full image */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 space-y-6">
          <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-white">
            Crafted Coffee, <br />
            Delivered to Your Door.
          </h1>

          <p className="text-white/80 max-w-md text-sm lg:text-base">
            Order your favorite brew and bites online. Quick, easy, and
            delicious.
          </p>

          <Link
            href="/menu"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition"
          >
            Order Now
          </Link>
        </div>
      </div>
    </section>
  );
}
