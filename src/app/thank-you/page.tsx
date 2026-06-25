"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import Footer from "@/components/layout/Footer";
import ReviewsShowcase from "@/components/ui/ReviewsShowcase";

const steps = [
  {
    title: "Check Your Phone & Email",
    body: "Our team will contact you within 24 hours to confirm your appointment date and time.",
  },
  {
    title: "Prepare for Your Visit",
    body: "No special preparation needed. Just bring a valid ID and any previous imaging (MRI, X-ray) if you have it.",
  },
  {
    title: "Come In & Get Answers",
    body: "Your comprehensive exam, X-rays, and doctor's report are all waiting for you. This is the appointment that changes everything.",
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ThankYouPage() {
  return (
    <>
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

      {/* HERO, confirmation */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-gradient-to-br from-[#07407D] via-[#0a2d5c] to-[#3EC2D1] px-4 py-20">
        {/* background motion graphics */}
        <div className="pointer-events-none absolute inset-0">
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
            className="absolute -left-32 top-10 h-96 w-96 rounded-full border border-white/10"
          />
          <motion.span
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute -right-24 bottom-0 h-80 w-80 rounded-full border border-[#3EC2D1]/20"
          />
          <div className="absolute right-1/4 top-10 h-60 w-60 rounded-full bg-[#3EC2D1]/20 blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 130, damping: 16 }}
          className="relative mx-auto w-full max-w-2xl rounded-3xl bg-white p-10 text-center shadow-2xl sm:p-12"
        >
          {/* Animated success checkmark with pulsing rings */}
          <div className="relative mx-auto flex h-28 w-28 items-center justify-center">
            <motion.span
              animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-[#3EC2D1]/30"
            />
            <svg
              viewBox="0 0 52 52"
              className="relative h-24 w-24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle
                cx="26"
                cy="26"
                r="24"
                stroke="#3EC2D1"
                strokeWidth={3}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              <motion.path
                d="M16 27l7 7 13-14"
                stroke="#07407D"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
              />
            </svg>
          </div>

          <h1 className="mt-6 text-[34px] font-bold leading-tight text-[#07407D] sm:text-[40px]">
            You&apos;re All Set! We&apos;ll Be In Touch Shortly.
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Thank you for claiming your $49 Joint Pain Consultation at Vital Flow
            Wellness in Canton, MI.
          </p>

          {/* What happens next */}
          <div className="mt-8 space-y-5 text-left">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.2 }}
                className="flex items-start gap-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#3EC2D1] to-[#0C5D98] font-bold text-white shadow-md">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-[#292C51]">{step.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Reminder box */}
          <div className="mt-8 rounded-2xl border border-[#3EC2D1]/30 bg-[#F0F9FA] p-6 text-left">
            <p className="flex items-start gap-2 text-sm text-[#292C51]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0C5D98"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-0.5 h-4 w-4 flex-shrink-0"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              8524 N Canton Center Rd. Canton, MI 48187
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-[#292C51]">
              <svg
                viewBox="0 0 24 24"
                fill="#0C5D98"
                className="h-4 w-4 flex-shrink-0"
              >
                <path d="M6.62 10.79a15.53 15.53 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
              </svg>
              (734) 212-6703, Call or text us anytime
            </p>
            <p className="mt-2 text-sm font-medium text-[#07407D]">
              We&apos;re excited to help you find relief.
            </p>
          </div>

          {/* Return button */}
          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-[#07407D] px-8 py-3 font-semibold text-[#07407D] transition-colors hover:bg-[#07407D] hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
            Return to Home
          </Link>
        </motion.div>
      </section>

      {/* REVIEWS */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F4F7FA] to-white py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#3EC2D1]/10 blur-3xl" />
          <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#0C5D98]/5 blur-3xl" />
        </div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mx-auto max-w-6xl px-6"
        >
          <ReviewsShowcase
            variant="light"
            heading="Join Hundreds of Happy Patients"
            subheading="Here's what others experienced at Vital Flow Wellness."
          />
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
