"use client";

import {
  IconCoffee,
  IconBolt,
  IconMapPin,
  IconDeviceMobile,
} from "@tabler/icons-react";

export default function WhyBrewBiteSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 my-24">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Choose Brew-Bite
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <WhyCard
          icon={IconCoffee}
          title="Quality Beans"
          description="Premium beans brewed to deliver rich and consistent flavor."
        />

        <WhyCard
          icon={IconBolt}
          title="Fast Service"
          description="Quick preparation and fast delivery every time."
        />

        <WhyCard
          icon={IconMapPin}
          title="Local Favorite"
          description="Loved by the community and crafted with care."
        />

        <WhyCard
          icon={IconDeviceMobile}
          title="Easy Ordering"
          description="Order your favorite drinks easily in just a few clicks."
        />
      </div>
    </section>
  );
}

function WhyCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl px-8 py-10 text-center shadow-sm hover:shadow-md transition">
      <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 mb-5">
        <Icon size={22} stroke={2} className="text-[#C56A2D]" />
      </div>

      <h3 className="font-semibold text-lg text-gray-900 mb-2">{title}</h3>

      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}
