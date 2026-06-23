"use client";

import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { useRef } from "react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const offerBullets = [
  "Full physical exam",
  "Digital X-rays on-site",
  "Personal doctor's report",
  "FREE laser treatment",
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.22]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100vh] overflow-hidden bg-[#07407D]"
    >
      {/* BACKGROUND IMAGE + PARALLAX */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 -z-20"
      >
        <img
          src="/images/clinic-hero.png"
          alt="Vital Flow Wellness regenerative joint clinic in Canton, MI"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* GRADIENT OVERLAYS, keep text readable but let the photo show */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07407D] via-[#07407D]/85 to-[#07407D]/40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#07407D] via-transparent to-[#07407D]/30" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_35%,rgba(62,194,209,0.22),transparent_55%)]" />

      {/* FLOATING MOTION GRAPHICS */}
      <motion.span
        aria-hidden
        animate={{ y: [0, -24, 0], opacity: [0.35, 0.75, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[6%] top-[20%] -z-10 h-28 w-28 rounded-full border border-[#3EC2D1]/40"
      />
      <motion.span
        aria-hidden
        animate={{ y: [0, 28, 0], opacity: [0.25, 0.6, 0.25] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[14%] top-[68%] -z-10 h-16 w-16 rounded-full bg-[#3EC2D1]/20 blur-md"
      />
      <motion.span
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute -left-24 top-1/4 -z-10 h-96 w-96 rounded-full border-2 border-dashed border-[#3EC2D1]/15"
      />

      <motion.div
        style={{ y: contentY }}
        className="relative mx-auto flex min-h-[100vh] max-w-7xl items-center px-6 pb-24 pt-28 lg:px-10"
      >
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT COLUMN */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-3 rounded-full border border-[#3EC2D1]/40 bg-[#3EC2D1]/10 px-4 py-1.5 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3EC2D1] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3EC2D1]" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9FE4EC]">
                Canton, Michigan
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-[2.75rem] font-extrabold leading-[1.04] tracking-tight text-white sm:text-[3.5rem] lg:text-[4rem]"
            >
              Still Living With
              <span className="mt-1 block">
                <span className="relative inline-block bg-gradient-to-r from-[#3EC2D1] to-[#7FE3EE] bg-clip-text text-transparent">
                  Joint &amp; Knee Pain
                  <motion.svg
                    aria-hidden
                    viewBox="0 0 300 12"
                    preserveAspectRatio="none"
                    className="absolute -bottom-2 left-0 h-3 w-full"
                  >
                    <motion.path
                      d="M2 8 Q 80 2, 150 6 T 298 5"
                      fill="none"
                      stroke="#3EC2D1"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
                    />
                  </motion.svg>
                </span>
              </span>
              <span className="mt-2 block text-white/95">
                After Trying Everything?
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-xl text-lg leading-relaxed text-white/80"
            >
              Discover what&apos;s actually causing your pain, and get a
              complete{" "}
              <span className="font-semibold text-[#9FE4EC]">
                $49 consultation
              </span>{" "}
              including exam, X-rays, doctor&apos;s report,{" "}
              <span className="italic">and a free laser treatment.</span>
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Link
                href="/booking"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#3EC2D1] px-8 py-4 text-base font-bold uppercase tracking-wide text-[#07407D] shadow-[0_12px_34px_-8px_rgba(62,194,209,0.8)] transition-transform hover:scale-[1.04]"
              >
                <span className="relative z-10 whitespace-nowrap">
                  Book My $49 Consultation
                </span>
                <svg
                  className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
                <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-full" />
              </Link>

              <a
                href="tel:+17342126703"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/70 hover:bg-white/10"
              >
                <svg
                  className="h-4 w-4 text-[#3EC2D1]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.62 10.79a15.53 15.53 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
                </svg>
                <span className="whitespace-nowrap">(734) 212-6703</span>
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-white/75"
            >
              <span className="flex items-center gap-2">
                <span className="flex text-[#FFC94D]">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <svg
                      key={s}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z" />
                    </svg>
                  ))}
                </span>{" "}
                5.0 Google Reviews
              </span>
              <span className="h-4 w-px bg-white/20" />
              <span>Non-Surgical</span>
              <span className="h-4 w-px bg-white/20" />
              <span>New Patients Welcome</span>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN, layered images + offer card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto hidden h-[540px] w-full max-w-lg lg:block"
          >
            {/* Rotating accent ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
              className="absolute right-10 top-1/2 h-[24rem] w-[24rem] -translate-y-1/2 rounded-full border-[14px] border-[#3EC2D1]/15"
            />

            {/* Main patient photo */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-6 left-0 h-[22rem] w-[17rem] overflow-hidden rounded-[2rem] shadow-2xl ring-4 ring-white/10"
            >
              <img
                src="/images/knee-pain-outdoor.webp"
                alt="Active patient free from knee pain"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Secondary therapy photo */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-2 top-0 h-44 w-40 overflow-hidden rounded-2xl shadow-xl ring-4 ring-[#07407D]"
            >
              <img
                src="/images/prp-stem-cells.jpeg"
                alt="PRP and stem cell regenerative therapy"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* OFFER CARD */}
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 right-0 w-72 overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl"
            >
              {/* glow accent */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#3EC2D1]/30 blur-2xl" />

              <div className="relative">
                <div className="flex items-end justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9FE4EC]">
                    Today Only
                  </span>
                  <span className="rounded-full bg-red-500/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                    Limited
                  </span>
                </div>

                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-[4rem] font-extrabold leading-none text-white">
                    $49
                  </span>
                  <span className="pb-2 text-sm text-white/60 line-through">
                    $249
                  </span>
                </div>

                <p className="mt-1 text-sm font-medium text-white">
                  Complete Joint Pain Consultation
                </p>

                <ul className="mt-4 space-y-2">
                  {offerBullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 text-[13px] text-white/85"
                    >
                      <svg
                        className="h-4 w-4 flex-shrink-0 text-[#3EC2D1]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/booking"
                  className="mt-5 flex w-full items-center justify-center rounded-full bg-[#3EC2D1] px-4 py-3 text-sm font-bold uppercase tracking-wide text-[#07407D] transition-transform hover:scale-[1.03]"
                >
                  Claim My Spot
                </Link>
                <p className="mt-3 text-center text-[11px] font-semibold text-red-300">
                  Only 10 new patients per month
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* SCROLL CUE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5"
        >
          <span className="h-2 w-1 rounded-full bg-[#3EC2D1]" />
        </motion.div>
      </motion.div>

      {/* BOTTOM TRUST BAR */}
      <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-[#07407D]/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center divide-white/15 px-6 py-3 text-center text-sm font-medium text-white sm:flex-row sm:divide-x">
          <span className="px-4 py-1">5.0 Google Reviews</span>
          <span className="px-4 py-1">$49 Complete Consultation</span>
          <span className="px-4 py-1">Canton, MI</span>
          <span className="px-4 py-1">New Patients Welcome</span>
        </div>
      </div>
    </section>
  );
}
