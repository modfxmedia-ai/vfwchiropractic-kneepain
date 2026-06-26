"use client";

import Link from "next/link";
import Script from "next/script";
import { motion, type Variants } from "framer-motion";
import Footer from "@/components/layout/Footer";
import ReviewsShowcase from "@/components/ui/ReviewsShowcase";

const offerCardLines = [
  "Comprehensive Exam",
  "Diagnostic X-Rays",
  "Doctor's Report of Findings",
  "FREE Laser Treatment",
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-[#F4F7FA]">
      {/* Minimal header, sticky only on desktop */}
      <header className="relative z-50 bg-white px-4 py-3 shadow-sm sm:px-8 sm:py-4 lg:sticky lg:top-0">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
          <Link href="/" className="shrink-0">
            <img
              src="/images/logo.png"
              alt="Vital Flow Wellness Chiropractic"
              className="h-12 w-auto sm:h-20"
            />
          </Link>
          <a
            href="tel:+17342126703"
            className="text-right text-xs font-semibold text-[#07407D] hover:text-[#0C5D98] sm:text-sm"
          >
            <span className="hidden sm:inline">(734) 212-6703, Call or Text</span>
            <span className="sm:hidden">(734) 212-6703</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#07407D] via-[#0a2d5c] to-[#292C51] py-12 text-white sm:py-16">
        {/* background motion graphics */}
        <div className="pointer-events-none absolute inset-0">
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -left-28 top-10 h-80 w-80 rounded-full border border-[#3EC2D1]/10"
          />
          <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-[#3EC2D1]/15 blur-3xl" />
          <div className="absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-[#0C5D98]/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 text-center sm:px-6">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#3EC2D1]/40 bg-[#3EC2D1]/15 px-4 py-1.5 text-sm font-semibold text-[#9FE4EC]"
          >
            <motion.span
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="h-2 w-2 rounded-full bg-[#3EC2D1]"
            />
            Limited Time, Only 10 New Patients per Month
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
          >
            Book Your{" "}
            <span className="bg-gradient-to-r from-[#3EC2D1] to-[#9FE4EC] bg-clip-text text-transparent">
              $49 Joint Pain
            </span>{" "}
            Consultation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-white/80"
          >
            Pick a time that works for you below. Your appointment includes a
            full exam, on-site X-rays, doctor&apos;s report, and a FREE cold
            laser treatment.
          </motion.p>
        </div>
      </section>

      {/* BOOKING CONTENT */}
      <main className="relative mx-auto -mt-8 max-w-6xl px-4 pb-16 sm:-mt-10 sm:pb-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          {/* LEFT, Calendar */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="overflow-hidden rounded-3xl bg-white p-4 shadow-xl sm:p-6"
          >
            <div className="mb-4 flex items-center gap-3 border-b border-gray-100 px-2 pb-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#3EC2D1] to-[#0C5D98] text-white shadow-md">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
              </span>
              <div>
                <h2 className="text-lg font-bold text-[#07407D]">
                  Select Your Appointment
                </h2>
                <p className="text-sm text-gray-500">
                  Choose a date &amp; time that suits you
                </p>
              </div>
            </div>

            {/* LeadConnector booking calendar embed */}
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/oaDkm2smu0r29VZ5RLXH"
              style={{ width: "100%", border: "none", overflow: "hidden" }}
              scrolling="no"
              id="msgsndr-calendar"
              title="Book your $49 joint pain consultation"
              className="min-h-[600px] w-full"
            />
            <Script
              src="https://link.msgsndr.com/js/embed.js"
              strategy="afterInteractive"
            />
          </motion.div>

          {/* RIGHT, sticky offer card */}
          <motion.aside
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl">
              <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#3EC2D1]/15 blur-2xl" />
              <span className="absolute right-5 top-5 rounded-full bg-red-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                Save $381
              </span>

              <p className="text-sm font-semibold uppercase tracking-wide text-[#3EC2D1]">
                Just
              </p>
              <div className="flex items-baseline gap-2">
                <p className="text-6xl font-black leading-none text-[#07407D]">
                  $49
                </p>
                <p className="pb-1 text-lg text-gray-400 line-through">$430</p>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Complete Joint Pain Consultation
              </p>

              <hr className="my-6 border-gray-200" />

              <ul className="space-y-3">
                {offerCardLines.map((line) => (
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

              <a
                href="tel:+17342126703"
                className="mt-6 flex items-center justify-center gap-2 rounded-full border border-[#0C5D98]/30 py-3 text-center font-semibold text-[#0C5D98] transition-colors hover:bg-[#0C5D98] hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M6.62 10.79a15.53 15.53 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
                </svg>
                Call or Text (734) 212-6703
              </a>

              <div className="mt-6 flex items-center justify-center gap-2 border-t border-gray-100 pt-5">
                <div className="flex gap-0.5 text-[#FFC94D]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  5.0 on Google Reviews
                </span>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* REVIEWS */}
        <div className="mt-20">
          <ReviewsShowcase
            variant="light"
            heading="You're in Good Hands"
            subheading="See what our patients say before you book."
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
