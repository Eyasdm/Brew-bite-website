import { Suspense } from "react";
import { Loader } from "@/components/ui/loader";
import OrderSuccessClient from "./order-success-client";

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={<Loader text="Finalizing your order..." />}>
      <OrderSuccessClient />
    </Suspense>
  );
}
