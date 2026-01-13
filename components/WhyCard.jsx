"use client";
export function WhyCard({ icon: Icon, title, description }) {
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
