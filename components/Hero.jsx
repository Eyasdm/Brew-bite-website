import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-24">
      <div
        className="
    relative
    w-full
    h-[300px] lg:h-[420px]
    rounded-[24px]
    overflow-hidden
    bg-cover
    bg-center
    bg-no-repeat
    bg-white
    shadow-sm
    p-8 lg:p-12
  "
        style={{
          backgroundImage: "url('/hero-desktop.jpeg')",
        }}
      >
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Crafted Coffee, <br />
              Delivered to Your Door.
            </h1>

            <p className="text-gray-600 max-w-md">
              Order your favorite brew and bites online. Quick, easy, and
              delicious.
            </p>

            <Link
              href="/menu"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition"
            >
              Order Now
            </Link>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          {/* <div className="relative w-full h-[300px] lg:h-[420px] rounded-[24px] overflow-hidden">
            <Image
              src="/hero-desktop.jpeg"
              alt="Brew-Bite Cafe"
              fill
              priority
              className="object-cover"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}
