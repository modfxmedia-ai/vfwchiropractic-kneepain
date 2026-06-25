"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const breakdown = [
  { label: "Comprehensive Physical Exam", value: "$150" },
  { label: "Diagnostic X-Rays (On-Site)", value: "$75" },
  { label: "Doctor's Report of Findings", value: "$50" },
  { label: "FREE Cold Laser Treatment", value: "$95" },
  { label: "Personalized Treatment Plan", value: "$60" },
];

const cardLines = [
  "Full Exam",
  "X-Rays Included",
  "Doctor's Report",
  "FREE Laser Treatment",
];

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const listContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const listItem: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function OfferSection() {
  return (
    <section
      id="offer"
      className="relative overflow-hidden bg-gradient-to-br from-[#062f5c] via-[#07407D] to-[#292C51] py-14 sm:py-20 lg:py-28"
    >
      {/* background motion graphics */}
      <div className="pointer-events-none absolute inset-0">
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -left-32 top-10 h-96 w-96 rounded-full border border-[#3EC2D1]/10"
        />
        <motion.span
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full border border-white/5"
        />
        <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-[#3EC2D1]/15 blur-3xl" />
        <div className="absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-[#0C5D98]/25 blur-3xl" />
        {/* floating dots */}
        {[
          { top: "15%", left: "55%", d: 6 },
          { top: "70%", left: "8%", d: 7 },
          { top: "40%", left: "92%", d: 5 },
        ].map((dot, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -18, 0], opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: dot.d,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ top: dot.top, left: dot.left }}
            className="absolute h-2.5 w-2.5 rounded-full bg-[#3EC2D1]"
          />
        ))}
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* LEFT, offer breakdown */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center lg:text-left"
        >
          <div className="flex justify-center lg:justify-start">
            <SectionLabel>Limited Time Offer</SectionLabel>
          </div>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Everything You Need to{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#3EC2D1] to-[#9FE4EC] bg-clip-text text-transparent">
                End Your Pain
              </span>
              <motion.svg
                viewBox="0 0 200 12"
                fill="none"
                className="absolute -bottom-2 left-0 w-full"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M2 9C50 3 150 3 198 9"
                  stroke="#3EC2D1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </motion.svg>
            </span>
          </h2>
          <p className="mt-6 text-white/80">
            One appointment. Real answers. No hidden fees, no day-of upsells , 
            just a thorough evaluation worth over $430, yours for{" "}
            <span className="font-semibold text-[#3EC2D1]">just $49</span>.
          </p>

          {/* itemized value list */}
          <motion.ul
            variants={listContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 space-y-2.5"
          >
            {breakdown.map((item) => (
              <motion.li
                key={item.label}
                variants={listItem}
                className="flex items-center justify-between gap-3 border-b border-white/10 pb-2.5"
              >
                <span className="flex items-center gap-3 text-white/90">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#3EC2D1] text-[#07407D]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3.5 w-3.5"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  {item.label}
                </span>
                <span className="text-sm font-medium text-white/40 line-through">
                  {item.value}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <span className="text-sm text-white/60">Total Value</span>
            <span className="text-xl font-bold text-white/50 line-through">
              $430
            </span>
            <span className="rounded-full bg-[#3EC2D1] px-4 py-1.5 text-sm font-bold text-[#07407D]">
              You Pay $49
            </span>
          </div>

          <a
            href="tel:+17342126703"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-[#3EC2D1] hover:underline"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M6.62 10.79a15.53 15.53 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
            </svg>
            Prefer to call? (734) 212-6703
          </a>
        </motion.div>

        {/* RIGHT, booking action card */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto w-full max-w-md"
        >
          <div className="relative">
            {/* animated glow ring behind card */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-1 rounded-[2rem] bg-[conic-gradient(from_0deg,#3EC2D1,transparent_40%,#0C5D98_70%,#3EC2D1)] opacity-60 blur-[6px]"
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-2xl"
            >
              {/* glow accent */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#3EC2D1]/20 blur-2xl" />

              {/* ribbon */}
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-5 top-5 rounded-full bg-red-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-lg"
              >
                Limited
              </motion.span>

              <p className="text-sm font-semibold uppercase tracking-wide text-[#3EC2D1]">
                Just
              </p>
              <div className="flex items-baseline gap-3">
                <p className="text-7xl font-black leading-none text-[#07407D]">
                  $49
                </p>
                <p className="pb-2 text-lg text-gray-400 line-through">$430</p>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Complete Joint Pain Consultation
              </p>

              <hr className="my-6 border-gray-200" />

              <ul className="space-y-3">
                {cardLines.map((line) => (
                  <li
                    key={line}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#3EC2D1]/15 text-[#0C5D98]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    {line}
                  </li>
                ))}
              </ul>

              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(12,93,152,0)",
                    "0 0 30px 4px rgba(12,93,152,0.45)",
                    "0 0 0 0 rgba(12,93,152,0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="mt-7 rounded-full"
              >
                <Link
                  href="/booking"
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#0C5D98] py-4 font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#2AAABB]"
                >
                  Book My $49 Consultation
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </motion.div>

              <p className="mt-4 text-center text-sm text-gray-500">
                or call{" "}
                <a
                  href="tel:+17342126703"
                  className="font-semibold text-[#0C5D98]"
                >
                  (734) 212-6703
                </a>
              </p>

              <p className="mt-3 text-center text-sm font-semibold text-red-500">
                Only 10 new patients per month, spots are limited
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
