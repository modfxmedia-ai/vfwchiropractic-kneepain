"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

function BoolIcon({ value }: { value: boolean }) {
  return value ? (
    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3EC2D1]/20 text-[#0C5D98]">
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
  ) : (
    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-500">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-3.5 w-3.5"
      >
        <path d="M18 6 6 18M6 6l12 12" />
      </svg>
    </span>
  );
}

const conditions = [
  "Knee osteoarthritis",
  "Degenerative joint disease",
  "Chronic tendon injuries",
  "Post-surgical joint degeneration",
];

type InfoCard = { title: string; body: ReactNode; icon: ReactNode };

const infoCards: InfoCard[] = [
  {
    title: "What Are Stem Cells?",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      </>
    ),
    body: "Undifferentiated cells that transform into the exact tissue your body needs to repair, cartilage, bone, and connective tissue.",
  },
  {
    title: "How Are They Used?",
    icon: (
      <>
        <path d="m18 2 4 4M17 7l3-3M9 15l8-8M14 6l4 4" />
        <path d="m9 15-4 4-3 1 1-3 4-4" />
      </>
    ),
    body: "We source biologics ethically and precisely inject them into the affected joint under guidance, activating repair at the cellular level.",
  },
  {
    title: "What Conditions Does It Help?",
    icon: (
      <>
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </>
    ),
    body: (
      <ul className="space-y-1.5">
        {conditions.map((c) => (
          <li key={c} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3EC2D1]" />
            {c}
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: "What Results Can I Expect?",
    icon: (
      <>
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </>
    ),
    body: "Most patients report pain reduction and improved function within 4–8 weeks, with continued gains over 3–6 months as tissue regenerates.",
  },
];

const comparison = [
  {
    treatment: "Cortisone Injections",
    rootCause: false,
    surgery: false,
    downtime: "Minimal",
    results: "Short-term",
    highlight: false,
  },
  {
    treatment: "Knee Replacement Surgery",
    rootCause: true,
    surgery: true,
    downtime: "3–6 months",
    results: "Long-term",
    highlight: false,
  },
  {
    treatment: "Stem Cell Therapy at Vital Flow",
    rootCause: true,
    surgery: false,
    downtime: "Minimal",
    results: "Long-term",
    highlight: true,
  },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function StemCellSection() {
  return (
    <section
      id="stem-cell"
      className="relative overflow-hidden bg-gradient-to-b from-white to-[#F4F7FA] py-14 sm:py-20 lg:py-24"
    >
      {/* background motion graphics */}
      <div className="pointer-events-none absolute inset-0">
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -left-32 top-24 h-96 w-96 rounded-full border border-[#3EC2D1]/10"
        />
        <div className="absolute -right-24 top-40 h-72 w-72 rounded-full bg-[#3EC2D1]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left"
        >
          <motion.div variants={fadeInLeft} className="flex justify-center lg:justify-start">
            <SectionLabel>Advanced Regenerative Treatment</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeInLeft}
            className="mt-4 text-[1.85rem] font-bold leading-[1.15] text-[#07407D] sm:text-[2.5rem] lg:text-[2.9rem]"
          >
            Stem Cell Therapy:{" "}
            <span className="bg-gradient-to-r from-[#3EC2D1] to-[#0C5D98] bg-clip-text text-transparent">
              Your Body&apos;s Most Powerful Healing Tool
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInLeft}
            className="mt-5 text-[17px] leading-relaxed text-gray-600"
          >
            Stem cell therapy represents the frontier of regenerative medicine.
            Unlike treatments that mask pain, stem cells actively work to repair
            and regenerate damaged cartilage, tendons, and joint tissue, giving
            your body what it needs to heal itself.
          </motion.p>
        </motion.div>

        {/* MAIN GRID, content left, visual right */}
        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          {/* LEFT, info cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-5 sm:grid-cols-2 lg:col-span-7"
          >
            {infoCards.map((card) => (
              <motion.div
                key={card.title}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-[#3EC2D1]/15 bg-white p-6 shadow-[0_10px_30px_-18px_rgba(7,64,125,0.4)] transition-shadow hover:shadow-[0_18px_40px_-18px_rgba(62,194,209,0.5)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#3EC2D1] to-[#0C5D98] text-white shadow-md">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    {card.icon}
                  </svg>
                </span>
                <h3 className="mt-4 font-semibold text-[#07407D]">
                  {card.title}
                </h3>
                <div className="mt-2 text-sm leading-relaxed text-gray-600">
                  {card.body}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT, visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5"
          >
            {/* Rotating accent ring */}
            <motion.div
              aria-hidden
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -right-6 -top-6 z-0 h-24 w-24 rounded-full border-2 border-dashed border-[#3EC2D1]/40"
            />

            <div className="relative h-[440px] overflow-hidden rounded-3xl shadow-xl ring-1 ring-[#07407D]/10 lg:h-[560px]">
              <img
                src="/images/stem-cells.webp"
                alt="Stem cells regenerating joint tissue under magnification"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07407D]/70 via-transparent to-[#07407D]/20" />

              {/* Pulsing cell nodes */}
              {[
                { top: "20%", left: "30%", d: 0 },
                { top: "55%", left: "65%", d: 0.6 },
                { top: "72%", left: "25%", d: 1.2 },
              ].map((n, i) => (
                <motion.span
                  key={i}
                  className="absolute h-3 w-3 rounded-full bg-[#3EC2D1]"
                  style={{ top: n.top, left: n.left }}
                  animate={{ scale: [1, 1.8, 1], opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    delay: n.d,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* Floating stat chips */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-10 flex items-center gap-2 rounded-2xl bg-[#07407D] px-5 py-3 text-sm font-semibold text-white shadow-xl"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3EC2D1] text-[#07407D]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M4.5 12.5 12 5l7.5 7.5M6 11v8h12v-8" />
                </svg>
              </span>
              Non-Surgical Alternative
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 right-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold italic text-[#0C5D98] shadow-xl"
            >
              Regenerates. Not Just Relieves.
            </motion.div>
          </motion.div>
        </div>

        {/* COMPARISON TABLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20"
        >
          <h3 className="mb-6 text-center text-2xl font-bold text-[#07407D]">
            How Stem Cell Therapy Compares
          </h3>
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-[#07407D]/5">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#07407D] text-white">
                  <tr>
                    <th className="px-5 py-4 font-semibold">Treatment</th>
                    <th className="px-4 py-4 text-center font-semibold">
                      Addresses Root Cause
                    </th>
                    <th className="px-4 py-4 text-center font-semibold">
                      Surgery Required
                    </th>
                    <th className="px-4 py-4 text-center font-semibold">
                      Downtime
                    </th>
                    <th className="px-4 py-4 text-center font-semibold">
                      Lasting Results
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <motion.tr
                      key={row.treatment}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.15 }}
                      className={
                        row.highlight
                          ? "relative bg-[#3EC2D1]/15 font-semibold text-[#07407D]"
                          : "border-t border-gray-100 text-gray-700"
                      }
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          {row.highlight && (
                            <span className="h-2 w-2 rounded-full bg-[#3EC2D1]" />
                          )}
                          {row.treatment}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex justify-center">
                          <BoolIcon value={row.rootCause} />
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex justify-center">
                          <BoolIcon value={row.surgery} />
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center">{row.downtime}</td>
                      <td className="px-4 py-4 text-center">{row.results}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
