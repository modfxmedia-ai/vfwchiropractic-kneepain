"use client";

import Link from "next/link";

export default function MobileStickyCTA() {
  return (
    <div
      role="region"
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-white/10 bg-[#07407D]/95 px-3 pb-[max(env(safe-area-inset-bottom),0.5rem)] pt-2 shadow-[0_-8px_30px_-12px_rgba(7,64,125,0.6)] backdrop-blur-md lg:hidden"
    >
      <div className="mx-auto flex max-w-md items-stretch gap-2">
        <a
          href="tel:+17342126703"
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-3 text-sm font-bold text-white transition-colors active:bg-white/20"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-[#3EC2D1]">
            <path d="M6.62 10.79a15.53 15.53 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
          </svg>
          Call Now
        </a>
        <Link
          href="/booking"
          className="flex flex-[1.4] items-center justify-center gap-2 rounded-full bg-[#3EC2D1] px-4 py-3 text-sm font-bold uppercase tracking-wide text-[#07407D] shadow-lg transition-transform active:scale-95"
        >
          Claim $49 Spot
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
