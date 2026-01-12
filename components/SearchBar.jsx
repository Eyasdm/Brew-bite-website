import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <input
        className="w-full bg-white rounded-full pl-4 pr-10 py-2 text-base outline-none border border-gray-200 focus:border-grey-500"
        placeholder="Search menu item..."
      />

      <Search
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
        size={20}
      />
    </div>
  );
}
