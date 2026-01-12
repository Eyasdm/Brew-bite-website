"use client";

import {
  IconCup,
  IconFileText,
  IconTruckDelivery,
  IconCoffee,
} from "@tabler/icons-react";

export default function HowToOrderSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 my-24">
      <h2 className="text-3xl font-bold text-center mb-12">How to Order</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <OrderCard icon={IconCup} title="Choose Drink" />
        <OrderCard icon={IconFileText} title="Place Order" />
        <OrderCard icon={IconTruckDelivery} title="Pickup or Delivery" />
        <OrderCard icon={IconCoffee} title="Enjoy Your Coffee" />
      </div>
    </section>
  );
}

function OrderCard({ icon: Icon, title }) {
  return (
    <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
      <div className="mx-auto w-11 h-11 flex items-center justify-center rounded-full bg-orange-100 mb-4">
        <Icon size={22} stroke={2} className="text-[#C56A2D]" />
      </div>

      <h3 className="font-medium text-sm text-gray-900">{title}</h3>
    </div>
  );
}
