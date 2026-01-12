import Image from "next/image";

export default function FeaturedDrinksSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 space-y-6 mb-24">
      <h2 className="text-2xl font-semibold text-gray-900">Featured Drinks</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <FeaturedDrinkCard
          name="Mocha"
          price="$5.00"
          image="/featured-drinks/mocha.png"
        />
        <FeaturedDrinkCard
          name="Espresso"
          price="$2.50"
          image="/featured-drinks/espresso.png"
        />
        <FeaturedDrinkCard
          name="Iced Latte"
          price="$4.50"
          image="/featured-drinks/iced-latte.png"
        />
        <FeaturedDrinkCard
          name="Lemo Iced Tea"
          price="$3.50"
          image="/featured-drinks/lemon-iced-tea.png"
        />
      </div>
    </section>
  );
}

function FeaturedDrinkCard({ name, price, image }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow max-w-72">
      {/* Image */}

      <div className="relative   h-[180px] rounded-2xl overflow-hidden m-4 ">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="p-4 space-y-1">
        <h3 className="text-base font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{price}</p>
      </div>
    </div>
  );
}
