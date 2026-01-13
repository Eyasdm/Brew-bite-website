"use client";

import Link from "next/link";
import {
  Facebook,
  Globe,
  Instagram,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import CoffeeLogo from "./icons/CoffeeLogo";

export function Left() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <CoffeeLogo size={28} className="text-gray-900" />
        <span className="font-semibold text-lg">Brew-Bite Cafe</span>
      </div>

      <p className="text-sm text-gray-500 leading-relaxed">
        Order your favorite brew and bites online. Quick, easy, and delicious.
      </p>
    </div>
  );
}

export function Center() {
  return (
    <div>
      <h4 className="font-semibold mb-4">Quick Links</h4>
      <ul className="space-y-2 text-sm text-gray-600">
        <li>
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
        </li>
        <li>
          <Link href="/menu" className="hover:text-gray-900">
            Menu
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-900">
            About
          </Link>
        </li>
        <li>
          <Link href="/cart" className="hover:text-gray-900">
            Cart
          </Link>
        </li>
      </ul>
    </div>
  );
}

export function Right() {
  return (
    <div>
      <h4 className="font-semibold mb-4">Contact</h4>
      <ul className="space-y-3 text-sm text-gray-600">
        <li className="flex items-center gap-2">
          <Mail size={16} className="text-orange-500" />
          brewbite.com
        </li>
        <li className="flex items-center gap-2">
          <Phone size={16} className="text-orange-500" />
          620-855-7290
        </li>
        <li className="flex items-center gap-2">
          <Globe size={16} className="text-orange-500" />
          www.bitecafe.com
        </li>
      </ul>

      <div className="flex gap-3 mt-6">
        {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
          <div
            key={i}
            className="h-9 w-9 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition"
          >
            <Icon size={18} />
          </div>
        ))}
      </div>
    </div>
  );
}
