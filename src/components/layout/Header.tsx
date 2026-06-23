"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80);
  });

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50"
    >
      {/* Announcement bar */}
      <div className="flex h-10 items-center justify-center bg-[#3EC2D1] px-4 text-center text-xs font-medium text-white sm:text-sm">
        <span className="inline-flex items-center gap-2 whitespace-nowrap">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Canton, MI&nbsp;&nbsp;|&nbsp;&nbsp;Call or Text: (734) 212-6703
        </span>
      </div>

      {/* Main header bar */}
      <div
        className={cn(
          "bg-white transition-shadow duration-300",
          scrolled ? "shadow-lg" : "shadow-none"
        )}
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-4 sm:flex-row sm:justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <img
              src="/images/logo.png"
              alt="Vital Flow Wellness Chiropractic"
              className="h-16 w-auto sm:h-20"
            />
          </Link>

          {/* Right side, phone + CTA button */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            {/* Phone number */}
            <a
              href="tel:+17342126703"
              className="group flex items-center gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3EC2D1]/15 text-[#0C5D98] transition-colors group-hover:bg-[#3EC2D1] group-hover:text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M6.62 10.79a15.53 15.53 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
                </svg>
              </span>
              <span className="text-left leading-tight">
                <span className="block text-xs font-medium text-gray-500">
                  Call or Text
                </span>
                <span className="block text-base font-bold text-[#07407D]">
                  (734) 212-6703
                </span>
              </span>
            </a>

            {/* CTA button with badge */}
            <div className="relative">
              <span className="absolute -right-2 -top-2 z-10 rounded-full bg-red-500 px-2 py-0.5 text-xs font-semibold text-white">
                LIMITED SPOTS
              </span>
              <Link
                href="/booking"
                className="inline-flex items-center justify-center rounded-full bg-[#0C5D98] px-6 py-3 font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#2AAABB]"
              >
                BOOK MY $49 CONSULTATION
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
