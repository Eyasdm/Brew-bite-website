"use client";

import CategoryFilters from "@/components/CatogeryFilters";
import MenuCard from "@/components/MenuCard";
import MenuFooter from "@/components/MenuFooter";
import { SearchBar } from "@/components/SearchBar";
import { Loader } from "@/components/ui/loader";
import { useMenuItems } from "@/hooks/useMenuItems";

export default function MenuPage() {
  const { data, isLoading, isError } = useMenuItems();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p className="text-center mt-20">Failed to load menu.</p>;
  }

  return (
    <>
      <main className="space-y-5 max-w-7xl mx-auto px-6 py-8">
        <SearchBar />
        <CategoryFilters />

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </main>
      <MenuFooter />
    </>
  );
}
