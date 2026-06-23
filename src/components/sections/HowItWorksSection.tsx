"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "01",
    title: "Full Physical Examination",
    body: "Your doctor performs a comprehensive orthopedic and neurological exam specific to your joint complaint, not a quick look, but a thorough evaluation to understand exactly what's happening.",
  },
  {
    number: "02",
    title: "Diagnostic X-Rays On-Site",
    body: "We take X-rays right here in our Canton clinic so we can see the structural picture of your joint. No referrals, no waiting weeks for results.",
  },
  {
    number: "03",
    title: "Doctor's Report of Findings",
    body: "Your doctor sits down with you personally and walks you through everything, what we found, what it means, and what your options are. You leave with answers, not guesses.",
  },
  {
    number: "04",
    title: "Your Free Laser Treatment",
    body: "As part of your $49 consultation, you'll also receive a complimentary cold laser treatment, a gentle, non-invasive therapy to begin addressing inflammation right away.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const circlePop = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: { type: "spring" as const, stiffness: 260, damping: 18 },
  },
};

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-[#F0F9FA] py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center">
          <SectionLabel>Your Path Forward</SectionLabel>
          <h2 className="mt-4 text-[44px] font-bold leading-tight text-[#07407D]">
            What Happens at Your $49 Consultation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            This isn&apos;t a 10-minute intake and a guess. Your $49
            consultation is a complete diagnostic process designed to finally
            give you real answers.
          </p>
        </div>

        {/* 2x2 numbered cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              className="rounded-2xl border border-[#3EC2D1]/20 bg-white p-7 shadow-md"
            >
              <motion.div
                variants={circlePop}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3EC2D1] font-bold text-white"
              >
                {step.number}
              </motion.div>
              <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-[#07407D]">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-600">{step.body}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-12 max-w-4xl rounded-2xl bg-[#0C5D98] px-8 py-8 text-center"
        >
          <p className="text-lg font-medium text-white">
            Everything above, for just $49. Spots are limited to 10 new
            patients per month.
          </p>
          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="mt-5 inline-block"
          >
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-bold uppercase tracking-wide text-[#0C5D98] transition-colors hover:bg-gray-100"
            >
              Claim My Spot Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
