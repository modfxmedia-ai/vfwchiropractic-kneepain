"use client";

import { motion } from "framer-motion";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.76 8.43-4.92 8.43-9.94Z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M23.5 6.5a3.02 3.02 0 0 0-2.12-2.14C19.5 3.85 12 3.85 12 3.85s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.5C0 8.39 0 12 0 12s0 3.61.5 5.5a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51A3.02 3.02 0 0 0 23.5 17.5c.5-1.89.5-5.5.5-5.5s0-3.61-.5-5.5ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#07407D] text-white">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#3EC2D1]/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-14 text-center"
      >
        {/* Logo */}
        <img
          src="/images/logo-white.png"
          alt="Vital Flow Wellness"
          className="h-12 w-auto"
        />

        {/* Tagline */}
        <p className="mt-4 max-w-md text-sm text-white/70">
          Non-surgical regenerative care for knee and joint pain in Canton, MI.
        </p>

        {/* Contact */}
        <div className="mt-6 flex flex-col items-center gap-3 text-sm text-white/80 sm:flex-row sm:gap-8">
          <span className="flex items-center gap-2">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-[#3EC2D1]"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            8524 N Canton Center Rd, Canton, MI 48187
          </span>
          <a
            href="tel:+17342126703"
            className="flex items-center gap-2 transition-colors hover:text-[#3EC2D1]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-[#3EC2D1]">
              <path d="M6.62 10.79a15.53 15.53 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
            </svg>
            (734) 212-6703
          </a>
        </div>

        {/* Social */}
        <div className="mt-7 flex gap-3">
          <a
            href="#"
            aria-label="Facebook"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-[#3EC2D1] hover:text-[#07407D]"
          >
            <FacebookIcon className="h-5 w-5" />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-[#3EC2D1] hover:text-[#07407D]"
          >
            <YoutubeIcon className="h-5 w-5" />
          </a>
        </div>

        {/* Divider + copyright */}
        <div className="mt-10 w-full border-t border-white/10 pt-6">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Vital Flow Wellness. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
