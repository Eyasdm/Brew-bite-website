"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { useCreateOrder } from "@/hooks/useCreateOrder";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

import EmptyCart from "@/components/EmptyCart";
import { CartItem, SummaryRow } from "@/components/CartComponents";

export default function Cart() {
  /* ================= Hydration Safe ================= */
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  /* ================= Cart Store (ALWAYS CALLED) ================= */
  const items = useCartStore((s) => s.items);
  const totalPrice = useCartStore((s) => s.totalPrice());

  const tax = +(totalPrice * 0.1).toFixed(2);
  const grandTotal = (totalPrice + tax).toFixed(2);

  /* ================= Form State ================= */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [orderType, setOrderType] = useState("pickup");

  /* ================= Order Mutation ================= */
  const { placeOrder, isLoading } = useCreateOrder();

  const handlePlaceOrder = () => {
    if (!name || !phone) {
      alert("Please enter your name and phone number");
      return;
    }

    placeOrder({
      customerName: name,
      phone,
      notes,
      orderType,
      items,
      subtotal: totalPrice,
      tax,
      total: grandTotal,
    });
  };

  /* ================= RENDER ================= */
  if (!mounted) {
    return null;
  }

  if (items.length === 0) {
    return (
      <section className="max-w-3xl mx-auto px-6 py-20 ">
        <EmptyCart />
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 pt-6 pb-14 ">
      <div className="grid gap-10 lg:grid-cols-3">
        {/* Left */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Your Cart</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              {items.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Right */}
        <div className="space-y-6">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-center">Order Type</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={orderType}
                onValueChange={setOrderType}
                className="flex justify-center gap-6"
              >
                <Label className="flex items-center gap-2">
                  <RadioGroupItem value="pickup" /> Pickup
                </Label>
                <Label className="flex items-center gap-2">
                  <RadioGroupItem value="delivery" /> Delivery
                </Label>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Customer Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
              />
              <Textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Notes"
              />
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <SummaryRow
                label="Subtotal"
                value={`$${totalPrice.toFixed(2)}`}
              />
              <SummaryRow label="Tax" value={`$${tax}`} />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${grandTotal}</span>
              </div>
              <Button
                disabled={isLoading}
                onClick={handlePlaceOrder}
                className="w-full rounded-full bg-orange-500"
              >
                {isLoading ? "Placing Order..." : "Place Order"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
