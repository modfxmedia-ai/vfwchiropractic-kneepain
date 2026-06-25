"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import CTAButton from "@/components/ui/CTAButton";
import SectionLabel from "@/components/ui/SectionLabel";

type Doctor = {
  name: string;
  credential: string;
  image: string;
  alt: string;
  pills: string[];
  bio: string[];
};

const doctors: Doctor[] = [
  {
    name: "Dr. Michael Brackney",
    credential: "Chiropractic Physician, DC",
    image: "/images/dr-michael.jpg",
    alt: "Dr. Michael Brackney, DC, Chiropractic Physician at Vital Flow Wellness",
    pills: ["Parker University, 1996", "30 Years Experience", "MAC Member"],
    bio: [
      "With nearly three decades of clinical experience, Dr. Michael brings a deep-rooted passion for healing and community-centered care to Vital Flow Wellness & Chiropractic. A graduate of Parker University (1996), he is an active member of the Michigan Association of Chiropractors.",
      "He has delivered over 1,000 health and wellness workshops, empowering patients to take control of their health by addressing the root cause, not just the symptoms.",
    ],
  },
  {
    name: "Dr. Brian Brackney",
    credential: "Chiropractic Physician, DC",
    image: "/images/dr-brian.webp",
    alt: "Dr. Brian Brackney, DC, Chiropractic Physician at Vital Flow Wellness",
    pills: ["Logan University, 2003", "Advanced Techniques", "Continuing Education"],
    bio: [
      "A graduate of Logan University (2003), Dr. Brian is driven by a relentless pursuit of knowledge and a commitment to delivering the most advanced, effective care possible. He has completed thousands of hours of continuing education across the country and internationally.",
      "Patients appreciate his thoughtful, analytical approach and his ability to translate complex health concepts into clear, actionable care plans rooted in the latest research.",
    ],
  },
];

type Inclusion = { icon: ReactNode; label: string; value: string };

const inclusions: Inclusion[] = [
  {
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M9 13l2 2 4-4" />
      </>
    ),
    label: "Comprehensive Physical Exam",
    value: "$150",
  },
  {
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h.01M15 9h.01M9 15h6M12 12v.01" />
      </>
    ),
    label: "Diagnostic X-Rays (On-Site)",
    value: "$75",
  },
  {
    icon: (
      <>
        <path d="M9 11l3 3 8-8" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </>
    ),
    label: "Doctor's Report of Findings",
    value: "$50",
  },
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" />
      </>
    ),
    label: "FREE Cold Laser Treatment",
    value: "$95",
  },
  {
    icon: (
      <>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
      </>
    ),
    label: "Personalized Treatment Plan",
    value: "$60",
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function DoctorCard({ doctor, index }: { doctor: Doctor; index: number }) {
  const reverse = index % 2 === 1;
  return (
    <motion.div
      variants={fadeInUp}
      className="relative grid items-center gap-10 rounded-3xl bg-white p-6 shadow-[0_20px_50px_-20px_rgba(7,64,125,0.25)] ring-1 ring-[#3EC2D1]/10 sm:p-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]"
    >
      {/* Photo */}
      <div className={`relative ${reverse ? "md:order-2" : ""}`}>
        <motion.div
          aria-hidden
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -left-4 -top-4 h-20 w-20 rounded-full border-2 border-dashed border-[#3EC2D1]/40"
        />
        <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl border-4 border-[#3EC2D1] shadow-[0_15px_40px_-12px_rgba(62,194,209,0.5)]">
          <img
            src={doctor.image}
            alt={doctor.alt}
            className="h-[320px] w-full object-cover object-top sm:h-[360px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07407D]/35 via-transparent to-transparent" />
        </div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2.5 rounded-2xl bg-[#07407D] px-3.5 py-2.5 text-white shadow-xl sm:gap-3 sm:px-4 sm:py-3"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3EC2D1] text-[#07407D]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </span>
          <div className="text-left">
            <p className="text-sm font-bold leading-tight sm:text-base">{doctor.name}</p>
            <p className="text-[10px] text-[#3EC2D1] sm:text-[11px]">{doctor.credential}</p>
          </div>
        </motion.div>
      </div>

      {/* Bio */}
      <div
        className={`mt-10 text-center md:mt-0 md:text-left ${
          reverse ? "md:order-1" : ""
        }`}
      >
        <div className="flex flex-wrap justify-center gap-2 md:justify-start">
          {doctor.pills.map((pill) => (
            <span
              key={pill}
              className="rounded-full bg-[#F0F9FA] px-3 py-1 text-xs font-semibold text-[#07407D]"
            >
              {pill}
            </span>
          ))}
        </div>
        <h3 className="mt-4 text-2xl font-bold text-[#07407D]">
          {doctor.name}
        </h3>
        <p className="text-sm font-semibold uppercase tracking-wide text-[#3EC2D1]">
          {doctor.credential}
        </p>
        {doctor.bio.map((p, i) => (
          <p
            key={i}
            className="mt-3 text-[15px] leading-relaxed text-gray-700"
          >
            {p}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

export default function AboutDoctorSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#3EC2D1]/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#0C5D98]/8 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={item} className="flex justify-center">
            <SectionLabel>Meet Your Doctors</SectionLabel>
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
            At Vital Flow Wellness &amp; Chiropractic in Canton, MI, our doctors
            specialize in regenerative orthopedic treatments, focusing on
            helping patients avoid surgery and get back to the life they love.
            We specialize in PRP Therapy and Stem Cell Therapy for joint and
            knee pain, two of the most advanced regenerative treatments
            available today.
          </motion.p>
        </motion.div>

        {/* Doctor cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 space-y-14 sm:space-y-12 lg:mt-14"
        >
          {doctors.map((d, i) => (
            <DoctorCard key={d.name} doctor={d} index={i} />
          ))}
        </motion.div>

        {/* Full $49 offer breakdown */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 rounded-3xl bg-gradient-to-br from-[#07407D] via-[#0a4a8c] to-[#0C5D98] p-6 text-white shadow-2xl sm:p-10 lg:mt-20 lg:p-12"
        >
          <motion.div variants={item} className="text-center">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#3EC2D1] ring-1 ring-[#3EC2D1]/30">
              Your $49 Consultation Includes
            </span>
            <h3 className="mt-4 text-3xl font-bold sm:text-4xl">
              Everything You Need, Nothing You Don&apos;t
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-white/80">
              Unlike a quick 10-minute appointment, your visit includes
              a thorough evaluation worth over{" "}
              <span className="font-semibold text-white line-through">$430</span>{" "}
              — yours for just{" "}
              <span className="font-bold text-[#3EC2D1]">$49</span>.
            </p>
          </motion.div>

          <motion.ul
            variants={container}
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {inclusions.map((inc) => (
              <motion.li
                key={inc.label}
                variants={item}
                className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10 backdrop-blur-sm"
              >
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#3EC2D1] to-[#9FE4EC] text-[#07407D]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    {inc.icon}
                  </svg>
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold leading-tight text-white">
                    {inc.label}
                  </p>
                  <p className="mt-0.5 text-xs text-white/50 line-through">
                    {inc.value} value
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <CTAButton
              href="/booking"
              className="bg-[#3EC2D1] text-[#07407D] hover:bg-white"
            >
              Book Your $49 Consultation
            </CTAButton>
            <a
              href="tel:+17342126703"
              className="text-sm font-semibold text-white/90 hover:text-[#3EC2D1]"
            >
              or call (734) 212-6703
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
