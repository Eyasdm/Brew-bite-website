"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { SummaryRow, CartItem } from "./CartComponents";

export default function Cart() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      <div className="grid gap-10 lg:grid-cols-3">
        {/* ================= Left: Cart ================= */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Your Cart</CardTitle>
            </CardHeader>

            <CardContent className="space-y-5">
              <CartItem
                image="/drinks/caramel.jpg"
                title="Caramel Macchiato"
                price="$2.50"
              />
              <CartItem
                image="/drinks/nitro.jpg"
                title="Nitro Cold Brew"
                price="$2.80"
              />
              <CartItem
                image="/drinks/latte.jpg"
                title="Nitro Cold Brew"
                price="$7.50"
              />
            </CardContent>
          </Card>
        </div>

        {/* ================= Right ================= */}
        <div className="space-y-6">
          {/* Order Type */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex mx-auto text-lg font-semibold">
                Order Type
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                defaultValue="pickup"
                className="flex gap-6 justify-center"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="pickup" id="pickup" />
                  <Label htmlFor="pickup">Pickup</Label>
                </div>

                <div className="flex items-center gap-2">
                  <RadioGroupItem value="delivery" id="delivery" />
                  <Label htmlFor="delivery">Delivery</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Customer Details */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Customer Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Name" />
              <Input placeholder="Phone Number" />
              <Textarea placeholder="Notes" />
            </CardContent>
          </Card>

          {/* Order Summary */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Order Summary
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <SummaryRow label="Subtotal" value="$12.80" />
              <SummaryRow label="Tax" value="$1.28" />

              <div className="flex justify-between font-semibold text-lg pt-2">
                <span>Total</span>
                <span>$14.08</span>
              </div>

              <Button className="w-full rounded-full bg-orange-500 hover:bg-orange-600">
                Place Order
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
