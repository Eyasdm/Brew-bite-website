"use client";

import type { ReactNode } from "react";

interface QtyButtonProps {
  children: ReactNode;
  onClick: () => void;
}

/* Small reusable qty button */
export function QtyButton({ children, onClick }: QtyButtonProps) {
  return (
    <button
      onClick={onClick}
      className="h-8 w-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center hover:bg-orange-200 transition"
    >
      {children}
    </button>
  );
}
