"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

type Stat = {
  icon: ReactNode;
  value?: number;
  suffix?: string;
  text?: string;
  label: string;
};

const stats: Stat[] = [
  {
    icon: <path d="M3 12h4l3 8 4-16 3 8h4" />,
    value: 85,
    suffix: "%",
    label: "Of patients report significant improvement",
  },
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" />
      </>
    ),
    text: "PRP & Stem Cells",
    label: "Cutting-edge regenerative treatments",
  },
  {
    icon: (
      <>
        <path d="M4.5 12.5 12 5l7.5 7.5" />
        <path d="M6 11v8h12v-8" />
        <path d="M3 21h18" />
      </>
    ),
    text: "Non-Surgical",
    label: "Alternatives to injections & knee replacement",
  },
  {
    icon: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    value: 500,
    suffix: "+",
    label: "Patients helped in Canton, MI",
  },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function StatsBar() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F0F9FA] to-white py-16">
      {/* subtle background accents */}
      <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#3EC2D1]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#07407D]/5 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col items-center rounded-2xl border border-[#3EC2D1]/15 bg-white px-6 py-8 text-center shadow-[0_10px_30px_-18px_rgba(7,64,125,0.4)] transition-shadow hover:shadow-[0_18px_40px_-18px_rgba(62,194,209,0.55)]"
            >
              {/* Icon badge */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3EC2D1] to-[#0C5D98] text-white shadow-lg">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7"
                >
                  {stat.icon}
                </svg>
              </div>

              {/* Value */}
              <div className="flex min-h-[3.5rem] items-center justify-center">
                {stat.text ? (
                  <span className="text-2xl font-extrabold leading-tight text-[#07407D]">
                    {stat.text}
                  </span>
                ) : (
                  <span className="text-5xl font-extrabold leading-none text-[#3EC2D1]">
                    <AnimatedCounter end={stat.value ?? 0} suffix={stat.suffix} />
                  </span>
                )}
              </div>

              {/* divider */}
              <span className="my-3 h-px w-10 bg-[#3EC2D1]/40 transition-all duration-300 group-hover:w-16" />

              {/* Label */}
              <p className="text-sm font-medium leading-snug text-[#475569]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
