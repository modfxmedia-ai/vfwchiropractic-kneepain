"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import CTAButton from "@/components/ui/CTAButton";
import SectionLabel from "@/components/ui/SectionLabel";

const credentialPills = [
  "Chiropractic Physician",
  "Regenerative Medicine",
  "Canton, MI",
];

type Highlight = { icon: ReactNode; label: string };

const highlights: Highlight[] = [
  {
    icon: (
      <>
        <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3" />
        <path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01" />
      </>
    ),
    label: "In-Clinic Digital X-Rays",
  },
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" />
      </>
    ),
    label: "PRP & Stem Cell Specialist",
  },
  {
    icon: (
      <>
        <path d="M4.5 12.5 12 5l7.5 7.5" />
        <path d="M6 11v8h12v-8" />
        <path d="M3 21h18" />
      </>
    ),
    label: "Non-Surgical Approach",
  },
  {
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M9 13l2 2 4-4" />
      </>
    ),
    label: "Full Diagnostic Report Included",
  },
];

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AboutDoctorSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24">
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#3EC2D1]/8 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* LEFT, photo + credentials */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          {/* Rotating accent ring */}
          <motion.div
            aria-hidden
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -left-6 -top-6 h-28 w-28 rounded-full border-2 border-dashed border-[#3EC2D1]/40"
          />

          <div className="relative overflow-hidden rounded-3xl border-4 border-[#3EC2D1] shadow-[0_20px_60px_-15px_rgba(62,194,209,0.5)]">
            <img
              src="/images/dr-michael.jpg"
              alt="Dr. Michael Brackney, DC, Chiropractic Physician at Vital Flow Wellness"
              className="h-[480px] w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07407D]/40 via-transparent to-transparent" />
          </div>

          {/* Floating credential badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-5 -right-3 flex items-center gap-3 rounded-2xl bg-[#07407D] px-5 py-4 text-white shadow-xl"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3EC2D1] text-[#07407D]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            <div>
              <p className="text-lg font-bold leading-tight">
                Dr. Michael Brackney
              </p>
              <p className="text-xs text-[#3EC2D1]">Chiropractic Physician, DC</p>
            </div>
          </motion.div>

          <div className="mt-16 flex flex-wrap gap-3">
            {credentialPills.map((pill) => (
              <span
                key={pill}
                className="rounded-full bg-[#F0F9FA] px-4 py-1.5 text-sm font-semibold text-[#07407D]"
              >
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* RIGHT, content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={item}>
            <SectionLabel>Meet Your Doctor</SectionLabel>
          </motion.div>

          <motion.h2
            variants={item}
            className="mt-4 text-[2.25rem] font-bold leading-tight text-[#07407D] sm:text-[2.6rem]"
          >
            Regenerative Joint Care Rooted in Real Results
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-5 text-[17px] leading-relaxed text-gray-700"
          >
            At Vital Flow Wellness &amp; Chiropractic in Canton, MI, our doctor
            specializes in regenerative orthopedic treatments, focusing on
            helping patients avoid surgery and get back to the life they love.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 text-[17px] leading-relaxed text-gray-700"
          >
            Unlike a quick 10-minute appointment, our $49 consultation includes
            a full physical exam, diagnostic X-rays on-site, and a personal
            doctor&apos;s report of findings, so you finally understand
            what&apos;s driving your pain and what can actually be done about it.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 text-[17px] leading-relaxed text-gray-700"
          >
            We specialize in PRP Therapy and Stem Cell Therapy for joint and
            knee pain, two of the most advanced regenerative treatments
            available today. We also offer peptide therapy and cold laser
            therapy as part of our comprehensive approach.
          </motion.p>

          <motion.div variants={item} className="mt-8 grid grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="flex items-center gap-3 rounded-xl bg-[#F0F9FA] p-4"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#3EC2D1] to-[#0C5D98] text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    {h.icon}
                  </svg>
                </span>
                <span className="text-sm font-semibold text-[#292C51]">
                  {h.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-8">
            <CTAButton href="/booking" className="bg-[#0C5D98] hover:bg-[#2AAABB]">
              Book Your $49 Consultation
            </CTAButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
