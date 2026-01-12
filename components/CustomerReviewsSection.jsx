"use client";

import Image from "next/image";

export default function CustomerReviewsSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 my-10  ">
      <h2 className="text-3xl font-bold text-center mb-12">Customer Reviews</h2>

      <div className="grid gap-8 md:grid-cols-2">
        <ReviewCard
          image="/reviews/user-1.jfif"
          name="Emily Johnson"
          review="Loved the site very much. The coffee was amazing and the service was super fast."
        />

        <ReviewCard
          image="/reviews/user-2.jfif"
          name="Daniel Harris"
          review="I loved Allan’s coffee selection and the ordering process was very smooth."
        />
      </div>
    </section>
  );
}

function ReviewCard({ image, name, review }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-md transition">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>

        {/* Content */}
        <div>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">{review}</p>

          <p className="text-sm font-semibold text-gray-900">{name}</p>
        </div>
      </div>
    </div>
  );
}
